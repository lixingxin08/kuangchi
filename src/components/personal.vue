<template>
    <div id="personal" class="center ">
        <div class="personal_title">个人中心</div>
      <div class="flex_b personal_main">
       <div class="flex_f_c personal_l">
           <div class="head_bg personal_litem"> <img src="../assets/img/personal_img1.png" alt=""> {{personal_msg.username}}</div>
           <div class="flex_f personal_litem" @click="change(true)" :class="bindtype?'color1':''">  <div  v-if="bindtype"><img src="../assets/img/personal_img2.png" alt=""></div>  <div  v-if="!bindtype"><img src="../assets/img/personal_img3.png" alt=""></div> 账号绑定</div>
           <div class="flex_f personal_litem" @click="change(false)" :class="bindtype?'':'color1'">  <div  v-if="!bindtype"><img src="../assets/img/personal_img2.png" alt=""></div>  <div  v-if="bindtype"><img src="../assets/img/personal_img3.png" alt=""></div>  安全设置</div>
       </div>
       <div class="personal_r">
            <div class="personal_r_item bind" v-if="bindtype">
                 <!--手机注册用户更换安全手机-->
                <div class="head_bg personal_litem pd_left">账号绑定</div>
                <div class="personal_r_main">
                <div class="flex_b bind_item " v-if="personal_msg.phone!==''">
                  <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                          <img src="../assets/img/bind_img1.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">安全手机</div>
                             <div class="font5">安全手机可以用于登录帐号，重置密码或其他安全验证</div>
                        </div> 
                        </div>
                    <div @click="showshare(2)" class="bind_btn">更换</div>            
                </div>
                <!--手机注册用户设置安全手机-->
                <div class="flex_b bind_item emailuser" v-if="personal_msg.phone==''">
                    <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                           <img src="../assets/img/bind_img1.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">安全手机</div>
                             <div class="font5">安全手机可以用于登录帐号，重置密码或其他安全验证</div>        
                        </div>
                    </div>
                      <div @click="showshare(3)" class="bind_btn">设置</div>
                </div>
                <!--绑定邮箱-->
                <div class="flex_b bind_item"  v-if="personal_msg.email ==''">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img2.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">当前还未绑定邮箱地址</div>
                             <div class="font5">绑定邮箱可以用于账户安全验证</div>                
                        </div>
                    </div> 
                      <div @click="showshare(4)" class="bind_btn">绑定</div> 
                </div>
                <div class="flex_b bind_item"  v-if="personal_msg.email !==''">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl"><img src="../assets/img/bind_img2.png" alt=""></div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">绑定邮箱 {{personal_msg.email}}</div>
                             <div class="font5">绑定邮箱可以用于账户安全验证</div>
                        </div>
                    </div>  
                </div>  
                </div>             
            </div>
            <!--安全设置-->
            <div class="personal_r_item security" v-if="!bindtype">
                 <div class="head_bg personal_litem pd_left">安全设置</div>
                <!--修改登录密码-->
                <div class="personal_r_main">
                <div class="flex_b bind_item" >
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img3.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">登录密码</div>
                             <div class="font5">建议您定期更换密码，设置安全性高的密码可以使帐号更安全</div>                
                        </div>
                    </div> 
                      <div @click="showshare(5)" class="bind_btn">修改</div> 
                </div>
                 <!--修改资金密码-->
                <div class="flex_b bind_item"  v-if="personal_msg.setPaymentCode">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img4.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">资金密码</div>
                             <div class="font5">为了您的账户安全，请及时设置资金密码</div>                
                        </div>
                    </div> 
                      <div @click="showshare(6)" class="bind_btn">修改</div> 
                </div>
              <!--设置资金密码-->
                <div class="flex_b bind_item"  v-if="!personal_msg.setPaymentCode">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img4.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4 colory">资金密码-未设置</div>
                             <div class="font5">为了您的账户安全，请及时设置资金密码</div>                
                        </div>
                    </div> 
                      <div @click="showshare(8)" class="bind_btn">设置</div> 
                </div>
                <!--设置谷歌验证-->
                <div class="flex_b bind_item">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img5.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">谷歌验证</div>
                             <div class="font5">为了您的账户安全，请及时绑定谷歌认证</div>                
                        </div>
                    </div> 
                      <div @click="showshare(7)" class="bind_btn"  v-if="!personal_msg.setGoogleAuth">绑定</div>
                       <div @click="showshare(7)" class="bind_btn"  v-if="personal_msg.setGoogleAuth">设置</div>  
                </div>
                 </div>
            </div>
       </div>
       <div class="share" v-if="sharetype" @click="hideshare()"></div>
     <!--手机注册用户设置安全手机-->
        <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==2"> 
            <div class="securityphone_item securityphone_title">更换手机号码</div>
            <div class="securityphone_item">
            <el-steps :active="activeid" align-center>
                <el-step title="验证身份" description=""></el-step>
                <el-step title="绑定手机号" description=""></el-step>
                <el-step title="完成更换" description=""></el-step>
            </el-steps>
            </div>
            <div class="securityphone_item" v-if="activeid==1">已绑定的手机:</div>
            <div class="securityphone_item" v-if="activeid==1">若该手机已{{personal_msg.phone}}</div>
            <div class="securityphone_item" v-if="activeid==2"><input type="text" v-model="BindPhoneCode_params.phone" placeholder="请输入新的手机号码"></div>
            <div class="securityphone_item"><input type="text"> <div class="getcode" @click="getBindPhoneCode()">发送验证码</div></div>
            <div class="securityphone_item" @click="next()" v-if="activeid<=1">下一步</div>
             <div class="securityphone_item" @click="bindPhone()" v-if="activeid>1">下一步1</div>
        </div>     
   <!--邮箱注册用户设置安全手机-->
        <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==3"> 
            <div class="securityphone_item securityphone_title">更换手机号码</div>
            <div class="securityphone_item">
            <el-steps :active="activeid" align-center>
                <el-step title="验证身份" description=""></el-step>
                <el-step title="绑定手机号" description=""></el-step>
                <el-step title="完成更换" description=""></el-step>
            </el-steps>
            </div>
            <div class="securityphone_item" v-if="activeid==1">已注册的邮箱:{{personal_msg.email}}</div>
            <div class="securityphone_item" v-if="activeid==1">若该邮箱已无法使用请联系客服</div>
            <div class="securityphone_item" v-if="activeid==2"><input type="text"  placeholder="请输入邮箱验证码"></div>
            <div class="securityphone_item"><input type="text"> <div class="getcode" @click="getBindEmailCode()">发送验证码</div></div>
            <div class="securityphone_item" @click="next()" v-if="activeid<=1">下一步</div>
             <div class="securityphone_item" @click="bindPhone()" v-if="activeid>1">下一步1</div>
        </div>
      <!--绑定邮箱地址--> 
        <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==4"> 
            <div class="securityphone_item securityphone_title">绑定邮箱地址</div>
            <div class="securityphone_item" ><input type="text"  v-model="bindEmailCode_params.email" placeholder="请输入邮箱地址"></div>
            <div class="securityphone_item"><input type="text" placeholder="请输入邮箱验证码" v-model="bindEmail_params.code"> <div class="getcode" @click="getBindEmailCode()">发送验证码</div></div>
             <div class="securityphone_item" @click="bindEmail()">下一步1</div>
        </div>
        <!--修改登录密码-->
         <div class="securityphone change_lgpsw"  v-if="sharetype&&shareid==5"> 
            <div class="securityphone_item securityphone_title">修改登录密码
               <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
            <div class="change_lgmain">
            <div class="securityphone_item" ><input type="password" v-model="changePassword_params.oldPassword" placeholder="请输入原登录密码"></div>
            <div class="securityphone_item"><input type="password" v-model="changePassword_params.newPassword" placeholder="设置6至20位新登录密码"></div>
              <div class="securityphone_item"><input type="password" v-model="changePassword_params.repeatPassword" placeholder="请再次输入新登录密码"></div>
            </div>
             <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">取消</div> <div  @click="changePassword()" class="personal_btn2">确定</div></div>
        </div>
        <!--修改资金密码-->
        <div class="securityphone fund_psw"  v-if="sharetype&&shareid==6"> 
            <div class="securityphone_item securityphone_title">修改资金密码
               <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
             <div class="change_lgmain">
            <div class="securityphone_item" ><input type="text" v-model="changePaymentKey_params.oldPaymentKey" placeholder="请输入原资金密码"></div>
            <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.newPaymentKey" placeholder="设置6至16位新登录密码"></div>
              <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.resetnewPassword" placeholder="请再次输入资金密码"></div>
               <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.googleCode"  placeholder="请输入谷歌验证码"></div>
                </div>
             <div class="securityphone_item" @click="changePaymentKey()">确定</div>
        </div> 
        <!--设置资金密码-->
        <div class="flex_fc_c securityphone fund_psw"  v-if="sharetype&&shareid==8"> 
            <div class="securityphone_item securityphone_title">设置资金密码
                 <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
             <div class="change_lgmain">
            <div class="securityphone_item" ><input type="text" v-model="changePaymentKey_params.oldPaymentKey" placeholder="请输入原资金密码"></div>
            <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.newPaymentKey" placeholder="设置6至16位新登录密码"></div>
              <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.resetnewPassword" placeholder="请再次输入资金密码"></div>
               <div class="securityphone_item"><input type="text" v-model="changePaymentKey_params.googleCode"  placeholder="请输入谷歌验证码"></div>
               </div>       
              <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">取消</div> <div  @click="setPaymentKey()" class="personal_btn2">确定</div></div>
        </div>         
        <!--设置谷歌验证--> 
          <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==7"> 
            <div class="securityphone_item securityphone_title">设置谷歌验证</div>
              <div class="flex_b setGoole_title">
                  <div @click="changsetGoogleKeyType(true)">邮箱</div>
                  <div @click="changsetGoogleKeyType(false)">手机</div>
              </div>
              <div class="setGoole_main" v-if="setGoogleKeyType">
                   <div class="setGoole_item">手机下载安装谷歌验证码或其他验证器，扫码或手动输入密钥，将产生的动态验证码填到下面输入框</div>
                   <div class="setGoole_item">密钥:<span class="tag-read" data-clipboard-text="setGoogleKey_params.googleKey">{{setGoogleKey_params.googleKey}}</span>
                    <div v-clipboard:copy='setGoogleKey_params.googleKey'>复制</div> </div>
                   <div class="setGoole_item"> <input type="text"> </div>
                   <div class="setGoole_item"> <input type="text"> </div>
                   <div class="setGoole_item"> <input type="text"> <span @click="paykeyResetEmailCode()">发送验证码</span> </div>
                   <div class="setGoole_item" @click="setGoogleKey()"> 确定 </div>
              </div>             
          </div>
          </div>    
    </div>
</template>
<script>
export default {
  created(){
    this.personal_msg=JSON.parse(localStorage.getItem('personal_msg'))  
  },
    data(){
        return{
            bindtype:true,
            sharetype:false,
            shareid:0,
            AccountInfo_params:{
               token:this.getCookie("token"),
                 username: this.getCookie("username"), 
            },
            BindPhoneCode_params:{
                 username: this.getCookie("username"),
                 phone:'',
                 countryCode:''
            },
            bindPhone_params:{
                token:this.getCookie("token"),
                 username: this.getCookie("username"),
                 phone:'',
                countryCode:'86',
                code:"",                 
            },
            bindEmailCode_params:{
                token:this.getCookie("token"),
                 username: this.getCookie("username"),
              email:''  
            },
            bindEmail_params:{//绑定邮箱
              email:'',
              code:'',
              username:'',
            },
            changePassword_params:{//修改登录密码
               token:this.getCookie("token"),
                username: this.getCookie("username"),
                oldPassword:'',
               newPassword:"",
                repeatPassword:'',
            },
            setPaymentKey_params:{//设置/重置支付密码	
                token:this.getCookie("token"),
                username: this.getCookie("username"),
                mode:'',
                paymentKey:'',
                phone:'',
                email:'',
                countryCode:'',
                code:'',
                googleCode:''
            },
            changePaymentKey_params:{//修改资金密码
                token:this.getCookie("token"),
                username: this.getCookie("username"),
                newPaymentKey:'',
                oldPaymentKey:'',
               googleCode:'', 
               resetnewPassword:'',               
            },
           paykeyResetEmailCode_params:{//设置支付密码获取邮箱验证码
                token:this.getCookie("token"),
                username: this.getCookie("username"),
                email:'',         
            },
            setGoogleKey_params:{//设置谷歌验证码
                token:this.getCookie("token"),
                username: this.getCookie("username"),
               mode:'phone',
               phone:'11',
               email:'',
               countryCode:'86',
               code:'',
               googleKey:'',
               googleCode:'', 
            },
            setGoogleKeyType:true,
            activeid:1,
            personal_msg:{//用户信息
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
            },
            setphone_text:'设置',
            setGoogleType:true,
            title:'账号绑定'
        }
    },
    methods:{
        change(val){
         this.bindtype=val
        },
        changsetGoogleKeyType(val){
            this.setGoogleKeyType=val
        },
        hideshare(){
             this.sharetype=false
             this.shareid=0
        },
        showshare(id){
                this.sharetype=true
                this.shareid=id
                this.activeid=1
                if(id===7){
              this.getGoogleKey()  
                }if(id===8&&this.personal_msg.setGoogleAuth==false){
                 this.sharetype=false
                 alert('请先设置谷歌验证码')
                }
        },
        next(){
            this.activeid++
            console.log(this.activeid);
            this.BindPhoneCode_params.phone=''
        },

        //获取绑定新手机验证码
        getBindPhoneCode(){
            let _that=this
            this.BindPhoneCode_params.phone=this.personal_msg.phone
             this.BindPhoneCode_params.countryCode=this.personal_msg.countryCode
              this.BindPhoneCode_params.username=this.personal_msg.username
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getBindPhoneCode',this.BindPhoneCode_params, function(data) {
                 console.log(data,'获取绑定手机验证码');            
              if(JSON.parse(data).code==1072){
                alert("请输入完整信息")
                return
              }if(JSON.parse(data).code==1073){
                alert("username不存在")
                return
              }if(JSON.parse(data).code==1074){
                alert("手机短信发送失败")
                return
              }if(JSON.parse(data).code==1075){
                alert("手机号已存在")
                return
              }
               if(JSON.parse(data).code==1){
             alert('手机短信发送成功')
              }
                }, function(error) {
                    console.log(error)
                }) 
        },
        //获取绑定邮箱验证码
        getBindEmailCode(){
            let _that=this
            console.log(this.bindEmailCode_params,88888);     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getBindEmailCode',this.bindEmailCode_params, function(data) {
                 console.log(data,'获取绑定邮箱验证码');            
              if(JSON.parse(data).code==1080){
                alert("请输入完整信息")
                return
              }if(JSON.parse(data).code==1081){
                alert("username不存在")
                return
              }if(JSON.parse(data).code==1082){
                alert("email发送失败")
                return
              }if(JSON.parse(data).code==1083){
                alert("email已存在")
                return
              }
               if(JSON.parse(data).code==1){
             alert('email发送成功')
              }
                }, function(error) {
                    console.log(error)
                }) 
        },      
        //绑定手机号
        bindPhone(){
             let _that=this
             console.log(333);       
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/post /account/bindPhone',this.AccountInfo_params, function(data) {
                 console.log(data,'获取用户信息');            
              if(JSON.parse(data).code==1076){
                alert("账户未登录")
                return
              }if(JSON.parse(data).code==1077){
                alert("请输入完整信息")
                return
              }if(JSON.parse(data).code==1078){
                alert("验证码不正确")
                return
              }if(JSON.parse(data).code==1079){
                alert("绑定手机失败")
                return
              }
               if(JSON.parse(data).code==1){
               alert('绑定手机成功')
              }
                }, function(error) {
                    console.log(error)
                })            
        },
        //绑定邮箱
        bindEmail(){
             let _that=this 
             this.bindEmail_params.username=this.personal_msg.username
               console.log(this.bindEmail_params,999999)     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/bindEmail',this.bindEmail_params, function(data) {
                 console.log(data,'获取用户信息');            
              if(JSON.parse(data).code==1084){
                alert("账户未登录")
                return
              }if(JSON.parse(data).code==1085){
                alert("请输入完整信息")
                return
              }if(JSON.parse(data).code==1086){
                alert("验证码不正确")
                return
              }if(JSON.parse(data).code==1087){
                alert("绑定邮箱失败")
                return
              }
               if(JSON.parse(data).code==1){
               alert('绑定邮箱成功')
              }
                }, function(error) {
                    console.log(error)
                })            
        },        

        //修改登录密码
        changePassword(){
            let _that=this
            if(this.changePassword_params.newPassword!==this.changePassword_params.repeatPassword){
              this.changePassword_params.repeatPassword=''
              return   alert('俩次密码不一致')
            }
            if(!this.isNumberOr_Letter2(this.changePassword_params.newPassword)){
              this.changePassword_params.newPassword=''
              return alert('请设置6至20位新登录密码')
            }
            console.log(this.changePassword_params,'this.changePassword_params99999');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/changePassword',this.changePassword_params, function(data) {
                 console.log(data,'修改登录密码');            
              if(JSON.parse(data).code==1088){
                alert("新密码不能为空")
              }if(JSON.parse(data).code==1089){
                alert("新密码格式不正确")
              }if(JSON.parse(data).code==1090){
                alert("账户未登录")
              }if(JSON.parse(data).code==1091){
                alert("请输入旧密码")
              }if(JSON.parse(data).code==1092){
                alert("旧密码不正确")
              }if(JSON.parse(data).code==1093){
                alert("更改失败")
              }if(JSON.parse(data).code==1361){
                alert("新密码不能与原密码相同")
              }
               if(JSON.parse(data).code==1){
              alert('更改成功')
               _that.sharetype=false
              }
                }, function(error) {
                    console.log(error)
                })           
        },
        //设置/重置支付密码
        setPaymentKey(){
            let _that=this 
            if(!this.isNumberOr_Letter(this.changePaymentKey_params.newPaymentKey)){
              this.changePaymentKey_params.newPaymentKey=''
              return alert('请设置6至20位新登录密码')
            }
            if(this.changePaymentKey_params.newPaymentKey!==this.changePaymentKey_params.resetnewPassword){
              this.changePaymentKey_params.resetnewPassword=''
              return   alert('俩次密码不一致')
            }                        
            console.log(this.setPaymentKey_params,'修改资金密码');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/setPaymentKey',this.setPaymentKey_params, function(data) {
                 console.log(data,'修改登录密码');            
              if(JSON.parse(data).code==1057){
                alert("新密码不能为空")
              }if(JSON.parse(data).code==1058){
                alert("账户未登录")
              }if(JSON.parse(data).code==1059){
                alert("请输入旧密码")
              }if(JSON.parse(data).code==1060){
                alert("谷歌验证码错误")
              }if(JSON.parse(data).code==1061){
                alert("旧密码不正确")
              }if(JSON.parse(data).code==1062){
                alert("更改失败")
              }if(JSON.parse(data).code==1361){
                alert("新密码不能与原密码相同")
              }
               if(JSON.parse(data).code==1){
              alert('更改成功')
              }
                }, function(error) {
                    console.log(error)
                })           
        },        
        //修改资金密码
        changePaymentKey(){
            let _that=this 
            if(!this.isNumberOr_Letter(this.changePaymentKey_params.newPaymentKey)){
              this.changePaymentKey_params.newPaymentKey=''
              return alert('请设置6至20位新登录密码')
            }
            if(this.changePaymentKey_params.newPaymentKey!==this.changePaymentKey_params.resetnewPassword){
              this.changePaymentKey_params.resetnewPassword=''
              return   alert('俩次密码不一致')
            }                        
            console.log(this.changePaymentKey_params,'修改资金密码');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/changePaymentKey',this.changePaymentKey_params, function(data) {
                 console.log(data,'修改登录密码');            
              if(JSON.parse(data).code==1057){
                alert("新密码不能为空")
              }if(JSON.parse(data).code==1058){
                alert("账户未登录")
              }if(JSON.parse(data).code==1059){
                alert("请输入旧密码")
              }if(JSON.parse(data).code==1060){
                alert("谷歌验证码错误")
              }if(JSON.parse(data).code==1061){
                alert("旧密码不正确")
              }if(JSON.parse(data).code==1062){
                alert("更改失败")
              }if(JSON.parse(data).code==1361){
                alert("新密码不能与原密码相同")
              }
               if(JSON.parse(data).code==1){
              alert('更改成功')
              }
                }, function(error) {
                    console.log(error)
                })           
        },
        //获取谷歌密钥
        getGoogleKey(){
             let _that=this     
            this.$ajax('get', this.GLOBAL.baseUrl + 'account/getGoogleKey',null,function(data) {
                 _that.setGoogleKey_params.googleKey=JSON.parse(data).msg
                 console.log(_that.setGoogleKey_params);   
                }, function(error) {
                    console.log(error)
                })         
        },
        //设置支付密码获取邮箱验证码
        paykeyResetEmailCode(){
              let _that=this 
             console.log(this.paykeyResetEmailCode_params);
             this.paykeyResetEmailCode_params.email=this.personal_msg.email            
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/paykeyResetEmailCode',this.paykeyResetEmailCode_params, function(data) {
               if(JSON.parse(data).code==1){
              alert('email发送成功')
              }if(JSON.parse(data).code==1024){
              alert('请输入邮箱')
              }if(JSON.parse(data).code==1025){
              alert('邮箱验证码发送失败')
              }if(JSON.parse(data).code==1026){
              alert('邮箱未注册')
              }if(JSON.parse(data).code==1324){
              alert('未设置谷歌验证码')
              }
                }, function(error) {
                    console.log(error)
                })          
        },
        //设置谷歌验证码
        setGoogleKey(){
             let _that=this 
             console.log(this.setGoogleKey_params);            
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/setGoogleKey',this.setGoogleKey_params, function(data) {
               if(JSON.parse(data).code==1){
              alert('更改成功')
              }
                }, function(error) {
                    console.log(error)
                })         
        },             
    }
}
</script>
<style scoped>
.center{
    width: 6rem;
   margin: 0 auto
}
#personal{
  background-color: #fafafa;
  padding-bottom: 0.4rem;
}
.personal_title{
  font-family: MicrosoftYaHei;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 22px;
	letter-spacing: 0px;
	color: #333333;
  text-align: left;
  margin-top: 0.15rem;
  margin-bottom: 0.12rem;
}
.personal_l{
    width: 1.1rem;
    height: 2.96rem;
    border: 2px solid #ededed;
    box-sizing: border-box;
  background-color: #ffffff;
	border-radius: 4px; 
  padding-left: 0.1rem;
}
.personal_r{
    width: 4.6rem;
    height: 2.96rem;
    border: 2px solid #ededed;
    box-sizing: border-box;
    background-color: #ffffff;
	  border-radius: 4px;
}
.personal_litem{
  width: 100%;
  height: 0.25rem;
  line-height: 0.25rem;
  text-align: left;
}
.personal_litem img{
  margin-right: 0.06rem;
}
.personal_r_main{
  padding: 0 0.15rem;
}
.flex_b{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex_a{
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex_f{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.flex_fc{
  display: flex;
  justify-content: flex-start;
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
.securityphone{
  width: 2rem;
  height: 3rem;
  position: fixed;
  left: 50%;
  transform:translateX(-50%);
  background-color: #fff;
  z-index: 101;  
  border-radius: 4px;  
}
.securityphone_title{
  height: 0.25rem;
  line-height: 0.25rem;
  background-color: #f8f8f8;
  position: relative;
}
.closeIt{
  position: absolute;
  font-size: 15px;
  top: 0;
  right: 0.11rem;
}
.securityphone_item{
  width: 100%;
  padding: 0 0.3rem;
}
.securityphone_item input{
  width: 100%;
  height: 0.25rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  box-sizing: border-box;
  padding-left: 0.05rem;
}
.bind_item{
  width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #ebebeb
}
.head_bg{
  background-color: #f8fafc;
}
.color1{
  color: #2e73e8; 
}
.pd_left{
  padding-left: 0.15rem
}
.emailuser_tl{
  margin-right: 0.1rem;
}
.font4{
 font-family: MicrosoftYaHei;
	font-size: 18px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 17px;
	letter-spacing: 0px;
	color: #333333; 
  margin-bottom: 0.07rem;
}
.font5{
  font-family: MicrosoftYaHei;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 17px;
	letter-spacing: 0px;
	color: #666666;  
}
.bind_btn{
  width: 0.4rem;
  height: 0.15rem;
  line-height: 0.15rem;
  border: 1px solid  #2e73e8;
  border-radius: 4px;
  color: #2e73e8;
  font-family: MicrosoftYaHei;
	font-size: 13px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
}
.change_lgpsw{
  width: 2.4rem;
  height: 2.08rem;
  background-color: #ffffff;
	border-radius: 4px;
}
.change_lgmain{
  width: 100%;
  padding-top: 0.2rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
}
.personal_btn{
  width: 0.45rem;
  height: 0.18rem;
  line-height: 0.18rem;
  border-radius: 4px;
  color: #333333;
	border: solid 1px #cccccc;
  margin-right: 0.05rem;
}
.personal_btn2{
  width: 0.45rem;
  height: 0.18rem;
  line-height: 0.18rem;
  border-radius: 4px;
  background-color: #2f76ec;
  color: #fff;
	border: solid 1px #cccccc;
}
.fund_psw{
  width: 2.4rem;
  height: 2.43rem;
  background-color: #ffffff;
	border-radius: 4px;
}
.colory{
  color: #ff9a23;
}
</style>