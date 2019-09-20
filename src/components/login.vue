<template>
  <div id="login">
    <div class="login">
      <div class="login_box">
      <h5 class="login_title">登录</h5>
      <div class="flex_f login_head">
        <span @click="changge(true,'email')" class="login_head_l" :class="logintype?'login_head_bg':''">邮箱</span>
        <span @click="changge(false,'phone')" :class="logintype?'':'login_head_bg'">手机</span>
      </div>
      <div class="login_email" v-show="logintype">
        <div class="flex_b login_item">
          <input type="email" v-model="logindata.email" placeholder="请输入邮箱地址" @blur="verify(logindata.email)" />
          <div v-if="login_tipstype" class="login_tips">{{login_tips}}</div> 
        </div>
           
        <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' v-model="logindata.password" @keyup.enter="login()" placeholder="请输入密码" />
        </div>
      </div>
      <div class="login_tel" v-show="!logintype">
        <div class="flex_b login_item">
          <input type="tel" v-model="logindata.phone" placeholder="请输入手机号码" @blur="verify(logindata.phone)"/>
           <div v-if="login_tipstype" class="login_tips">{{login_tips}}</div>       
        </div>      
        <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' v-model="logindata.password" @keyup.enter="login()" placeholder="请输入密码" />
        </div>
      </div>
      <div class="submit" @click="login()">登录</div>
      <div class="flex_b login_foo">
          <router-link to="register"><span class="color1">注册新用户</span></router-link>
          <router-link to="register"><span class="color1">忘记密码</span></router-link>
      </div>
       <div class="login_img"> <img src="../assets/img/login_img.png" alt=""></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login_tips:'',
      login_tipstype:false,
      logintype: true,
      logindata: {
        username: "",
        password: "",
        email:'',
        phone:'',
        mode:'email',
        countryCode:'86',
        platformName:'wtcpool'
      }
    };
  },
  methods: {
    changge(val,mode) {
      this.logintype = val;
      this.logindata.email = "";
       this.logindata.phone = "";
      this.logindata.password = "";
      this.login_tips=""
      this.logindata.mode=mode
      console.log(this.logindata.mode);
      
    },
    //登录
    login(){
      let _that=this
      console.log(this.logindata)
      if(this.logindata.phone==''&&this.logindata.email==''){
          if(this.logintype){
            return alert('请输入邮箱地址')
          }else{
            return alert('请输入手机号码')
          }
      }
      if(this.login_tipstype==false&&this.logindata.password!==""){
        this.$ajax('post', this.GLOBAL.baseUrl + 'account/login',this.logindata, function(data) {
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
                _that.logindata.password=""
              }
               if(JSON.parse(data).code==1){
               _that.setCookie('token',JSON.parse(data).data.token,360000)
                _that.setCookie('username',JSON.parse(data).data.username,360000)
               localStorage.setItem('token',JSON.parse(data).data.token)
                 localStorage.setItem('isLogin',true)
                localStorage.setItem('username',JSON.parse(data).data.username)
                _that.$router.push({name:'home'})
              }
                }, function(error) {
                    console.log(error)
                })
      }else{
        console.log(33344443)
          if(this.logindata.password==""){
              alert('请输入密码')
          }else{
            console.log(this.logintype,this.logindata.password,'aaaaa')
            alert('请输入密码')
          }
      }
    },
    //验证
    verify(val){
        if(this.logintype){
          if(this.verEmail(val)){
             this.login_tipstype=false
          }else{
            this.login_tipstype=true;
            this.login_tips="请输入正确邮箱地址"
          }
        }else{
          if(this.IsPhone(val)){
              this.login_tipstype=false
          }else{
             this.login_tipstype=true
             this.login_tips="请输入正确手机号码"
          }
        }
    }
  }
};
</script>
<style scoped>
#login {
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
  height: 2rem;
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
.login_tips{
  width: 1rem;
  position: absolute;
  left: 0;
  bottom: -0.1rem;
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
}
.login_head_l {
  margin-right: 0.1rem;
}
.login_head_bg {
  color: #2e73e8;
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
  text-align: center;
  font-size: 16px;
  background-color: #2e73e8;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.15rem;
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
.logo{
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
}
.login_foo{
  margin-top: 0.1rem;
}
.login_img{
  position: absolute;
  width: 2.4rem;
  height: 0.5rem;
  left: 0;
  bottom: -0.56rem;
  border-radius: 4px;
}
.login_img img{
   width: 2.4rem;
  height: 0.5rem; 
}
</style>