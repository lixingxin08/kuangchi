<template>
  <div id="login">
    <div class="login">
      <div class="login_box">
      <h5 class="login_title"> {{$t("m.login.key1")}}</h5>
      <div class="flex_f login_head">
        <span @click="changge(true,'email')" class="login_head_l" :class="logintype?'':'login_head_bg'">{{$t("m.login.key3")}}</span>
        <span @click="changge(false,'phone')" class="login_head_l" :class="logintype?'login_head_bg':''">{{$t("m.login.key2")}}</span>
      </div>
      <div class="login_email" v-show="logintype">
        <div class="flex_b login_item">
          <input type="email" v-model="logindata.email" :placeholder="$t('m.login.key5')" @keyup="verify(verEmail(logindata.email),0)"  @blur="verify(verEmail(logindata.email),0)" />
          <div v-if="login_tipstype&&login_tipsid==0" class="login_tips">{{login_tips}}</div> 
        </div>
           
        <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' v-model="logindata.password" @keyup.enter="login()" :placeholder="$t('m.login.key10')" />
        </div>
      </div>
      <!--手机登录-->
      <div class="login_tel" v-show="!logintype">
        <div class="flex_b login_item login_itemphone">
                     <div class="prefix flex_b">
                    <input type="text" v-model="logindata.countryCode" class="prefix_inp">
                    <el-dropdown trigger="click" placement="bottom">
                    <span class="el-dropdown-link lang_right">        
                      <i class="el-icon-caret-bottom el-icon--right arrow__down"></i>
                    </span>
                   <el-dropdown-menu slot="dropdown" class="tels">
                      <el-dropdown-item class="prefix_countryCode">
                        <ul  v-for="(item,index) in perfix" :key="index" class="flex_f prefix_countryCode_ul" @click="selectcountryCode(index)">
                             <li class="prefix_countryCode_item">{{item.tel}}</li>
                                         <li class="prefix_countryCode_item2" v-if="lang=='zh'">{{item.name}}</li>
                       <li class="prefix_countryCode_item2" v-if="lang!=='zh'">{{item.en}}</li>
                       
                        </ul>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  </div> 
          <input type="tel" v-model="logindata.phone" :placeholder="$t('m.login.key4')" @keyup="verify(IsPhone(logindata.phone),1)"  @blur="verify(IsPhone(logindata.phone),1)"/>
           <div v-if="login_tipstype&&login_tipsid==1" class="login_tips">{{login_tips}}</div>       
        </div>      
        <div class="flex_b login_item">
          <input type="password"  autocomplete='new-password' v-model="logindata.password" @keyup.enter="login()" :placeholder="$t('m.login.key10')" />
        </div>
      </div>
      <div class="submit" @click="login()">{{$t('m.login.key1')}}</div>
      <div class="flex_b login_foo">
          <router-link to="register"><span class="color1">{{$t('m.login.key8')}}</span></router-link>
          <router-link to="restePassword"><span class="color1">{{$t('m.login.key6')}}</span></router-link>
      </div>
       <div class="login_img" v-if="lang=='zh'"> <img src="../assets/img/login_img.png" alt=""></div>
        <div class="login_img"  v-if="lang=='en'"> <img src="../assets/img/login_img-en.png" alt=""></div>
         <div class="login_img"  v-if="lang=='ko'"> <img src="../assets/img/login_img-ko.png" alt=""></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  created(){
     this.lang=localStorage.getItem('lang')||'zh'
  },
  data() {
    return {
      login_tips:'',
      login_tipsid:0,
      login_tipstype:true,
      logintype: true,
      lang:'',
      logindata: {
        username: "",
        password: "",
        email:'',
        phone:'',
        mode:'email',
        countryCode:'86',
        platformName:'wtcpool',
        userIp:returnCitySN["cip"]||'',
        userLoginAddress:returnCitySN["cname"]||'',
        userLoginBrowser :this.myBrowser()||'',
        userLoginway:this.isMobile()?'Mobile':'Pc',
      },
      perfix:[{"short":"AD","name":"安道尔共和国","en":"Andorra","tel":"376"},{"short":"AE","name":"阿拉伯联合酋长国","en":"UnitedArabEmirates","tel":"971"},{"short":"AF","name":"阿富汗","en":"Afghanistan","tel":"93"},{"short":"AG","name":"安提瓜和巴布达","en":"AntiguaandBarbuda","tel":"1268"},{"short":"AI","name":"安圭拉岛","en":"Anguilla","tel":"1264"},{"short":"AL","name":"阿尔巴尼亚","en":"Albania","tel":"355"},{"short":"AM","name":"亚美尼亚","en":"Armenia","tel":"374"},{"short":"","name":"阿森松","en":"Ascension","tel":"247"},{"short":"AO","name":"安哥拉","en":"Angola","tel":"244"},{"short":"AR","name":"阿根廷","en":"Argentina","tel":"54"},{"short":"AT","name":"奥地利","en":"Austria","tel":"43"},{"short":"AU","name":"澳大利亚","en":"Australia","tel":"61"},{"short":"AZ","name":"阿塞拜疆","en":"Azerbaijan","tel":"994"},{"short":"BB","name":"巴巴多斯","en":"Barbados","tel":"1246"},{"short":"BD","name":"孟加拉国","en":"Bangladesh","tel":"880"},{"short":"BE","name":"比利时","en":"Belgium","tel":"32"},{"short":"BF","name":"布基纳法索","en":"Burkina-faso","tel":"226"},{"short":"BG","name":"保加利亚","en":"Bulgaria","tel":"359"},{"short":"BH","name":"巴林","en":"Bahrain","tel":"973"},{"short":"BI","name":"布隆迪","en":"Burundi","tel":"257"},{"short":"BJ","name":"贝宁","en":"Benin","tel":"229"},{"short":"BL","name":"巴勒斯坦","en":"Palestine","tel":"970"},{"short":"BM","name":"百慕大群岛","en":"BermudaIs.","tel":"1441"},{"short":"BN","name":"文莱","en":"Brunei","tel":"673"},{"short":"BO","name":"玻利维亚","en":"Bolivia","tel":"591"},{"short":"BR","name":"巴西","en":"Brazil","tel":"55"},{"short":"BS","name":"巴哈马","en":"Bahamas","tel":"1242"},{"short":"BW","name":"博茨瓦纳","en":"Botswana","tel":"267"},{"short":"BY","name":"白俄罗斯","en":"Belarus","tel":"375"},{"short":"BZ","name":"伯利兹","en":"Belize","tel":"501"},{"short":"CA","name":"加拿大","en":"Canada","tel":"1"},{"short":"","name":"开曼群岛","en":"CaymanIs.","tel":"1345"},{"short":"CF","name":"中非共和国","en":"CentralAfricanRepublic","tel":"236"},{"short":"CG","name":"刚果","en":"Congo","tel":"242"},{"short":"CH","name":"瑞士","en":"Switzerland","tel":"41"},{"short":"CK","name":"库克群岛","en":"CookIs.","tel":"682"},{"short":"CL","name":"智利","en":"Chile","tel":"56"},{"short":"CM","name":"喀麦隆","en":"Cameroon","tel":"237"},{"short":"CN","name":"中国","en":"China","tel":"86"},{"short":"CO","name":"哥伦比亚","en":"Colombia","tel":"57"},{"short":"CR","name":"哥斯达黎加","en":"CostaRica","tel":"506"},{"short":"CS","name":"捷克","en":"Czech","tel":"420"},{"short":"CU","name":"古巴","en":"Cuba","tel":"53"},{"short":"CY","name":"塞浦路斯","en":"Cyprus","tel":"357"},{"short":"CZ","name":"捷克","en":"CzechRepublic","tel":"420"},{"short":"DE","name":"德国","en":"Germany","tel":"49"},{"short":"DJ","name":"吉布提","en":"Djibouti","tel":"253"},{"short":"DK","name":"丹麦","en":"Denmark","tel":"45"},{"short":"DO","name":"多米尼加共和国","en":"DominicaRep.","tel":"1890"},{"short":"DZ","name":"阿尔及利亚","en":"Algeria","tel":"213"},{"short":"EC","name":"厄瓜多尔","en":"Ecuador","tel":"593"},{"short":"EE","name":"爱沙尼亚","en":"Estonia","tel":"372"},{"short":"EG","name":"埃及","en":"Egypt","tel":"20"},{"short":"ES","name":"西班牙","en":"Spain","tel":"34"},{"short":"ET","name":"埃塞俄比亚","en":"Ethiopia","tel":"251"},{"short":"FI","name":"芬兰","en":"Finland","tel":"358"},{"short":"FJ","name":"斐济","en":"Fiji","tel":"679"},{"short":"FR","name":"法国","en":"France","tel":"33"},{"short":"GA","name":"加蓬","en":"Gabon","tel":"241"},{"short":"GB","name":"英国","en":"UnitedKingdom","tel":"44"},{"short":"GD","name":"格林纳达","en":"Grenada","tel":"1809"},{"short":"GE","name":"格鲁吉亚","en":"Georgia","tel":"995"},{"short":"GF","name":"法属圭亚那","en":"FrenchGuiana","tel":"594"},{"short":"GH","name":"加纳","en":"Ghana","tel":"233"},{"short":"GI","name":"直布罗陀","en":"Gibraltar","tel":"350"},{"short":"GM","name":"冈比亚","en":"Gambia","tel":"220"},{"short":"GN","name":"几内亚","en":"Guinea","tel":"224"},{"short":"GR","name":"希腊","en":"Greece","tel":"30"},{"short":"GT","name":"危地马拉","en":"Guatemala","tel":"502"},{"short":"GU","name":"关岛","en":"Guam","tel":"1671"},{"short":"GY","name":"圭亚那","en":"Guyana","tel":"592"},{"short":"HK","name":"香港特别行政区","en":"Hongkong","tel":"852"},{"short":"HN","name":"洪都拉斯","en":"Honduras","tel":"504"},{"short":"HT","name":"海地","en":"Haiti","tel":"509"},{"short":"HU","name":"匈牙利","en":"Hungary","tel":"36"},{"short":"ID","name":"印度尼西亚","en":"Indonesia","tel":"62"},{"short":"IE","name":"爱尔兰","en":"Ireland","tel":"353"},{"short":"IL","name":"以色列","en":"Israel","tel":"972"},{"short":"IN","name":"印度","en":"India","tel":"91"},{"short":"IQ","name":"伊拉克","en":"Iraq","tel":"964"},{"short":"IR","name":"伊朗","en":"Iran","tel":"98"},{"short":"IS","name":"冰岛","en":"Iceland","tel":"354"},{"short":"IT","name":"意大利","en":"Italy","tel":"39"},{"short":"","name":"科特迪瓦","en":"IvoryCoast","tel":"225"},{"short":"JM","name":"牙买加","en":"Jamaica","tel":"1876"},{"short":"JO","name":"约旦","en":"Jordan","tel":"962"},{"short":"JP","name":"日本","en":"Japan","tel":"81"},{"short":"KE","name":"肯尼亚","en":"Kenya","tel":"254"},{"short":"KG","name":"吉尔吉斯坦","en":"Kyrgyzstan","tel":"331"},{"short":"KH","name":"柬埔寨","en":"Kampuchea(Cambodia)","tel":"855"},{"short":"KP","name":"朝鲜","en":"NorthKorea","tel":"850"},{"short":"KR","name":"韩国","en":"Korea","tel":"82"},{"short":"KT","name":"科特迪瓦共和国","en":"RepublicofIvoryCoast","tel":"225"},{"short":"KW","name":"科威特","en":"Kuwait","tel":"965"},{"short":"KZ","name":"哈萨克斯坦","en":"Kazakstan","tel":"327"},{"short":"LA","name":"老挝","en":"Laos","tel":"856"},{"short":"LB","name":"黎巴嫩","en":"Lebanon","tel":"961"},{"short":"LC","name":"圣卢西亚","en":"St.Lucia","tel":"1758"},{"short":"LI","name":"列支敦士登","en":"Liechtenstein","tel":"423"},{"short":"LK","name":"斯里兰卡","en":"SriLanka","tel":"94"},{"short":"LR","name":"利比里亚","en":"Liberia","tel":"231"},{"short":"LS","name":"莱索托","en":"Lesotho","tel":"266"},{"short":"LT","name":"立陶宛","en":"Lithuania","tel":"370"},{"short":"LU","name":"卢森堡","en":"Luxembourg","tel":"352"},{"short":"LV","name":"拉脱维亚","en":"Latvia","tel":"371"},{"short":"LY","name":"利比亚","en":"Libya","tel":"218"},{"short":"MA","name":"摩洛哥","en":"Morocco","tel":"212"},{"short":"MC","name":"摩纳哥","en":"Monaco","tel":"377"},{"short":"MD","name":"摩尔多瓦","en":"Moldova,Republicof","tel":"373"},{"short":"MG","name":"马达加斯加","en":"Madagascar","tel":"261"},{"short":"ML","name":"马里","en":"Mali","tel":"223"},{"short":"MM","name":"缅甸","en":"Burma","tel":"95"},{"short":"MN","name":"蒙古","en":"Mongolia","tel":"976"},{"short":"MO","name":"澳门","en":"Macao","tel":"853"},{"short":"MS","name":"蒙特塞拉特岛","en":"MontserratIs","tel":"1664"},{"short":"MT","name":"马耳他","en":"Malta","tel":"356"},{"short":"","name":"马里亚那群岛","en":"MarianaIs","tel":"1670"},{"short":"","name":"马提尼克","en":"Martinique","tel":"596"},{"short":"MU","name":"毛里求斯","en":"Mauritius","tel":"230"},{"short":"MV","name":"马尔代夫","en":"Maldives","tel":"960"},{"short":"MW","name":"马拉维","en":"Malawi","tel":"265"},{"short":"MX","name":"墨西哥","en":"Mexico","tel":"52"},{"short":"MY","name":"马来西亚","en":"Malaysia","tel":"60"},{"short":"MZ","name":"莫桑比克","en":"Mozambique","tel":"258"},{"short":"NA","name":"纳米比亚","en":"Namibia","tel":"264"},{"short":"NE","name":"尼日尔","en":"Niger","tel":"977"},{"short":"NG","name":"尼日利亚","en":"Nigeria","tel":"234"},{"short":"NI","name":"尼加拉瓜","en":"Nicaragua","tel":"505"},{"short":"NL","name":"荷兰","en":"Netherlands","tel":"31"},{"short":"NO","name":"挪威","en":"Norway","tel":"47"},{"short":"NP","name":"尼泊尔","en":"Nepal","tel":"977"},{"short":"","name":"荷属安的列斯","en":"NetheriandsAntilles","tel":"599"},{"short":"NR","name":"瑙鲁","en":"Nauru","tel":"674"},{"short":"NZ","name":"新西兰","en":"NewZealand","tel":"64"},{"short":"OM","name":"阿曼","en":"Oman","tel":"968"},{"short":"PA","name":"巴拿马","en":"Panama","tel":"507"},{"short":"PE","name":"秘鲁","en":"Peru","tel":"51"},{"short":"PF","name":"法属玻利尼西亚","en":"FrenchPolynesia","tel":"689"},{"short":"PG","name":"巴布亚新几内亚","en":"PapuaNewCuinea","tel":"675"},{"short":"PH","name":"菲律宾","en":"Philippines","tel":"63"},{"short":"PK","name":"巴基斯坦","en":"Pakistan","tel":"92"},{"short":"PL","name":"波兰","en":"Poland","tel":"48"},{"short":"PR","name":"波多黎各","en":"PuertoRico","tel":"1787"},{"short":"PT","name":"葡萄牙","en":"Portugal","tel":"351"},{"short":"PY","name":"巴拉圭","en":"Paraguay","tel":"595"},{"short":"QA","name":"卡塔尔","en":"Qatar","tel":"974"},{"short":"","name":"留尼旺","en":"Reunion","tel":"262"},{"short":"RO","name":"罗马尼亚","en":"Romania","tel":"40"},{"short":"RU","name":"俄罗斯","en":"Russia","tel":"7"},{"short":"SA","name":"沙特阿拉伯","en":"SaudiArabia","tel":"966"},{"short":"SB","name":"所罗门群岛","en":"SolomonIs","tel":"677"},{"short":"SC","name":"塞舌尔","en":"Seychelles","tel":"248"},{"short":"SD","name":"苏丹","en":"Sudan","tel":"249"},{"short":"SE","name":"瑞典","en":"Sweden","tel":"46"},{"short":"SG","name":"新加坡","en":"Singapore","tel":"65"},{"short":"SI","name":"斯洛文尼亚","en":"Slovenia","tel":"386"},{"short":"SK","name":"斯洛伐克","en":"Slovakia","tel":"421"},{"short":"SL","name":"塞拉利昂","en":"SierraLeone","tel":"232"},{"short":"SM","name":"圣马力诺","en":"SanMarino","tel":"378"},{"short":"","name":"东萨摩亚(美)","en":"SamoaEastern","tel":"684"},{"short":"","name":"西萨摩亚","en":"SanMarino","tel":"685"},{"short":"SN","name":"塞内加尔","en":"Senegal","tel":"221"},{"short":"SO","name":"索马里","en":"Somali","tel":"252"},{"short":"SR","name":"苏里南","en":"Suriname","tel":"597"},{"short":"ST","name":"圣多美和普林西比","en":"SaoTomeandPrincipe","tel":"239"},{"short":"SV","name":"萨尔瓦多","en":"EISalvador","tel":"503"},{"short":"SY","name":"叙利亚","en":"Syria","tel":"963"},{"short":"SZ","name":"斯威士兰","en":"Swaziland","tel":"268"},{"short":"TD","name":"乍得","en":"Chad","tel":"235"},{"short":"TG","name":"多哥","en":"Togo","tel":"228"},{"short":"TH","name":"泰国","en":"Thailand","tel":"66"},{"short":"TJ","name":"塔吉克斯坦","en":"Tajikstan","tel":"992"},{"short":"TM","name":"土库曼斯坦","en":"Turkmenistan","tel":"993"},{"short":"TN","name":"突尼斯","en":"Tunisia","tel":"216"},{"short":"TO","name":"汤加","en":"Tonga","tel":"676"},{"short":"TR","name":"土耳其","en":"Turkey","tel":"90"},{"short":"TT","name":"特立尼达和多巴哥","en":"TrinidadandTobago","tel":"1809"},
                  {"short":"TW","name":"台湾省","en":"Taiwan","tel":"886"},{"short":"TZ","name":"坦桑尼亚","en":"Tanzania","tel":"255"},
                   {"short":"UA","name":"乌克兰","en":"Ukraine","tel":"380"},{"short":"UG","name":"乌干达","en":"Uganda","tel":"256"},{"short":"US","name":"美国","en":"UnitedStatesofAmerica","tel":"1"},{"short":"UY","name":"乌拉圭","en":"Uruguay","tel":"598"},{"short":"UZ","name":"乌兹别克斯坦","en":"Uzbekistan","tel":"233"},{"short":"VC","name":"圣文森特岛","en":"SaintVincent","tel":"1784"},{"short":"VE","name":"委内瑞拉","en":"Venezuela","tel":"58"},{"short":"VN","name":"越南","en":"Vietnam","tel":"84"},{"short":"YE","name":"也门","en":"Yemen","tel":"967"},{"short":"ZA","name":"南非","en":"SouthAfrica","tel":"27"},{"short":"ZM","name":"赞比亚","en":"Zambia","tel":"260"},{"short":"ZR","name":"扎伊尔","en":"Zaire","tel":"243"},{"short":"ZW","name":"津巴布韦","en":"Zimbabwe","tel":"263"}]    
    };
  },
  methods: {
    isMobile () {
    var userAgenInfo = navigator.userAgent
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'iPad', 'iPod')
    var flag = false
    for (var v = 0; v < Agents.length; v++) {
      if (userAgenInfo.indexOf(Agents[v]) > 0) {
        flag = true
        break
      }
    }
    return flag
  },
     myBrowser() {
              var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
              console.log(userAgent,'userAgentuserAgentuserAgent');
              
             var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
              var isIE = userAgent.indexOf("compatible") > -1
                      && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
              var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
              var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
              var isSafari = userAgent.indexOf("Safari") > -1
                      && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
            var Maxthon=userAgent.indexOf("Chrome") > -1
                      && userAgent.indexOf("Safari") > -1&&userAgent.indexOf("Maxthon") > -1; 

            var UcBrowser=userAgent.indexOf("Chrome") > -1
                      && userAgent.indexOf("Safari") > -1&&userAgent.indexOf("UBrowser") > -1; 
            var QQBrowser=userAgent.indexOf("Chrome") > -1
                      && userAgent.indexOf("Safari") > -1&&userAgent.indexOf("QQBrowser") > -1; 
              var isChrome = userAgent.indexOf("Chrome") > -1
                      && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

              if (isIE) {
                  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                  reIE.test(userAgent);
                  var fIEVersion = parseFloat(RegExp["$1"]);
                  if (fIEVersion == 7) {
                      return "IE7";
                  } else if (fIEVersion == 8) {
                      return "IE8";
                  } else if (fIEVersion == 9) {
                      return "IE9";
                  } else if (fIEVersion == 10) {
                      return "IE10";
                  } else if (fIEVersion == 11) {
                      return "IE11";
                  } else {
                      return "0";
                  }//IE版本过低
                  return "IE";
              }
              if (isOpera) {
                  return "Opera";
              }
              if (isEdge) {
                  return "Edge";
              }
              if (isFF) {
                  return "FireFox";
              }
              if (isSafari) {
                  return "Safari";
              }
              if (Maxthon) {
                   return "遨游浏览器";
              }
              if (UcBrowser) {
                   return "Uc浏览器";
              }
              if (QQBrowser) {
                   return "QQ浏览器";
              }
              if (isChrome) {
                  return "Chrome";
              }
              
          },       
    changge(val,mode) {
       this.login_tips=""
      this.logintype = val;
      this.logindata.email = "";
       this.logindata.phone = "";
      this.logindata.password = ""; 
      this.logindata.mode=mode
      this.logindata.countryCode='86'
      
    },
    //登录
    login(){
      let _that=this
      // console.log(this.logindata)
      if(this.logindata.phone==''&&this.logindata.email==''){
          if(this.logintype){
             return  _that.$message.error(_that.$t("m.login.key5"))
          }else{
            return  _that.$message.error(_that.$t("m.login.key4"))
          }
      }
      if(this.login_tipstype==false&&this.logindata.password!==""){
        this.$ajax('post', this.GLOBAL.baseUrl + 'account/login',this.logindata, function(data) {
              if(JSON.parse(data).code==1038){
                 _that.$message.error(_that.$t("m.account.key1"))
              }
               if(JSON.parse(data).code==1039){
              _that.$message.error(_that.$t("m.setting.key49"))
              }
               if(JSON.parse(data).code==1040){
              _that.$message.error(_that.$t("m.setting.key50"))
              }
              if(JSON.parse(data).code==1041){
                 _that.$message.error(_that.$t("m.login.key14"))
              }
              if(JSON.parse(data).code==1042){
               _that.$message.error(_that.$t("m.account.key5"))
              }
             if(JSON.parse(data).code==1043){
                 _that.$message.error(_that.$t("m.login.key13"))
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
                    // console.log(error)
                })
      }else{
          if(this.logindata.password==""){
              _that.$message.error(_that.$t("m.login.key10"))
          }else{
          }
      }
    },
    //验证
    verify(val,id){
      this.login_tipsid=id  
      this.login_tipstype=!val 
      if(!val&&id===0){
        this.login_tips=this.$t("m.account.key80")
      }else if(!val&&id===1){
        this.login_tips=this.$t("m.account.key79")
      }
    },
    selectcountryCode(id){  
        this.logindata.countryCode=this.perfix[id].tel  
    },    
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
.login_itemphone{
  position: relative;
  padding-left: 65px;
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
.flex_f{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.login_tips{
  position: absolute;
  left: 0.05rem;
  bottom: -0.11rem;
  color: red;
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
  border-bottom: 2px solid #2e73e8;
}
.login_head_bg {
  color: #2e73e8;
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
.prefix{
  position: absolute;
   left: 0rem;
  top: 50%;
  transform: translateY(-50%);
  height: 0.2rem;
}
.tels{
  min-width: 1rem;
  max-height: 1.7rem;
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
</style>