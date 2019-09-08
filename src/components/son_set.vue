<template>
    <div class="sonset center-box">
        <div class="sonset_t">
            <div class="bottom-box-text_l">
                <div class="block_box">
                </div>
                <span> {{$t("m.sonset.key1")}}</span>
            </div>
            <div class="add_btn" @click="add_son(1)">
                <span>{{$t("m.sonset.key2")}}</span>
            </div>

        </div>
        <div class="sonset_main">
            <ul class="sonset_main_item sonset_m_head">
                <li class="sonset_list1">{{sonset_head[0]}}</li>
                <li class="sonset_list2">{{sonset_head[1]}}</li>
                <li class="sonset_list3">{{sonset_head[2]}}</li>
                <li class="sonset_list4">{{sonset_head[3]}}</li>
                <li class="sonset_list5">{{sonset_head[4]}}</li>
                <li class="sonset_list6">{{sonset_head[5]}}</li>
            </ul>
            <ul class="sonset_main_item" v-for="(item,indexs) in sonset_list" :key="indexs">
                <li class="sonset_list1">{{sonset_list[indexs].name}}</li>
                <li class="sonset_list2">{{sonset_list[indexs].workerNumber}}</li>
                <li class="sonset_list3">{{timestampToTime2(sonset_list[indexs].createTime)}}</li>
                <li class="sonset_list4">
                    <span v-if="edit_son!==indexs">{{sonset_list[indexs].address}}</span>
                    <input v-if="edit_son==indexs" type="text" :placeholder="sonset_inp" class="add_adress" v-model="add_sons.address" @keyup.enter="address_edit(indexs)">
                </li>
                <li class="sonset_list5">
                    <span class="color1" v-if="edit_son!==indexs" @click="edit_sons(indexs)">{{$t("m.sonset.key7")}}</span>
                    <span class="color1" v-if="edit_son==indexs" @click="address_edit(indexs)">{{$t("m.wallet.key19")}}</span>
                    <span class="sonset_list5_cancel" v-if="edit_son==indexs" @click="cancel_edit()">{{$t("m.sonset.key15")}}</span>
                </li>
                <li class="sonset_list6 color1" @click="delete_item(indexs)">{{$t("m.sonset.key8")}}</li>
            </ul>
        </div>
        <div class="share" v-if="this.pop_type!==0" @click.stop="remove()">
        </div>
        <!--添加子账号-->
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
        <!--删除子账号-->
        <div class="add_son remove_son" v-if="this.pop_type==2">
            <div class="add_son_t remove_son_t">
                <span>{{$t("m.sonset.key8")}}{{$t("m.sonset.key3")}}</span>
                <span class="el-icon-close close_add" @click="remove()"></span>
            </div>
            <div class="remove_son_c">
                <div class="flex_c remove_son_c_item">
                    <span>{{$t("m.sonset.key10")}}</span>
                    <input type="text" class="add_inp" :placeholder="sonset_inp_1" v-model="delete_params.paypassword">
                </div>
                <div class="flex_c remove_son_c_item">
                    <span>{{$t("m.sonset.key12")}}</span>
                    <input type="text" class="add_inp" :placeholder="sonset_inp_2" v-model="delete_params.code" @keyup.enter="delete_son()">
                    <span class="delete_tips">{{delete_tips}}</span>
                </div>
            </div>
            <div class="add_son_b">
                <div class="btn btn_cancel" @click="remove()">{{$t("m.sonset.key15")}}</div>
                <div class="btn btn_click" @click="delete_son()">{{$t("m.wallet.key19")}}</div>
            </div>
        </div>
        <!--编辑-->
        <div class="add_son remove_son" v-show="this.pop_type==3">
            <div class="add_son_t remove_son_t">
                <span>{{$t("m.wallet.key15")}}</span>
                <span class="el-icon-close close_add" @click="remove()"></span>
            </div>
            <div class="remove_son_c">
                <div class="flex_c remove_son_c_item">
                    <input type="text" class="add_inp" :placeholder="sonset_inp_1" v-model="address_paramgs.paypassword">
                </div>
                <div class="flex_c remove_son_c_item">
                    <input type="text" class="add_inp" :placeholder="sonset_inp_2" v-model="address_paramgs.code" @keyup.enter="get_edit()">
                </div>
            </div>
            <div class="add_son_b">
                <div class="btn btn_cancel" @click="remove()">{{$t("m.sonset.key15")}}</div>
                <div class="btn btn_click" @click="get_edit()">{{$t("m.wallet.key19")}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { setCookie, getCookie, delCookie } from "../assets/cookie";
export default {
    data() {
        return {
            pop_type: 0,
            edit_son: null,
            sonset_head: [this.$t("m.sonset.key3"), this.$t("m.sonset.key14"), this.$t("m.sonset.key4"), this.$t("m.sonset.key5"), this.$t("m.sonset.key6"), ''],
            sonset_data: ['子账户', '矿机数', '创建时间', '钱包地址'],
            sonset_inp: this.$t("m.sonset.key16"),
            sonset_inp_0: this.$t("m.sonset.key17"),
            sonset_inp_1: this.$t("m.sonset.key11"),
            sonset_inp_2: this.$t("m.sonset.key13"),
            sonset_list: [],
            item_index: '',
            subList_params: {
                username: localStorage.getItem('username'),
                token: localStorage.getItem('token'),
                subusername: localStorage.getItem('subusername'),
                address: ''
            },
            add_sons: {
                username: localStorage.getItem('username'),
                subusername: '',
                token: localStorage.getItem('token'),
                address: ''
            },
            setGoogleAuth: '',
            setPaymentCode: '',
            delete_params: {
                subusername: localStorage.getItem('subusername'),
                username: localStorage.getItem('username'),
                token: localStorage.getItem('token'),
                code: "",
                paypassword: "",
            },
            address_paramgs: {
                subusername: localStorage.getItem('subusername'),
                username: localStorage.getItem('username'),
                token: localStorage.getItem('token'),
                code: "",
                paypassword: "",
            },
            delete_tips: '',
            testdata: {
                "code": 200,
                "msg": "success",
                "subList": [
                    {
                        "name": "lilinskt1",
                        "address": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                        "workerNumber": 0,
                        "createTime": "1566369359"
                    },
                    {
                        "name": "asdjkl",
                        "address": "",
                        "workerNumber": 0,
                        "createTime": "1566477212000"
                    },
                    {
                        "name": "asdjkl3",
                        "address": "",
                        "workerNumber": 0,
                        "createTime": "1566477238000"
                    }
                ]
            },
            timer: null
        }
    },
    created() {
        this.get_sonlist()
        this.add_sons.username = localStorage.getItem('subusername')
        this.setGoogleAuth = localStorage.getItem('setGoogleAuth')
        this.setPaymentCode = localStorage.getItem('setPaymentCode')
        let _that = this
        this.timer = setInterval(function() {
            _that.get_sonlist()
        }, 10000)
    },
    methods: {
        add_son() {
            this.pop_type = 1
        },
        cancel_edit() {
            this.edit_son = null
            this.add_sons.address = ''
        },
        remove() {
            this.pop_type = 0
            this.edit_son = null
            this.add_sons.address = ''
            this.add_sons.subusername = ''
            this.subList_params.address = ''
            this.delete_params.paypassword = ''
            this.delete_params.code = ''
            this.address_paramgs.paypassword = ''
            this.address_paramgs.code = ''

        },
        //子账户管理页面
        get_sonlist() {
            let _that = this
            // _that.sonset_list = this.testdata.subList
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/accountSubList', this.subList_params, function(res) {
                console.log(res, "子账户管理页面")
                _that.sonset_list = JSON.parse(res).subList
            }, function(error) {
                console.log(error);
            })
        },
        //删除子账户
        delete_son() {
            let _that = this
            this.delete_tips = ''
            if (this.delete_params.paypassword == '') {
                this.delete_tips = "请输入资金密码"
                return
            } else if (this.delete_params.code == '') {
                this.delete_tips = "请输入谷歌验证码"
                return
            }
            console.log(this.sonset_list[this.item_index].name)
            this.pop_type = 0
            this.delete_params.subusername = this.sonset_list[this.item_index].name
            this.delete_params.token = getCookie("token")
            console.log(this.delete_params)
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/deleteAccountSub', this.delete_params, function(data) {
                console.log(data, 'this.delete_paramssss')
                _that.delete_params.paypassword = ''
                _that.delete_params.code = ''
                if (JSON.parse(data).code !== 200) {
                    alert("删除失败，请输入正确的资金密码与谷歌验证码")
                    return
                }
                alert(JSON.parse(data).msg)
                _that.$router.go(0)

            }, function(error) {
                console.log(error);
                alert("删除失败")
            })
        },
        delete_item(indexs) {
            this.item_index = indexs
            this.pop_type = 2
            // this.sonset_list.splice(indexs, 1)
        },
        //编辑  
        edit_sons(indexs) {
            let _that = this
            _that.add_sons.address = ''
            _that.edit_son = indexs
            this.item_index = indexs
        },
        //编辑地址
        address_edit() {
            let _that = this
            if (_that.add_sons.address.indexOf("0x") !== 0 && _that.add_sons.address.length !== 42) {
                alert('请输入正确钱包地址')
                _that.add_sons.address = ''
                return
            }
            if (!this.verifyUsername2(this.add_sons.address)) {
                this.add_sons.address = ''
                return alert("请输入正确的钱包地址")
            }
            _that.pop_type = 3

        },
        //确定编辑地址
        get_edit() {
            let _that = this
            this.pop_type = 0
            if (_that.add_sons.address.indexOf("0x") !== 0 && _that.add_sons.address.length !== 42) {
                alert('请输入正确钱包地址')
                _that.add_sons.address = ''
                return
            }
            this.add_sons.token = getCookie("token")
            this.add_sons.subusername = _that.sonset_list[this.item_index].name
            this.add_sons.username = localStorage.getItem('username')
            console.log(_that.add_sons)
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/addressForAccountSub', this.add_sons, function(data) {
                console.log(data)
                _that.address_paramgs.paypassword = ''
                _that.address_paramgs.code = ''
                if (JSON.parse(data).code !== 200) {
                    alert("编辑失败，请输入正确的资金密码和谷歌验证码")
                    _that.add_sons.address = ''

                    return
                }
                _that.edit_son = -1
                _that.get_sonlist()
            }, function(error) {
                console.log(error);
                alert("编辑失败，请稍后再试")
            })
        },
        //创建子账户
        createdson() {
            let _that = this
            if (!this.verifyUsername(this.add_sons.subusername)) {
                this.add_sons.subusername = ''
                return alert(this.$t("m.sonset.key9"))
            }
            this.addson = false
            this.removeson = false
            this.add_sons.username = localStorage.getItem('username')
            console.log(JSON.stringify(this.add_sons))
            this.add_sons.token = getCookie("token")
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/createAccountSub', this.add_sons, function(data) {
                if (JSON.parse(data).code !== 200) {
                    alert(JSON.parse(data).msg)
                    console.log(JSON.parse(data))
                    _that.add_sons.subusername = ''
                    return
                }
                console.log(data)
                _that.add_sons.subusername = ''
                _that.$router.go(0)
            }, function(error) {
                console.log(error);
                alert("网络出现一点点问题，请稍后再试")
            })
            this.pop_type = 0
        }
    }
}
</script>

<style scoped>
.center-box {
    width: 6rem;
    margin: 0 auto;
    min-width: 810px;
}

.color1 {
    color: rgba(51, 51, 255, 1)
}

.color2 {
    color: #bbbbbb;
}

.sonset {
    min-height: 2.2rem;
    margin-bottom: 0.6rem
}

.flex_c {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column
}

.flex_b {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex_a {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.sonset_t {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-style: normal;
    font-size: 0.12rem;
    margin-top: 0.15rem;
    height: 0.15rem;
    margin-bottom: 0.1rem;
}

.add_btn {
    font-size: 13px;
    padding: 0.04rem 0.09rem;
    border: 1px solid #2e73e8;
    border-radius: 4px;
    color: #2e73e8;
    text-align: center;
}

.sonset_main_item {
    height: 0.25rem;
    padding-left: 0.15rem;
    padding-right: 0.32rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
}

.sonset_m_head {
    background-color: #eef1fc;
}

.sonset_list1 {
    flex: 2;
    font-size: 12px
}

.sonset_list2 {
    flex: 2
}

.sonset_list3 {
    flex: 4
}

.sonset_list4 {
    flex: 8;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 0.15rem
}

.sonset_list5 {
    flex: 3;
    cursor: pointer;
}

.sonset_list6 {
    flex: 1;
    cursor: pointer;
}

.sonset_list5_cancel {
    margin-left: 0.15rem;
}

.add_adress {
    width: 1.8rem;
    height: 0.19rem;
    border-radius: 4px;
    border: solid 1px #d2d2d2;
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

.remove_son {
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

.remove_son_t {
    height: 0.25rem;
    line-height: 0.25rem;
}

.remove_son_c {
    padding-top: 0.15rem;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    box-sizing: border-box;
}

.remove_son_c_item {
    margin-bottom: 0.1rem;
    padding-left: 0.15rem;
    text-align: left;
}

.delete_tips {
    font-size: 12px;
    height: 14px;
    color: rgb(255, 51, 0);
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
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
}
</style>
