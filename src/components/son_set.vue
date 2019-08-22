<template>
    <div class="sonset center-box">
        <div class="sonset_t">
            <div class="bottom-box-text_l">
                <div class="block_box">
                </div>
                <span> {{$t("m.home.key2")}}</span>
            </div>
            <div class="add_btn" @click="add_son()">
                <span>新增子账户</span>
            </div>

        </div>
        <div class="sonset_main">
            <ul class="sonset_main_item sonset_m_head">
                <li v-for="item in sonset_head" :key="item">{{item}}</li>
            </ul>
            <ul class="sonset_main_item" v-for="(item,indexs) in sonset_list" :key="indexs">
                <li v-for="(item,index) in sonset_data" :key="index">{{item}}</li>
                <li>编辑</li>
                <li @click="remove_item(indexs)">删除</li>
            </ul>
        </div>
        <div class="share" v-if="this.addson" @click.stop="remove()">
        </div>
        <div class="add_son" v-if="this.addson">
            <div class="add_son_t">
                <span>子账户</span>
                <el-input placeholder="请输入子账户" name="sonusername" class="add_inp"></el-input>
            </div>
            <div class="inp_label">子账户由数字或小写字母组成且不能以数字开头，长度8-16位</div>
            <div class="add_son_b">
                <div class="btn btn_click" @click="remove()">确定</div>
                <div class="btn" @click="remove()">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            addson: false,
            sonset_head: ['子账户', '矿机数', '创建时间', '钱包地址', '编辑', '操作'],
            sonset_data: ['子账户', '矿机数', '创建时间', '钱包地址'],
            sonset_list: [1, 2, 3, 4]
        }
    },
    methods: {
        add_son() {
            this.addson = true
        },
        remove() {
            this.addson = false
        },
        remove_item(indexs) {
            console.log(this.sonset_list[indexs])
            this.sonset_list.splice(indexs, 1)
        }
    }
}
</script>

<style scoped>
.center-box {
    width: 6rem;
    margin: 0 auto;
}

.sonset_t {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-style: normal;
    font-size: 0.24rem;
    margin-top: 0.3rem;
    height: 0.3rem;
    margin-bottom: 0.2rem;
}

.add_btn {
    width: 1rem;
    height: 0.3rem;
    font-size: 13px;
    line-height: 0.3rem;
    border: 1px solid #2e73e8;
    border-radius: 4px;
    color: #2e73e8;
    text-align: center;
}

.sonset_main_item {
    width: 100%;
    height: 0.37rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.sonset_m_head {
    background-color: #eef1fc;
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
    min-width: 5.2rem;
    min-height: 2.62rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 101;
    padding-left: 0.2rem;
    padding-right: 0.5rem;
    text-align: right;
}

.add_son_t {
    margin-top: 0.5rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 0.4rem;
}

.add_inp {
    width: 3.6rem;
}

.inp_label {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
    color: rgb(255, 51, 0);
}

.add_son_b {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 0.4rem;
}

.btn {
    width: 0.73rem;
    height: 0.37rem;
    line-height: 0.3rem;
    border: 1px solid #999;
    border-radius: 5px;
    margin-left: 0.2rem;
}

.btn:hover {
    color: rgba(51, 51, 255, 1);
    border: 1px solid rgba(51, 51, 255, 1);
}

.btn_click {
    background-color: rgba(51, 51, 255, 1);
    color: #fff;
}

.btn_click:hover {
    color: #fff;
}

.block_box {
  width: 0.05rem;
  height: 0.05rem;
  background-color: #2e73e8;
  display: inline-block;
  margin-right: 0.05rem;
}

.bottom-box-text_l {
	width: 0.8rem;
    height: 0.3rem;
    line-height: 0.3rem;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
</style>
