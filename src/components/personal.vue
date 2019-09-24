<template>
    <div id="personal" class="center ">
        <div class="personal_title">{{$t("m.account.key14")}}</div>
      <div class="flex_b personal_main">
       <div class="flex_f_c personal_l">
           <div class="head_bg personal_litem"> <img src="../assets/img/personal_img1.png" alt=""> {{personal_msg.username}}</div>
           <div class="flex_f personal_litem" @click="change(true)" :class="bindtype?'color1':''">  <div  v-if="bindtype"><img src="../assets/img/personal_img2.png" alt=""></div>  <div  v-if="!bindtype"><img src="../assets/img/personal_img3.png" alt=""></div> {{$t("m.account.key15")}}</div>
           <div class="flex_f personal_litem" @click="change(false)" :class="bindtype?'':'color1'">  <div  v-if="!bindtype"><img src="../assets/img/personal_img4.png" alt=""></div>  <div  v-if="bindtype"><img src="../assets/img/personal_img5.png" alt=""></div>  {{$t("m.account.key21")}}</div>
       </div>
       <div class="personal_r">
            <div class="personal_r_item bind" v-if="bindtype">
                 <!--手机注册用户更换安全手机-->
                <div class="head_bg personal_litem pd_left">{{$t("m.account.key15")}}</div>
                <div class="personal_r_main">
                <div class="flex_b bind_item " v-if="personal_msg.phone!==''">
                  <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                          <img src="../assets/img/bind_img1.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.account.key16")}}</div>
                             <div class="font5">{{$t("m.account.key17")}}</div>
                        </div> 
                        </div>
                    <div @click="showshare(2)" class="bind_btn">{{$t("m.account.key18")}}</div>            
                </div>
                <!--手机注册用户设置安全手机-->
                <div class="flex_b bind_item emailuser" v-if="personal_msg.phone==''">
                    <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                           <img src="../assets/img/bind_img1.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.account.key16")}}</div>
                             <div class="font5">{{$t("m.account.key17")}}</div>        
                        </div>
                    </div>
                      <div @click="showshare(3)" class="bind_btn">{{$t("m.wallet.key7")}}</div>
                </div>
                <!--绑定邮箱-->
                <div class="flex_b bind_item"  v-if="personal_msg.email ==''">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img2.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4 color6">{{$t("m.account.key19")}}</div>
                             <div class="font5">{{$t("m.account.key20")}}</div>                
                        </div>
                    </div> 
                      <div @click="showshare(4)" class="bind_btn">{{$t("m.setting.key8")}}</div> 
                </div>
                <div class="flex_b bind_item"  v-if="personal_msg.email !==''">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl"><img src="../assets/img/bind_img2.png" alt=""></div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.setting.key11")}}: {{personal_msg.email}}</div>
                             <div class="font5">{{$t("m.account.key20")}}</div>
                        </div>
                    </div>  
                </div>  
                </div>             
            </div>
            <!--安全设置-->
            <div class="personal_r_item security" v-if="!bindtype">
                 <div class="head_bg personal_litem pd_left">{{$t("m.account.key20")}}</div>
                <!--修改登录密码-->
                <div class="personal_r_main">
                <div class="flex_b bind_item" >
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img3.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.setting.key3")}}</div>
                             <div class="font5">{{$t("m.account.key22")}}</div>                
                        </div>
                    </div> 
                      <div @click="showshare(5)" class="bind_btn">{{$t("m.wallet.key8")}}</div> 
                </div>
                 <!--修改资金密码-->
                <div class="flex_b bind_item"  v-if="personal_msg.setPaymentCode">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img4.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.sonset.key10")}}</div>
                             <div class="font5">{{$t("m.account.key23")}}</div>                
                        </div>
                    </div> 
                      <div @click="showshare(6)" class="bind_btn">{{$t("m.wallet.key8")}}</div> 
                </div>
              <!--设置资金密码-->
                <div class="flex_b bind_item"  v-if="!personal_msg.setPaymentCode">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img4.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4 colory">{{$t("m.account.key26")}}</div>
                             <div class="font5">{{$t("m.account.key23")}}</div>                
                        </div>
                    </div> 
                      <div @click="showshare(8)" class="bind_btn">{{$t("m.wallet.key7")}}</div> 
                </div>
                <!--设置谷歌验证-->
                <div class="flex_b bind_item">
                   <div class="flex_fc emailuser_t">
                        <div class="emailuser_tl">
                            <img src="../assets/img/bind_img5.png" alt="">
                        </div>
                        <div class="flex_bf_c emailuser_tr">
                             <div class="font4">{{$t("m.sonset.key12")}}</div>
                             <div class="font5">{{$t("m.account.key24")}}</div>                
                        </div>
                    </div> 
                      <div @click="showshare(7)" class="bind_btn"  v-if="!personal_msg.setGoogleAuth">{{$t("m.setting.key8")}}</div>
                       <div @click="showshare(7)" class="bind_btn"  v-if="personal_msg.setGoogleAuth">{{$t("m.wallet.key7")}}</div>  
                </div>
                 </div>
            </div>
       </div>
       <div class="share" v-if="sharetype" @click="hideshare()"></div>
     <!--手机注册用户设置安全手机-->
        <div class="flex_fc_c securityphone change_lgpsw"  v-if="sharetype&&shareid==2"> 
            <div class="securityphone_item securityphone_title">{{$t("m.account.key27")}}
                <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
            <div class="bindphone_main">
            <div>
            <el-steps :active="activeid" align-center>
                  <el-step :title="$t('m.account.key37')" description=""></el-step>
                <el-step :title="$t('m.account.key38')" description=""></el-step>
                <el-step :title="$t('m.account.key39')" description=""></el-step>
            </el-steps>
            </div>
            <div class="securityphone_item securityphone_text1" v-if="activeid==0">{{$t("m.account.key28")}}:{{personal_msg.phone}}</div>
            <div class="securityphone_item securityphone_text2" v-if="activeid==0">{{$t("m.account.key29")}}</div>
             <div class="securityphone_item"  v-if="activeid==0"> <div class="securityphone_itemborder position1"><input type="text" v-model="changePhone_params.oldPhoneCode" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getOldPhoneCode()">{{code_tips}}</div></div> </div>
            <div class="securityphone_item" v-if="activeid==1"> <div class="securityphone_itemborder position1"><input type="text" v-model="changePhone_params.phone" :placeholder="$t('m.account.key31')"></div></div>
            <div class="securityphone_item"  v-if="activeid==1"> <div class="securityphone_itemborder position1"><input type="text" v-model="changePhone_params.code" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getNewPhoneCode()">{{code_tips}}</div></div> </div>
               <div class="securityphone_item flex_a" v-if="activeid==2"> <div class="isdone"> <img src="../assets/img/isdone.png" alt=""></div> </div>
               <div class="securityphone_item" v-if="activeid==2">{{isdonetext}}</div>
            </div>
            <div class="securityphone_item flex_a" @click="getAuthPhoneCode()" v-if="activeid===0"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="changePhone()" v-if="activeid===1"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="hideshare()" v-if="activeid===2"><div class="personal_btn1">{{$t("m.account.key25")}}</div></div>
        </div>     
     <!--邮箱注册用户设置安全手机-->
           <div class="flex_fc_c securityphone change_lgpsw"  v-if="sharetype&&shareid==3"> 
            <div class="securityphone_item securityphone_title">{{$t("m.setting.key9")}}
                <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
            <div class="bindphone_main">
            <div>
            <el-steps :active="activeid" align-center>
                  <el-step :title="$t('m.account.key37')" description=""></el-step>
                <el-step :title="$t('m.account.key38')" description=""></el-step>
                <el-step :title="$t('m.account.key39')" description=""></el-step>
            </el-steps>
            </div>
            <div class="securityphone_item securityphone_text1" v-if="activeid==0">{{$t("m.account.key34")}}:{{personal_msg.email}}</div>
            <div class="securityphone_item securityphone_text2" v-if="activeid==0">{{$t("m.account.key35")}}</div>
             <div class="securityphone_item"  v-if="activeid==0"> <div class="securityphone_itemborder position1"><input type="text" v-model="bindPhone_params.emailCode" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getEmailCodeWhenBindPhone()">{{code_tips}}</div></div> </div>
            <div class="securityphone_item" v-if="activeid==1"> <div class="securityphone_itemborder login_itemphone position1"><input type="text" v-model="bindPhone_params.phone" :placeholder="$t('m.account.key31')">
                  <div class="prefix flex_b">
                    <input type="text" v-model="bindPhone_params.countryCode" class="prefix_inp">
                    <el-dropdown trigger="click" placement="bottom">
                    <span class="el-dropdown-link lang_right">        
                      <i class="el-icon-caret-bottom el-icon--right arrow__down"></i>
                    </span>
                   <el-dropdown-menu slot="dropdown" class="tels">
                      <el-dropdown-item class="prefix_countryCode">
                        <ul  v-for="(item,index) in perfix" :key="index" class="flex_f prefix_countryCode_ul" @click="selectcountryCode(index)">
                             <li class="prefix_countryCode_item">{{item.tel}}</li>
                        <li class="prefix_countryCode_item2">{{item.name}}</li>
                       
                        </ul>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  </div>  
            </div></div>
            <div class="securityphone_item"  v-if="activeid==1"> <div class="securityphone_itemborder position1"><input type="text" v-model="bindPhone_params.code" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getBindPhoneCode()">{{code_tips}}</div></div> </div>
               <div class="securityphone_item flex_a" v-if="activeid==2"> <div class="isdone"> <img src="../assets/img/isdone.png" alt=""></div> </div>
               <div class="securityphone_item" v-if="activeid==2">{{isdonetext}}</div>
            </div>
            <div class="securityphone_item flex_a" @click="authEmailCodeWhenBindPhone()" v-if="activeid===0"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="bindPhone()" v-if="activeid===1"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="hideshare()" v-if="activeid===2"><div class="personal_btn1">{{$t("m.account.key25")}}</div></div>
        </div>  
<!-- 
        <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==3"> 
            <div class="securityphone_item securityphone_title">{{$t("m.account.key27")}}</div>
            <div class="securityphone_item">
            <el-steps :active="activeid" align-center>
                <el-step :title="$t('m.account.key37')" description=""></el-step>
                <el-step :title="$t('m.account.key38')" description=""></el-step>
                <el-step :title="$t('m.account.key39')" description=""></el-step>
            </el-steps>
            </div>
            <div class="securityphone_item" v-if="activeid==0">{{$t("m.account.key34")}}:{{personal_msg.email}}</div>
            <div class="securityphone_item" v-if="activeid==0">{{$t("m.account.key35")}}</div>
            <div class="securityphone_item" v-if="activeid==1"><input type="text"  :placeholder="$t('m.account.key36')"></div>
            <div class="securityphone_item"><input type="text" :placeholder="$t('m.setting.key26')"> <div class="getcode" @click="getBindEmailCode()">{{$t("m.account.key30")}}</div></div>
            <div class="securityphone_item" @click="next()" v-if="activeid===0">{{$t("m.account.key32")}}</div>
             <div class="securityphone_item" @click="changePhone()" v-if="activeid===1">{{$t("m.account.key32")}}</div>
        </div> -->
      <!--绑定邮箱地址--> 
        <!-- <div class="flex_fc_c securityphone"  v-if="sharetype&&shareid==4"> 
            <div class="securityphone_item securityphone_title">绑定邮箱地址</div>
            <div class="securityphone_item securityphone_itemborder" ><input type="text"  v-model="bindEmailCode_params.email" placeholder="请输入邮箱地址"></div>
            <div class="securityphone_item securityphone_itemborder"><input type="text" placeholder="请输入邮箱验证码" v-model="bindEmail_params.code"> <div class="getcode" @click="getBindEmailCode()">{{code_tips}}</div></div>
             <div class="securityphone_item" @click="bindEmail()">下一步1</div>
        </div> -->
        <div class="flex_fc_c securityphone change_lgpsw"  v-if="sharetype&&shareid==4"> 
            <div class="securityphone_item securityphone_title">{{$t("m.account.key40")}}
                <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
            <div class="bindphone_main">
            <div>
            <el-steps :active="activeid" align-center>
                <el-step :title="$t('m.account.key37')" description=""></el-step>
                <el-step :title="$t('m.account.key40')" description=""></el-step>
                <el-step :title="$t('m.account.key39')" description=""></el-step>
            </el-steps>
            </div>
             <div class="securityphone_item securityphone_text1" v-if="activeid==0">{{$t("m.account.key28")}}:{{personal_msg.phone}}</div>
            <div class="securityphone_item securityphone_text2" v-if="activeid==0">{{$t("m.account.key41")}}</div>
             <div class="securityphone_item"  v-if="activeid==0"> <div class="securityphone_itemborder position1"><input type="text" v-model="bindEmail_params.phoneCode" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getPhoneCodeWhenBindEmail()">{{code_tips}}</div></div> </div>
            <div class="securityphone_item" v-if="activeid==1"> <div class="securityphone_itemborder position1"><input type="text" v-model="bindEmailCode_params.email" :placeholder="$t('m.setting.key20')"></div></div>
            <div class="securityphone_item"  v-if="activeid==1"> <div class="securityphone_itemborder position1"><input type="text" v-model="bindEmail_params.code" :placeholder="$t('m.setting.key26')"> <div class="getcode color1" @click="getBindEmailCode()">{{code_tips}}</div></div> </div>
               <div class="securityphone_item flex_a" v-if="activeid==2"> <div class="isdone"> <img src="../assets/img/isdone.png" alt=""></div> </div>
               <div class="securityphone_item" v-if="activeid==2">{{isdonetext}}</div>
            </div>
           <div class="securityphone_item flex_a" @click="authPhoneCodeWhenBindEmail()" v-if="activeid===0"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="bindEmail()" v-if="activeid===1"> <div class="personal_btn1">{{$t("m.account.key32")}}</div> </div>
             <div class="securityphone_item flex_a" @click="hideshare()" v-if="activeid===2"><div class="personal_btn1">{{$t("m.account.key25")}}</div></div>
        </div>         
        <!--修改登录密码-->
         <div class="securityphone change_lgpsw"  v-if="sharetype&&shareid==5"> 
           <div class="securityphone_item securityphone_title">{{$t("m.setting.key14")}}
               <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
            <div class="change_lgmain">
            <div class="securityphone_item securityphone_itemborder" ><input type="password" autocomplete="new-password" v-model="changePassword_params.oldPassword"  :placeholder="$t('m.account.key42')"></div>
            <div class="securityphone_item securityphone_itemborder"><input type="password" autocomplete="new-password" v-model="changePassword_params.newPassword"  :placeholder="$t('m.setting.key16')"></div>
              <div class="securityphone_item securityphone_itemborder"><input type="password" autocomplete="new-password" v-model="changePassword_params.repeatPassword" :placeholder="$t('m.setting.key17')"></div>
            </div>
            <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">{{$t("m.sonset.key15")}}</div> <div  @click="changePassword()" class="personal_btn2">{{$t("m.wallet.key19")}}</div></div>
           </div>
        <!--修改资金密码-->
        <div class="securityphone fund_psw"  v-if="sharetype&&shareid==6"> 
                <div class="securityphone_item securityphone_title">{{$t("m.setting.key86")}}
               <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
             <div class="change_lgmain">
          <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.oldPaymentKey" :placeholder="$t('m.account.key45')"></div>
            <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.newPaymentKey" :placeholder="$t('m.account.key46')"></div>
              <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.resetnewPassword" :placeholder="$t('m.account.key47')"></div>
               <div class="securityphone_item securityphone_itemborder"><input type="text" v-model="changePaymentKey_params.googleCode"  :placeholder="$t('m.account.key48')"></div>
                </div>
              <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">{{$t("m.sonset.key15")}}</div> <div  @click="changePaymentKey()" class="personal_btn2">{{$t("m.wallet.key19")}}</div></div>
                
        </div> 
        <!--设置资金密码-->
        <div class="flex_fc_c securityphone fund_psw"  v-if="sharetype&&shareid==8"> 
            <div class="securityphone_item securityphone_title">{{$t("m.setting.key61")}}
                 <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
             <div class="change_lgmain">
            <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.newPaymentKey" :placeholder="$t('m.account.key46')"></div>
              <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.resetnewPassword" :placeholder="$t('m.account.key46')"></div>
               <div class="securityphone_item securityphone_itemborder"><input type="password" v-model="changePaymentKey_params.googleCode"  :placeholder="$t('m.account.key48')"></div>
                </div>       
              <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">{{$t("m.sonset.key15")}}</div> <div  @click="setPaymentKey()" class="personal_btn2">{{$t("m.wallet.key19")}}</div></div>
        </div>         
        <!--设置谷歌验证--> 
          <div class="flex_fc_c securityphone setGoole"  v-if="sharetype&&shareid==7"> 
            <div class="securityphone_item securityphone_title">{{$t("m.setting.key23")}}
               <div class="closeIt"  @click="hideshare()">  <img src="../assets/img/close.png" alt=""> </div>
            </div>
              <div class="setGoole_main">
              <div class="flex_f setGoole_t">
                  <div @click="changsetGoogleKeyType(true)" class="margin_r" :class="setGoogleKeyType?'selectedcolor':''">{{$t("m.resetPassword.key3")}}</div>
                  <div @click="changsetGoogleKeyType(false)" :class="setGoogleKeyType?'':'selectedcolor'">{{$t("m.resetPassword.key2")}}</div>
              </div>                
                <div class="setGoole_item flex_a">  <div id="qrcode"></div></div>
                   <div class="setGoole_item font5" >{{$t("m.account.key49")}}</div>
                   <div class="flex_b setGoole_item font6"><span class="tag-read" data-clipboard-text="setGoogleKey_params.googleKey">{{$t("m.setting.key25")}}:{{setGoogleKey_params.googleKey}}</span>
                    <div v-clipboard:copy='setGoogleKey_params.googleKey' class="color1" @click="iscopy()">{{$t("m.setting.key90")}}</div> </div>
                   <div class="setGoole_item font5"> {{setGoogleKey_params.text}}</div>
                       <div class="setGoole_item"> <input type="text" v-model="setGoogleKey_params.code" :placeholder="$t('m.setting.key26')"> 
                   <div @click="GGkeygetResetEmailCode()" v-if="setGoogleKeyType" class="setcode color1">{{code_tips}}</div> 
                    <div @click="GGkeygetResetPhoneCode()" v-if="!setGoogleKeyType" class="setcode color1">{{code_tips}}</div>
                   </div>
                   <div class="setGoole_item"> <input type="text" v-model="setGoogleKey_params.googleCode" :placeholder="$t('m.setting.key57')"> </div>
               
              </div>
                <div class="securityphone_item flex_a"><div @click="hideshare()" class="personal_btn">{{$t("m.sonset.key15")}}</div> <div  @click="setGoogleKey()" class="personal_btn2">{{$t("m.wallet.key19")}}</div></div>
          </div>
          </div>    
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  created(){
    this.personal_msg=JSON.parse(localStorage.getItem('personal_msg'))
     this.setGoogleKey_params.mode=this.personal_msg.mode
      this.setGoogleKey_params.text=this.personal_msg.email
     if (this.personal_msg.email=='') {
            this.setGoogleKeyType=false
            this.setGoogleKey_params.text=this.personal_msg.phone
            this.setGoogleKey_params.countryCode=this.personal_msg.countryCode
          } 
           if (this.personal_msg.phone=='') {
            this.setGoogleKeyType=true
             this.setGoogleKey_params.text=this.personal_msg.email
          }
          
  },
    data(){
        return{
            bindtype:true,
            sharetype:false,
            shareid:0,
            registertime:60,
            timer:null,
            code_tips:this.$t('m.account.key30'),
            getcodetype:true,
            getcodetimer:null,
            changePhone_params:{//获取改绑手机号
              token:this.getCookie("token"),
              username: this.getCookie("username"),
              countryCode:'',
              code:'',
              oldPhoneCode:'',
              phone:'',    
            },
            BindPhoneCode_params:{
                 username: this.getCookie("username"),
                 token:this.getCookie("token"),
                 phone:'',
                 countryCode:'',
                 code:''
            },
            bindPhone_params:{//23.获取初次绑定手机
                token:this.getCookie("token"),
                 username: this.getCookie("username"),
                 phone:'',
                countryCode:'86',
                code:"",
                emailCode:'',
                email:''             
            },
            bindEmailCode_params:{
                token:this.getCookie("token"),
                 username: this.getCookie("username"),
              email:''  
            },
            bindEmail_params:{//绑定邮箱
              username: this.getCookie("username"),
              token:this.getCookie("token"),           
              email:'',
              code:'',
              username:'',
              phone:'',
              countryCode:'',
              phoneCode :''
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
            authPhoneCodeWhenBindEmail_params:{
              code:'',
              phone:'',
              countryCode:''
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
               phone:'',
               email:'',
               countryCode:'86',
               code:'',
               googleKey:'',
               googleCode:'',
               text:"",
            },
            authEmailCodeWhenBindPhone_params:{
              code:'',
              email:''
            },
            setGoogleKeyType:true,
            activeid:0,
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
            setphone_text:this.$t("m.account.key30"),
            setGoogleType:true,
            title:this.$t("m.account.key15"),
            isdonetext:this.$t("m.account.key50"),
                 perfix:[{"short":"AD","name":"安道尔共和国","en":"Andorra","tel":"376"},{"short":"AE","name":"阿拉伯联合酋长国","en":"UnitedArabEmirates","tel":"971"},{"short":"AF","name":"阿富汗","en":"Afghanistan","tel":"93"},{"short":"AG","name":"安提瓜和巴布达","en":"AntiguaandBarbuda","tel":"1268"},{"short":"AI","name":"安圭拉岛","en":"Anguilla","tel":"1264"},{"short":"AL","name":"阿尔巴尼亚","en":"Albania","tel":"355"},{"short":"AM","name":"亚美尼亚","en":"Armenia","tel":"374"},{"short":"","name":"阿森松","en":"Ascension","tel":"247"},{"short":"AO","name":"安哥拉","en":"Angola","tel":"244"},{"short":"AR","name":"阿根廷","en":"Argentina","tel":"54"},{"short":"AT","name":"奥地利","en":"Austria","tel":"43"},{"short":"AU","name":"澳大利亚","en":"Australia","tel":"61"},{"short":"AZ","name":"阿塞拜疆","en":"Azerbaijan","tel":"994"},{"short":"BB","name":"巴巴多斯","en":"Barbados","tel":"1246"},{"short":"BD","name":"孟加拉国","en":"Bangladesh","tel":"880"},{"short":"BE","name":"比利时","en":"Belgium","tel":"32"},{"short":"BF","name":"布基纳法索","en":"Burkina-faso","tel":"226"},{"short":"BG","name":"保加利亚","en":"Bulgaria","tel":"359"},{"short":"BH","name":"巴林","en":"Bahrain","tel":"973"},{"short":"BI","name":"布隆迪","en":"Burundi","tel":"257"},{"short":"BJ","name":"贝宁","en":"Benin","tel":"229"},{"short":"BL","name":"巴勒斯坦","en":"Palestine","tel":"970"},{"short":"BM","name":"百慕大群岛","en":"BermudaIs.","tel":"1441"},{"short":"BN","name":"文莱","en":"Brunei","tel":"673"},{"short":"BO","name":"玻利维亚","en":"Bolivia","tel":"591"},{"short":"BR","name":"巴西","en":"Brazil","tel":"55"},{"short":"BS","name":"巴哈马","en":"Bahamas","tel":"1242"},{"short":"BW","name":"博茨瓦纳","en":"Botswana","tel":"267"},{"short":"BY","name":"白俄罗斯","en":"Belarus","tel":"375"},{"short":"BZ","name":"伯利兹","en":"Belize","tel":"501"},{"short":"CA","name":"加拿大","en":"Canada","tel":"1"},{"short":"","name":"开曼群岛","en":"CaymanIs.","tel":"1345"},{"short":"CF","name":"中非共和国","en":"CentralAfricanRepublic","tel":"236"},{"short":"CG","name":"刚果","en":"Congo","tel":"242"},{"short":"CH","name":"瑞士","en":"Switzerland","tel":"41"},{"short":"CK","name":"库克群岛","en":"CookIs.","tel":"682"},{"short":"CL","name":"智利","en":"Chile","tel":"56"},{"short":"CM","name":"喀麦隆","en":"Cameroon","tel":"237"},{"short":"CN","name":"中国","en":"China","tel":"86"},{"short":"CO","name":"哥伦比亚","en":"Colombia","tel":"57"},{"short":"CR","name":"哥斯达黎加","en":"CostaRica","tel":"506"},{"short":"CS","name":"捷克","en":"Czech","tel":"420"},{"short":"CU","name":"古巴","en":"Cuba","tel":"53"},{"short":"CY","name":"塞浦路斯","en":"Cyprus","tel":"357"},{"short":"CZ","name":"捷克","en":"CzechRepublic","tel":"420"},{"short":"DE","name":"德国","en":"Germany","tel":"49"},{"short":"DJ","name":"吉布提","en":"Djibouti","tel":"253"},{"short":"DK","name":"丹麦","en":"Denmark","tel":"45"},{"short":"DO","name":"多米尼加共和国","en":"DominicaRep.","tel":"1890"},{"short":"DZ","name":"阿尔及利亚","en":"Algeria","tel":"213"},{"short":"EC","name":"厄瓜多尔","en":"Ecuador","tel":"593"},{"short":"EE","name":"爱沙尼亚","en":"Estonia","tel":"372"},{"short":"EG","name":"埃及","en":"Egypt","tel":"20"},{"short":"ES","name":"西班牙","en":"Spain","tel":"34"},{"short":"ET","name":"埃塞俄比亚","en":"Ethiopia","tel":"251"},{"short":"FI","name":"芬兰","en":"Finland","tel":"358"},{"short":"FJ","name":"斐济","en":"Fiji","tel":"679"},{"short":"FR","name":"法国","en":"France","tel":"33"},{"short":"GA","name":"加蓬","en":"Gabon","tel":"241"},{"short":"GB","name":"英国","en":"UnitedKingdom","tel":"44"},{"short":"GD","name":"格林纳达","en":"Grenada","tel":"1809"},{"short":"GE","name":"格鲁吉亚","en":"Georgia","tel":"995"},{"short":"GF","name":"法属圭亚那","en":"FrenchGuiana","tel":"594"},{"short":"GH","name":"加纳","en":"Ghana","tel":"233"},{"short":"GI","name":"直布罗陀","en":"Gibraltar","tel":"350"},{"short":"GM","name":"冈比亚","en":"Gambia","tel":"220"},{"short":"GN","name":"几内亚","en":"Guinea","tel":"224"},{"short":"GR","name":"希腊","en":"Greece","tel":"30"},{"short":"GT","name":"危地马拉","en":"Guatemala","tel":"502"},{"short":"GU","name":"关岛","en":"Guam","tel":"1671"},{"short":"GY","name":"圭亚那","en":"Guyana","tel":"592"},{"short":"HK","name":"香港特别行政区","en":"Hongkong","tel":"852"},{"short":"HN","name":"洪都拉斯","en":"Honduras","tel":"504"},{"short":"HT","name":"海地","en":"Haiti","tel":"509"},{"short":"HU","name":"匈牙利","en":"Hungary","tel":"36"},{"short":"ID","name":"印度尼西亚","en":"Indonesia","tel":"62"},{"short":"IE","name":"爱尔兰","en":"Ireland","tel":"353"},{"short":"IL","name":"以色列","en":"Israel","tel":"972"},{"short":"IN","name":"印度","en":"India","tel":"91"},{"short":"IQ","name":"伊拉克","en":"Iraq","tel":"964"},{"short":"IR","name":"伊朗","en":"Iran","tel":"98"},{"short":"IS","name":"冰岛","en":"Iceland","tel":"354"},{"short":"IT","name":"意大利","en":"Italy","tel":"39"},{"short":"","name":"科特迪瓦","en":"IvoryCoast","tel":"225"},{"short":"JM","name":"牙买加","en":"Jamaica","tel":"1876"},{"short":"JO","name":"约旦","en":"Jordan","tel":"962"},{"short":"JP","name":"日本","en":"Japan","tel":"81"},{"short":"KE","name":"肯尼亚","en":"Kenya","tel":"254"},{"short":"KG","name":"吉尔吉斯坦","en":"Kyrgyzstan","tel":"331"},{"short":"KH","name":"柬埔寨","en":"Kampuchea(Cambodia)","tel":"855"},{"short":"KP","name":"朝鲜","en":"NorthKorea","tel":"850"},{"short":"KR","name":"韩国","en":"Korea","tel":"82"},{"short":"KT","name":"科特迪瓦共和国","en":"RepublicofIvoryCoast","tel":"225"},{"short":"KW","name":"科威特","en":"Kuwait","tel":"965"},{"short":"KZ","name":"哈萨克斯坦","en":"Kazakstan","tel":"327"},{"short":"LA","name":"老挝","en":"Laos","tel":"856"},{"short":"LB","name":"黎巴嫩","en":"Lebanon","tel":"961"},{"short":"LC","name":"圣卢西亚","en":"St.Lucia","tel":"1758"},{"short":"LI","name":"列支敦士登","en":"Liechtenstein","tel":"423"},{"short":"LK","name":"斯里兰卡","en":"SriLanka","tel":"94"},{"short":"LR","name":"利比里亚","en":"Liberia","tel":"231"},{"short":"LS","name":"莱索托","en":"Lesotho","tel":"266"},{"short":"LT","name":"立陶宛","en":"Lithuania","tel":"370"},{"short":"LU","name":"卢森堡","en":"Luxembourg","tel":"352"},{"short":"LV","name":"拉脱维亚","en":"Latvia","tel":"371"},{"short":"LY","name":"利比亚","en":"Libya","tel":"218"},{"short":"MA","name":"摩洛哥","en":"Morocco","tel":"212"},{"short":"MC","name":"摩纳哥","en":"Monaco","tel":"377"},{"short":"MD","name":"摩尔多瓦","en":"Moldova,Republicof","tel":"373"},{"short":"MG","name":"马达加斯加","en":"Madagascar","tel":"261"},{"short":"ML","name":"马里","en":"Mali","tel":"223"},{"short":"MM","name":"缅甸","en":"Burma","tel":"95"},{"short":"MN","name":"蒙古","en":"Mongolia","tel":"976"},{"short":"MO","name":"澳门","en":"Macao","tel":"853"},{"short":"MS","name":"蒙特塞拉特岛","en":"MontserratIs","tel":"1664"},{"short":"MT","name":"马耳他","en":"Malta","tel":"356"},{"short":"","name":"马里亚那群岛","en":"MarianaIs","tel":"1670"},{"short":"","name":"马提尼克","en":"Martinique","tel":"596"},{"short":"MU","name":"毛里求斯","en":"Mauritius","tel":"230"},{"short":"MV","name":"马尔代夫","en":"Maldives","tel":"960"},{"short":"MW","name":"马拉维","en":"Malawi","tel":"265"},{"short":"MX","name":"墨西哥","en":"Mexico","tel":"52"},{"short":"MY","name":"马来西亚","en":"Malaysia","tel":"60"},{"short":"MZ","name":"莫桑比克","en":"Mozambique","tel":"258"},{"short":"NA","name":"纳米比亚","en":"Namibia","tel":"264"},{"short":"NE","name":"尼日尔","en":"Niger","tel":"977"},{"short":"NG","name":"尼日利亚","en":"Nigeria","tel":"234"},{"short":"NI","name":"尼加拉瓜","en":"Nicaragua","tel":"505"},{"short":"NL","name":"荷兰","en":"Netherlands","tel":"31"},{"short":"NO","name":"挪威","en":"Norway","tel":"47"},{"short":"NP","name":"尼泊尔","en":"Nepal","tel":"977"},{"short":"","name":"荷属安的列斯","en":"NetheriandsAntilles","tel":"599"},{"short":"NR","name":"瑙鲁","en":"Nauru","tel":"674"},{"short":"NZ","name":"新西兰","en":"NewZealand","tel":"64"},{"short":"OM","name":"阿曼","en":"Oman","tel":"968"},{"short":"PA","name":"巴拿马","en":"Panama","tel":"507"},{"short":"PE","name":"秘鲁","en":"Peru","tel":"51"},{"short":"PF","name":"法属玻利尼西亚","en":"FrenchPolynesia","tel":"689"},{"short":"PG","name":"巴布亚新几内亚","en":"PapuaNewCuinea","tel":"675"},{"short":"PH","name":"菲律宾","en":"Philippines","tel":"63"},{"short":"PK","name":"巴基斯坦","en":"Pakistan","tel":"92"},{"short":"PL","name":"波兰","en":"Poland","tel":"48"},{"short":"PR","name":"波多黎各","en":"PuertoRico","tel":"1787"},{"short":"PT","name":"葡萄牙","en":"Portugal","tel":"351"},{"short":"PY","name":"巴拉圭","en":"Paraguay","tel":"595"},{"short":"QA","name":"卡塔尔","en":"Qatar","tel":"974"},{"short":"","name":"留尼旺","en":"Reunion","tel":"262"},{"short":"RO","name":"罗马尼亚","en":"Romania","tel":"40"},{"short":"RU","name":"俄罗斯","en":"Russia","tel":"7"},{"short":"SA","name":"沙特阿拉伯","en":"SaudiArabia","tel":"966"},{"short":"SB","name":"所罗门群岛","en":"SolomonIs","tel":"677"},{"short":"SC","name":"塞舌尔","en":"Seychelles","tel":"248"},{"short":"SD","name":"苏丹","en":"Sudan","tel":"249"},{"short":"SE","name":"瑞典","en":"Sweden","tel":"46"},{"short":"SG","name":"新加坡","en":"Singapore","tel":"65"},{"short":"SI","name":"斯洛文尼亚","en":"Slovenia","tel":"386"},{"short":"SK","name":"斯洛伐克","en":"Slovakia","tel":"421"},{"short":"SL","name":"塞拉利昂","en":"SierraLeone","tel":"232"},{"short":"SM","name":"圣马力诺","en":"SanMarino","tel":"378"},{"short":"","name":"东萨摩亚(美)","en":"SamoaEastern","tel":"684"},{"short":"","name":"西萨摩亚","en":"SanMarino","tel":"685"},{"short":"SN","name":"塞内加尔","en":"Senegal","tel":"221"},{"short":"SO","name":"索马里","en":"Somali","tel":"252"},{"short":"SR","name":"苏里南","en":"Suriname","tel":"597"},{"short":"ST","name":"圣多美和普林西比","en":"SaoTomeandPrincipe","tel":"239"},{"short":"SV","name":"萨尔瓦多","en":"EISalvador","tel":"503"},{"short":"SY","name":"叙利亚","en":"Syria","tel":"963"},{"short":"SZ","name":"斯威士兰","en":"Swaziland","tel":"268"},{"short":"TD","name":"乍得","en":"Chad","tel":"235"},{"short":"TG","name":"多哥","en":"Togo","tel":"228"},{"short":"TH","name":"泰国","en":"Thailand","tel":"66"},{"short":"TJ","name":"塔吉克斯坦","en":"Tajikstan","tel":"992"},{"short":"TM","name":"土库曼斯坦","en":"Turkmenistan","tel":"993"},{"short":"TN","name":"突尼斯","en":"Tunisia","tel":"216"},{"short":"TO","name":"汤加","en":"Tonga","tel":"676"},{"short":"TR","name":"土耳其","en":"Turkey","tel":"90"},{"short":"TT","name":"特立尼达和多巴哥","en":"TrinidadandTobago","tel":"1809"},
                  {"short":"TW","name":"台湾省","en":"Taiwan","tel":"886"},{"short":"TZ","name":"坦桑尼亚","en":"Tanzania","tel":"255"},
                   {"short":"UA","name":"乌克兰","en":"Ukraine","tel":"380"},{"short":"UG","name":"乌干达","en":"Uganda","tel":"256"},{"short":"US","name":"美国","en":"UnitedStatesofAmerica","tel":"1"},{"short":"UY","name":"乌拉圭","en":"Uruguay","tel":"598"},{"short":"UZ","name":"乌兹别克斯坦","en":"Uzbekistan","tel":"233"},{"short":"VC","name":"圣文森特岛","en":"SaintVincent","tel":"1784"},{"short":"VE","name":"委内瑞拉","en":"Venezuela","tel":"58"},{"short":"VN","name":"越南","en":"Vietnam","tel":"84"},{"short":"YE","name":"也门","en":"Yemen","tel":"967"},{"short":"YU","name":"南斯拉夫","en":"Yugoslavia","tel":"381"},{"short":"ZA","name":"南非","en":"SouthAfrica","tel":"27"},{"short":"ZM","name":"赞比亚","en":"Zambia","tel":"260"},{"short":"ZR","name":"扎伊尔","en":"Zaire","tel":"243"},{"short":"ZW","name":"津巴布韦","en":"Zimbabwe","tel":"263"}]   

        }
    },
      components: {QRCode},
    methods:{
      //生成二维码
      qrcode() {
        let _that=this
      let qrcode = new QRCode('qrcode', {
        width: 132,  
        height: 132,
        text:"otpauth://totp/KIRINMINER:" + _that.getCookie("username") + "--" + _that.Formatdate(new Date(), "MM-dd,HH:mm:ss") + "?secret=" +  _that.setGoogleKey_params.googleKey + "&issuer=KIRINMINER", // 二维码地址
      })
    },
        selectcountryCode(id){
  
        this.bindPhone_params.countryCode=this.perfix[id].tel
        // console.log(this.bindPhone_params,'this.phonecode_params');      
    },
        change(val){
         this.bindtype=val
        },
        changsetGoogleKeyType(val){
          if (this.personal_msg.phone==''&&val==false) {
            this.setGoogleKeyType=true
            return   this.$message.error(this.$t("m.setting.key75"));
          }
          if (this.personal_msg.email==''&&val==true) {
            this.setGoogleKeyType=false
            return   this.$message.error(this.$t("m.setting.key76"));
          }
            this.setGoogleKeyType=val   
          if (this.personal_msg.email!==''&&this.personal_msg.phone!=='') {
            if (val) {
               this.setGoogleKeyType=true
             this.setGoogleKey_params.text=this.personal_msg.email
              this.setGoogleKey_params.mode='email'
            }else{
              this.setGoogleKeyType=false
            this.setGoogleKey_params.text=this.personal_msg.phone
            this.setGoogleKey_params.countryCode=this.personal_msg.countryCode
             this.setGoogleKey_params.mode='phone'
            }
          }
          // console.log(this.setGoogleKey_params,'this.setGoogleKey_paramsthis.setGoogleKey_params');
          
        },
        hideshare(){
             this.sharetype=false
             this.shareid=0;
            this.code_tips=this.$t("m.account.key30"),  
            clearInterval(this.getcodetimer)
              this.getcodetimer=null
            this.registertime=60
            this.getcodetype=true        
        },
        showshare(id){
                this.sharetype=true
                this.shareid=id
                this.activeid=0
                if(id===7){
              this.getGoogleKey()

                }if(id===8&&this.personal_msg.setGoogleAuth==false){
                 this.sharetype=false
               return   this.$message.error(this.$t("m.account.key71"));
                }if(id===6&&this.personal_msg.setGoogleAuth==false){
                 this.sharetype=false
                return   this.$message.error(this.$t("m.account.key71"));
                }
              if (id===1) {
                
              }if (id===2) {
                  this.changePhone_params.oldPhoneCode=''
                   this.changePhone_params.phone=''
                    this.changePhone_params.code='' 
              }if (id===3) {
                this.bindPhone_params.phone=''
                 this.bindPhone_params.code=''
                  this.changePhone_params.oldPhoneCode=''
               this.bindPhone_params.emailCode=''
                     
              }  if (id===4) {
                 this.bindEmail_params.phoneCode=''
                  this.bindEmail_params.email=''
                   this.bindEmail_params.code=''
              } if (id===5) {
                 this.changePassword_params.oldPassword=''
                  this.changePassword_params.newPassword=''
                   this.changePassword_params.repeatPassword=''
              } if (id===6) {
                this.changePaymentKey_params.oldPaymentKey=''
                this.changePaymentKey_params.newPaymentKey=''
                this.changePaymentKey_params.resetnewPassword=''
                this.changePaymentKey_params.googleCode=''
              } if (id===7) {
                 this.setGoogleKey_params.code=''
                  this.setGoogleKey_params.googleCode=''
              } if (id===8) {
                
                this.changePaymentKey_params.newPaymentKey=''
                this.changePaymentKey_params.resetnewPassword=''
                this.changePaymentKey_params.googleCode=''
              }   
        },
        next(){
            this.activeid++
     
            this.BindPhoneCode_params.phone=''
           this.code_tips=this.$t("m.account.key30"),   
            clearInterval(this.getcodetimer)
              this.getcodetimer=null
            this.registertime=60
            this.getcodetype=true 
        },

        //23.获取绑定手机验证码
        getBindPhoneCode(){
             let _that=this
             if(!this.IsPhone(this.bindPhone_params.phone)){
              //  alert('请输入正确的手机号码')
                _that.$message.error(_that.$t("m.account.key79"))
               this.bindPhone_params.phone=''
               return
             } 
              if(this.getcodetype){
                this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000) }
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getBindPhoneCode',this.bindPhone_params, function(data) {
                //  console.log(data,'获取用户信息'); 
               if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }             
             if(JSON.parse(data).code==1072){
                // alert("请输入完整信息")
                   _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==1073){
                // alert("username不存在")
                 _that.$message.error(_that.$t("m.setting.key36"));
                return
              }if(JSON.parse(data).code==1074){
                // alert("'手机短信发送失败'}")
                 return   _that.$message.error(_that.$t("m.setting.key68"));
              }if(JSON.parse(data).code==1075){
                // alert("手机号已存在")
                 _that.$message.error(_that.$t("m.setting.key74"));
                return
              }
               if(JSON.parse(data).code==1){
              //  alert('手机短信发送成功')
               return   _that.$message.success(_that.$t("m.account.key56"));
              }
                }, function(error) {
                    // console.log(error)
                })         
        },
        //39. 初次绑定手机时，获取邮箱验证码
         getEmailCodeWhenBindPhone(){
          let _that=this
             if(this.getcodetype){
           this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)
              this.$ajax('post', this.GLOBAL.baseUrl + 'account/getEmailCodeWhenBindPhone ',this.bindPhone_params, function(data) {
                //  console.log(data,'获取绑定手机验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }              
              if(JSON.parse(data).code==9019){
                //账户未登录
                  _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==11020){
                //用户已绑定手机号
               _that.$message.error(_that.$t("m.setting.key71"));
                return
              }if(JSON.parse(data).code==11007){
                //email发送失败
                 _that.$message.error(_that.$t("m.setting.key66"));
                return
              }
               if(JSON.parse(data).code==1){
                 //email发送成功
              _that.$message.success(_that.$t("m.account.key60"));
              }
                }, function(error) {
                    // console.log(error)
                }) }       
        },
        //40. 绑定手机时，验证邮箱验证码
       authEmailCodeWhenBindPhone(){
          let _that=this
             if(this.getcodetype){
           this.getcodetype=false;
                  this.authEmailCodeWhenBindPhone_params.code= this.bindPhone_params.emailCode
                this.authEmailCodeWhenBindPhone_params.email=this.personal_msg.email
              this.$ajax('post', this.GLOBAL.baseUrl + 'account/authEmailCodeWhenBindPhone ',this.authEmailCodeWhenBindPhone_params, function(data) {
                //  console.log(data,'获取绑定手机验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }              
              if(JSON.parse(data).code==9077){
                //请输入完整信息
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==9333){
                //请先获取验证码
               _that.$message.error(_that.$t("m.account.key84"));
                return
              }if(JSON.parse(data).code==9078){
                //验证码不正确
                _that.$message.error(_that.$t("m.account.key63"));
                return
              }if(JSON.parse(data).code==9079){
                //验证码验证失败
                 _that.$message.error(_that.$t("m.wallet.key44"));
                return
              }
               if(JSON.parse(data).code==1){
                   _that.activeid++
                 //email发送成功
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }
                }, function(error) {
                    // console.log(error)
                }) }         
       }, 
        // 24.初次绑定手机号
        bindPhone(){
             let _that=this
             if(!this.IsPhone(this.bindPhone_params.phone)){
              //  alert('请输入正确的手机号码')
                _that.$message.error(_that.$t("m.account.key79"))
               this.bindPhone_params.phone=''
               return
             } 
                   this.bindPhone_params.email=this.personal_msg.email
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/bindPhone',this.bindPhone_params, function(data) {
                //  console.log(data,'获取用户信息');            
             if(JSON.parse(data).code==1076){
                // alert("账户未登录")
                _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==1077){
                // alert("请输入完整信息")
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==1078){
                // alert("旧手机验证已失效")
                _that.$message.error(_that.$t("m.account.key63"));
                return
              }if(JSON.parse(data).code==1079){
                // alert("旧手机验证已失效")
                 _that.$message.error(_that.$t("m.account.key64"));
                return
              }
               if(JSON.parse(data).code==1){
              //  alert('绑定手机成功')
              _that.$message.success(_that.$t("m.account.key65"));
               _that.activeid++  
              }
                }, function(error) {
                    // console.log(error)
                })            
        },
       //修改绑定手机号：获取原手机号验证码
        getOldPhoneCode(){
          let _that=this
             this.BindPhoneCode_params.countryCode=this.personal_msg.countryCode
             this.BindPhoneCode_params.phone=this.personal_msg.phone
             this.BindPhoneCode_params.username=this.personal_msg.username
             if(this.getcodetype){
           this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)
              this.$ajax('post', this.GLOBAL.baseUrl + 'account/getOldPhoneCode ',this.BindPhoneCode_params, function(data) {
                //  console.log(data,'获取绑定手机验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }              
              if(JSON.parse(data).code==1072){
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==1073){
               _that.$message.error(_that.$t("m.setting.key71"));
                return
              }if(JSON.parse(data).code==1074){
                 _that.$message.error(_that.$t("m.setting.key68"));
                return
              }if(JSON.parse(data).code==1075){
                _that.$message.error(_that.$t("m.setting.key74"));
                return
              }
               if(JSON.parse(data).code==1){
              _that.$message.success(_that.$t("m.account.key56"));
              }
                }, function(error) {
                    // console.log(error)
                }) }       
        },
        //获取绑定新手机验证码
        getNewPhoneCode(){
            let _that=this
            if(!this.IsPhone(this.BindPhoneCode_params.phone)){
            this.$message.error(this.$t("m.account.key57"));
              this.BindPhoneCode_params.phone=''
              return
            }
             this.BindPhoneCode_params.countryCode=this.personal_msg.countryCode
                       this.BindPhoneCode_params.phone=this.changePhone_params.phone
              this.BindPhoneCode_params.username=this.personal_msg.username
              
              if(this.getcodetype){
           this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000) 
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getNewPhoneCode ',this.BindPhoneCode_params, function(data) {
                //  console.log(data,'获取绑定手机验证码');  
               if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }            
              if(JSON.parse(data).code==9019){
                _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==9020){
               _that.$message.error(_that.$t("m.setting.key30"));
                return
              }if(JSON.parse(data).code==9021){
                 _that.$message.error(_that.$t("m.setting.key68"));
                return
              }if(JSON.parse(data).code==9022){
                _that.$message.error(_that.$t("m.account.key58"));
                return
              }
               if(JSON.parse(data).code==1){
             _that.$message.success(_that.$t("m.account.key56"));
              }
                }, function(error) {
                    // console.log(error)
                }) }
        },

        //获取绑定邮箱验证码
        getBindEmailCode(){
            let _that=this
            // console.log(this.bindEmailCode_params,88888);
           if(!this.vmf(this.bindEmailCode_params.email)&&this.shareid!==3){
               this.$message.error(this.$t("m.account.key59"));
              this.bindEmailCode_params.email=''
              return
           } 
           if (this.shareid==3) {
              this.bindEmailCode_params.email=this.personal_msg.email
           }
           if(this.getcodetype){
             this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)

            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getBindEmailCode',this.bindEmailCode_params, function(data) {
                //  console.log(data,'获取绑定邮箱验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30"),    
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }              
              if(JSON.parse(data).code==1080){
                _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==1081){
                 _that.$message.error(_that.$t("m.setting.key71"));
                return
              }if(JSON.parse(data).code==1082){
                   _that.$message.error(_that.$t("m.setting.key73"));
                return
              }if(JSON.parse(data).code==1083){
                // alert("email已存在")
                 _that.$message.error(_that.$t("m.setting.key88"));
                return
              }
               if(JSON.parse(data).code==1){
            //  alert('email发送成功')
             _that.$message.success(_that.$t("m.account.key60"));
              }
                }, function(error) {
                    // console.log(error)
                }) }
        },      
        //获取改绑手机号
        changePhone(){
             let _that=this
             if(!this.IsPhone(this.changePhone_params.phone)){
              //  alert('请输入正确的手机号码')
                _that.$message.error(_that.$t("m.account.key79"))
               this.changePhone_params.phone=''
               return
             } 
             this.changePhone_params.countryCode=this.personal_msg.countryCode
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/changePhone',this.changePhone_params, function(data) {
                //  console.log(data,'获取用户信息');            
             if(JSON.parse(data).code==9076){
                // alert("账户未登录")
                _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==9077){
                // alert("请输入完整信息")
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==9333){
                // alert("旧手机验证已失效")
                _that.$message.error(_that.$t("m.account.key61"));
                return
              }if(JSON.parse(data).code==9334){
                // alert("旧手机验证已失效")
                _that.$message.error(_that.$t("m.account.key84"));
                return
              }if(JSON.parse(data).code==9078){
                // alert("旧手机验证码不正确")
                _that.$message.error(_that.$t("m.account.key62"));
                return
              }if(JSON.parse(data).code==9079){
                // alert("验证码不正确")
                _that.$message.error(_that.$t("m.account.key63"));
                return
              }if(JSON.parse(data).code==9080){
                // alert("更改绑定手机失败")
                _that.$message.error(_that.$t("m.account.key64"));
                return
              }
               if(JSON.parse(data).code==1){
              //  alert('绑定手机成功')
              _that.$message.success(_that.$t("m.account.key65"));
               _that.activeid++  
              }
                }, function(error) {
                    // console.log(error)
                })            
        },
        //33.修改绑定手机号：获取原手机号验证码
        getAuthPhoneCode(){
         let _that=this  
            clearInterval(this.getcodetimer)
              this.getcodetimer=null
            this.registertime=60
            this.getcodetype=true 
            this.BindPhoneCode_params.countryCode=this.personal_msg.countryCode
             this.BindPhoneCode_params.phone=this.personal_msg.phone
             this.BindPhoneCode_params.username=this.personal_msg.username
               this.BindPhoneCode_params.code=this.changePhone_params.oldPhoneCode  
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/getAuthPhoneCode ',this.BindPhoneCode_params, function(data) {
                //  console.log(data,'获取绑定手机验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
                   
              }              
              if(JSON.parse(data).code==9077){
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==9333){
               _that.$message.error(_that.$t("m.account.key84"));
                return
              }if(JSON.parse(data).code==9078){
                 _that.$message.error(_that.$t("m.account.key62"));
                return
              }if(JSON.parse(data).code==9079){
                 _that.$message.error(_that.$t("m.wallet.key44"));
                return
              }
               if(JSON.parse(data).code==1){
              // _that.$message.error(_that.$t("m.account.key56"));
                _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
                    _that.activeid++
              }
                }, function(error) {
                    // console.log(error)
                })        
        },
        //绑定邮箱
        bindEmail(){
             let _that=this 
             
             this.bindEmail_params.username=this.personal_msg.username
              //  console.log(this.bindEmail_params,999999)
             this.bindEmail_params.email= this.bindEmailCode_params.email     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/bindEmail',this.bindEmail_params, function(data) {
                
                 if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }            
             if(JSON.parse(data).code==1084){
                // alert("账户未登录")
                _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==1085){
                // alert("请输入完整信息")
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==1086){
                // alert("验证码不正确")
                _that.$message.error(_that.$t("m.account.key63"));
                return
              }if(JSON.parse(data).code==1087){
                // alert("绑定邮箱失败")
                _that.$message.error(_that.$t("m.account.key66"));
                return
              }
               if(JSON.parse(data).code==1){
              //  alert('绑定邮箱成功')
                 _that.activeid++ 
              _that.$message.success(_that.$t("m.account.key67"));
            
              }
                }, function(error) {
                    // console.log(error)
                })            
        },        
      // 37. 绑定邮箱时，获取手机验证码
      getPhoneCodeWhenBindEmail(){
        let _that=this
                   this.BindPhoneCode_params.countryCode=this.personal_msg.countryCode
             this.BindPhoneCode_params.phone=this.personal_msg.phone
             this.BindPhoneCode_params.username=this.personal_msg.username
               this.BindPhoneCode_params.code=this.changePhone_params.oldPhoneCode  
               if(this.getcodetype){
              this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000) }
       this.$ajax('post', this.GLOBAL.baseUrl + 'account/getPhoneCodeWhenBindEmail ',this.BindPhoneCode_params, function(data) {
                //  console.log(data,'获取绑定手机验证码');   
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }            
              if(JSON.parse(data).code==9019){
                 _that.$message.error(_that.$t("m.setting.key63"));
                return
              }if(JSON.parse(data).code==9020){
               _that.$message.error(_that.$t("m.setting.key67"));
                return
              }if(JSON.parse(data).code==9007){
                 _that.$message.error(_that.$t("m.setting.key68"));
                return
              }
               if(JSON.parse(data).code==1){         
              _that.$message.success(_that.$t("m.account.key56"));
              }
                }, function(error) {
                    // console.log(error)
                }) 
      },
      //38.绑定邮箱时：验证手机号验证码
      authPhoneCodeWhenBindEmail(){
        let _that=this
            this.authPhoneCodeWhenBindEmail_params.countryCode=this.personal_msg.countryCode
             this.authPhoneCodeWhenBindEmail_params.phone=this.personal_msg.phone
              this.authPhoneCodeWhenBindEmail_params.code=this.bindEmail_params.phoneCode  
              if(this.getcodetype){
               this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000) }
         this.$ajax('post', this.GLOBAL.baseUrl + 'account/authPhoneCodeWhenBindEmail ',this.authPhoneCodeWhenBindEmail_params, function(data) {
                //  console.log(data,'获取绑定手机验证码'); 
              if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
                   _that.activeid=0
              }              
              if(JSON.parse(data).code==9077){
                 _that.$message.error(_that.$t("m.setting.key70"));
                return
              }if(JSON.parse(data).code==9333){
               _that.$message.error(_that.$t("m.account.key84"));
                return
              }if(JSON.parse(data).code==9078){
                 _that.$message.error(_that.$t("m.account.key62"));
                return
              }if(JSON.parse(data).code==9079){
                 _that.$message.error(_that.$t("m.wallet.key44"));
                return
              }
               if(JSON.parse(data).code==1){
              // _that.$message.error(_that.$t("m.account.key56"));
               _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
               _that.activeid++
              }
                }, function(error) {
                    // console.log(error)
                })       
      },
        //修改登录密码
        changePassword(){
            let _that=this
            if(this.changePassword_params.newPassword!==this.changePassword_params.repeatPassword){
              this.changePassword_params.repeatPassword=''
            return   this.$message.error(this.$t("m.account.key68"));
            }
         if (this.changePassword_params.newPassword!==this.changePassword_params.repeatPassword) {
                this.changePassword_params.repeatPassword=''
              return  this.$message.error(this.$t("m.account.key68"));
            }
          if (!this.isNumberOr_Letter(this.changePassword_params.newPassword)) {
            return  this.$message.error(this.$t("m.register.key10"))      
          }
            
            // console.log(this.changePassword_params,'this.changePassword_params99999');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/changePassword',this.changePassword_params, function(data) {
                //  console.log(data,'修改登录密码');            
            if(JSON.parse(data).code==1088){
                // alert("新密码不能为空")
                _that.$message.error(_that.$t("m.setting.key80"));
              }if(JSON.parse(data).code==1089){
                // alert("新密码格式不正确")
                _that.$message.error(_that.$t("m.register.key10"));
              }if(JSON.parse(data).code==1090){
                // alert("账户未登录")
                _that.$message.error(_that.$t("m.setting.key63"));
              }if(JSON.parse(data).code==1091){
                // alert("请输入旧密码")
                 _that.$message.error(_that.$t("m.setting.key15"));
              }if(JSON.parse(data).code==1092){
                // alert("旧密码不正确")
                _that.$message.error(_that.$t("m.account.key69"));
              }if(JSON.parse(data).code==1093){
                // alert("更改失败")
                 _that.$message.error(_that.$t("m.account.key70"));
              }if(JSON.parse(data).code==1361){
                // alert("新密码不能与原密码相同")
                 _that.$message.error(_that.$t("m.setting.key94"));
              }
               if(JSON.parse(data).code==1){
              // alert('更改成功')
               _that.$message.success(_that.$t("m.setting.key37"));
               _that.sharetype=false
              }
                }, function(error) {
                    // console.log(error)
                })           
        },
        //设置/重置支付密码
        setPaymentKey(){
            let _that=this 
            if(!this.isNumberOr_Letter(this.changePaymentKey_params.newPaymentKey)){
              this.changePaymentKey_params.newPaymentKey=''
             return  this.$message.error(this.$t("m.account.key43"));
            }
            if(this.changePaymentKey_params.newPaymentKey!==this.changePaymentKey_params.resetnewPassword){
              this.changePaymentKey_params.resetnewPassword=''
               return  this.$message.error(this.$t("m.account.key68"));
            }                        
            // console.log(this.setPaymentKey_params,'修改资金密码');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/setPaymentKey',this.setPaymentKey_params, function(data) {
                         
              if(JSON.parse(data).code==1052){
                // alert("新密码不能为空")
                _that.$message.error(_that.$t("m.setting.key80"));
              }if(JSON.parse(data).code==1053){
                // alert("请输入旧密码")
                _that.$message.error(_that.$t("m.setting.key70"));
              }if(JSON.parse(data).code==1054){
                // alert("验证码错误")
                _that.$message.error(_that.$t("m.setting.key35"));
              }if(JSON.parse(data).code==1055){
                // alert("旧密码不正确")
               _that.$message.error(_that.$t("m.setting.key34"));
              }if(JSON.parse(data).code==1056){
                // alert("设置失败")
               _that.$message.error(_that.$t("m.setting.key77"));
              }
               if(JSON.parse(data).code==1){
              // alert('设置成功')
               _that.$message.success(_that.$t("m.setting.key33"));
               _that.personal_msg.setPaymentCode=true
               _that.hideshare()
              }
                }, function(error) {
                    // console.log(error)
                })           
        },        
        //修改资金密码
        changePaymentKey(){
            let _that=this 
            if (this.changePaymentKey_params.newPaymentKey==''||this.changePaymentKey_params.oldPaymentKey==''||this.changePaymentKey_params.googleCode=='') {
              return  _that.$message.error(_that.$t("m.setting.key70"));
            }
            if(!this.isNumberOr_Letter(this.changePaymentKey_params.newPaymentKey)){
              this.changePaymentKey_params.newPaymentKey=''
             return  this.$message.error(this.$t("m.key13"));
            }
            if(this.changePaymentKey_params.newPaymentKey!==this.changePaymentKey_params.resetnewPassword){
              this.changePaymentKey_params.resetnewPassword=''
              return  this.$message.error(this.$t("m.account.key68"));
            }                        
            // console.log(this.changePaymentKey_params,'修改资金密码');     
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/changePaymentKey',this.changePaymentKey_params, function(data) {
                //  console.log(data,'修改登录密码');            
              if(JSON.parse(data).code==1057){
                // alert("新密码不能为空")
                _that.$message.error(_that.$t("m.setting.key80"));
              }if(JSON.parse(data).code==1058){
                // alert("账户未登录")
                _that.$message.error(_that.$t("m.setting.key63"));
              }if(JSON.parse(data).code==1059){
                // alert("请输入旧密码")
                 _that.$message.error(_that.$t("m.setting.key15"));
              }if(JSON.parse(data).code==1060){
                // alert("谷歌验证码错误")
                  _that.$message.error(_that.$t("m.setting.key34"));
              }if(JSON.parse(data).code==1061){
                // alert("旧密码不正确")
                _that.$message.error(_that.$t("m.account.key69"));
              }if(JSON.parse(data).code==1062){
                // alert("更改失败")
                _that.$message.error(_that.$t("m.account.key70"));
              }if(JSON.parse(data).code==1361){
                // alert("新密码不能与原密码相同")
                _that.$message.error(_that.$t("m.setting.key94"));
              }
               if(JSON.parse(data).code==1){
              // alert('更改成功')
              
               _that.$message.success(_that.$t("m.setting.key37"));
               _that.hideshare()

              }
                }, function(error) {
                    // console.log(error)
                })           
        },
        //获取谷歌密钥
        getGoogleKey(){
             let _that=this 

            this.$ajax('get', this.GLOBAL.baseUrl + 'account/getGoogleKey',null,function(data) {
                 _that.setGoogleKey_params.googleKey=JSON.parse(data).msg
                //  console.log(_that.setGoogleKey_params); 
                 _that.qrcode()  
                }, function(error) {
                    // console.log(error)
                })         
        },
        //设置支付密码获取邮箱验证码
        paykeyResetEmailCode(){
              let _that=this 
            //  console.log(this.paykeyResetEmailCode_params);
             this.paykeyResetEmailCode_params.email=this.personal_msg.email 
            if(this.getcodetype){
                this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)             
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/paykeyResetEmailCode',this.paykeyResetEmailCode_params, function(data) {
               if(JSON.parse(data).code==1){
              // alert('email发送成功')
              _that.$message.success(_that.$t("m.account.key60"));
              }if(JSON.parse(data).code==1024){
              // alert('请输入邮箱')
              _that.$message.error(_that.$t("m.register.key4"));
              }if(JSON.parse(data).code==1025){
              // alert('邮箱验证码发送失败')
              _that.$message.error(_that.$t("m.setting.key66"));
              }if(JSON.parse(data).code==1026){
              // alert('邮箱未注册')
               _that.$message.error(_that.$t("m.setting.key50"));
              }if(JSON.parse(data).code==1324){
              // alert('未设置谷歌验证码')
              _that.$message.error(_that.$t("m.account.key71"));
              }if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key76")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }
                }, function(error) {
                    // console.log(error)
                }) }         
        },
        //设置/重置谷歌验证码获取邮箱验证码
        GGkeygetResetEmailCode(){
              let _that=this 
            //  console.log(this.paykeyResetEmailCode_params,'paykeyResetEmailCode_params');
            //  this.paykeyResetEmailCode_params.email=this.personal_msg.email 
            if(this.getcodetype){
                this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)     
                  this.paykeyResetEmailCode_params.email=this.personal_msg.email      
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/GGkeygetResetEmailCode',this.paykeyResetEmailCode_params, function(data) {
              if(JSON.parse(data).code==1){
              // alert('邮箱验证码发送成功')
              _that.$message.success(_that.$t("m.account.key72"));
              }if(JSON.parse(data).code==1015){
              // alert('账户未登录')
              _that.$message.error(_that.$t("m.setting.key63"));
              }if(JSON.parse(data).code==1017){
              // alert('邮箱验证码发送失败')
              _that.$message.error(_that.$t("m.setting.key66"));
              }if(JSON.parse(data).code==1018){
              // alert('邮箱未注册')
              _that.$message.error(_that.$t("m.setting.key50"));
              }if(JSON.parse(data).code==1016){
              // alert('请输入邮箱')
              _that.$message.error(_that.$t("m.register.key4"));
              }if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key76")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }
                }, function(error) {
                    // console.log(error)
                })   }       
        },
        //设置/重置谷歌验证码获取手机验证码
        GGkeygetResetPhoneCode(){
              let _that=this 
             this.bindPhone_params.phone=this.personal_msg.phone 
             this.bindPhone_params.countryCode=this.personal_msg.countryCode 
             if(this.getcodetype){
               this.getcodetype=false;
                    _that.getcodetimer=setInterval(function(){
                      _that.registertime--
                        _that.code_tips=  _that.registertime                      
                      if( _that.registertime<=0){
                        _that.getcodetype=true;
                        _that.registertime=60
                        _that.code_tips=_that.$t("m.account.key76");           
                          clearInterval(_that.getcodetimer)
                           _that.getcodetimer=null
                      }
                  },1000)          
             this.$ajax('post', this.GLOBAL.baseUrl + 'account/GGkeygetResetPhoneCode',this.bindPhone_params, function(data) {
               if(JSON.parse(data).code==1){
              // alert('手机短信发送成功')
               return   _that.$message.success(_that.$t("m.account.key56"));
              }if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key30")  
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }
              if(JSON.parse(data).code==1019){
              // alert('账户未登录')
                return  _that.$message.error(_that.$t("m.setting.key63"));
              }if(JSON.parse(data).code==1020){
              // alert('请输入手机号')
                return  _that.$message.error(_that.$t("m.setting.key30"));
              }if(JSON.parse(data).code==1021){
              // alert('手机短信发送失败')
            return   _that.$message.error(_that.$t("m.setting.key68"));
              }if(JSON.parse(data).code==1022){
              // alert('手机号未注册')
               return   _that.$message.error(_that.$t("m.setting.key49"));
              }
                }, function(error) {
                    // console.log(error)
                }) }         
        },
        //设置谷歌验证码
        setGoogleKey(){
             let _that=this  
             this.setGoogleKey_params.mode=this.setGoogleKeyType?'email':'phone' 
               this.setGoogleKey_params.phone=this.personal_msg.phone
               this.setGoogleKey_params.email=this.personal_msg.email        
            this.$ajax('post', this.GLOBAL.baseUrl + 'account/setGoogleKey',this.setGoogleKey_params, function(data) {
              if(JSON.parse(data).code==1063){
              // alert('账户未登录')
              _that.$message.error(_that.$t("m.setting.key63"));
              }if(JSON.parse(data).code==1064){
              // alert('请输入完整信息')
               _that.$message.error(_that.$t("m.setting.key70"));
              }if(JSON.parse(data).code==1065){
              // alert('验证码错误')
              _that.$message.error(_that.$t("m.setting.key35"));
              }if(JSON.parse(data).code==1066){
              // alert('设置失败')
              _that.$message.error(_that.$t("m.setting.key77"));
              }if(JSON.parse(data).code==1067){
              // alert('谷歌密钥和谷歌验证码不匹配')
              _that.$message.error(_that.$t("m.setting.key84"));
              }if(JSON.parse(data).code==1333){
           
              _that.$message.error(_that.$t("m.account.key84"));
              }
               if(JSON.parse(data).code==1){
              // alert('谷歌验证码设置成功')
              _that.$message.success(_that.$t("m.account.key73"));
              _that.personal_msg.setGoogleAuth=true;
              // _that.personal_msg
              _that.sharetype=false
             _that.shareid=0;
              }if(JSON.parse(data).code!==1){
                  _that.getcodetype=true;
                  _that.code_tips=_that.$t("m.account.key76")
                  clearInterval(_that.getcodetimer)
                  _that.getcodetimer=null
                  _that.registertime=60
              }
                }, function(error) {
                    // console.log(error)
                })         
        }, 
        //复制
        iscopy(){
          return   this.$message.success(this.$t("m.setting.key90"));
        }           
    },
  beforeDestroy() {
     clearInterval(this.getcodetimer)
     this.getcodetimer=null
      clearInterval(this.timer)
      this.timer=null
  },   
}
</script>
<style scoped>
.center{
    width: 6rem;
   margin: 0 auto
}
#personal{
  background-color: #fafafa;
  margin-bottom: 0.4rem;
}
.personal_title{
  font-family: MicrosoftYaHei;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 22px;
  background-color: #fafafa;
	letter-spacing: 0px;
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
    padding-left: 0.1rem;
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
.color6{
  color: #ff9a23;
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
  position: relative;
  font-family: MicrosoftYaHei-Bold;
	font-size: 15px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000
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
.securityphone_itemborder{
  width: 100%;
  height: 0.25rem;
  background-color: #ffffff;
	border-radius: 4px;
	border: solid 1px #dcdcdc;
  padding-left: 0.05rem;
  padding-right: 0.02rem;
  margin-top: 0.1rem;
}
.securityphone_text1{
  margin-top: 0.18rem;
  height: 17px;
  color: #333;
  font-size: 18px;
  text-overflow: ellipsis;
}
.securityphone_text2{
  font-size: 14px;
  height: 12px;
  color: #888;
  margin-top: 0.06rem;
}
.securityphone_item input{
  width: 100%;
  height: 0.22rem;
  margin: 0 auto;
  /* box-sizing: border-box; */
  border: none;
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
  text-align: left;  
}
.font6{
  font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 20px;
	letter-spacing: 0px;
	color: #333333;
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
.bindphone_main{
  width: 100%;
  padding-top:0.17rem;
  padding-bottom: 0.25rem 
}
.change_lgpsw{
  width: 2.4rem;
  min-width: 400px;
  background-color: #ffffff;
	border-radius: 4px;
  padding-bottom: 0.1rem
}
.change_lgmain{
  width: 100%;
  padding: 0 0.3rem;
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
.personal_btn1{
  width: 0.6rem;
  height: 0.18rem;
  line-height: 0.18rem;
  color: #fff;
  font-size: 14px;
  background-color: #2f76ec;
	border-radius: 4px;
}
.fund_psw{
  width: 2.4rem;
  background-color: #ffffff;
	border-radius: 4px;
  padding-bottom: 0.1rem;
}
.colory{
  color: #ff9a23;
}
.setGoole{
  width: 2.4rem;
  padding-bottom: 0.1rem;
}
.setGoole_main{
  padding: 0.15rem 0.3rem 0.1rem 0.3rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-bottom: 0.1rem; 
}
.setGoole_t{
  width: 100%;
  padding: 0 0.3rem;
  font-family: MicrosoftYaHei;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
	color: #333333;
}
.selectedcolor{
  color: #2e73e8;
  font-family: MicrosoftYaHei-Bold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
  border-bottom: 2px solid #2e73e8;
  box-sizing: border-box;
}
.margin_r{
  margin-right: 0.3rem
}
.setGoole_item{
  margin-top: 0.1rem;
  position: relative;
}
.setGoole_item input{
  width: 100%;
  height: 0.25rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-left: 0.05rem;
  min-width: 213px;
}
.setcode{
  position: absolute;
  right: 0.05rem;
  top:50%;
  transform: translateY(-50%)
}
.position1{
  position: relative;
}
.getcode{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.08rem;
}
.isdone{
  width: 0.35rem;
  height: 0.35rem;
  margin-top: 0.27rem;
}
.isdone img{
  width: 0.35rem;
  height: 0.35rem;  
}
.prefix{
  width: 50px;
  position: absolute;
   left: 0rem;
  top: 50%;
  transform: translateY(-50%);
  height: 0.2rem;
}
.tels{
  min-width: 1rem;
  max-height: 1.85rem;
   overflow-y: scroll;
   left: 40.5%!important;
}
.prefix_inp{
  width: 50px;
  text-align: left;
  background-color:#fff;  
  height: 0.2rem;
  line-height: 0.2rem;
  padding-left:0.07rem; 
  color: black;
  border: none;
  border-radius: 4px;
}
.prefix_countryCode:hover{
  background: #fff!important;
}
.prefix_countryCode_ul{
 padding: 0 0.1rem;
 background: #fff!important;
 color: #000!important;
}
.prefix_countryCode_ul:hover{
 background-color: #2e73e8!important;
   color: #fff!important;
}
.prefix_countryCode_item{
  width: 50px;
  text-align: left;
}
.prefix_countryCode_item2{
  text-align: left;
}
.login_itemphone{
  padding-left: 55px
}
</style>