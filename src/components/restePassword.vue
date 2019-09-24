<template>
 <div id="restePassword">
    <div class="login">
      <div class="login_box">
      <h5 class="login_title">{{$t("m.resetPassword.key1")}}</h5>
      <div class="flex_f login_head">
        <span @click="changge(true)" class="login_head_l" :class="logintype?'':'login_head_bg'">{{$t("m.resetPassword.key3")}}</span>
        <span @click="changge(false)"  class="login_head_l" :class="logintype?'login_head_bg':''">{{$t("m.resetPassword.key2")}}</span>
      </div>
      <!--邮箱注册-->
      <div class="login_email" v-show="logintype">
                        <div class="flex_b login_item">
          <input type="email" v-model="registerdata.email" :placeholder="$t('m.resetPassword.key5')" @blur="verify(verEmail(registerdata.email),2)"  @keydown="verify(verEmail(registerdata.email),2)" />
          <div v-if="register_tipstype[0]&&register_tipsid[0]==2" class="register_tips">{{register_tips}}</div>
        </div>
        
                <div class="flex_b login_item">
          <input type="text"  v-model="registerdata.code"  :placeholder="$t('m.account.key36')" autocomplete='new-password'/>
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
        
                <div class="flex_b login_item">
          <input type="password" autocomplete='new-password' :ref="wordType[0]" v-model="registerdata.password" :placeholder="$t('m.resetPassword.key15')"  />
               <div class="getcode"  @click="showpasswordtype(0)">
                <div v-if="showpassword[0]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[0]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
                <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' :ref="wordType[1]" v-model="registerdata.resetpassword" :placeholder="$t('m.resetPassword.key9')"  @blur="verify(registerdata.resetpassword==registerdata.password?true:false,3)"  @keydown="verify(registerdata.resetpassword==registerdata.password?true:false,3)"/>
            <div v-if="register_tipstype[0]&&register_tipsid[0]==3" class="register_tips">{{register_tips}}</div>
            <div class="getcode"  @click="showpasswordtype(1)">
                <div v-if="showpassword[1]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[1]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
       
      </div>
      <!--手机注册-->
            <div class="login_email" v-show="!logintype">
        
                   <div class="flex_b login_item login_itemphone">            
              <div class="prefix flex_b">
                    <input type="text" v-model="phonecode_params.countryCode" class="prefix_inp">
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
          <input type="text" v-model="registerdata.phone" :placeholder="$t('m.resetPassword.key4')" @blur="verify(IsPhone(registerdata.phone),5)"  @keydown="verify(IsPhone(registerdata.phone),5)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==5" class="register_tips">{{register_tips}}</div>
        </div>   
                <div class="flex_b login_item">

          <input type="text" autocomplete="on" v-model="registerdata.code" :placeholder="$t('m.resetPassword.key6')" />
                <div class="code" @click="getcode()">
              <div class="getcode">
                   <span>{{code_tips}}</span>
              </div>
                </div>
        </div>
                <div class="flex_b login_item">
          <input type="password" v-model="registerdata.password" :ref="wordType[2]" :placeholder="$t('m.resetPassword.key15')" />
          <div class="getcode"  @click="showpasswordtype(2)">
                <div v-if="showpassword[2]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[2]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>
                <div class="flex_b login_item">
          <input type="password"  v-model="registerdata.resetpassword" :ref="wordType[3]" :placeholder="$t('m.resetPassword.key9')" @blur="verify(registerdata.resetpassword==registerdata.password?true:false,6)"  @keydown="verify(registerdata.resetpassword==registerdata.password?true:false,6)"/>
           <div v-if="register_tipstype[0]&&register_tipsid[0]==6" class="register_tips">{{register_tips}}</div>
           <div class="getcode"  @click="showpasswordtype(3)">
                <div v-if="showpassword[3]"> <img src="../assets/img/hidepassword.png" alt=""></div>
                <div v-if="!showpassword[3]"> <img src="../assets/img/showpassword.png" alt=""></div>
              </div>
        </div>    
      </div>
      <div class="submit" @click="resetPassword()">{{$t("m.resetPassword.key1")}}</div>
      <div class="restePassword_foo">
          <router-link to="login"> <span class="color1">{{$t("m.home.key1")}}</span> </router-link>
      </div>
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
        email:'',
        phone:'',
        password: "",
        resetpassword:"",
        mode:'email',
        countryCode:'86',
        inviter:'',
        code:''
      },
      emailcode_params:{
        email:'',      
      },
      phonecode_params:{
        phone:'',
        countryCode:'86'
      },
      showpassword:[true,true,true,true],
      wordType:['wordType0','wordType1','wordType2','wordType3'],
         perfix:[{"short":"AD","name":"安道尔共和国","en":"Andorra","tel":"376"},{"short":"AE","name":"阿拉伯联合酋长国","en":"UnitedArabEmirates","tel":"971"},{"short":"AF","name":"阿富汗","en":"Afghanistan","tel":"93"},{"short":"AG","name":"安提瓜和巴布达","en":"AntiguaandBarbuda","tel":"1268"},{"short":"AI","name":"安圭拉岛","en":"Anguilla","tel":"1264"},{"short":"AL","name":"阿尔巴尼亚","en":"Albania","tel":"355"},{"short":"AM","name":"亚美尼亚","en":"Armenia","tel":"374"},{"short":"","name":"阿森松","en":"Ascension","tel":"247"},{"short":"AO","name":"安哥拉","en":"Angola","tel":"244"},{"short":"AR","name":"阿根廷","en":"Argentina","tel":"54"},{"short":"AT","name":"奥地利","en":"Austria","tel":"43"},{"short":"AU","name":"澳大利亚","en":"Australia","tel":"61"},{"short":"AZ","name":"阿塞拜疆","en":"Azerbaijan","tel":"994"},{"short":"BB","name":"巴巴多斯","en":"Barbados","tel":"1246"},{"short":"BD","name":"孟加拉国","en":"Bangladesh","tel":"880"},{"short":"BE","name":"比利时","en":"Belgium","tel":"32"},{"short":"BF","name":"布基纳法索","en":"Burkina-faso","tel":"226"},{"short":"BG","name":"保加利亚","en":"Bulgaria","tel":"359"},{"short":"BH","name":"巴林","en":"Bahrain","tel":"973"},{"short":"BI","name":"布隆迪","en":"Burundi","tel":"257"},{"short":"BJ","name":"贝宁","en":"Benin","tel":"229"},{"short":"BL","name":"巴勒斯坦","en":"Palestine","tel":"970"},{"short":"BM","name":"百慕大群岛","en":"BermudaIs.","tel":"1441"},{"short":"BN","name":"文莱","en":"Brunei","tel":"673"},{"short":"BO","name":"玻利维亚","en":"Bolivia","tel":"591"},{"short":"BR","name":"巴西","en":"Brazil","tel":"55"},{"short":"BS","name":"巴哈马","en":"Bahamas","tel":"1242"},{"short":"BW","name":"博茨瓦纳","en":"Botswana","tel":"267"},{"short":"BY","name":"白俄罗斯","en":"Belarus","tel":"375"},{"short":"BZ","name":"伯利兹","en":"Belize","tel":"501"},{"short":"CA","name":"加拿大","en":"Canada","tel":"1"},{"short":"","name":"开曼群岛","en":"CaymanIs.","tel":"1345"},{"short":"CF","name":"中非共和国","en":"CentralAfricanRepublic","tel":"236"},{"short":"CG","name":"刚果","en":"Congo","tel":"242"},{"short":"CH","name":"瑞士","en":"Switzerland","tel":"41"},{"short":"CK","name":"库克群岛","en":"CookIs.","tel":"682"},{"short":"CL","name":"智利","en":"Chile","tel":"56"},{"short":"CM","name":"喀麦隆","en":"Cameroon","tel":"237"},{"short":"CN","name":"中国","en":"China","tel":"86"},{"short":"CO","name":"哥伦比亚","en":"Colombia","tel":"57"},{"short":"CR","name":"哥斯达黎加","en":"CostaRica","tel":"506"},{"short":"CS","name":"捷克","en":"Czech","tel":"420"},{"short":"CU","name":"古巴","en":"Cuba","tel":"53"},{"short":"CY","name":"塞浦路斯","en":"Cyprus","tel":"357"},{"short":"CZ","name":"捷克","en":"CzechRepublic","tel":"420"},{"short":"DE","name":"德国","en":"Germany","tel":"49"},{"short":"DJ","name":"吉布提","en":"Djibouti","tel":"253"},{"short":"DK","name":"丹麦","en":"Denmark","tel":"45"},{"short":"DO","name":"多米尼加共和国","en":"DominicaRep.","tel":"1890"},{"short":"DZ","name":"阿尔及利亚","en":"Algeria","tel":"213"},{"short":"EC","name":"厄瓜多尔","en":"Ecuador","tel":"593"},{"short":"EE","name":"爱沙尼亚","en":"Estonia","tel":"372"},{"short":"EG","name":"埃及","en":"Egypt","tel":"20"},{"short":"ES","name":"西班牙","en":"Spain","tel":"34"},{"short":"ET","name":"埃塞俄比亚","en":"Ethiopia","tel":"251"},{"short":"FI","name":"芬兰","en":"Finland","tel":"358"},{"short":"FJ","name":"斐济","en":"Fiji","tel":"679"},{"short":"FR","name":"法国","en":"France","tel":"33"},{"short":"GA","name":"加蓬","en":"Gabon","tel":"241"},{"short":"GB","name":"英国","en":"UnitedKingdom","tel":"44"},{"short":"GD","name":"格林纳达","en":"Grenada","tel":"1809"},{"short":"GE","name":"格鲁吉亚","en":"Georgia","tel":"995"},{"short":"GF","name":"法属圭亚那","en":"FrenchGuiana","tel":"594"},{"short":"GH","name":"加纳","en":"Ghana","tel":"233"},{"short":"GI","name":"直布罗陀","en":"Gibraltar","tel":"350"},{"short":"GM","name":"冈比亚","en":"Gambia","tel":"220"},{"short":"GN","name":"几内亚","en":"Guinea","tel":"224"},{"short":"GR","name":"希腊","en":"Greece","tel":"30"},{"short":"GT","name":"危地马拉","en":"Guatemala","tel":"502"},{"short":"GU","name":"关岛","en":"Guam","tel":"1671"},{"short":"GY","name":"圭亚那","en":"Guyana","tel":"592"},{"short":"HK","name":"香港特别行政区","en":"Hongkong","tel":"852"},{"short":"HN","name":"洪都拉斯","en":"Honduras","tel":"504"},{"short":"HT","name":"海地","en":"Haiti","tel":"509"},{"short":"HU","name":"匈牙利","en":"Hungary","tel":"36"},{"short":"ID","name":"印度尼西亚","en":"Indonesia","tel":"62"},{"short":"IE","name":"爱尔兰","en":"Ireland","tel":"353"},{"short":"IL","name":"以色列","en":"Israel","tel":"972"},{"short":"IN","name":"印度","en":"India","tel":"91"},{"short":"IQ","name":"伊拉克","en":"Iraq","tel":"964"},{"short":"IR","name":"伊朗","en":"Iran","tel":"98"},{"short":"IS","name":"冰岛","en":"Iceland","tel":"354"},{"short":"IT","name":"意大利","en":"Italy","tel":"39"},{"short":"","name":"科特迪瓦","en":"IvoryCoast","tel":"225"},{"short":"JM","name":"牙买加","en":"Jamaica","tel":"1876"},{"short":"JO","name":"约旦","en":"Jordan","tel":"962"},{"short":"JP","name":"日本","en":"Japan","tel":"81"},{"short":"KE","name":"肯尼亚","en":"Kenya","tel":"254"},{"short":"KG","name":"吉尔吉斯坦","en":"Kyrgyzstan","tel":"331"},{"short":"KH","name":"柬埔寨","en":"Kampuchea(Cambodia)","tel":"855"},{"short":"KP","name":"朝鲜","en":"NorthKorea","tel":"850"},{"short":"KR","name":"韩国","en":"Korea","tel":"82"},{"short":"KT","name":"科特迪瓦共和国","en":"RepublicofIvoryCoast","tel":"225"},{"short":"KW","name":"科威特","en":"Kuwait","tel":"965"},{"short":"KZ","name":"哈萨克斯坦","en":"Kazakstan","tel":"327"},{"short":"LA","name":"老挝","en":"Laos","tel":"856"},{"short":"LB","name":"黎巴嫩","en":"Lebanon","tel":"961"},{"short":"LC","name":"圣卢西亚","en":"St.Lucia","tel":"1758"},{"short":"LI","name":"列支敦士登","en":"Liechtenstein","tel":"423"},{"short":"LK","name":"斯里兰卡","en":"SriLanka","tel":"94"},{"short":"LR","name":"利比里亚","en":"Liberia","tel":"231"},{"short":"LS","name":"莱索托","en":"Lesotho","tel":"266"},{"short":"LT","name":"立陶宛","en":"Lithuania","tel":"370"},{"short":"LU","name":"卢森堡","en":"Luxembourg","tel":"352"},{"short":"LV","name":"拉脱维亚","en":"Latvia","tel":"371"},{"short":"LY","name":"利比亚","en":"Libya","tel":"218"},{"short":"MA","name":"摩洛哥","en":"Morocco","tel":"212"},{"short":"MC","name":"摩纳哥","en":"Monaco","tel":"377"},{"short":"MD","name":"摩尔多瓦","en":"Moldova,Republicof","tel":"373"},{"short":"MG","name":"马达加斯加","en":"Madagascar","tel":"261"},{"short":"ML","name":"马里","en":"Mali","tel":"223"},{"short":"MM","name":"缅甸","en":"Burma","tel":"95"},{"short":"MN","name":"蒙古","en":"Mongolia","tel":"976"},{"short":"MO","name":"澳门","en":"Macao","tel":"853"},{"short":"MS","name":"蒙特塞拉特岛","en":"MontserratIs","tel":"1664"},{"short":"MT","name":"马耳他","en":"Malta","tel":"356"},{"short":"","name":"马里亚那群岛","en":"MarianaIs","tel":"1670"},{"short":"","name":"马提尼克","en":"Martinique","tel":"596"},{"short":"MU","name":"毛里求斯","en":"Mauritius","tel":"230"},{"short":"MV","name":"马尔代夫","en":"Maldives","tel":"960"},{"short":"MW","name":"马拉维","en":"Malawi","tel":"265"},{"short":"MX","name":"墨西哥","en":"Mexico","tel":"52"},{"short":"MY","name":"马来西亚","en":"Malaysia","tel":"60"},{"short":"MZ","name":"莫桑比克","en":"Mozambique","tel":"258"},{"short":"NA","name":"纳米比亚","en":"Namibia","tel":"264"},{"short":"NE","name":"尼日尔","en":"Niger","tel":"977"},{"short":"NG","name":"尼日利亚","en":"Nigeria","tel":"234"},{"short":"NI","name":"尼加拉瓜","en":"Nicaragua","tel":"505"},{"short":"NL","name":"荷兰","en":"Netherlands","tel":"31"},{"short":"NO","name":"挪威","en":"Norway","tel":"47"},{"short":"NP","name":"尼泊尔","en":"Nepal","tel":"977"},{"short":"","name":"荷属安的列斯","en":"NetheriandsAntilles","tel":"599"},{"short":"NR","name":"瑙鲁","en":"Nauru","tel":"674"},{"short":"NZ","name":"新西兰","en":"NewZealand","tel":"64"},{"short":"OM","name":"阿曼","en":"Oman","tel":"968"},{"short":"PA","name":"巴拿马","en":"Panama","tel":"507"},{"short":"PE","name":"秘鲁","en":"Peru","tel":"51"},{"short":"PF","name":"法属玻利尼西亚","en":"FrenchPolynesia","tel":"689"},{"short":"PG","name":"巴布亚新几内亚","en":"PapuaNewCuinea","tel":"675"},{"short":"PH","name":"菲律宾","en":"Philippines","tel":"63"},{"short":"PK","name":"巴基斯坦","en":"Pakistan","tel":"92"},{"short":"PL","name":"波兰","en":"Poland","tel":"48"},{"short":"PR","name":"波多黎各","en":"PuertoRico","tel":"1787"},{"short":"PT","name":"葡萄牙","en":"Portugal","tel":"351"},{"short":"PY","name":"巴拉圭","en":"Paraguay","tel":"595"},{"short":"QA","name":"卡塔尔","en":"Qatar","tel":"974"},{"short":"","name":"留尼旺","en":"Reunion","tel":"262"},{"short":"RO","name":"罗马尼亚","en":"Romania","tel":"40"},{"short":"RU","name":"俄罗斯","en":"Russia","tel":"7"},{"short":"SA","name":"沙特阿拉伯","en":"SaudiArabia","tel":"966"},{"short":"SB","name":"所罗门群岛","en":"SolomonIs","tel":"677"},{"short":"SC","name":"塞舌尔","en":"Seychelles","tel":"248"},{"short":"SD","name":"苏丹","en":"Sudan","tel":"249"},{"short":"SE","name":"瑞典","en":"Sweden","tel":"46"},{"short":"SG","name":"新加坡","en":"Singapore","tel":"65"},{"short":"SI","name":"斯洛文尼亚","en":"Slovenia","tel":"386"},{"short":"SK","name":"斯洛伐克","en":"Slovakia","tel":"421"},{"short":"SL","name":"塞拉利昂","en":"SierraLeone","tel":"232"},{"short":"SM","name":"圣马力诺","en":"SanMarino","tel":"378"},{"short":"","name":"东萨摩亚(美)","en":"SamoaEastern","tel":"684"},{"short":"","name":"西萨摩亚","en":"SanMarino","tel":"685"},{"short":"SN","name":"塞内加尔","en":"Senegal","tel":"221"},{"short":"SO","name":"索马里","en":"Somali","tel":"252"},{"short":"SR","name":"苏里南","en":"Suriname","tel":"597"},{"short":"ST","name":"圣多美和普林西比","en":"SaoTomeandPrincipe","tel":"239"},{"short":"SV","name":"萨尔瓦多","en":"EISalvador","tel":"503"},{"short":"SY","name":"叙利亚","en":"Syria","tel":"963"},{"short":"SZ","name":"斯威士兰","en":"Swaziland","tel":"268"},{"short":"TD","name":"乍得","en":"Chad","tel":"235"},{"short":"TG","name":"多哥","en":"Togo","tel":"228"},{"short":"TH","name":"泰国","en":"Thailand","tel":"66"},{"short":"TJ","name":"塔吉克斯坦","en":"Tajikstan","tel":"992"},{"short":"TM","name":"土库曼斯坦","en":"Turkmenistan","tel":"993"},{"short":"TN","name":"突尼斯","en":"Tunisia","tel":"216"},{"short":"TO","name":"汤加","en":"Tonga","tel":"676"},{"short":"TR","name":"土耳其","en":"Turkey","tel":"90"},{"short":"TT","name":"特立尼达和多巴哥","en":"TrinidadandTobago","tel":"1809"},
                  {"short":"TW","name":"台湾省","en":"Taiwan","tel":"886"},{"short":"TZ","name":"坦桑尼亚","en":"Tanzania","tel":"255"},
                   {"short":"UA","name":"乌克兰","en":"Ukraine","tel":"380"},{"short":"UG","name":"乌干达","en":"Uganda","tel":"256"},{"short":"US","name":"美国","en":"UnitedStatesofAmerica","tel":"1"},{"short":"UY","name":"乌拉圭","en":"Uruguay","tel":"598"},{"short":"UZ","name":"乌兹别克斯坦","en":"Uzbekistan","tel":"233"},{"short":"VC","name":"圣文森特岛","en":"SaintVincent","tel":"1784"},{"short":"VE","name":"委内瑞拉","en":"Venezuela","tel":"58"},{"short":"VN","name":"越南","en":"Vietnam","tel":"84"},{"short":"YE","name":"也门","en":"Yemen","tel":"967"},{"short":"YU","name":"南斯拉夫","en":"Yugoslavia","tel":"381"},{"short":"ZA","name":"南非","en":"SouthAfrica","tel":"27"},{"short":"ZM","name":"赞比亚","en":"Zambia","tel":"260"},{"short":"ZR","name":"扎伊尔","en":"Zaire","tel":"243"},{"short":"ZW","name":"津巴布韦","en":"Zimbabwe","tel":"263"}]   
  
    };
  },
  methods: {
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
     selectcountryCode(id){
      //  console.log(id);   
        this.phonecode_params.countryCode=this.perfix[id].tel
        // console.log(this.phonecode_params,'this.phonecode_params');
        
    },   
    changge(val,id) {
      let _that=this
      this.logintype = val;
      this.registerdata.email = "";
      this.registerdata.phone = "";
      this.registerdata.resetpassword = "";
      this.registerdata.password = "";
      this.registerdata.getEmailCode = "";
      this.registerdata.getPhoneCode = "";
       this.registerdata.countryCode = "";
       this.registerdata.code=''
      this.register_tips=""
      if (val) {
        this.registerdata.mode='email'
      }if (!val) {
        this.registerdata.mode='phone'
      }
      this.code_tips=this.$t("m.account.key30")  
      clearInterval(_that.getcodetimer)
       this.getcodetimer=null
      this.registertime=60
      this.getcodetype=true     
    },
    //获取验证码
    
    getcode(){
      let _that=this 
       if(this.getcodetype){
             //获取Email验证码
        if(this.logintype){
              if (this.registerdata.email=='') {
              return  _that.$message.error(_that.$t("m.register.key4"));
              }
             if(this.verEmail(this.registerdata.email)){          
               this.emailcode_params.email=this.registerdata.email
              //  console.log( this.emailcode_params.email,9999);   
              this.$ajax('post', this.GLOBAL.baseUrl + 'account/getResetEmailCode',this.emailcode_params, function(data) {
              if(JSON.parse(data).code==1009){
                // alert("请输入邮箱")
                _that.$message.error(_that.$t("m.register.key4"));
              }
               if(JSON.parse(data).code==1010){
                // alert("邮箱验证码发送失败")
                 _that.$message.error(_that.$t("m.setting.key66"));
              }
               if(JSON.parse(data).code==1011){
                // alert("邮箱未注册")
                _that.$message.error(_that.$t("m.setting.key50"));
              }
               if(JSON.parse(data).code==1){
                //  alert('邮箱验证码发送成功')
               return _that.$message.success(_that.$t("m.account.key72"));
              }if(JSON.parse(data).code!==1){
                //  alert('邮箱验证码发送成功')
                 clearInterval(_that.getcodetimer)
                _that.getcodetimer=null
                _that.registertime=60
                _that.getcodetype=true
              }
                }, function(error) {
                    // console.log(error)
                })
             }else{
               // //获取Email验证码信息不齐
              if(_that.verEmail(_that.registerdata.email)==false){
                      _that.$set( _that.register_tipsid,0,2)
                    //  _that.register_tips="请输入正确邮箱地址"
                     _that.register_tips=_that.$t("m.account.key80")
                      //  console.log( _that.register_tips,_that.register_tipsid,'45555555554')
                       return _that.$message.error(_that.$t("m.account.key80")); 
                     _that.registerdata.email=''
               }
             }
        }
        //获取phone验证码
        else{
          if (this.registerdata.phone=='') {
            return  _that.$message.error(_that.$t("m.setting.key30"));
          }
            if(this.IsPhone(this.registerdata.phone)){  
               this.phonecode_params.phone=this.registerdata.phone
               this.$ajax('post', this.GLOBAL.baseUrl + 'account/getResetPhoneCode',this.phonecode_params, function(data) {
                //  console.log(data,'phone验证码');           
              if(JSON.parse(data).code==1012){
                // alert("请输入手机号")
                _that.$message.error(_that.$t("m.setting.key30"));
              }
               if(JSON.parse(data).code==1013){
                // alert("手机短信发送失败")
                 _that.$message.error(_that.$t("m.setting.key68"));
              }
               if(JSON.parse(data).code==1014){
                // alert("手机号未注册")
                 _that.$message.error(_that.$t("m.setting.key49"));
              }
               if(JSON.parse(data).code==1){
                //  alert('手机短信发送成功')
              return    _that.$message.success(_that.$t("m.account.key56"));
              }if(JSON.parse(data).code!==1){
                 clearInterval(_that.getcodetimer)
                _that.getcodetimer=null
                _that.registertime=60
                _that.getcodetype=true
              }
                }, function(error) {
                    // console.log(error)
                })
             }else{                 
                     _that.$set( _that.register_tipsid,0,5)
                    //  this.register_tips="请输入正确手机号码"
                    _that.register_tips=_that.$t("m.account.key79")
                     return _that.$message.error(_that.$t("m.account.key79")); 
                     _that.registerdata.phone=''
             }
        }
                 this.getcodetype=false;
            _that.getcodetimer=setInterval(function(){
              _that.registertime--
                 _that.code_tips=  _that.registertime 
                //  console.log(_that.registertime);                      
              if( _that.registertime<=0){
                //  _that.code_tips="重发验证码";
                 _that.register_tips=_that.$t("m.account.key76")
                 clearInterval(_that.getcodetimer)
                _that.getcodetimer=null
                _that.registertime=60
                _that.getcodetype=true 
              }
          },1000)
      }else{
      }
    },
    //重置密码
    resetPassword(){
      let _that=this
      clearInterval(_that.getcodetimer)
       this.getcodetimer=null
      this.registertime=60
      this.getcodetype=true 
      if (!this.isNumberOr_Letter(this.registerdata.password)) {
        return  this.$message.error(this.$t("m.key13"))      
      }
      if (this.registerdata.password==''||this.registerdata.code==''||this.registerdata.resetpassword=='') {
          _that.$message.error(_that.$t("m.setting.key70"));
          return
      }if (this.logintype&&this.registerdata.email=='') {
       _that.$message.error(_that.$t("m.setting.key70"));
          return
      }if (!this.logintype&&this.registerdata.phone=='') {
       _that.$message.error(_that.$t("m.setting.key70"));
          return
      }
       if(this.registerdata.password!==this.registerdata.resetpassword){
          this.$message.error(this.$t("m.account.key68"));
          return
       }
       this.registerdata.countryCode=this.phonecode_params.countryCode
        this.$ajax('post', this.GLOBAL.baseUrl + 'account/resetPassword',this.registerdata, function(data) {
              if(JSON.parse(data).code==1035){
                // alert("请输入完整信息")
                _that.$message.error(_that.$t("m.setting.key70"));
              }
               if(JSON.parse(data).code==1036){
                // alert("验证码错误")
                _that.$message.error(_that.$t("m.setting.key35"));
              }
               if(JSON.parse(data).code==1037){
                // alert("重置失败")
                _that.$message.error(_that.$t("m.account.key85"));
              }if(JSON.parse(data).code==1333){
                // alert("请先获取验证码")
                _that.$message.error(_that.$t("m.account.key84"));
              }
               if(JSON.parse(data).code==1){
                //  alert('重置成功')
                _that.$message.success(_that.$t("m.account.key86"));
                  _that.$router.push({name:'login'})
                
              }
                }, function(error) {
                    // console.log(error)
                })

    },
    //验证
    verify(val,id){
       this.register_tips=''
      this.$set(this.register_tipsid,0,id)
         this.$set(this.register_tipstype,0,!val)
      //  console.log(this.register_tipstype[0]);
            if(id==2){
              //  this.register_tips="请输入正确邮箱地址"
              this.register_tips=this.$t("m.account.key80")
            }
            if(id==3){
              //  this.register_tips="俩次密码不一致";
              this.register_tips=this.$t("m.account.key68")
               this.resetpassword=""              
           }
            if(id==5){
              //  this.register_tips="请输入正确手机号码"
               this.register_tips=this.$t("m.account.key79")
            }
            if(id==6){
              //  this.register_tips="俩次密码不一致";
              this.register_tips=this.$t("m.account.key68")
               this.resetpassword=""              
            }
            // console.log(this.register_tips);
            
    },
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
#restePassword {
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
  min-width: 280px;
  height: 2.7rem;
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
   border-bottom: 2px solid #2e73e8;
}
.login_head_bg {
  color: #2e73e8;
    height: 0.18rem;
  line-height: 0.18rem;
  	font-size: 16px;
  border-bottom: 0px solid #2e73e8;
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
  margin-top: 0.15rem;
}
.login_email{
  min-width: 245px;
}
.register_tips{
  position: absolute;
  width: 100%;
  height: 0.3rem;
  bottom: -0.3rem;
  font-size: 12px;
  color: red;
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
.login_item>input {
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
.restePassword_foo{
  margin-top: 0.1rem;
  text-align: right;
  font-size: 14px;
}
.prefix{
  position: absolute;
   left: 0rem;
  top: 50%;
  transform: translateY(-50%);
  height: 0.2rem;
}
.tels{
  min-width: 1rem;
  max-height: 1.82rem;
   overflow-y: scroll;
   left: 39.7%!important;
}
.prefix_inp{
  width: 50px;
  text-align: left;
  background-color:#00093a;  
  height: 0.2rem;
  line-height: 0.2rem;
  padding-left:0.07rem; 
  color: #fff;
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
  position: relative;
  padding-left: 65px;
}
</style>