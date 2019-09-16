<template>
  <div id="login">
    <div class="login">
      <h5 class="login_title color1">登录</h5>
      <div class="flex_f login_head">
        <span @click="changge(true)" class="login_head_l" :class="logintype?'login_head_bg':''">邮箱</span>
        <span @click="changge(false)" :class="logintype?'':'login_head_bg'">手机</span>
      </div>
      <!--邮箱注册-->
      <div class="login_email" v-show="logintype">
        <div class="flex_b login_item">
           <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="text" v-model="registerdata.username" placeholder="请输入用户名" @blur="verify(verifyUsername(registerdata.username),1)" />
             <div v-if="register_tipstype[0]&&register_tipsid[0]==1" class="register_tips">{{register_tips}}</div>
        </div> 
                        <div class="flex_b login_item">
                <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="email" v-model="registerdata.email" placeholder="请输入邮箱地址" @blur="verify(verEmail(registerdata.email),2)" />
          <div v-if="register_tipstype[0]&&register_tipsid[0]==2" class="register_tips">{{register_tips}}</div>
        </div>
        
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="text" placeholder="请输入邮箱验证码" />
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
        
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="registerdata.password" placeholder="请输入密码" />
        </div>
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="registerdata.resetpassword" placeholder="请再次输入密码"  @blur="verify(registerdata.resetpassword==registerdata.password?true:false,3)"/>
            <div v-if="register_tipstype[0]&&register_tipsid[0]==3" class="register_tips">{{register_tips}}</div>
        </div>
       
      </div>
      <!--手机注册-->
            <div class="login_email" v-show="!logintype">
        <div class="flex_b login_item">
           <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="text" v-model="registerdata.username" placeholder="请输入用户名" @blur="verify(verifyUsername(registerdata.username),4)" />
          <div v-if="register_tipstype[0]&&register_tipsid[0]==4" class="register_tips">{{register_tips}}</div>
        </div>
        
           <div class="flex_b login_item">
                 <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="text" v-model="registerdata.phone" placeholder="请输入手机号码" @blur="verify(IsPhone(registerdata.phone),5)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==5" class="register_tips">{{register_tips}}</div>
        </div>
         
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="text" v-model="registerdata.getEmailCode" placeholder="请输入邮箱验证码" />
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="registerdata.password" placeholder="请输入密码" />
        </div>
                <div class="flex_b login_item">
                   <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="registerdata.resetpassword" placeholder="请再次输入密码" @blur="verify(registerdata.resetpassword==registerdata.password?true:false,6)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==6" class="register_tips">{{register_tips}}</div>
        </div>
        
      </div>
      
      <div class="submit" @click="rigister()">注册</div>
    </div>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  data() {
    return {
      register_tips:'',
      register_tipsid:[1],
      register_tipstype:[false],
      logintype: true,
      timer:'',
      registertime:60,
      code_tips:'发送验证码',
      phonecode_tips:'发送验证码',
      getcodetype:true,
      getcodetimer:null,
      registerdata: {
        username: "",
        email:'',
        phone:'',
        password: "",
        resetpassword:"",
        mode:'',
        getEmailCode:'',
        getPhoneCode:'',
        countryCode:'',
      },
      emailcode_params:{
        username:'',
        email:'',
      },
      phonecode_params:{
        username:'',
        phone:'',
      }
    };
  },
  methods: {
    changge(val,id) {
      let _that=this
      this.logintype = val;
      this.registerdata.username = "";
      this.registerdata.email = "";
      this.registerdata.phone = "";
      this.registerdata.resetpassword = "";
      this.registerdata.password = "";
      this.registerdata.getEmailCode = "";
      this.registerdata.getPhoneCode = "";
       this.registerdata.countryCode = "";
      this.register_tips=""
      this.code_tips="发送验证码"   
      clearInterval(_that.getcodetimer)
       this.getcodetimer=null
      this.registertime=60
      this.getcodetype=true
      console.log( this.registertime);     
    },
    //获取验证码
    getcode(){
      let _that=this
       if(this.getcodetype){
         this.getcodetype=false;
            _that.getcodetimer=setInterval(function(){
              _that.registertime--
                 _that.code_tips=  _that.registertime 
                 console.log(_that.registertime);                      
              if( _that.registertime<=0){
                _that.getcodetype=true;
                _that.registertime=60
                 _that.code_tips="重发验证码";
                  _that.getcodetimer=null
                   clearInterval(_that.getcodetimer)
              }
          },1000)
             //获取Email验证码
        if(this.logintype){
             if(this.verifyUsername(this.registerdata.username)&&this.verEmail(this.registerdata.email)){          
               this.emailcode_params.username=this.registerdata.username
               this.emailcode_params.email=this.registerdata.email
              this.$ajax('post', this.GLOBAL.baseUrl + 'v2/post /account/getEmailCode',this.emailcode_params, function(data) {
              if(JSON.parse(data).code==1001){
                alert("请输入完整的注册信息")
              }
               if(JSON.parse(data).code==1002){
                alert("用户名已存在")
                _that.registerdata.username=''
              }
               if(JSON.parse(data).code==1003){
                alert("email发送失败")
              }
              if(JSON.parse(data).code==1004){
                  _that.registerdata.email=''
                alert("email已存在")
              }
               if(JSON.parse(data).code==1){
                 alert('email发送成功')
              }
                }, function(error) {
                    console.log(error)
                })
                console.log(data,'22222')
             }else{
               // //获取Email验证码信息不齐
               if(_that.verifyUsername(_that.registerdata.username)==false){
                   console.log('111111')
                   _that.$set( _that.register_tipsid,0,1)
                     _that.register_tips="用户名由数字或小写字母组成且不能以数字开头，长度8-16位"
                     _that.registerdata.username=''         
               }else if(_that.verEmail(_that.registerdata.email)==false){
                      _that.$set( this.register_tipsid,0,2)
                     _that.register_tips="请输入正确邮箱地址"
                       console.log( _that.register_tips,_that.register_tipsid,'45555555554')
                     _that.registerdata.email=''
               }
             }
        }
        //获取phone验证码
        else{
            if(this.verifyUsername(this.registerdata.username)&&this.IsPhone(this.registerdata.phone)){
       
                this.phonecode_params.username=this.registerdata.username
               this.phonecode_params.phone=this.registerdata.phone
               this.$ajax('post', this.GLOBAL.baseUrl + 'v2/post /account/getPhoneCode',this.phonecode_params, function(data) {
                 console.log(data,'phone验证码');
                 
              if(JSON.parse(data).code==1005){
                alert("请输入完整的注册信息")
              }
               if(JSON.parse(data).code==1006){
                alert("用户名已存在")
                _that.registerdata.username=''
              }
               if(JSON.parse(data).code==1007){
                alert("手机短信发送失败")
              }
              if(JSON.parse(data).code==1008){
                alert("手机号已存在")
                _that.registerdata.phone=''
              }
               if(JSON.parse(data).code==1){
                 alert('手机短信发送成功')
              }
                }, function(error) {
                    console.log(error)
                })
             }else{
                // //获取phone验证码不齐
               if(this.verifyUsername(this.registerdata.username)==false){
                    console.log(333333);               
                    this.$set( this.register_tipsid,0,4)
                     this.register_tips="用户名由数字或小写字母组成且不能以数字开头，长度8-16位"
                     this.registerdata.username=''

               }else{                  
                     this.$set( this.register_tipsid,0,5)
                     this.register_tips="请输入正确手机号码"
                     this.registerdata.phone=''
               }
             }
        }
      }else{
      }
    },
    //注册
    rigister(){
      let _that=this
      if(this.register_tipstype[0]==false&&this.registerdata.password!==""){

        this.$ajax('post', this.GLOBAL.baseUrl + 'v2/post /account/register',this.registerdata, function(data) {
              if(JSON.parse(data).code==1038){
                alert("平台信息有误")
              }
               if(JSON.parse(data).code==1039){
                alert("手机号未注册")
              }
               if(JSON.parse(data).code==1040){
                alert("email未注册")
              }
              if(JSON.parse(data).code==1041){
                alert("今日登陆错误次数超过限制")
              }
              if(JSON.parse(data).code==1042){
                alert("登陆失败")
              }
             if(JSON.parse(data).code==1043){
                alert("密码错误")
                _that.registerdata.password=""
              }
               if(JSON.parse(data).code==1){
               _that.setCookie('token',JSON.parse(data).data.token,1800)
                _that.setCookie('username',JSON.parse(data).data.username,1800)
               localStorage.setItem('token',JSON.parse(data).data.token)
                localStorage.setItem('username',JSON.parse(data).data.username)
              }
                }, function(error) {
                    console.log(error)
                })
      }else{
        console.log(3333)
          if(_that.logintype==true&&_that.registerdata.password==""){
        _that.registerdata.email = "";
      _that.registerdata.phone = "";          
              alert(this.register_tips)
              console.log(111222)
      
          }else{
            console.log(_that.logintype,_that.registerdata.password,'aaaaa')
            alert(_that.register_tips)
          }
      }

    },
    //验证
    verify(val,id){
      this.register_tipsid[0]=id
      console.log(val)
      console.log(id);  
        if(this.logintype){
          if(val){
             this.register_tipstype[0]=false
          }else{
            this.register_tipstype[0]=true;
            if(id==1){
               this.register_tips="用户名由数字或小写字母组成且不能以数字开头，长度8-16位"
            }
            if(id==2){
               this.register_tips="请输入正确邮箱地址"
            }
            if(id==3){
               this.register_tips="俩次密码不一致";
               this.resetpassword=""              
            }
            
          }
        }else{
          if(val){
              this.register_tipstype[0]=false
          }else{
             this.register_tipstype[0]=true
           if(id==4){
               this.register_tips="用户名由数字或小写字母组成且不能以数字开头，长度8-16位"
            }
            if(id==5){
               this.register_tips="请输入正确手机号码"
            }
            if(id==6){
               this.register_tips="俩次密码不一致";
               this.resetpassword=""              
            }
          }
        }
    }
  },
  beforeDestroy() {
     clearInterval(this.getcodetimer)
     this.getcodetimer=null
      clearInterval(this.timer)
  },
};
</script>
<style scoped>
#login {
  min-height: 3rem;
}
.login {
  width: 2rem;
  background-color: #fff;
  margin: 0 auto;
  text-align: left;
  padding: 0 0.2rem;
  border: 1px solid #000;
}
.login_title {
  font-size: 20px;
}
.color1 {
  color: #2e73e8;
}
.login_head {
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 0.1rem;
}
.login_head_l {
  margin-right: 0.1rem;
}
.login_head_bg {
  border-bottom: 1px solid #2e73e8;
}
.flex_a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex_b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex_f {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.submit {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  margin: 0 auto;
  background-color: #2e73e8;
  color: #fff;
  cursor: pointer;
}
.login_item {
  width: 100%;
  height: 0.3rem;
  margin-bottom: 0.3rem;
  border: 1px solid #000;
  position: relative;
}
.register_tips{
  position: absolute;
  width: 100%;
  height: 0.3rem;
  bottom: -0.3rem;
  font-size: 12px;
}
.login_item input {
  width: 100%;
  height: 0.28rem;
  line-height: 0.28rem;
  border: none;
}
.logo{
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
}
.logo img{
  width: 0.2rem;
  height: 0.2rem;
}
.getcode{
  width: 0.6rem;
  height: 0.2rem;
 line-height: 0.2rem;
 text-align: center;
  border: 1px solid #2e73e8;;
  color: #2e73e8;
  border-radius: 4px;
  cursor: pointer;
}
</style>