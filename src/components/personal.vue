<template>
    <div id="personal" class="center flex_b">
       <div class="flex_f_c personal_l">
           <div class="personal_litem"></div>
           <div class="personal_litem">{{personal_msg.username}}</div>
           <div class="personal_litem" @click="change(true)">账号绑定</div>
           <div class="personal_litem" @click="change(false)"> 安全设置</div>
       </div>
       <div class="personal_r">
            <div class="bind" v-if="bindtype">
                <div class="phoneuser" v-if="personal_msg.phone!==''">phone</div>
                <div class="emailuser" v-if="personal_msg.phone==''">
                    <div class="emailuser_t">
                        <div class="emailuser_tl"></div>
                        <div class="flex_bf_c emailuser_tr">
                             <div>安全手机</div>
                             <div>安全手机可以用于登录帐号，重置密码或其他安全验证</div>
                             <div>设置</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="security" v-if="!bindtype">22</div>
       </div>
       <div class="share" v-if="sharetype"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bindtype:true,
            sharetype:false,
            AccountInfo_params:{
               token:this.getCookie("token"),
                 username: this.getCookie("username"), 
            },
            personal_msg:{
            username:'',
            inviter:'',
            countryCode:'',
            phone:'',
            email:'',
            address:'',
            setGoogleAuth:'',
            setRealNameAuth:'',
            setPaymentCode:'',
            isGMN:'',
            isSMN:'',
            isJMN:'',
            isMN:'',
            }
        }
    },
    methods:{
        change(val){
                this.bindtype=val
        },
        getAccountInfo(){
            let _that=this
            this.$ajax('get', this.GLOBAL.baseUrl + 'v2/post /account/getAccountInfo',this.AccountInfo_params, function(data) {
                 console.log(data,'获取用户信息');            
              if(JSON.parse(data).code==1068){
                alert("获取失败")
              }
               if(JSON.parse(data).code==1){
               _that.personal_msg=JSON.parse(data)
              }
                }, function(error) {
                    console.log(error)
                })           
        }
    }
}
</script>
<style scoped>
.center{
    width: 6rem;
   margin: 0 auto
}
.personal_l{
    width: 2rem;
    height: 6rem;
    border: 1px solid #000;
}
.personal_r{
    width: 3rem;
    height: 6rem;
}
.flex_b{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex_f_c{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.flex_bf_c{
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    flex-direction: column;
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
</style>