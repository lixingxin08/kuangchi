<template>
  <div class="header">
    <div class="parent-box">
      <div class="header-parent-box">
        <div class="center_box">
          <ul class="header-box-ul">
            <li>{{$t("m.header.key1")}}: {{topMsg.minersTotal?format(topMsg.minersTotal,0):"--"}}</li>
            <li>{{$t("m.header.key2")}}: {{topMsg.hashRate?format((topMsg.hashRate/(1000*1000*1000)),2):"--"}} GH/s</li>
            <li>{{$t("m.header.key3")}}: {{topMsg.difficulty?format((topMsg.difficulty/(1000*1000*1000)),2):"--"}} GH</li>
            <!-- <li>{{$t("m.header.key4")}}: {{topMsg.height?format(topMsg.height,0):"--"}}</li>
            <li>{{$t("m.header.key5")}}: {{topMsg.lastBlockTime?adTime(topMsg.lastBlockTime):"--"}}</li>-->
            <!-- <li v-show="!getCookie('isLogin')">{{$t("m.header.key6")}} (WTC): {{topMsg.payfee?topMsg.payfee:"--"}} </li>
            <li v-show="getCookie('isLogin')">{{$t("m.header.key6")}} (WTC): {{payfee}} </li>-->
          </ul>
        </div>
      </div>
      <div class="nav-box-parent">
        <div class="center_box">
          <div class="nav_box">
            <div class="nav_l">
              <router-link to="/">
                <div class="logo-box">
                  <img src="../assets/img/logo.png" alt />
                </div>
              </router-link>
            </div>
            <div class="nav_main" :class="isLogin?'nav_mained':''">
              <div class="nav-div">
                <ul class="nav-div-ul" v-if="!isLogin">
                  <li
                    :class="$route.path === '/home'||$route.path === '/homeitem'?'active':'no_active'"
                  >
                    <router-link to="/">{{$t("m.header.key7")}}</router-link>
                  </li>
                  <li :class="$route.path === '/download'?'active':'no_active'">
                    <router-link to="/download">{{$t("m.header.key11")}}</router-link>
                  </li>
                  <li :class="$route.path === '/wallet'?'active':'no_active'">
                    <a
                      href="https://kirinminer.waltymall.com/pc/home_0?ver=2.5" target="_blank"
                    >{{$t("m.header.key26")}}</a>
                  </li>
                </ul>
                <ul class="nav-div-ul" v-if="isLogin">
                  <li
                    :class="$route.path === '/home'||$route.path === '/homeitem'?'active':'no_active'"
                  >
                    <router-link to="/">{{$t("m.header.key7")}}</router-link>
                  </li>
                  <li :class="$route.path === '/myltc'?'active':'no_active'">
                    <router-link to="/myltc">{{$t("m.header.key8")}}</router-link>
                  </li>
                  <li :class="$route.path === '/myprofit'?'active':'no_active'">
                    <router-link to="/myprofit">{{$t("m.header.key27")}}</router-link>
                  </li>
                  <li :class="$route.path === '/download'?'active':'no_active'">
                    <router-link to="/download">{{$t("m.header.key11")}}</router-link>
                  </li>
                  <li :class="$route.path === '/'?'active':'no_active'">
                    <a
                      href="https://kirinminer.waltymall.com/pc/home_0?ver=2.5" target="_blank"
                    >{{$t("m.header.key26")}}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="lang-box">
              <ul class="lang-box_main" :class="isLogin?'lang-box_mained':''">
                  <li v-if="!isLogin" class="langbox_item">
                       <router-link to="register">
                      <div class="login-box register_li">  {{$t("m.header.key12")}}</div>
                    </router-link>
                    </li>
                <li v-if="isLogin"  class="langbox_item">
                  <el-dropdown trigger="click" placement="bottom" class="langbox_list">
                    <div class="el-dropdown-link lang_left">
                      <img src="../assets/img/user_img.png" alt class="user_img" />
                      <span>{{user_head}}</span>
                      <i class="el-icon-caret-bottom el-icon--right arrow__down"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown" class="user_list">
                      <el-dropdown-item class="user_head">
                        <div class="user_head">
                            <div class="user_head">
                              <li
                                class="user_item"
                                v-for="(item,index) in subnameList"
                                :key="index"
                                @click="select_user(index)"
                              >
                                <span>
                                  <img
                                    src="../assets/img/admin_select.png"
                                    alt
                                    v-if="subnameList_item[index]!==user_head"
                                  />
                                  <img
                                    src="../assets/img/admin_selected.png"
                                    alt
                                    v-if="subnameList_item[index]==user_head"
                                  />
                                  {{subnameList_item[index]}}
                                </span>
                                <span>{{subnameList_i[index]}}H/s</span>
                              </li>
                            </div>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item class="user_center">
                        <li class="user_email">{{$t("m.header.key33")}}:{{head_username}}</li>
                      </el-dropdown-item>
                      <el-dropdown-item class="user_bottom">
                        <li class="user_b_main">
                           <router-link to="/personal">
                              <span class="text_color user_b_main_item">{{$t("m.header.key30")}}</span>
                            </router-link>
                          <span class="user_b_main_item">
                            <router-link to="/sublist">
                              <span class="text_color">{{$t("m.header.key32")}}</span>
                            </router-link>
                          </span>
                          <span @click="loginout()" class="user_b_main_item">{{$t("m.header.key13")}}</span>
                        </li>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <!--<a :href="'https://user.waltymall.com/#/account/register?platformName=minerpool&lang='+$i18n.locale" v-show="!getCookie('token')"><li class="register-li">{{$t("m.header.key12")}}</li></a>-->
                <!-- <li class="username-li" v-show="getCookie('isLogin')" style="position: relative">
                                                                                            <span href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="../assets/img/touxiangxiao.png" alt="">{{username?username:getCookie("username")}}</span>
                                                                                            <ul class="dropdown-menu custom-dropdown-menu user-msg-ul">
                                                                                              <router-link to="/setting">
                                                                                                <li>{{$t("m.wallet.key7")}}</li>
                                                                                              </router-link>
                                                                                              <li @click="sing_up">{{$t("m.header.key13")}}</li>
                                                                                            </ul>
                </li>-->
                <li v-if="!isLogin"  class="langbox_item">
                  <router-link to="login">
                    <div class="login-box register_li">{{$t("m.home.key1")}}</div>
                 </router-link>
                </li>
                <li class="username-li" style="position: relative">
                  <el-dropdown trigger="click" placement="bottom" class="langbox_list">
                    <div class="el-dropdown-link lang_right">
                      <img class="switch-lang-img" src="../assets/img/langs.png" alt />
                      <div id="lang-span">{{lang_title}}</div>
                      <i class="el-icon-caret-bottom el-icon--right arrow__down"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <li @click="switchLang('zh')" class="lang_item">中文</li>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <li @click="switchLang('en')" class="lang_item">English</li>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <li @click="switchLang('ko')" class="lang_item">한글</li>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import bus from "../assets/eventBus";
import { setCookie, getCookie, delCookie } from "../assets/cookie";
// import { HappyScroll } from "vue-happy-scroll";
export default {
  inject: ["reload", "reloadTwo"],
  data() {
    return {
      baseUrl: this.GLOBAL.baseUrl,
      baseUrlTwo: this.GLOBAL.baseUrlTwo,
      baseHerf: this.GLOBAL.baseHerf,
      baseHerf2: this.GLOBAL.baseHerf2,
      baseHerf3: this.GLOBAL.baseHerf3,
      username: "",
      head_username: "",
      isLogin: false,
      topMsg: {
        minersTotal: ""
      },
      payfee: "",
      subnameparams: {
        username:this.getCookie("username"),
        token:this.getCookie("token")
      },
      user_head: "***",
      lang_title: "中文",
      user_msg: "",
      setGoogleAuth: "",
      setPaymentCode: "",
      setRealNameAuth: "",
      subnameList: "",
      subnameList_item: [],
      subnameList_i: [],
      timer: null,
      timer2:null
    };
  },
  created() {
    let _that=this
    if (localStorage.getItem("lang")=='en') {
      this.lang_title='English'
    }if (localStorage.getItem("lang")=='zh') {
      this.lang_title='中文'
    }if (localStorage.getItem("lang")=='ko') {
      this.lang_title='한글'
    }    
     if(localStorage.getItem("isLogin")){
        this.getAccountInfo2()
          this.getsubusername()    
    this.isLogin = localStorage.getItem("isLogin");
        let _that = this;
    this.timer = setInterval(function() {
      _that.getsubusername();
    }, 1800000);
     }   
    localStorage.setItem("subusername", this.head_username);
    var vueThis = this;
    this.getTopMsg();
    this.$nextTick(() => {
      if (localStorage.getItem("change")) {
        this.user_head = localStorage.getItem("change");
        localStorage.setItem("subusername", this.user_head);
      } else {
      }
    });
    localStorage.setItem("token", this.getCookie("token"));
    bus.$on("payfee", function(res) {
      vueThis.payfee = res;
    });
  },
  mounted() {
  },
  beforeDestroy() {
    this.timer = null;
    this.isLogin=false;
    localStorage.removeItem('isLogin')
  },
  methods: {
    //切换用户
    select_user(index) {
      localStorage.removeItem("subusername");
      this.user_head = this.subnameList[index].subUsername;
      localStorage.setItem("subusername", this.user_head);
      localStorage.setItem("change", this.user_head);
      if(this.$route.path!=='/myltc'){
           this.$router.push({name:'myprofit'})
      }   
      this.reloadTwo();
    },
    //获取账号信息
    getAccountMsg() {
      let _that = this;
      var vueThis = this;
      var obj = {};
      // this.$axios({
      //   method: "get",
      //   url:
      //     this.baseUrlTwo +
      //     "getAccountInfo?username=" +
      //     this.getCookie("username"),
      //   withCredentials: true
      // })
      //   .then(function(res) {
      //     vueThis.user_msg = res;
      //     //手机号或邮箱
      //     _that.head_username =
      //       res.data.msg.data.email == ""
      //         ? res.data.msg.data.phone
      //         : res.data.msg.data.email;
      //     _that.username = res.data.msg.data.username;
      //     _that.user_msgs = res.data.msg.data;
      //     _that.setGoogleAuth = res.data.msg.data.setGoogleAuth;
      //     _that.setPaymentCode = res.data.msg.data.setPaymentCode;
      //     _that.setRealNameAuth = res.data.msg.data.setRealNameAuth;
      //     localStorage.setItem("username", _that.username);
      //     localStorage.setItem("setGoogleAuth", _that.setGoogleAuth);
      //     localStorage.setItem("setPaymentCode", _that.setPaymentCode);
      //     localStorage.setItem("setRealNameAuth", _that.setRealNameAuth);
      //     localStorage.setItem("token", _that.getCookie("token"));
      //     _that.isLogin = true;
      //     _that.gethaveson();
      //     setCookie("isLogin", "isTrue");
      //     if (res.data.code === 1) {
      //       setCookie("isLogin", "isTrue");
      //       // vueThis.reload();
      //       // vueThis.reloadTwo();
      //     } else if (res.data.code === 1068) {
      //     }
      //   })
      //   .catch(function(err) {});
    },
    //获取用户信息
    getAccountInfo2(){
      let _that=this

      this.$ajax('post', this.GLOBAL.baseUrl + 'account/getAccountInfo',this.subnameparams, function(data) {

              if(JSON.parse(data).code==1038){
                alert("平台信息有误")
              }if(JSON.parse(data).code==1068){ 
                    if (_that.isLogin) {
                       _that.$message.error(_that.$t("m.account.key2")); 
                    }                  
                _that.setCookie('token',null)
                 _that.setCookie('username',null)
                 _that.isLogin=false     
                 if (_that.$route.path!=='/home'&& _that.$route.path!=='/download'&&_that.$route.path!=='/register'&&_that.$route.path!=='/restePassword'){         
                    _that.$router.push({name:'login'})  
                    localStorage.removeItem("isLogin")    
                 } 

              }
               if(JSON.parse(data).code==1){
                    _that.head_username =
           JSON.parse(data).msg.data.email == ""
              ? JSON.parse(data).msg.data.phone
              : JSON.parse(data).msg.data.email;
          _that.username = JSON.parse(data).msg.data.username;
          _that.user_msgs = JSON.parse(data).msg.data;
          _that.setGoogleAuth = JSON.parse(data).msg.data.setGoogleAuth;
          _that.setPaymentCode = JSON.parse(data).msg.data.setPaymentCode;
          _that.setRealNameAuth = JSON.parse(data).msg.data.setRealNameAuth;
           localStorage.setItem("personal_msg",JSON.stringify(JSON.parse(data).msg.data));
          localStorage.setItem("username", _that.username);
          localStorage.setItem("setGoogleAuth", _that.setGoogleAuth);
          localStorage.setItem("setPaymentCode", _that.setPaymentCode);
          localStorage.setItem("setRealNameAuth", _that.setRealNameAuth);
          localStorage.setItem("token", _that.getCookie("token"));
          _that.isLogin = true;
            _that.gethaveson();
              }
                }, function(error) {
                    // console.log(error)
                })   
    },
    //是否有子账户
    gethaveson() {
      let _that = this;
      // console.log(this.subnameparams);
      this.$ajax(
        "post",
        this.GLOBAL.baseUrl + "v2/userIsHaveSubUser",
        this.subnameparams,
        function(res) {
          // console.log(res, "是否有子账户");
          if (JSON.parse(res).code !== 1) {
            // _that.$router.push({ name: 'unsub' })
            return;
          } else {
          }
        },
        function(error) {
          // console.log(error);
        }
      );
    },
    //获取子账号列表
    getsubusername() {
      let _that = this;
      // console.log('获取子账号列表');   
      // _that.subnameList = res.minerPow;
      if (this.subnameparams.token == "") {
        this.timer = null;
        return;
      }
      this.$ajax(
        "post",
        this.GLOBAL.baseUrl + "v2/accountSubWorkerList",
        _that.subnameparams,
        function(res) {
          _that.subnameList = JSON.parse(res).minerPow;
          _that.user_head=_that.subnameList[0].subUsername;
           localStorage.setItem("subusername",_that.subnameList[0].subUsername);
          for (var i = 0; i < _that.subnameList.length; i++) {
            _that.subnameList_item[i] = _that.subnameList[i].subUsername;
            _that.subnameList_i[i] =
              _that.changpow(_that.subnameList[i].dayHrInfo) || '--';
          }
          localStorage.setItem("subnameList", _that.subnameList_i.length);
          // localStorage.setItem('username', _that.subnameList[0].subUsername);
        },
        function(error) {
          // console.log(error);
        }
      );
    },
    // 切换语言
    switchLang(index) {
      this.getTopMsg();
      if (index === "zh") {
        localStorage.setItem("lang", "zh");
        this.lang = "zh";
        this.$i18n.locale = this.lang;
        this.lang_title = "中文";
        // document.title = "WTC主子链后台管理系统"
      } else if (index === "en") {
        localStorage.setItem("lang", "en");
        this.lang = "en";
        this.$i18n.locale = this.lang;
        this.lang_title = "English";
        // document.title = "Backend Management System"
      } else if (index === "ko") {
        localStorage.setItem("lang", "ko");
        this.lang = "ko";
        this.$i18n.locale = this.lang;
        this.lang_title = "한글";
        // document.title = "Backend Management System"
      }
      this.$router.go(0);
    },
    //计算时间
    adTime(a) {
      a = new Date().getTime() / 1000 - a;
      if (a < 60) {
        this.miao = Math.floor(a) + " " + this.$t("m.header.key14");
        return this.miao;
      } else if (a / 60 < 60) {
        this.fz =
          Math.floor(((a % 86400) % 3600) / 60) +
          " " +
          this.$t("m.header.key15");
        return this.fz;
      } else if (a / 3600 < 24) {
        this.xs =
          Math.floor((a % 86400) / 3600) + " " + this.$t("m.header.key15");
        return this.xs;
      } else {
        this.tian = Math.floor(a / 86400) + " " + this.$t("m.header.key16");
        return this.tian;
      }
    },
    //获取顶部数据
    getTopMsg() {
      var vueThis = this;
      this.$axios({
        mounted: "get",
        url: this.baseUrl + "v2/kirinPoolInfo",
        withCredentials: false
      })
        .then(function(res) {    
          if (res.data.code === 200) {
            vueThis.topMsg = res.data.data.PoolInfo[0];
            // bus.$emit("newBlock", res.data.data.PoolInfo[0].height);
            sessionStorage.setItem(
              "newBlock",
              vueThis.adTime(res.data.data.PoolInfo[0].lastBlockTime)
            );
          } else {
          }
        })
        .catch(function(err) {});
    },
    // 退出
    loginout(){
      let _that=this
      this.subnameparams.token=this.getCookie('token')
      this.subnameparams.username=this.getCookie('username')
            // console.log(this.subnameparams);
        this.$ajax('post', this.GLOBAL.baseUrl + 'account/tuichu',this.subnameparams, function(data) {
              if(JSON.parse(data).code==1038){
               _that.$message.error(_that.$t("m.account.key1"));

              }
               if(JSON.parse(data).code==1039){
                  _that.$message.error(_that.$t("m.setting.key49"));
              }if(JSON.parse(data).code==1046){
             _that.isLogin=false
                _that.$router.push({ name: "home" });                   
              }
               if(JSON.parse(data).code==1){
                          //  console.log(data,'datadatadatadat2222222222222222a'); 
              _that.$router.push({ name: "home" }); 
               _that.setCookie('token',null)
                _that.setCookie('username',null)
                _that.head_username=''
                _that.user_head='***'
                localStorage.removeItem('token')
                 localStorage.removeItem('isLogin')
                 _that.isLogin=false
                  localStorage.removeItem('username')
                localStorage.removeItem("change");
                localStorage.removeItem("subusername");                     
              }
                }, function(error) {
                    // console.log(error)
                })     
    }
  },
  watch: {
    $route(to, from) {   
      if (to.name == 'myltc' && from.name=='unsub') {
        localStorage.setItem("subusername", this.head_username);
        var vueThis = this;
        this.getTopMsg();
        this.$nextTick(() => {
          if (localStorage.getItem("change")) {
            this.user_head = localStorage.getItem("change");
            localStorage.setItem("subusername", this.user_head);
          } else {
          }
        });
        localStorage.setItem("token", this.getCookie("token"));
        bus.$on("payfee", function(res) {
          vueThis.payfee = res;
        });
      }if(from.name=='login'){ 
        if ( localStorage.getItem("isLogin")) {
                      this.head_username = localStorage.getItem("username");
             this.subnameparams.token=this.getCookie('token')
         this.subnameparams.username=this.getCookie('username') 
           this.isLogin = localStorage.getItem("isLogin");
        this.getsubusername()
      this.getAccountInfo2()}
        }
      if (to.name=='login'&&to.query.isLogin==false) {
            this.isLogin=false           
      }
    },  
  }
};
</script>
<style scoped>
ul {
  padding: 0;
}

.header {
  background-color: rgba(21, 6, 47, 1);
  min-width: 810px;
}

.center_box {
  width: 6rem;
  min-width: 650px;
  margin: 0 auto;
}

.el-dropdown {
  color: #fff;
}

.header-parent-box {
  height: 0.15rem;
  line-height: 0.15rem;
  background-color: #0d0d29;
}

.nav-box,
.nav-div li,
.lang-box li {
  cursor: pointer;
}
.langbox_item{
  min-width: 30%;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
-moz-justify-content: flex-start;
-ms-justify-content: flex-start;
-o-justify-content: flex-start;
justify-content: flex-start;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}
.logo-box img {
  width: 0.89rem;
  height: 0.14rem;
}
#lang-span{
  min-width: 10px;
}
.lang-box {
  min-width: 200px;
  height: 0.35rem;
  line-height: 0.35rem;
  padding: 0.15rem;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
  -webkit-justify-content: space-between;
-moz-justify-content: space-between;
-ms-justify-content: space-between;
-o-justify-content: space-between;
justify-content: space-between;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}
.nav_mained{
  min-width: 410px;
}
.lang-box_main {
  min-width: 1.2rem;
  height: 0.35rem;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
  -webkit-justify-content: space-between;
-moz-justify-content: space-between;
-ms-justify-content: space-between;
-o-justify-content: space-between;
justify-content: space-between;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
  padding-top: 0.04rem;
}

.lang-box_mained {
  min-width: 250px;
  justify-content: space-around;
  -webkit-justify-content: space-around;
-moz-justify-content: space-around;
-ms-justify-content: space-around;
-o-justify-content: space-around;
justify-content: space-around;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}

.register_li {
  width: 0.35rem;
  min-width: 49px;
  height: 0.14rem;
  border: 1px solid #2e73e8;
  color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  line-height: 0.14rem;
}
.register_li:hover{
  background-color: #2e73e8;
}
.header-box-ul {
  width: 4.69rem;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
 -webkit-justify-content: space-between;
-moz-justify-content: space-between;
-ms-justify-content: space-between;
-o-justify-content: space-between;
justify-content: space-between;
 
  font-family: "MicrosoftYaHei";
  font-size: 6px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fff;
  opacity: 0.8;
  font-size: 0.06rem;
}

.nav-box-parent {
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: center;

-webkit-box-pack: center;
/* 12版 */
-webkit-justify-content: center;
-moz-justify-content: center;
-ms-justify-content: center;
-o-justify-content: center;
justify-content: center;

  font-size: 0.07rem;
  background-color: #00001e;
}

.nav_box {
  width: 100%;
  min-width: 650px;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  height: 0.35rem;
  
-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
  justify-content: space-between;
 -webkit-justify-content:  space-between;
-moz-justify-content:  space-between;
-ms-justify-content:  space-between;
-o-justify-content:  space-between;
justify-content:  space-between;
 
  color: #fff;
}

.nav-div {
  font-size: 0.07rem;
  height: 100%;
}

.nav-div ul {
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
  -webkit-justify-content:  space-between;
-moz-justify-content:  space-between;
-ms-justify-content:  space-between;
-o-justify-content:  space-between;
justify-content:  space-between;

  height: 100%;
  
-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}

.lang_left {
  width: 100%;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex;  

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;            
  align-items: center;
  text-overflow: ellipsis;
}

.lang_right {
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: flex-start;
 -webkit-justify-content:  flex-start;
-moz-justify-content: flex-start;
-ms-justify-content: flex-start;
-o-justify-content: flex-start;
justify-content: flex-start;
 
-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
  font-size: 0.06rem;
}

.switch-lang-img {
  width:16px;
  height:16px;
  margin-right:6px;
}

.el-dropdown-menu {
  border-radius: 1px;
  border: solid 1px #434343;
  box-sizing: border-box;
}
.langbox_list{
  width: 100%;
}
.user_img {
  width:16px;
  height:16px;
  margin-bottom: 0.01rem;
  margin-right: 6px;
}

.user_el_list:hover {
  background-color: black;
}

.user_list {
  /* width: 1.5rem !important; */
  min-width: 250px !important;
  background-color: #000224;
  border-radius: 1px;
  overflow: hidden;
}

.user_center {
  height: 0.18rem;
  line-height: 0.18rem;
  border-top: 1px solid #434343;
  text-overflow: ellipsis;
  color: #eeeeee;
  padding-left: 0.1rem;
  box-sizing: border-box;
}

.user_center:hover {
  background-color: black;
  color: #fff;
}

.user_bottom {
  height: 0.18rem;
  line-height: 0.18rem;
  color: #2e73e8;
  padding: 0 0.1rem;
}

.user_bottom:hover {
  background-color: black;
  color: #2e73e8;
}

.text_color {
  color: #2e73e8;
}

.user_b_main {
  width: 100%;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
-webkit-justify-content: space-between;
-moz-justify-content: space-between;
-ms-justify-content: space-between;
-o-justify-content: space-between;
justify-content: space-between;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}
.user_b_main_item{
  margin-right: 0.05rem;
}
.user_b_main_item:hover {
  color: #2e73e8;
  opacity: 0.9;
}

.user_head {
  width: 100%;
}

.user_item {
  height: 0.18rem;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 
  justify-content: space-between;
  -webkit-justify-content: space-between;
-moz-justify-content: space-between;
-ms-justify-content: space-between;
-o-justify-content: space-between;
justify-content: space-between;

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #434343;
  box-sizing: border-box;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.user_item:last-child{
  border-bottom: none;
}
.user_item:hover {
  background-color: #050e3a;
  color: #2e73e8;
}

.lang_item {
  text-align: center;
  color: #fff;
  padding: 0 0.05rem;
}

.lang_item:hover {
  background-color: #050e3a;
  color: #2e73e8;
}

.user_item img {
  margin-right: 5px;
}

.el-dropdown-menu__item:hover {
  background-color: black;
}

.el-dropdown-menu__item {
  background-color: black;
}

.nav-div-ul a {
  color: #ffffff;
  height: 0.35rem;
display: box;               /* OLD - Android 4.4- */
display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
display: -ms-flexbox;       /* TWEENER - IE 10 */
display: -webkit-flex;      /* NEW - Chrome */
display: flex; 

-webkit-box-align: center;
/* 12版 */
-webkit-align-items: center;
-moz-align-items: center;
-ms-align-items: center;
-o-align-items: center;
  align-items: center;
}

.nav-div-ul li {
  height: 0.3rem;
  font-size: 15px;
  margin: auto 0.1rem;
}

.active {
  border-bottom: 3px solid #fff;
  opacity: 1 !important;
  color: #fff;
}

.no_active {
  opacity: 0.7;
}
.no_active:hover{
 opacity: 1;
}
.nav-div ul,
.lang-box ul {
  margin: 0;
}

.username-li {
  opacity: 1;
  margin-left: 1px;
}

.user-msg-ul li {
  color: black;
  width: 100%;
  text-align: center;
  cursor: pointer;
  opacity: 1 !important;
}

.user-msg-ul li:hover {
  background: #ecf6ff;
  color: skyblue;
}

.dropdown-menu {
  min-width: 1.2rem;
}

.arrow__down {
  font-size: 12px;
}

/*媒体查询*/
</style>
