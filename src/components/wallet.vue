<template>
  <div class="home">
    <div class="home-parent-box">
      <div class="home-header-box">
        <div class="home-header-body">
          <div class="body-left" v-show="true">
            <div class="body-left-img">
              <div class="balance-msg-box" style="margin-top: 35px;">
                <p>{{$t("m.wallet.key")}}</p>
                <div><span class="number-span">{{peopleMoney.yesterdayMoney?(peopleMoney.yesterdayMoney)/1000000000000000000:0}}</span><span
                  class="unit-span">WTC</span></div>
              </div>
              <div class="balance-msg-box">
                <p>{{$t("m.wallet.key2")}}</p>
                <div><span class="number-span">{{peopleMoney.allMoney?peopleMoney.allMoney:0}}</span><span
                  class="unit-span">WTC</span></div>
              </div>
            </div>
            <router-link to="/login">
            </router-link>
          </div>
          <div class="body-right">
            <img v-if="true" src="../assets/img/03.png" alt="">
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="center-box">
      <p class="user-set-p">{{$t("m.wallet.key4")}}</p>
      <div class="center-top-box">
        <div class="top-box-left">
          <div class="left-img-box">
            <img src="../assets/img/tixianmianmi.png" alt="">
            <span>
             <p class="header-p">{{$t("m.wallet.key23")}}</p>
             <p class="bottom-p">{{$t("m.wallet.key24")}}</p>
           </span>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(1,'set')" v-if="!userMsg.setPaymentCode">{{$t("m.wallet.key7")}}</span>
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(1,'change')" v-if="userMsg.setPaymentCode">{{$t("m.wallet.key8")}}</span>
          </div>
        </div>
        <div class="top-box-right">
          <div class="left-img-box">
            <img src="../assets/img/walletAddress.png" alt="">
            <span>
             <p class="header-p">{{$t("m.wallet.key5")}}</p>
             <p class="bottom-p address-p">{{address}}</p>
             <p class="bottom-p address-text-p" style="margin-top: 10px;">{{$t("m.wallet.key6")}}</p>
           </span>
          </div>
          <div class="button-box">
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(3)" v-if="!WalletAddress">{{$t("m.wallet.key7")}}</span>
            <span class="unfold-btn" data-toggle="modal" @click="popupModal(3)" v-if="WalletAddress">{{$t("m.wallet.key8")}}</span>
          </div>
        </div>
      </div>

      <div class="center-bottom-box">
        <div class="bottom-box-text">
          <span><img src="../assets/img/tibijilu.png" alt=""></span>
          <span class="bottom-box-text-span">{{$t("m.wallet.key9")}}</span>
          <span style="font-weight: normal;font-size: 14px;margin-left: 8px;color: #666">{{$t("m.wallet.key10")}}</span>
          <span class="unfold-btn" @click="packUp" v-show="unfoldBtn">{{$t("m.wallet.key11")}}</span>
          <span class="unfold-btn" @click="unfold" v-show="packUpBtn">{{$t("m.wallet.key12")}}</span>
        </div>
        <div class="list-box">
          <ul class="header-ul">
            <li class="li-two">{{$t("m.wallet.key13")}} (WTC)</li>
            <li class="li-one">{{$t("m.myMill.key27")}}</li>
            <li class="li-three">{{$t("m.wallet.key14")}}</li>
          </ul>
          <ul class="center-ul" v-for="item in payValue">
            <li class="li-two">{{item.payMoney}}</li>
            <li class="li-one">{{item.hash}}</li>
            <li class="li-three">{{timestampToTime(item.payTime)}}</li>
          </ul>
          <div v-if="payValue.length === 0"
               style="padding: 200px 0;font-size: 20px;margin-bottom: 70px;font-weight: bold;color: #888">
            {{$t("m.wallet.key39")}}
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <!--设置钱包地弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal2" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">
              {{$t("m.wallet.key15")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo">
            <div class="modal-body">
              <p class="hint-p" style="color: red">{{$t("m.wallet.key41")}}</p>
              <input type="text" :placeholder="$t('m.wallet.key17')" v-model="setAddressObj.address" @blur="verifyAddress(setAddressObj.address,$event)">
            </div>
            <div class="modal-body ">
              <p class="hint-p" v-show="payPasswordP" style="color: red">{{$t("m.key13")}}</p>
              <input type="password" :placeholder="$t('m.wallet.key16')" v-model="setAddressObj.payPassword">
            </div>
            <div class="modal-body ">
              <input type="text" :placeholder="$t('m.wallet.key18')" v-model="setAddressObj.code">
            </div>
          </div>
          <div class="modal-footer">
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">-->
            <!--取消-->
            <!--&lt;!&ndash;{{$t("m.key5")}}&ndash;&gt;-->
            <!--</button>-->
            <button type="button" class="btn btn-primary" @click="setAddress($event)">
              <!--{{$t("m.key6")}}-->
              {{$t("m.wallet.key19")}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--重置/设置资金密码弹出框-->
    <div class="modal fade bs-example-modal-sm" id="myModal_3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" v-show="isSetPay">
              {{$t("m.setting.key61")}}
            </h4>
            <h4 class="modal-title" v-show="isChangePay">
              {{$t("m.setting.key86")}}
            </h4>
          </div>
          <div class="modal-body-box modal-body-boxTwo" v-show="isSetPay">
            <div class="modal-body">
              <div class="phone-email">
                <span class="active email-span" @click="selectRegister(2)">{{$t("m.register.key3")}}</span><span  @click="selectRegister(1)">{{$t("m.register.key2")}}</span>
              </div>
            </div>
            <div class="modal-body" v-show="isPhone">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key91')" v-model="phone" disabled>
            </div>
            <div class="modal-body" v-show="isEmail">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key92')" v-model="userMsg.email" disabled>
            </div>
            <div class="modal-body">
              <p class="hint-p"  style="color: red">{{$t("m.key13")}}</p>
              <input   class="modal-body-input" type="password" :placeholder="$t('m.setting.key69')" v-model="restMoneyPasswordObj.paymentKey"
                       @input="verifyPassword(restMoneyPasswordObj.paymentKey,$event)">
            </div>
            <div class="modal-body ">
              <input class="modal-body-input" type="password" :placeholder="$t('m.setting.key62')" v-model="configMoneyPassword">
            </div>
            <div class="modal-body ">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key57')" v-model="restMoneyPasswordObj.googleCode">
            </div>
            <div class="modal-body code-box" style="padding-left: 15px;">
              <input type="text" :placeholder="$t('m.setting.key26')" style="width: 60%;border:none;padding-left: 0" v-model="restMoneyPasswordObj.code"><button  v-show="isEmail" style="width: 40%" @click="getRestMoneyPasswordCode(2,$event)">{{$t("m.setting.key21")}}</button><button v-show="isPhone" style="width: 40%" @click="getRestMoneyPasswordCode(1,$event)">{{$t("m.setting.key21")}}</button>
            </div>
          </div>
          <div class="modal-body-box modal-body-boxTwo" v-show="isChangePay">
            <div class="modal-body">
              <input   class="modal-body-input" type="password" :placeholder="$t('m.setting.key85')" v-model="changePayObj.oldPaymentKey">
            </div>
            <div class="modal-body">
              <p class="hint-p"  style="color: red">{{$t("m.key13")}}</p>
              <input   class="modal-body-input" type="password" :placeholder="$t('m.setting.key87')" v-model="changePayObj.newPaymentKey"
                       @input="verifyPassword(changePayObj.newPaymentKey,$event)">
            </div>
            <div class="modal-body ">
              <input class="modal-body-input" type="password" :placeholder="$t('m.setting.key62')" v-model="configMoneyPassword">
            </div>
            <div class="modal-body ">
              <input class="modal-body-input" type="text" :placeholder="$t('m.setting.key57')" v-model="changePayObj.googleCode">
            </div>
            <div style="text-align: right;padding-right: 15px;cursor: pointer" @click="popupModal(7,'set')">{{$t("m.login.key6")}}</div>
          </div>
          <div class="modal-footer" v-show="isSetPay">
            <button v-show="isEmail" type="button" class="btn btn-primary" @click="restMoneyPassword(2,$event)">
              {{$t("m.setting.key19")}}
            </button>
            <button v-show="isPhone" type="button" class="btn btn-primary" @click="restMoneyPassword(1,$event)">
              {{$t("m.setting.key19")}}
            </button>
          </div>

          <div class="modal-footer" v-show="isChangePay">

            <button type="button" class="btn btn-primary" @click="changePayPassword($event)">
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
  import {setCookie, getCookie, delCookie} from "../assets/cookie";
  export default {
    inject: ["reload","reloadTwo"],
    data() {
      return {
        baseUrl: this.GLOBAL.baseUrl,
        baseUrlTwo: this.GLOBAL.baseUrlTwo,
        payValue: [],
        peopleMoney: {},
        isEmail:true,
        isPhone:false,
        isSetPay:false,
        isChangePay:false,
        payPasswordShow: false,
        WalletAddress: false,
        googleShowOne:false,
        address: "",
        phone:"",
        payPasswordP:false,
        unfoldBtn: false,
        packUpBtn: true,
        userMsg:"",
        time:60,
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
        setAddressObj: {
          payPassword: "",
          address: "",
          code: ""
        },
        configMoneyPassword: "",
      }
    },
    beforeDestroy(){
      window.clearInterval(this.interval)
    },
    created() {
      if(getCookie("isLogin")){
        this.getAccountMsg();
      }
    },
    mounted() {
      var vueThis = this;
      $('#myModal2').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
      $('#myModal_3').on('hidden.bs.modal', function (e) {
        vueThis.clearData();
      });
    },
    methods: {
      //选择注册方式
      selectRegister(way,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);
        this.configMoneyPassword = "";
        $(".hint-p").hide();
        if(way === 1){
          this.isPhone = true;
          this.isEmail = false;
          // this.bindGoogleObj.phone = this.userMsg.phone;
          dom.addClass("active").siblings().removeClass("active");
        }else if(way === 2){
          this.isPhone = false;
          this.isEmail = true;
          // this.bindGoogleObj.email = this.userMsg.email;
          dom.addClass("active").siblings().removeClass("active");
        }
      },
      verifyAddress(address,e){
        var event = window.event || e;
        var dom  = $(event.currentTarget);
        if(address.length !== 42 || address.substr(0,2)!== "0x"){
          dom.siblings(".hint-p").css("display","block")
        }else {
          dom.siblings(".hint-p").css("display","none")
        }
      },
      //校验密码
      verifyPassword(str,e){
        var event = window.event || e;
        var dom = $(event.currentTarget);

        if(this.isNumberOr_Letter(str)){
          dom.siblings(".hint-p").css("display","none");
        }else {
          dom.siblings(".hint-p").css("display","block");
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
        this.$axios({
          method: "get",
          url: this.baseUrlTwo + "getAccountInfo?username="+this.getCookie("username"),
          withCredentials:true,
        }).then(function (res) {
          if (res.data.code === 1) {
            // vueThis.$message.success('获取成功',);
            vueThis.userMsg = res.data.msg.data;
            vueThis.getAccountMill();
            if(vueThis.userMsg.phone){
              vueThis.phone = "+" + vueThis.userMsg.countryCode +"  "+ vueThis.userMsg.phone;
            }else {
              vueThis.phone = ""
            }
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
      //用户矿机信息
      getAccountMill() {
        var vueThis = this;
        this.$axios({
          method: "post",
          url: this.baseUrl + "v1/wtcPool/minerAccountInfo",
          data:{"username":getCookie("username"),"token":getCookie("token")},
          withCredentials:false
        }).then(function (res) {
          if (res.data.code === 200) {
            vueThis.peopleMoney = res.data.accountInfo.peopleMoney;
            vueThis.payValue = res.data.accountInfo.payValue;
            // vueThis.tokenInfo = res.data.accountInfo.tokenInfo;
            vueThis.isWalletAddress();
          } else {
            if (res.data.code === 402) {
              alert(vueThis.$t("m.myMill.key13"))
            } else if (res.data.code === 404) {
              alert(vueThis.$t("m.myMill.key14"))
            }
          }
        }).catch(function (err) {
        })
      },
      //查询是否已经设置了钱包地址
      isWalletAddress() {
        let vueThis = this;
        this.$axios({
          method: "post",
          url: this.baseUrl + "v1/user/IsHaveAddress",
          data:{"username": getCookie("username"), "token" : getCookie("token")},
          // headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Authorization':'Bearer' +  getCookie("token")
          // },
          withCredentials: false
        }).then(function (res) {
          if (res.data.code === 200) {
            if (res.data.result.address === " ") {
              vueThis.WalletAddress = false;
            } else {
              vueThis.WalletAddress = true;
              vueThis.address = res.data.result.address;
              if (vueThis.address) {
                $(".address-text-p").css("marginTop", "10px")
              } else {
                $(".address-text-p").css("marginTop", "25px")
              }
            }
          }
        }).catch(function (err) {
        })
      },
      //设置钱包地址
      setAddress(e) {
        if (!this.setAddressObj.address) {
          alert(this.$t("m.wallet.key17"));
          return false;
        }  else if (this.setAddressObj.address.substr(0,2) !== "0x" || this.setAddressObj.address.length !== 42) {
          alert(this.$t("m.wallet.key41"));
          return false;
        } else if (!this.setAddressObj.payPassword) {
          alert(this.$t("m.wallet.key16"));
          return false;
        } else if (!this.setAddressObj.code) {
          alert(this.$t("m.wallet.key18"));
          return false;
        } else {
          let vueThis = this;
          let obj = {};
          let event = window.event || e;
          let btn = $(event.currentTarget);
          obj = this.setAddressObj;
          obj.username = getCookie("username");
          obj.token = getCookie("token");
          obj = Qs.stringify(obj);
          btn.attr("disabled", true).css("cursor", "not-allowed");
          this.$axios({
            method: "post",
            url: this.baseUrl + "v1/address/userAddress",
            data: obj,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            withCredentials: false
          }).then(function (res) {
            if (res.data.code === 200) {
              btn.removeAttr("disabled").css("cursor", "pointer");
              $("#myModal2").modal("hide");
              vueThis.setAddressObj.address = "";
              vueThis.setAddressObj.payPassword = "";
              vueThis.setAddressObj.code = "";
              vueThis.WalletAddress = true;
              vueThis.isWalletAddress();
              alert(vueThis.$t("m.wallet.key36"));
            }else if(res.data.code === 1104){
              alert(vueThis.$t("m.wallet.key38"));
            }else if(res.data.code === 1105){
              alert(vueThis.$t("m.wallet.key34"));
            }else {
              alert(vueThis.$t("m.wallet.key44"));
            }
          }).catch(function (err) {
            btn.removeAttr("disabled").css("cursor", "pointer");
          })
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
              url: this.baseUrlTwo + "paykeyResetEmailCode",
              data: getCodeObj,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function (res) {
              if (res.data.code === 1) {
                vueThis.countDown(btn);
              } else {
                btn.removeAttr("disabled").css("cursor", "pointer");
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
            Obj.countryCode =  this.userMsg.countryCode;
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
      unfold() {
        $(".list-box").show("sole");
        this.unfoldBtn = true;
        this.packUpBtn = false;
      },
      packUp() {
        $(".list-box").hide("sole");
        this.unfoldBtn = false;
        this.packUpBtn = true;
      },
      //呼出弹出框
      popupModal(index,type) {
        if(!this.userMsg.setGoogleAuth){
          alert(this.$t("m.key10"));
          return false;
        }else {
           if(index === 1) {
            if(type === "set"){
              this.isSetPay = true;
              this.isChangePay = false;
            }else {
              this.isSetPay = false;
              this.isChangePay = true;
            }
            $("#myModal_3").modal("show");
          } else if (index === 2) {
            $("#myModal_1").modal("show")
          } else if (index === 3) {
            if(this.userMsg.setPaymentCode){
              $("#myModal2").modal("show")
            }else {
              alert(this.$t("m.wallet.key43"));
            }
          } else if (index === 4) {
            $("#myModal_2").modal("hide");
            $("#myModal_3").modal("show")
          }else if (index === 5) {
            $("#myModal_2").modal("show")
          }
        }


      },
      //清楚输入数据
      clearData(){
        $(".hint-p").css("display","none");
        this.region = "86";
        $(".email-span").addClass("active").siblings("span").removeClass("active");
        this.isPhone = false;
        this.isEmail = true;
        $(".nation-phone").text("+86");
        this.setAddressObj.payPassword = "";
        this.setAddressObj.address = "";
        this.setAddressObj.code = "";
        this.restMoneyPasswordObj.paymentKey = "";
        this.restMoneyPasswordObj.code = "";
        this.restMoneyPasswordObj.googleCode = "";
        this.configMoneyPassword = "";
        this.changePayObj.newPaymentKey = "";
        this.changePayObj.oldPaymentKey = "";
        this.changePayObj.googleCode = "";
      },
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
    height: 540px;
    overflow: hidden;
    margin-bottom: 50px;
    min-width: 1200px;
  }

  .home-header-box {
    display: flex;
    justify-content: center;
    min-width: 1200px;
    margin: auto;
    height: 440px;
    position: relative;
    width: 100%;
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
    width: 660px;
  }
  .body-left-img{
    padding-top: 50px;
  }
   .code-box{
    border: 1px solid #d5dce3;
    border-radius: 20px;
    padding: 0;
    margin: 15px 15px 0px 15px;
  }
  .code-box button{
    /*border-radius: 20px;*/
    background: transparent;
    border: none;
    border-left: 1px solid #d5dce3!important;
    height: 40px;
  }
  .code-box input{
    border-radius: 0;
    /*border-right: 1px solid #d5dce3!important;*/
  }
  .balance-msg-box {
    margin-bottom: 20px;
    text-align: left;
  }

  .balance-msg-box p {
    font-size: 18px;
    font-weight: bold;
  }

  .number-span {
    font-size: 30px;
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
    font-size: 20px;
    color: #333;
  }

  .left-img-box .bottom-p {
    text-align: left;
    font-size: 16px;
    color: #666;
  }

  .address-p {
    width: 65%;
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    word-wrap: break-word;
    margin-top: 10px !important;
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
  .phone-email{
    text-align: left;
  }
  .phone-email span{
    margin-right: 30px;
    /*padding-bottom: 5px;*/
    cursor: pointer;
    /*font-size: 14px;*/
  }
  .active{
    border-bottom: 2px solid #2f76ec;
    font-size: 22px;
  }
  /*提币jil*/
  .center-bottom-box {
    margin-top: 72px;
    margin-bottom: 70px;
  }

  .bottom-box-text {
    text-align: left;
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: bold;
  }

  .bottom-box-text-span {
    margin-left: 20px;
    font-size: 16px;
  }

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

  .list-box {
    display: none;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.06);

  }

  .header-ul {
    /*padding: 5px 0;*/
    background: #7448cf;
    padding: 16px 70px;
    font-size: 14px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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

  .center-ul {
    padding: 15px 70px;
    border-bottom: 1px solid #d5dce3;
  }

  .center-ul li {
    color: #7937ff;
    font-size: 13px;
  }

  .li-one {
    width: 65%;
  }

  .li-two {
    width: 15%;
  }

  .li-three {
    width: 19%;
  }

  /*分页*/
  .page-box {
    text-align: right;
    margin-top: 30px;
    margin-bottom: 60px;
  }

  /*弹出框*/
  .modal-title {
    font-size: 16px;
    color: #000;
  }

  .modal-body-box {
    padding: 33px 40px;

  }

  .modal-body input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid #d5dce3;
    border-radius: 20px;
    outline: none;
    padding-left: 15px;
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
    outline: none;
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
  @media (max-width: 1200px) {
    .home-header-box, .center-box {
      padding: 0 25px;
    }
  }
  @media (min-width: 768px) {
    .modal-dialog {
      width: 480px;
      margin: 250px auto;
    }
  }
</style>
