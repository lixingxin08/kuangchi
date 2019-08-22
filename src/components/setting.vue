<template>
  <div class="home">
    <div class="home-parent-box">
      <div class="home-header-box">
        <div class="home-header-body">
          <div class="body-left" v-show="true">
            <div class="body-left-img">
              <div class="user-msg-box">
                <div class="user-img-box"><img src="../assets/img/touxiangxiao.png" alt=""></div>
                <div class="user-msg">
                  <span class="username-span">
                    <p class="username-p">{{getCookie("username")}}</p>
                    <!--<p>注册日期:2018/12/30</p>-->
                  </span>
                  <span class="time-span">
                    <!--<p>最后登录日期:2019/3/29 14:20:03</p>-->
                  </span>
                </div>
              </div>
              <div class="balance-msg-box">
                <p>{{$t("m.setting.key1")}}</p>
                <div><span class="number-span">{{peopleMoney.allMoney?peopleMoney.allMoney:0}}</span><span
                  class="unit-span">WTC</span></div>
              </div>
            </div>

            <!--<router-link to="/login">-->
            <!--<div class="login-box" >-->
            <!--提现-->
            <!--</div>-->
            <!--</router-link>-->
          </div>

          <div class="body-right">

            <img v-if="true" src="../assets/img/03.png" alt="">
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="center-box">
      <p class="user-set-p">{{$t("m.setting.key2")}}</p>
      <div class="center-top-box">
        <div class="top-box-left">
          <div class="left-img-box">
            <img src="../assets/img/loginPassword.png" alt="">
            <div>
              <p class="header-p">{{$t("m.setting.key3")}}</p>
              <p class="bottom-p">{{$t("m.setting.key4")}}</p>
            </div>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(1)">{{$t("m.setting.key5")}}</span>
          </div>
        </div>
        <div class="top-box-right">
          <div class="left-img-box">
            <img src="../assets/img/google.png" alt="">
            <span>
             <p class="header-p">{{$t("m.setting.key6")}}</p>
             <p class="bottom-p">{{$t("m.setting.key7")}}</p>
           </span>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(4)" v-if="!userMsg.setGoogleAuth">{{$t("m.setting.key58")}}</span>
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(4)" v-if="userMsg.setGoogleAuth">{{$t("m.setting.key5")}}</span>
          </div>
        </div>
      </div>

      <div class="center-top-box center-top-box-two">
        <div class="top-box-left">
          <div class="left-img-box">
            <img src="../assets/img/changePhone.png" alt="">
            <div>
              <p class="header-p">{{$t("m.setting.key9")}}</p>
              <p class="header-p">{{userMsg.phone}}</p>
              <p class="bottom-p">{{$t("m.setting.key10")}}</p>
            </div>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(5)" v-if="!userMsg.phone">{{$t("m.setting.key8")}}</span>
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(5)" v-if="userMsg.phone">{{$t("m.setting.key5")}}</span>
          </div>
        </div>
        <div class="top-box-right">
          <div class="left-img-box">
            <img src="../assets/img/bindEmail.png" alt="">
            <div>
              <p class="header-p">{{$t("m.setting.key11")}}</p>
              <p class="header-p">{{userMsg.email}}</p>
              <p class="bottom-p">{{$t("m.setting.key12")}}</p>
            </div>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(3)" v-if="!userMsg.email">{{$t("m.setting.key8")}}</span>
            <span class="unfold-btn" style="cursor: inherit" data-toggle="modal" v-if="userMsg.email">{{$t("m.setting.key46")}}</span>
          </div>
        </div>
      </div>

    </div>
    <!-- Modal -->
    <!--修改登录密码弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">
              {{$t("m.setting.key14")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo">
            <div class="modal-body ">
              <input class="modal-body-input" type="password" :placeholder="$t('m.setting.key15')" v-model="setLoginPasswordObj.oldPassword">
            </div>

            <div class="modal-body">
              <p class="hint-p" style="color: red">{{$t("m.key13")}}</p>
              <input class="modal-body-input" type="password" :placeholder="$t('m.setting.key16')" v-model="setLoginPasswordObj.newPassword" @blur="verifyPassword(setLoginPasswordObj.newPassword,$event)">
            </div>
            <div class="modal-body ">
              <input class="modal-body-input"  type="password" :placeholder="$t('m.setting.key17')" v-model="configLoginPassword">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary"  @click="setLoginPassword($event)">
              {{$t("m.setting.key19")}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--绑定邮箱弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">
              {{$t("m.setting.key11")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo">
            <div class="modal-body">
              <p class="hint-p" style="color: red">{{$t("m.key3")}}</p>
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key20')" v-model="bindEmailObj.email">
            </div>
            <div class="modal-body">
              <span class="code-span">
              <input style="width: 60% ;border: none;padding-left: 8px" type="text"  :placeholder="$t('m.setting.key26')" v-model="bindEmailObj.emailCode">
              <button class="getCode-btn" @click="getBindEmailCode($event)">{{$t("m.setting.key21")}}</button>
                </span>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="bindEmail($event)" >
              {{$t("m.setting.key19")}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--绑定谷歌验证弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel3">
              {{$t("m.setting.key23")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo">
            <div class="modal-body">
              <div class="phone-email">
                <span class="active email-span" @click="selectRegister(2)">{{$t("m.register.key3")}}</span><span  @click="selectRegister(1)">{{$t("m.register.key2")}}</span>
              </div>
            </div>
            <div class="modal-body ">
              <div id="qrCode">
                <div id='code'></div>
                <canvas id="canvas"></canvas>
              </div>
            </div>
            <div class="modal-body">
              <p style="text-align: left;">{{$t("m.setting.key24")}}</p>
            </div>
            <div class="modal-body">
              <div style="text-align: left;">{{$t("m.setting.key25")}}: <input type="text" :value="googleKey"><span v-if="googleKey && IsPC() === true" @click="Copy" class="copy-span">{{$t("m.setting.key90")}}</span></div>
            </div>
            <div class="modal-body" v-show="isPhone">
              <!--<div class="phone-box">-->
              <!--<div  class="selected-countries-box"><span style="display: inline-block;width: 100%"  class="dropdown-toggle nation-phone"  data-toggle="dropdown" >+86</span>-->
              <!--<div class="phoneQz-box dropdown-menu custom-dropdown-menu">-->
              <!--<ul class="user-msg-ul" >-->
              <!--<li @click="selectCountries($event)" v-for="item in phoneQz">+<span class="phone-span">{{item.tel}}</span><span v-show="$i18n.locale === 'zh'">{{item.name}}</span><span v-show="$i18n.locale === 'en'">{{item.en}}</span></li>-->
              <!--</ul>-->
              <!--</div>-->
              <!--</div>-->
              <!--<span>-->
              <!--<input type="text"  :placeholder="$t('m.setting.key30')" v-model="bindGoogleObj.phone" @blur="verifyPhone(bindGoogleObj.phone,$event)">-->
              <!--</span>-->
              <!--</div>-->
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key91')" disabled v-model="phone">
            </div>
            <div class="modal-body" v-show="isEmail">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key92')" disabled v-model="email">
            </div>
            <div class="modal-body">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key57')" v-model="bindGoogleObj.googleCode">
            </div>
            <div class="modal-body code-box" style="padding-left: 15px;margin-top: 15px;">
              <input type="text" :placeholder="$t('m.setting.key26')" style="width: 60%;border:none" v-model="bindGoogleObj.code"><button  v-show="isEmail" style="width: 40%" @click="getBindGoogleCode(2,$event)">{{$t("m.setting.key21")}}</button><button v-show="isPhone" style="width: 40%" @click="getBindGoogleCode(1,$event)">{{$t("m.setting.key21")}}</button>
            </div>
          </div>
          <div class="modal-footer">
            <button v-show="isEmail" type="button" class="btn btn-primary" style="margin-left: 0" @click="bindGoogle(2,$event)">
              {{$t("m.setting.key19")}}
            </button>
            <button v-show="isPhone" type="button" class="btn btn-primary" style="margin-left: 0" @click="bindGoogle(1,$event)">
              {{$t("m.setting.key19")}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--绑定手机弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel5">
              {{$t("m.setting.key9")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo">
            <div class="modal-body">
              <div class="phone-box">
                <div  class="selected-countries-box"><span style="display: inline-block;width: 100%"  class="dropdown-toggle nation-phone"  data-toggle="dropdown" >+86</span>
                  <div class="phoneQz-box dropdown-menu custom-dropdown-menu">
                    <ul class="user-msg-ul" >
                      <li @click="selectCountries($event)" v-for="item in countryCn">+<span class="phone-span">{{item.tel}}</span><span v-show="$i18n.locale === 'zh'">{{item.cn}}</span><span v-show="$i18n.locale === 'en'">{{item.en}}</span></li>
                    </ul>
                  </div>
                </div>
                <span>
              <input type="text" id="box" :placeholder="$t('m.setting.key30')" v-model="bindPhoneObj.mobile" @blur="verifyPhone(bindPhoneObj.mobile,$event)">
                </span>
              </div>
            </div>
            <div class="modal-body">
              <span class="code-span">
              <input style="width: 60% ;border: none;padding-left: 8px" type="text" :placeholder="$t('m.setting.key26')" v-model="bindPhoneObj.mobileCode">
              <button class="getCode-btn" @click="getBindPhoneCode('set',$event)">{{$t("m.setting.key21")}}</button>
                </span>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="bindPhone($event)" >
              {{$t("m.setting.key19")}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Qs from "qs";
  import QRCode from "qrcode";
  import {setCookie,getCookie,delCookie} from "../assets/cookie";
  import country from "../assets/country"
  export default {
    components: {QRCode},
    inject: ["reload","reloadTwo"],
    data() {
      return {
        baseUrl: this.GLOBAL.baseUrl,
        baseUrlTwo: this.GLOBAL.baseUrlTwo,
        baseHerf:this.GLOBAL.baseHerf,
        peopleMoney: {},
        userMsg:"",
        isEmail:true,
        isPhone:false,
        configMoneyPassword:"",
        isSetPay:false,
        isChangePay:false,
        phone:"",
        email:"",
        setLoginPasswordObj: {
          oldPassword: "",
          newPassword: "",
          username: ""
        },
        bindGoogleObj: {
          mode:"",
          googleKey:"",
          code: "",
        },
        bindEmailObj: {
          email: "",
          emailCode: "",
        },
        bindPhoneObj: {
          username:"",
          mobile: "",
          mobileCode: "",
          password: ""
        },
        restMoneyPasswordObj:{
          paymentKey:"",
          code:"",
          googleCode:""
        },
        changePayObj:{
          newPaymentKey:"",
          oldPaymentKey:"",
          googleCode:""
        },
        googleKey:"",
        configLoginPassword: "",
        time: 60,
        region:"86",
        steObj:{},
        countryCn:country.countryCn,
        countryEn:country.countryEn,
      }
    },
    props: {
    },
    beforeDestroy(){
      window.clearInterval(this.interval)
    },
    created() {
    },
    mounted() {
      this.getAccountMsg();
      var  vueThis = this;
      $('#box').keyup(function(){
        var c=$(this);
        if(/[^\d]/.test(c.val())){//替换非数字字符
          var temp_amount=c.val().replace(/[^\d]/g,'');
          $(this).val(temp_amount);
        }
      });
      $('#box1').keyup(function(){
        var c=$(this);
        if(/[^\d]/.test(c.val())){//替换非数字字符
          var temp_amount=c.val().replace(/[^\d]/g,'');
          $(this).val(temp_amount);
        }
      });
      $('#myModal').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
      $('#myModal2').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
      $('#myModal3').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
      $('#myModal5').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
    },
    methods: {
      //返回上一页
      Return(){
        window.location.href = "http://"+ getCookie("platformUrl");
      },
      //选择注册方式
      selectRegister(way,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        this.configMoneyPassword = "";
        $(".hint-p").hide();
        if(way === 1){
          this.isPhone = true;
          this.isEmail = false;
          this.bindGoogleObj.phone = this.userMsg.phone;
          dom.addClass("active").siblings().removeClass("active");
        }else if(way === 2){
          this.isPhone = false;
          this.isEmail = true;
          this.bindGoogleObj.email = this.userMsg.email;
          dom.addClass("active").siblings().removeClass("active");
        }

      },
      //清除输入数据
      clearData(){
        $(".hint-p").css("display","none");
        this.region = "86";
        $(".email-span").addClass("active").siblings("span").removeClass("active");
        this.isPhone = false;
        this.isEmail = true;
        $(".nation-phone").text("+86");
        this.setLoginPasswordObj.oldPassword = "";
        this.setLoginPasswordObj.newPassword = "";
        this.setLoginPasswordObj.code = "";
        this.bindGoogleObj.code = "";
        this.bindGoogleObj.googleKey = "";
        this.bindEmailObj.email = "";
        this.bindEmailObj.emailCode = "";
        this.bindEmailObj.password = "";
        this.bindPhoneObj.mobile = "";
        this.bindPhoneObj.mobileCode = "";
        this.bindPhoneObj.password = "";
        this.configLoginPassword = "";
        this.configMoneyPassword = "";
      },
      //校验邮箱
      verifyEmail(str,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        if(this.verEmail(str)){
          dom.siblings(".hint-p").hide()
        }else {
          dom.siblings(".hint-p").show()
        }
      },
      //校验手机格式
      verifyPhone(phone,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        if(this.IsPhone(phone)){
          dom.siblings(".hint-p").hide();
        }else {
          dom.siblings(".hint-p").show();
        }
      },
      //校验密码
      verifyPassword(str,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        if(this.isNumberOr_Letter(str)){
          dom.siblings(".hint-p").hide()
        }else {
          dom.siblings(".hint-p").show()
        }
      },
      //清除用户信息
        deleteUserMsg(){
          sessionStorage.removeItem("newBlock");
          sessionStorage.removeItem("userMsg");
          setCookie("isLogin","",-1);
          // alert(this.$t("m.main.key3"));
          // window.location.href = global.baseHerf + this.$i18n.locale;
          this.$router.push("/");
          this.$router.go(0);
        },
      //获取账号信息
      getAccountMsg() {
        var vueThis = this;
        var obj = {};
        this.$axios({
          method: "get",
          url: this.baseUrlTwo + "getAccountInfo?username="+this.getCookie("username"),
          withCredentials:true
        }).then(function (res) {
          if (res.data.code === 1) {
            // vueThis.$message.success('获取成功',);
            vueThis.userMsg = res.data.msg.data;
            if(vueThis.userMsg.phone){
              vueThis.phone = "+" + vueThis.userMsg.countryCode +"  "+ vueThis.userMsg.phone;
            }else {
              vueThis.phone = ""
            }
            vueThis.email = vueThis.userMsg.email;
          } else {
            if(res.data.code === 1068){
              vueThis.$message.error(vueThis.$t("m.setting.key63"));
              sessionStorage.removeItem("newBlock");
              sessionStorage.removeItem("userMsg");
              setCookie("isLogin","",-1);
              vueThis.$router.push("/");
              vueThis.reload();
              vueThis.reloadTwo();
            }if(res.data.code === 1069){
              vueThis.$message.warning(vueThis.$t("m.setting.key64"));

            }
          }
        }).catch(function (err) {
        })
      },
      //获取谷歌KEY
      getGoogleKey(){
        var vueThis = this;
        var canvas = document.getElementById("canvas");
        this.$axios({
          method:"get",
          url:this.baseUrlTwo + "getGoogleKey",
        }).then(function (res) {
          if(res.data.code === 1 ){
            vueThis.googleKey = res.data.msg;
            // vueThis.qrText = "otpauth://totp/KIRINMINER:" + getCookie("username") + "--" + vueThis.Format(new Date(), "MM-dd,HH:mm:ss") + "?secret=" + res.data.msg + "&issuer=KIRINMINER";
            QRCode.toCanvas(canvas,"otpauth://totp/KIRINMINER:" + getCookie("username") + "--" + vueThis.Format(new Date(), "MM-dd,HH:mm:ss") + "?secret=" + res.data.msg + "&issuer=KIRINMINER",function (err) {
              if(err){
              }
            })
          }
        }).catch(function (err) {
          console.log(err);
        })
      },
      //获取验证码来绑定谷歌验证
      getBindGoogleCode(index,e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let getCodeObj = {};
        if (index === 2) {
          if(!this.userMsg.email){
            alert(this.$t("m.setting.key65"));
            return false;
          }else {
            getCodeObj.email = this.userMsg.email;
            getCodeObj = Qs.stringify(getCodeObj);
            btn.attr("disabled", true).css("cursor", "not-allowed");
            this.$axios({
              method: "post",
              url: this.baseUrlTwo + "GGkeygetResetEmailCode",
              data: getCodeObj,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function (res) {
              if (res.data.code === 1) {
                vueThis.countDown(btn);
              } else {
                btn.removeAttr("disabled").css("cursor", "pointer");
                if(res.data.msg === "账户未登录"){
                  vueThis.deleteUserMsg();
                }
                if (res.data.code === 1015) {
                  alert(vueThis.$t("m.setting.key63"));
                } else if (res.data.code === 1016) {
                  alert(vueThis.$t("m.setting.key20"));
                }else if(res.data.code === 1017){
                  alert(vueThis.$t("m.setting.key66"));
                }else if(res.data.code === 1018){
                  alert(vueThis.$t("m.setting.key50"));
                }
              }
            }).catch(function (err) {
              btn.removeAttr("disabled").css("cursor", "pointer");
            })
          }
        } else {
          if(!this.userMsg.phone){
            alert(this.$t("m.setting.key67"));
            return false
          }else {
            getCodeObj.phone = this.userMsg.phone;
            getCodeObj.countryCode = this.userMsg.countryCode;
            getCodeObj = Qs.stringify(getCodeObj);
            btn.attr("disabled", true).css("cursor", "not-allowed");
            this.$axios({
              method: "post",
              url: this.baseUrlTwo + "GGkeygetResetPhoneCode",
              data: getCodeObj,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function (res) {
              if (res.data.code === 1) {
                vueThis.countDown(btn);
              } else {
                btn.removeAttr("disabled").css("cursor", "pointer");
                if(res.data.msg === "账户未登录"){
                  vueThis.deleteUserMsg();
                }
                if (res.data.code === 1019) {
                  alert(vueThis.$t("m.setting.key63"));
                } else if (res.data.code === 1020) {
                  alert(vueThis.$t("m.setting.key30"));
                }else if(res.data.code === 1021){
                  alert(vueThis.$t("m.setting.key68"));
                }else if(res.data.code === 1022){
                  alert(vueThis.$t("m.setting.key49"));
                }
              }
            }).catch(function (err) {
              btn.removeAttr("disabled").css("cursor", "pointer");
            })
          }
        }
      },
      //获取验证码来设置/重置支付密码
      getRestMoneyPasswordCode(index,e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let getCodeObj = {};
        if(index === 1){
          if(!this.userMsg.phone){
            alert(this.$t("m.setting.key67"));
            return false;
          }else {
            getCodeObj.phone = this.userMsg.phone;
            getCodeObj.countryCode = this.userMsg.countryCode;
            getCodeObj = Qs.stringify(getCodeObj);
            btn.attr("disabled", true).css("cursor", "not-allowed");
            this.$axios({
              method: "post",
              url: this.baseUrlTwo + "paykeyResetPhoneCode",
              data: getCodeObj,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function (res) {
              if (res.data.code === 1) {
                vueThis.countDown(btn);
              } else {
                btn.removeAttr("disabled").css("cursor", "pointer");
                if(res.data.msg === "账户未登录"){
                  vueThis.deleteUserMsg();
                }
                if (res.data.code === 1027) {
                  alert(vueThis.$t("m.setting.key63"));
                } else if (res.data.code === 1028) {
                  alert(vueThis.$t("m.setting.key30"))
                }else if (res.data.code === 1029) {
                  alert(vueThis.$t("m.setting.key68"))
                }else if (res.data.code === 1030) {
                  alert(vueThis.$t("m.setting.key49"))
                }else if(res.data.code === 1324){
                  alert(vueThis.$t("m.setting.key93"));
                }
              }
            }).catch(function (err) {
              btn.removeAttr("disabled").css("cursor","pointer");
            })
          }

        }
        else if (index === 2) {
          if (!this.userMsg.email) {
            alert(this.$t("m.setting.key65"));
            return false;
          } else {
            getCodeObj.email = this.userMsg.email;
            getCodeObj = Qs.stringify(getCodeObj);
            btn.attr("disabled", true).css("cursor", "not-allowed");
            this.$axios({
              method: "post",
              url: this.baseUrl + "paykeyResetEmailCode",
              data: getCodeObj,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function (res) {
              if (res.data.code === 1) {
                vueThis.countDown(btn);
              } else {
                btn.removeAttr("disabled").css("cursor", "pointer");
                if(res.data.msg === "账户未登录"){
                  vueThis.deleteUserMsg();
                }
                if (res.data.code === 1023) {
                  alert(vueThis.$t("m.setting.key63"));
                } else if (res.data.code === 1024) {
                  alert(vueThis.$t("m.setting.key20"));
                } else if (res.data.code === 1025) {
                  alert(vueThis.$t("m.setting.key66"));
                }else if (res.data.code === 1026) {
                  alert(vueThis.$t("m.setting.key50"));
                }else if(res.data.code === 1324){
                  alert(vueThis.$t("m.setting.key93"));
                }
              }
            }).catch(function (err) {
              btn.removeAttr("disabled").css("cursor", "pointer");
            })
          }
        }
      },
      //设置/重置资金密码
      restMoneyPassword(index,e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let Obj = {};
        if(index === 1){
          if(!this.userMsg.phone){
            alert(this.$t("m.setting.key67"));
            return false;
          }else {
            Obj.mode = "phone";
            Obj.phone =  this.userMsg.phone;
            Obj.countryCode =  this.region ;
          }
        }else if(index === 2){
          if(!this.userMsg.email){
            alert(this.$t("m.setting.key65"));
            return false;
          }else {
            Obj.mode = "email";
            Obj.email = this.userMsg.email;
          }
        }
        if (!this.restMoneyPasswordObj.paymentKey) {
          alert(this.$t("m.setting.key69"));
          return false;
        } else if(this.isNumberOr_Letter(this.restMoneyPasswordObj.paymentKey)!== true){
          alert(this.$t("m.key13"));
          return false;
        } else if (!this.configMoneyPassword) {
          alert(this.$t("m.setting.key62"));
          return false;
        } else if (this.configMoneyPassword !== this.restMoneyPasswordObj.paymentKey) {
          alert(this.$t("m.setting.key43"));
          return false;
        } else if (!this.restMoneyPasswordObj.code) {
          alert(vueThis.$t("m.setting.key26"));
          return false;
        } else if (!this.restMoneyPasswordObj.googleCode) {
          alert(vueThis.$t("m.setting.key57"));
          return false;
        }else {
          Obj.paymentKey = this.restMoneyPasswordObj.paymentKey;
          Obj.code = this.restMoneyPasswordObj.code;
          Obj.googleCode = this.restMoneyPasswordObj.googleCode;
          Obj = Qs.stringify(Obj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "setPaymentKey",
            data: Obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              vueThis.getAccountMsg();
              $("#myModal_3").modal("hide");
              btn.removeAttr("disabled").css("cursor", "pointer");
              alert(vueThis.$t("m.setting.key33"));
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1052) {
                alert(vueThis.$t("m.setting.key63"));
              } else if (res.data.code === 1053) {
                alert(vueThis.$t("m.setting.key70"));
              }else if (res.data.code === 1054) {
                alert(vueThis.$t("m.setting.key35"));
              }else if (res.data.code === 1055) {
                alert(vueThis.$t("m.setting.key34"));
              }else if (res.data.code === 1056) {
                alert(vueThis.$t("m.setting.key77"));
              }else if(res.data.code === 1333){
                alert(vueThis.$t("m.register.key25"));
              }else if(res.data.code === 1324){
                alert(vueThis.$t("m.setting.key93"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }

      },
      //修改资金密码
      changePayPassword(e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let Obj = {};
        if(!this.changePayObj.oldPaymentKey){
          alert(this.$t("m.setting.key85"));
          return false;
        } else if (!this.changePayObj.newPaymentKey) {
          alert(this.$t("m.setting.key87"));
          return false;
        } else if(this.isNumberOr_Letter(this.changePayObj.newPaymentKey)!== true){
          alert(this.$t("m.key13"));
          return false;
        } else if (!this.configMoneyPassword) {
          alert(this.$t("m.setting.key62"));
          return false;
        } else if (this.configMoneyPassword !== this.changePayObj.newPaymentKey) {
          alert(this.$t("m.setting.key43"));
          return false;
        } else if (!this.changePayObj.googleCode) {
          alert(vueThis.$t("m.setting.key57"));
          return false;
        }else {
          Obj.oldPaymentKey = this.changePayObj.oldPaymentKey;
          Obj.newPaymentKey = this.changePayObj.newPaymentKey;
          Obj.googleCode = this.changePayObj.googleCode;
          Obj = Qs.stringify(Obj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "changePaymentKey",
            data: Obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              $("#myModal_3").modal("hide");
              vueThis.getAccountMsg();
              btn.removeAttr("disabled").css("cursor", "pointer");
              alert(vueThis.$t("m.setting.key37"));
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1057) {
                alert(vueThis.$t("m.setting.key80"));
              } else if (res.data.code === 1058) {
                alert(vueThis.$t("m.setting.key63"));
              }else if (res.data.code === 1059) {
                alert(vueThis.$t("m.setting.key15"));
              }else if (res.data.code === 1060) {
                alert(vueThis.$t("m.setting.key34"));
              }else if (res.data.code === 1061) {
                alert(vueThis.$t("m.setting.key82"));
              }else if (res.data.code === 1062) {
                alert(vueThis.$t("m.setting.key83"));
              }else if (res.data.code === 1361) {
                alert(vueThis.$t("m.setting.key94"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }

      },
      // 获取验证码来绑定邮箱
      getBindEmailCode(e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let getCodeObj = {};
        if (!this.bindEmailObj.email) {
          alert(this.$t("m.setting.key20"));
          return false;
        } else if (this.verEmail(this.bindEmailObj.email) !== true) {
          alert(this.$t("m.key3"));
          return false;
        }else {
          getCodeObj.email = this.bindEmailObj.email;
          getCodeObj.username = this.userMsg.username;
          getCodeObj = Qs.stringify(getCodeObj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "getBindEmailCode",
            data: getCodeObj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              vueThis.countDown(btn);
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1080) {
                alert(vueThis.$t("m.setting.key70"));
              } else if (res.data.code === 1081) {
                alert(vueThis.$t("m.setting.key71"));
              }else if (res.data.code === 1082) {
                alert(vueThis.$t("m.setting.key73"));
              }else if (res.data.code === 1083) {
                alert(vueThis.$t("m.setting.key88"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor","pointer");
          })
        }
      },
      // 获取验证码来绑定手机
      getBindPhoneCode(type,e) {
        let getCodeObj = {};
        if(type === "set"){
          if (!this.bindPhoneObj.mobile) {
            alert(this.$t("m.setting.key30"));
            return false;
          }else {
            getCodeObj.phone = this.bindPhoneObj.mobile;
            getCodeObj.countryCode = this.region;
            getCodeObj.username = this.userMsg.username;
          }
        }
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        getCodeObj = Qs.stringify(getCodeObj);
        btn.attr("disabled", true).css("cursor", "not-allowed");
        this.$axios({
          method: "post",
          url: this.baseUrlTwo + "getBindPhoneCode",
          data: getCodeObj,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(function (res) {
          if (res.data.code === 1) {
            vueThis.countDown(btn);
          } else {
            btn.removeAttr("disabled").css("cursor", "pointer");
            if(res.data.msg === "账户未登录"){
              vueThis.deleteUserMsg();
            }
            if (res.data.code === 1072) {
              alert(vueThis.$t("m.setting.key70"));
            } else if (res.data.code === 1073) {
              alert(vueThis.$t("m.setting.key71"));
            } else if (res.data.code === 1074) {
              alert(vueThis.$t("m.setting.key68"));
            } else if (res.data.code === 1075) {
              alert(vueThis.$t("m.setting.key74"));
            }
          }
        }).catch(function (err) {
          btn.removeAttr("disabled").css("cursor","pointer");
        })

      },
      //绑定谷歌验证
      bindGoogle(index,e) {
        let vueThis = this;
        let event = window.event || e;
        let btn = $(event.currentTarget);
        let bindGoogleObj = {};
        if(index === 1){
          if(!this.userMsg.phone){
            alert(this.$t("m.setting.key75"));
            return false;
          }else {
            bindGoogleObj.mode = "phone";
            bindGoogleObj.phone = this.userMsg.phone;
            bindGoogleObj.countryCode = this.userMsg.countryCode;
          }
        }else {
          if(!this.userMsg.email){
            alert(this.$t("m.setting.key76"));
            return false;
          }else {
            bindGoogleObj.mode = "email";
            bindGoogleObj.email = this.userMsg.email;
          }
        }
        if (!this.bindGoogleObj.googleCode) {
          alert(this.$t("m.setting.key57"));
          return false;
        } else if (!this.bindGoogleObj.code) {
          alert(this.$t("m.setting.key26"));
          return false;
        } else {
          bindGoogleObj.code = this.bindGoogleObj.code;
          bindGoogleObj.googleKey = this.googleKey;
          bindGoogleObj.googleCode = this.bindGoogleObj.googleCode;
          bindGoogleObj = Qs.stringify(bindGoogleObj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "setGoogleKey",
            data: bindGoogleObj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              vueThis.bindGoogleObj.code = "";
              vueThis.bindGoogleObj.googleCode = "";
              alert(vueThis.$t("m.setting.key33"));
              $("#myModal3").modal("hide");
              vueThis.getAccountMsg();
              btn.removeAttr("disabled").css("cursor", "pointer");
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1063) {
                alert(vueThis.$t("m.setting.key63"));
              } else if (res.data.code === 1064) {
                alert(vueThis.$t("m.setting.key70"));
              } else if (res.data.code === 1065) {
                alert(vueThis.$t("m.setting.key35"));
              } else if (res.data.code === 1066) {
                alert(vueThis.$t("m.setting.key77"));
              } else if (res.data.code === 1067) {
                alert(vueThis.$t("m.setting.key84"));
              }else if(res.data.code === 1333){
                alert(vueThis.$t("m.register.key25"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }

      },
      //绑定邮箱
      bindEmail(e) {
        if (!this.bindEmailObj.email) {
          alert(this.$t("m.setting.key20"));
          return false;
        } else if (this.verEmail(this.bindEmailObj.email) !== true) {
          alert(this.$t("m.key3"));
          return false;
        } else if (!this.bindEmailObj.emailCode) {
          alert(this.$t("m.setting.key26"));
          return false;
        } else {
          let Obj = {};
          let vueThis = this;
          let event = window.event || e;
          let btn = $(event.currentTarget);
          Obj.username = this.userMsg.username;
          Obj.email = this.bindEmailObj.email;
          Obj.code = this.bindEmailObj.emailCode;
          Obj = Qs.stringify(Obj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "bindEmail",
            data: Obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              vueThis.userMsg.email = true;
              $("#myModal2").modal("hide");
              vueThis.getAccountMsg();
              btn.removeAttr("disabled").css("cursor", "pointer");
              alert(vueThis.$t("m.setting.key33"));
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1084) {
                alert(vueThis.$t("m.setting.key63"));
              } else if (res.data.code === 1085) {
                alert(vueThis.$t("m.setting.key70"));
              }else if (res.data.code === 1086) {
                alert(vueThis.$t("m.setting.key35"));
              }else if (res.data.code === 1087) {
                alert(vueThis.$t("m.setting.key78"));
              }else if(res.data.code === 1333){
                alert(vueThis.$t("m.register.key25"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }

      },
      //绑定手机号码
      bindPhone(e){
        let obj = {};
        if(!this.bindPhoneObj.mobile){
          alert(this.$t("m.setting.key30"));
          return false;
        } else if(this.IsPhone(this.bindPhoneObj.mobile) !== true){
          alert(this.$t("m.key2"));
          return false;
        }else if(!this.bindPhoneObj.mobileCode){
          alert(this.$t("m.setting.key26"));
          return false;
        } else {
          obj.phone = this.bindPhoneObj.mobile;
          obj.countryCode = this.region ;
          obj.code = this.bindPhoneObj.mobileCode;
          obj.username = this.userMsg.username;
          obj = Qs.stringify(obj);
          let vueThis = this;
          let event = window.event || e;
          let btn = $(event.currentTarget);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method:"post",
            url:this.baseUrlTwo + "bindPhone",
            data:obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              vueThis.bindPhoneObj.mobile = "";
              vueThis.bindPhoneObj.mobileCode = "";
              $("#myModal5").modal("hide");
              vueThis.getAccountMsg();
              btn.removeAttr("disabled").css("cursor", "pointer");
              alert(vueThis.$t("m.setting.key33"));
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1076) {
                alert(vueThis.$t("m.setting.key63"));
              } else if (res.data.code === 1077) {
                alert(vueThis.$t("m.setting.key70"));
              } else if (res.data.code === 1078) {
                alert(vueThis.$t("m.setting.key35"));
              } else if (res.data.code === 1079) {
                alert(vueThis.$t("m.setting.key79"));
              } else if(res.data.code === 1333){
                alert(vueThis.$t("m.register.key25"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }
      },
      // 修改登录密码
      setLoginPassword(e) {
        let event = window.event || e;
        let btn = $(event.currentTarget);
        if (!this.setLoginPasswordObj.oldPassword) {
          alert(this.$t("m.setting.key15"));
          return false;
        }else if (!this.setLoginPasswordObj.newPassword) {
          alert(this.$t("m.setting.key16"));
          return false;
        }else if(this.isNumberOr_Letter(this.setLoginPasswordObj.newPassword)!== true){
          alert(this.$t("m.key13"));
          return false;
        } else if (!this.configLoginPassword) {
          alert(this.$t("m.setting.key17"));
          return false;
        } else if (this.setLoginPasswordObj.newPassword !== this.configLoginPassword) {
          alert(this.$t("m.setting.key43"));
          return false;
        }else {
          var vueThis = this;
          this.setLoginPasswordObj.username = this.userMsg.username;
          var obj = Qs.stringify(this.setLoginPasswordObj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrlTwo + "changePassword",
            data: obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }).then(function (res) {
            if (res.data.code === 1) {
              $("#myModal").modal("hide");
              vueThis.$router.push("/");
              alert(vueThis.$t("m.setting.key44"));
            } else {
              btn.removeAttr("disabled").css("cursor", "pointer");
              if(res.data.msg === "账户未登录"){
                vueThis.deleteUserMsg();
              }
              if (res.data.code === 1088) {
                alert(vueThis.$t("m.setting.key80"));
              } else if (res.data.code === 1089) {
                alert(vueThis.$t("m.setting.key81"));
              }else if (res.data.code === 1090) {
                alert(vueThis.$t("m.setting.key63"));
              }else if (res.data.code === 1091) {
                alert(vueThis.$t("m.setting.key15"));
              }else if (res.data.code === 1092) {
                alert(vueThis.$t("m.setting.key82"));
              }else if (res.data.code === 1093) {
                alert(vueThis.$t("m.setting.key83"));
              }else if (res.data.code === 1361) {
                alert(vueThis.$t("m.setting.key94"));
              }
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
        }
      },
      //呼出弹出框
      popupModal(index,type) {
        if (index === 3) {
          $("#myModal2").modal("show")
        } else if (index === 5) {
          $("#myModal5").modal("show");
        }else if (index === 6) {
          $("#myModal6").modal("show");
        }else if(index === 1){
          $("#myModal").modal("show");
        }else if(index === 2){
          $("#myModal4").modal("show")
        }else if(index === 4) {
          $("#myModal3").modal("show");
          this.getGoogleKey();
        }else if(index === 7) {
          if(type === "set"){
            this.isSetPay = true;
            this.isChangePay = false;
          }else {
            this.isSetPay = false;
            this.isChangePay = true;
          }
          $("#myModal_3").modal("show");
        }
      },
      //选择国家手机号
      selectCountries(e){
        let vueThis = this;
        var event = window.event || e;
        var dom = $(event.currentTarget);
        var str = dom.children(".phone-span").text();
        $(".nation-phone").text("+"+str);
        vueThis.region = str;
      },

      Copy(e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        var text = dom.siblings("input");
        text[0].select();
        document.execCommand("Copy");
      },
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
          "SymbianOS", "Windows Phone",
          "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    /*color: #000;*/
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    /*display: inline-block;*/
  }

  .hint-p {
    text-align: left;
    padding-left: 15px;
    display: none;
  }

  /*顶部*/
  .home-parent-box {
    /*width: 1920px;*/
    /*overflow: hidden;*/
    /*overflow: hidden;*/
    /*mix-width: 1200px;*/
    height: 540px;
    overflow: hidden;
    margin-bottom: 50px;
    min-width: 1200px;
  }

  .home-header-box {
    /*background: #5714d1;*/
    display: flex;
    justify-content: center;
    min-width: 1200px;
    /*padding-bottom: 40px;*/
    margin: auto;
    height: 440px;
    position: relative;
    width: 100%;
    /*height: 496px;*/
    text-align: center;
    color: #fff;
    background-color: #5714d1;
  }

  .home-header-box:after {
    position: absolute;
    left: -20%;
    right: 0;
    bottom: -100px;
    z-index: -1;
    content: ' ';
    height: 536px;
    width: 140%;
    border-radius: 0 0 50% 50%;
    background-color: #5714d1;
    min-width: 1200px;
  }

  .body-left {
    padding-left: 55px;
    padding-top: 84px;
    width: 660px;

  }

  .user-msg-box {
    display: flex;
  }

  .user-img-box {
    display: flex;
    align-items: center;
  }

  .time-span {
    display: flex;
    align-items: flex-end;
  }

  .user-msg {
    display: flex;
    margin-left: 25px;
    font-size: 12px;
    text-align: left;
  }

  .username-span {
    margin-right: 30px;
  }

  .username-p {
    font-size: 16px;
    font-weight: bold;
  }

  .balance-msg-box {
    margin-top: 35px;
    text-align: left;
  }

  .balance-msg-box p {
    font-size: 20px;
    font-weight: bold;
  }

  .number-span {
    font-size: 33px;
    font-weight: bold;
    margin-right: 10px;
    font-style: italic;
  }

  .unit-span {
    font-size: 16px;
    font-weight: bold;
  }

  .body-right {
    margin-top: 34px;
  }

  .newBlock-box span {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }

  .newBlock-box span img {
    margin-right: 13px;
  }

  .wtcImg-box img {
    margin-right: 13px;
  }

  .home-header-body {
    width: 1200px;
    display: flex;
    position: relative;

  }

  .login-box {
    width: 200px;
    margin-top: 47px;
    padding: 7px 0;
    border: 1px solid #e4d494;
    color: #e4d494;
    border-radius: 19px;
    cursor: pointer;
  }

  .login-box a {
    color: #e4d494;
  }

  /*卡片*/

  .center-box {
    margin: 0 auto;
    /*height: 100px;*/
    /*background: red;*/
    width: 1200px;
    min-width: 1200px;
    padding-bottom: 72px;
  }

  .user-set-p {
    text-align: left;
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: bold;
    color: #666;
  }

  .center-top-box {
    display: flex;
    justify-content: space-between;
  }

  .center-top-box-two {
    margin-top: 40px;
  }

  .top-box-left {
    height: 200px;
    padding: 35px 35px;
    display: flex;
    justify-content: space-between;
    width: 48%;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }

  .left-img-box {
    display: flex;
    justify-content: flex-start;
    width: 80%;
  }

  .left-img-box img {
    margin-right: 30px;
    width: 120px;
    height: 120px;
  }

  .left-img-box .header-p {
    font-weight: bold;
    text-align: left;
    font-size: 16px;
    color: #333;
  }

  .left-img-box .bottom-p {
    text-align: left;
    font-size: 14px;
    color: #666;
  }

  .button-box {
    display: flex;
    align-items: center;
  }

  .left-img-box p {
    margin-top: 25px;
    font-size: 16px;
    color: #000000;
  }

  .top-box-right {
    height: 200px;
    padding: 35px 35px;
    width: 48%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.06);
    border-radius: 10px;

  }

  .box-right-left ul li {
    line-height: 54px;
  }

  .box-right-left ul li span {
    display: inline-block;

  }

  .li-span-right span {
    color: #574a6e;
    font-size: 14px;
    padding-left: 7px;
  }

  /*提币jil*/

  .unfold-btn {
    float: right;
    border: 1px solid #4a31c2;
    border-radius: 15px;
    font-size: 16px;
    font-weight: normal;
    padding: 2.5px 15px;
    color: #4a31c2;
    margin-top: 8px;
    cursor: pointer;
  }

  .list-box ul li {
    display: inline-block;
    text-align: left;
  }

  .header-ul li {
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
  }

  .center-ul li {
    color: #7937ff;
    font-size: 13px;
  }

  .code-box {
    border: 1px solid #d5dce3;
    border-radius: 20px;
    padding: 0;
    margin: 0 15px 15px 15px;

  }

  .code-box button {
    /*border-radius: 20px;*/
    background: transparent;
    border: none;
    border-left: 1px solid #d5dce3 !important;
    height: 40px;
  }

  .code-box input {
    border-radius: 0;
    /*border-right: 1px solid #d5dce3!important;*/
  }

  /*分页*/

  /*弹出框*/
  .modal-title {
    font-size: 16px;
    color: #000;
  }

  .modal-body-box {
    padding: 33px 40px;

  }
  .phone-email{
    text-align: left;
  }
  .phone-span{
    display: inline-block;
    width: 15%;
  }
  .phone-email span{
    margin-right: 30px;
    padding-bottom: 5px;
    cursor: pointer;
    /*font-size: 14px;*/
  }
  .phone-box {
    display: flex;
    height: 40px;
    font-size: 14px;
    border: 1px solid #d5dce3;
    border-radius: 20px;
    outline: none;
    padding-left: 15px;
    align-items: center;
  }

  .selected-countries-box {
    /*width:15% ;*/
    cursor: pointer;
    text-align: left;
    margin-right: 10px;
  }

  .modal-body input {
    border: none;

  }

  .modal-body .modal-body-input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid #d5dce3;
    border-radius: 20px;
    outline: none;
    padding-left: 15px;
  }

  .phoneQz-box {
    overflow: hidden;
    width: 100%;
    height: 300px;
    overflow-y: auto;
  }

  .user-msg-ul {
    padding-left: 10px;
  }

  .user-msg-ul li span {
    color: black;
  }

  .user-msg-ul li span:first-child {
    margin-right: 10px;
  }

  .modal-footer {
    padding-left: 55px;
    padding-right: 55px;
    padding-bottom: 63px;
    border-top: none;
  }

  .btn-primary {
    width: 100%;
    border-radius: 20px;
    background: #4a31c2;
    font-size: 14px;
  }

  .code-span {
    display: inline-block;
    width: 100%;
    height: 41.5px;
    border: 1px solid #d5dce3;
    border-radius: 20px;
  }

  .getCode-btn {
    width: 35%;
    border: none;
    height: 100%;
    background: transparent;
    border-left: 1px solid #d5dce3;

  }
  .active{
    border-bottom: 2px solid #5714d1;
    font-size: 22px;
  }
  @media (min-width: 768px) {
    .modal-dialog {
      width: 480px;
      margin: 250px auto;
    }
  }
</style>
