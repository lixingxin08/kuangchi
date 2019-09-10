<template>
    <div class="myltct center_box">
        <div class="myltct_t_head">
            {{$t("m.noson.key1")}}
        </div>
        <div class="myltct_t_head_main">
            <el-timeline>
                <el-timeline-item size="normal" class="myltc_tips">
                    {{$t("m.noson.key2")}}
                    <div @click="add_son()" class="color1 add_sons"> {{$t("m.noson.key3")}}>>></div>
                </el-timeline-item>
                <el-timeline-item size="normal" class="myltc_tips">
                    {{$t("m.noson.key4")}}
                </el-timeline-item>
                <el-timeline-item size="normal" class="myltc_tips">
                    {{$t("m.noson.key5")}}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="share" v-if="this.pop_type!==0" @click.stop="remove()">
        </div>
        <div class="add_son" v-if="this.pop_type==1">
            <div class="add_son_t">
                <span>{{$t("m.sonset.key2")}}</span>
                <span class="el-icon-close close_add" @click="remove()"></span>
            </div>
            <div class="add_con_c">
                <span>{{$t("m.sonset.key3")}}</span>
                <input type="text" class="add_inp" :placeholder="sonset_inp_0" v-model="add_sons.subusername" @keyup.enter="createdson()">
                <div class="inp_label">{{$t("m.sonset.key9")}}</div>
            </div>
            <div class="add_son_b">
                <div class="btn btn_cancel" @click="remove()">{{$t("m.sonset.key15")}}</div>
                <div class="btn btn_click" @click="createdson()">{{$t("m.wallet.key19")}}</div>
            </div>
        </div>
        <div class="tips">
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pop_type: 0,
            addson: true,
            sonset_inp_0: this.$t("m.sonset.key17"),
            add_sons: {
                username: localStorage.getItem('username'),
                subusername: '',
                token: localStorage.getItem('token'),
                address: ''
            },
            activities: [{
                content: this.$t("m.noson.key2"),
                timestamp: this.$t("m.noson.key3"),
            }, {
                content: this.$t("m.noson.key4"),
                timestamp: '',
            },
            {
                content: this.$t("m.noson.key5"),
                timestamp: '',
            },
            ],
            timer: ''
        }
    },
    created() {

        this.$nextTick(() => {
            this.timer = setTimeout(function() {
                alert("暂无子账户，请先创建子账户")
            }, 0);
        })
    },
    beforeDestroy() {
        this.timer = null
    },
    methods: {
        add_son() {
            this.pop_type = 1
        },
        createdson() {
            let _that = this
            if (!this.verifyUsername(this.add_sons.subusername)) {
                this.add_sons.subusername = ''
                return alert(this.$t("m.sonset.key9"))
            }
            this.addson = false
            this.add_sons.username = localStorage.getItem('username')
            console.log(JSON.stringify(this.add_sons))
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/createAccountSub', this.add_sons, function(data) {
                if (JSON.parse(data).code !== 200) {
                    alert(JSON.parse(data).msg)
                    console.log(JSON.parse(data))
                    _that.add_sons.subusername = ''
                    return
                }
                _that.add_sons.subusername = ''
                localStorage.setItem('subnameList','1')
                _that.$router.push({name:'myltc'})
            }, function(error) {
                console.log(error);
            })
            this.pop_type = 0
        },
        remove() {
            this.pop_type = 0
            this.add_sons.subusername = ''
        },
    }
}
</script>
<style scoped>
.center_box {
    width: 6rem;
    margin: 0 auto;
}
.add_sons{
    cursor: pointer;
}
.color1 {
    color: #2e73e8;
}

.myltct {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.share {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
}

.add_son {
    width: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 101;
    text-align: right;
}

.add_son_t {
    height: 0.25rem;
    padding-left: 0.15rem;
    padding-right: 0.07rem;
    font-weight: normal;
    font-stretch: normal;
    text-align: center;
    font-size: 15px;
    line-height: 0.25rem;
    background-color: rgba(248, 248, 248, 1);
    position: relative;
}

.close_add {
    font-size: 15px;
    position: absolute;
    right: 0.1rem;
    line-height: 0.25rem;
}

.add_inp {
    width: 1.7rem;
    height: 0.18rem;
    background-color: rgba(255, 255, 255, 1);
    border: solid 1px rgba(220, 220, 220, 1);
    margin-top: 0.06rem;
    margin-bottom: 0.04rem;
    padding-left: 0.04rem;
}

.inp_label {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    text-align: left;
    color: rgba(255, 154, 35, 1);
}

.add_con_c {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 0.15rem;
    padding-left: 0.15rem;
    padding-bottom: 0.15rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    box-sizing: border-box;
}

.add_son_b {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 0.37rem;
}

.btn {
    width: 0.45rem;
    line-height: 0.18rem;
    text-overflow: ellipsis;
    border-radius: 4px;
    border: solid 1px rgba(204, 204, 204, 1);
}

.btn:hover {
    color: rgba(51, 51, 255, 1);
    border: 1px solid rgba(51, 51, 255, 1);
}

.btn_cancel {
    margin-left: 0.53rem;
    margin-right: 0.04rem;
}

.btn_click {
    background-color: rgba(51, 51, 255, 1);
    color: #fff;
    cursor: pointer;
}

.btn_click:hover {
    color: #fff;
}

.myltct_t_head {
    height: 0.25rem;
    font-size: 14px;
    line-height: 0.25rem;
    font-weight: normal;
    font-stretch: normal;
    text-align: left;
    background-color: rgba(248, 250, 252, 1);
    border-radius: 4px 4px 0px 0px;
    padding-left: 0.14rem;
    margin-bottom: 0.14rem
}

.myltct_t_head_main {
    text-align: left;
    line-height: 0.2rem;
    font-size: 14px;
    padding-left: 0.2rem
}

.myltct_t_head_main_item {
    position: relative;
    border-left: 1px solid #ccc;
    padding-left: 0.14rem;
}
</style>
