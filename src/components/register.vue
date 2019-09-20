<template>
  <div id="register">
    <div class="login">
      <div class="login_box">
      <h5 class="login_title">登录</h5>
      <div class="flex_f login_head">
        <span @click="changge(true)" class="login_head_l" :class="logintype?'login_head_bg':''">邮箱</span>
        <span @click="changge(false)" class="login_head_l" :class="logintype?'':'login_head_bg'">手机</span>
      </div>
      <!--邮箱注册-->
      <div class="login_email" v-show="logintype">
        <div class="flex_b login_item">

          <input type="text" v-model="registerdata.username" placeholder="请输入用户名" @blur="verify(verifyUsername(registerdata.username),1)" />
             <div v-if="register_tipstype[0]&&register_tipsid[0]==1" class="register_tips">{{register_tips}}</div>
        </div> 
                        <div class="flex_b login_item">
  
          <input type="email" v-model="registerdata.email" placeholder="请输入邮箱地址" @blur="verify(verEmail(registerdata.email),2)" />
          <div v-if="register_tipstype[0]&&register_tipsid[0]==2" class="register_tips">{{register_tips}}</div>
        </div>
        
                <div class="flex_b login_item">

          <input type="text"  v-model="registerdata.code"  placeholder="请输入邮箱验证码" />
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
        
                <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' :ref="wordType[0]" v-model="registerdata.password" placeholder="请输入密码" />
              <div class="getcode"  @click="showpasswordtype(0)">
                <div v-if="showpassword[0]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[0]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
                <div class="flex_b login_item">

          <input type="password"  autocomplete='new-password' :ref="wordType[1]" v-model="registerdata.resetpassword" placeholder="请再次输入密码"  @blur="verify(registerdata.resetpassword==registerdata.password?true:false,3)"/>
            <div v-if="register_tipstype[0]&&register_tipsid[0]==3" class="register_tips">{{register_tips}}</div>
              <div class="getcode"  @click="showpasswordtype(1)">
                <div v-if="showpassword[1]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[1]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
       
      </div>
      <!--手机注册-->
            <div class="login_email" v-show="!logintype">
        <div class="flex_b login_item">

          <input type="text" v-model="registerdata.username" placeholder="请输入用户名" @blur="verify(verifyUsername(registerdata.username),4)" />
          <div v-if="register_tipstype[0]&&register_tipsid[0]==4" class="register_tips">{{register_tips}}</div>
        </div>
        
           <div class="flex_b login_item">

          <input type="text" v-model="registerdata.phone" placeholder="请输入手机号码" @blur="verify(IsPhone(registerdata.phone),5)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==5" class="register_tips">{{register_tips}}</div>
        </div>
         
                <div class="flex_b login_item">

          <input type="text" v-model="registerdata.code" placeholder="请输入手机验证码" />
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
                <div class="flex_b login_item">
                   <input type="password"  autocomplete='new-password' :ref="wordType[2]" v-model="registerdata.password" placeholder="请输入密码" />
              <div class="getcode"  @click="showpasswordtype(2)">
                <div v-if="showpassword[2]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[2]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
                <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' :ref="wordType[3]" v-model="registerdata.resetpassword" placeholder="请再次输入密码" @blur="verify(registerdata.resetpassword==registerdata.password?true:false,6)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==6" class="register_tips">{{register_tips}}</div>
              <div class="getcode"  @click="showpasswordtype(3)">
                <div v-if="showpassword[3]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[3]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
        
      </div>
        <div class="agree" @click="agree()"> <span class="el-icon-circle-close" v-if="!agreetype"></span> <span class="el-icon-circle-check color1" v-if="agreetype"></span> 同意 <span class="color1">《用户服务条款》</span> </div>
      <div class="submit" @click="rigister()">注册</div>
    </div>
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
        mode:'wtcpool',
        getEmailCode:'',
        getPhoneCode:'',
        countryCode:'86',
        inviter:'',
        code:''
      },
      emailcode_params:{
        username:'',
        email:'',
      },
      agreetype:false,
      phonecode_params:{
        username:'',
        phone:'',
        countryCode:'86'
      },
      showpassword:[true,true,true,true],
      wordType:['wordType0','wordType1','wordType2','wordType3']
    };
  },
  methods: {
    agree(){
      this.agreetype=!this.agreetype
    },
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
    showpasswordtype(id){
      if(this.showpassword[id]){
         this.$set(this.showpassword,id,false)
      }else{
        this.$set(this.showpassword,id,true)
      }  
      if(id===0){
         if (this.showpassword[id]) {
           this.$refs.wordType0.type='password'
         }else{ this.$refs.wordType0.type='text'}
      }if(id===1){
         if (this.showpassword[id]) {
           this.$refs.wordType1.type='password'
         }else{ this.$refs.wordType1.type='text'}
      }if(id===2){
         if (this.showpassword[id]) {
           this.$refs.wordType2.type='password'
         }else{ this.$refs.wordType2.type='text'}
      }if(id===3){
         if (this.showpassword[id]) {
           this.$refs.wordType3.type='password'
         }else{ this.$refs.wordType3.type='text'}
      }
    },
    //获取验证码
    getcode(){
      let _that=this 
      if(this.register_tipstype[0]){
         if(this.logintype){
           return alert('请输入正确用户名和邮箱地址')
         }else{
            return alert('请输入正确用户名和手机号码')
         }
      } 
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
              this.$ajax('post', this.GLOBAL.baseUrl + 'account/getEmailCode',this.emailcode_params, function(data) {
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
               this.$ajax('post', this.GLOBAL.baseUrl + 'account/getPhoneCode',this.phonecode_params, function(data) {
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
      if(!this.agreetype){
        return alert('请先同意用户服务条款')
      }
      if(this.register_tipstype[0]==false&&this.registerdata.password!==""){

        this.$ajax('post', this.GLOBAL.baseUrl + 'account/register',this.registerdata, function(data) {
              if(JSON.parse(data).code==1031){
                alert("账户名或密码格式不对")
              }
               if(JSON.parse(data).code==1032){
                alert("请输入完整的注册信息")
              }
               if(JSON.parse(data).code==1033){
                alert("验证码错误")
              }
              if(JSON.parse(data).code==1034){
                alert("注册失败")
              }
              if(JSON.parse(data).code==1333){
                alert("请先获取验证码")
              }
               if(JSON.parse(data).code==1){
               _that.setCookie('token',JSON.parse(data).data.token,1800)
                _that.setCookie('username',JSON.parse(data).data.username,1800)
               localStorage.setItem('token',JSON.parse(data).data.token)
                localStorage.setItem('username',JSON.parse(data).data.username)
                 _that.$router.go(-1)
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
      this.timer=null
  },
};
</script>
<style scoped>
#register {
  height: 100%;
  min-height: 4.3rem;
  background:linear-gradient(to bottom,#00001e,#000737,#001f7f,#002daf);
}
.login {
  height: 100%;
  padding-top: 0.55rem;
}
.login_box{
  position: relative;
  width: 2.4rem;
  height: 3rem;
  background-color:#00093a;
  margin: 0 auto;
  text-align: left;
  padding: 0 0.2rem;
  border-radius: 4px;
	border: solid 1px #0029b8; 
	color: #ffffff; 
}
.login_title {
	font-family: MicrosoftYaHei;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
  text-align: center;
  margin-top: 0.12rem;
  margin-bottom: 0.13rem;
  opacity: 0.8; 
}
.color1 {
  color: #2e73e8;
}
.login_head {
  height: 0.18rem;
  line-height: 0.18rem;
  font-family: MicrosoftYaHei-Bold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
  cursor: pointer;
  box-sizing: border-box;
}
.login_head_l {
  margin-right: 0.1rem;
  height: 0.18rem;
  	font-size: 16px;
  line-height: 0.18rem;
  box-sizing: border-box;
}
.login_head_bg {
  color: #2e73e8;
    height: 0.18rem;
  line-height: 0.18rem;
  	font-size: 16px;
  border-bottom: 2px solid #2e73e8;
  box-sizing: border-box;
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
  width: 100%;
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 16px;
  text-align: center;
  background-color: #2e73e8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.register_tips{
  position: absolute;
  width: 100%;
  height: 0.3rem;
  bottom: -0.3rem;
  font-size: 12px;
}
.login_item {
  width: 100%;
  height: 0.25rem;
  margin-top: 0.1rem;
  border: solid 1px #4d5375;
  border-radius: 4px;
 box-sizing: border-box;
 position: relative;
}
.login_item input {
  width: 100%;
  background-color:#00093a;  
  height: 0.2rem;
  line-height: 0.2rem;
  padding-left:0.07rem; 
  color: #fff;
  border: none;
  border-radius: 4px;
}
.getcode{
  width: 0.6rem;
  height: 0.2rem;
 line-height: 0.2rem;
 text-align: center;
  color: #2e73e8;
  border-radius: 4px;
  cursor: pointer;
}
.agree{
  margin-top: 0.1rem;
  margin-bottom: 0.15rem;
}
</style>