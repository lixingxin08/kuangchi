<template>
  <div id="login">
    <div class="login">
      <h5 class="login_title color1">登录</h5>
      <div class="flex_f login_head">
        <span @click="changge(true)" class="login_head_l" :class="logintype?'login_head_bg':''">邮箱</span>
        <span @click="changge(false)" :class="logintype?'':'login_head_bg'">手机</span>
      </div>
      <div class="login_email" v-show="logintype">
        <div class="flex_b login_item">
          <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="email" v-model="logindata.email" placeholder="请输入邮箱地址" @blur="verify(logindata.email)" />
        </div>
            <div v-if="login_tipstype">{{login_tips}}</div>
        <div class="flex_b login_item">
           <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="logindata.password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="login_tel" v-show="!logintype">
        <div class="flex_b login_item">
           <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="tel" v-model="logindata.phone" placeholder="请输入手机号码" @blur="verify(logindata.phone)"/>       
        </div>
        <div v-if="login_tipstype">{{login_tips}}</div>
        <div class="flex_b login_item">
           <div class="logo"><img src="../assets/img/touxiangxiao.png" alt=""></div>
          <input type="password" v-model="logindata.password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="submit" @click="login()">登录</div>
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
        mode:''
      }
    };
  },
  methods: {
    changge(val) {
      this.logintype = val;
      this.logindata.email = "";
       this.logindata.phone = "";
      this.logindata.password = "";
      this.login_tips=""
    },
    //登录
    login(){
      let _that=this
      console.log(this.logindata)
      if(this.login_tipstype==false&&this.logindata.password!==""){
        this.$ajax('post', this.GLOBAL.baseUrl + 'v2/post /account/login',this.logindata, function(data) {
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
          if(this.logintype==true&&this.logindata.password==""){
               this.logindata.email = "";
               this.logindata.phone = "";
              alert(this.login_tips)
          }else{
            console.log(this.logintype,this.logindata.password,'aaaaa')
            alert(this.login_tips)
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
  min-height: 3rem;
}
.login {
  width: 2rem;
  height: 2rem;
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
  margin-top: 0.2rem;
  border: 1px solid #000;
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
</style>