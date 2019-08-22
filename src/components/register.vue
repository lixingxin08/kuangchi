<!--<template>-->
  <!--<div class="login">-->
    <!--<div class="parent-box">-->
      <!--<div class="login-box">-->
        <!--<p class="login-p">{{$t("m.register.key")}}</p>-->
        <!--&lt;!&ndash;<p class="login-text">SIGN IN WTCPOOL</p>&ndash;&gt;-->
        <!--<div class="register-center">-->
          <!--<div class="phone-email"><span class="active" @click="selectRegister(2)">{{$t("m.register.key3")}}</span><span  @click="selectRegister(1)">{{$t("m.register.key2")}}</span></div>-->
          <!--<p class="hint-p username-p" v-show="usernameP" style="color: red">{{$t("m.register.key8")}}</p>-->
          <!--<div class="username-box" id="login-username-input-box">-->
            <!--<input type="text" :placeholder="$t('m.register.key5')" v-model="registerObj.username" @blur="verifyUser(registerObj.username,$event)">-->
          <!--</div>-->
          <!--<p class="hint-p phone-p" style="color: red">{{$t("m.key2")}}</p>-->
          <!--<div  v-show="isPhone" class="username-box" style="position: relative">-->
           <!--<div class="selected-countries-box"><span style="display: inline-block;width: 100%"  class="dropdown-toggle nation-phone"  data-toggle="dropdown" >+86</span>-->
             <!--<div class="phoneQz-box dropdown-menu custom-dropdown-menu">-->
               <!--<ul class="user-msg-ul" id="user-msg-ul">-->
                 <!--<li v-for="item in phoneQz">+<span class="phone-span">{{item.tel}}</span><span v-show="$i18n.locale === 'zh'">{{item.name}}</span><span v-show="$i18n.locale === 'en'">{{item.en}}</span></li>-->
               <!--</ul>-->
             <!--</div>-->
           <!--</div>-->
            <!--<span><input-->
           <!--type="text" id="box" v-model="registerObj.phone" :placeholder="$t('m.register.key15')" @blur="verifyPhone(registerObj.phone,$event)"></span>-->
          <!--</div>-->
          <!--<p class="hint-p email-p" style="color: red">{{$t("m.key3")}}</p>-->
          <!--<div v-show="isEmail" class="username-box email-box" >-->
            <!--<input type="text" :placeholder="$t('m.register.key4')" v-model="registerObj.email" @blur="verifyEmail(registerObj.email,$event)">-->
          <!--</div>-->

          <!--&lt;!&ndash;<div class="usernameFormat-box">&ndash;&gt;-->
            <!--&lt;!&ndash;<ul>&ndash;&gt;-->
              <!--&lt;!&ndash;<li class="li-one">不能以数字开头</li>&ndash;&gt;-->
              <!--&lt;!&ndash;<li class="li-two">数字和小写字母组成,不能包含特殊字符</li>&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;<li class="li-three">不能包含特殊字符</li>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;<li class="li-three">长度6-12位</li>&ndash;&gt;-->
            <!--&lt;!&ndash;</ul></div>&ndash;&gt;-->

          <!--<p class="hint-p password-p" style="color: red">{{$t("m.key13")}}</p>-->
          <!--<div class="username-box">-->
            <!--<input type="password" :placeholder="$t('m.resetPassword.key8')" v-model="registerObj.password" @blur="verifyPassword(registerObj.password,$event)">-->
          <!--</div>-->
          <!--<div class="username-box">-->
            <!--<input type="password" :placeholder="$t('m.register.key11')" v-model="confirmPassword" style="width: 100%">-->
          <!--</div>-->
          <!--<div class="username-box getCode-box" v-show="isEmail">-->
            <!--<span>-->
            <!--<input type="text" :placeholder="$t('m.register.key6')" v-model="registerObj.code"></span>-->
            <!--<span>-->
            <!--<button class="getCode-btn" id="getEmailCode-btn" @click="getCode(2,$event)">{{$t("m.register.key7")}}</button></span>-->
          <!--</div>-->
          <!--<div class="username-box getCode-box" v-show="isPhone">-->
            <!--<span>-->
            <!--<input type="text" :placeholder="$t('m.register.key6')" v-model="registerObj.code"></span>-->
            <!--<span>-->
            <!--<button class="getCode-btn" id="getPhoneCode-btn" @click="getCode(1,$event)">{{$t("m.register.key7")}}</button></span>-->
          <!--</div>-->

         <!--<div class="tiaokuan-box"><input type="checkbox" id="tiaokuan-input"><span>{{$t("m.register.key27")}}</span><span class="xieyi-span" @click="popupModal('show')">{{$t("m.register.key28")}}</span> </div>-->
          <!--<button class="login-btn" v-show="isPhone" @click="register(1,$event)">{{$t("m.register.key")}}</button>-->
          <!--<button class="login-btn" v-show="isEmail" @click="register(2,$event)">{{$t("m.register.key")}}</button>-->
          <!--<router-link to="/login"><p class="goRegister-p"><span class="loginText-span">{{$t("m.register.key14")}}</span></p></router-link>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="background-box">-->
        <!--<img src="../assets/img/loginBeijin2.png" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;用户协议弹出框&ndash;&gt;-->
    <!--<div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
      <!--<div class="modal-dialog" role="document">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
            <!--<h4 class="modal-title" id="myModalLabel">-->
              <!--{{$t("m.register.key28")}}-->
            <!--</h4>-->
          <!--</div>-->
          <!--<div class="modal-body-box modal-body-boxTwo">-->

            <!--<div class="modal-body ">-->
             <!--<p>{{$t("m.register.key29")}}</p>-->
              <!--<p>{{$t("m.register.key30")}}</p>-->
              <!--<p>{{$t("m.register.key31")}}</p>-->
              <!--<p>{{$t("m.register.key32")}}</p>-->
              <!--<p>{{$t("m.register.key33")}}</p>-->
              <!--<p>{{$t("m.register.key34")}}</p>-->
              <!--<p>{{$t("m.register.key35")}}</p>-->
              <!--<p>{{$t("m.register.key36")}}</p>-->
              <!--<p>{{$t("m.register.key37")}}</p>-->
              <!--<p>{{$t("m.register.key38")}}</p>-->
              <!--<p>{{$t("m.register.key39")}}</p>-->
              <!--<p>{{$t("m.register.key39_1")}}</p>-->
              <!--<p>{{$t("m.register.key40")}}</p>-->
              <!--<p>{{$t("m.register.key41")}}</p>-->
              <!--<p>{{$t("m.register.key42")}}</p>-->
              <!--<p>{{$t("m.register.key43")}}</p>-->
              <!--<p>{{$t("m.register.key44")}}</p>-->
              <!--<p>{{$t("m.register.key45")}}</p>-->
              <!--<p>{{$t("m.register.key46")}}</p>-->
              <!--<p>{{$t("m.register.key47")}}</p>-->
              <!--<p>{{$t("m.register.key48")}}</p>-->
              <!--<p>{{$t("m.register.key49")}}</p>-->
              <!--<p>{{$t("m.register.key50")}}</p>-->
              <!--<p>{{$t("m.register.key51")}}</p>-->
              <!--<p>{{$t("m.register.key52")}}</p>-->
              <!--<p>{{$t("m.register.key53")}}</p>-->
              <!--<p>{{$t("m.register.key54")}}</p>-->
              <!--<p>{{$t("m.register.key55")}}</p>-->
              <!--<p>{{$t("m.register.key56")}}</p>-->
              <!--<p>{{$t("m.register.key57")}}</p>-->
              <!--<p>{{$t("m.register.key58")}}</p>-->
              <!--<p>{{$t("m.register.key60")}}</p>-->
              <!--<p>{{$t("m.register.key61")}}</p>-->
              <!--<p>{{$t("m.register.key62")}}</p>-->
              <!--<p>{{$t("m.register.key63")}}</p>-->
              <!--<p>{{$t("m.register.key64")}}</p>-->
              <!--<p>{{$t("m.register.key65")}}</p>-->
              <!--<p>{{$t("m.register.key66")}}</p>-->
              <!--<p>{{$t("m.register.key67")}}</p>-->
              <!--<p>{{$t("m.register.key68")}}</p>-->
              <!--<p>{{$t("m.register.key69")}}</p>-->
              <!--<p>{{$t("m.register.key70")}}</p>-->
              <!--<p>{{$t("m.register.key71")}}</p>-->
              <!--<p>{{$t("m.register.key72")}}</p>-->
              <!--<p>{{$t("m.register.key73")}}</p>-->
              <!--<p>{{$t("m.register.key74")}}</p>-->
              <!--<p>{{$t("m.register.key75")}}</p>-->
              <!--<p>{{$t("m.register.key76")}}</p>-->
              <!--<p>{{$t("m.register.key77")}}</p>-->
              <!--<p>{{$t("m.register.key78")}}</p>-->
              <!--<p>{{$t("m.register.key79")}}</p>-->
              <!--<p>{{$t("m.register.key80")}}</p>-->
              <!--<p>{{$t("m.register.key81")}}</p>-->
              <!--<p>{{$t("m.register.key82")}}</p>-->
              <!--<p>{{$t("m.register.key83")}}</p>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="modal-footer">-->
            <!--&lt;!&ndash;<button type="button" class="btn btn-default" data-dismiss="modal">&ndash;&gt;-->
            <!--&lt;!&ndash;取消&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;{{$t("m.key5")}}&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;</button>&ndash;&gt;-->
            <!--<button type="button" class="btn btn-primary" @click="popupModal('hide')">-->
              <!--&lt;!&ndash;{{$t("m.key6")}}&ndash;&gt;-->
              <!--{{$t("m.setting.key19")}}-->
            <!--</button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import Qs from "qs";-->
  <!--export default {-->
    <!--data(){-->
      <!--return{-->
        <!--baseUrl:this.GLOBAL.baseUrl,-->
        <!--isPhone:false,-->
        <!--isEmail:true,-->
        <!--time:60,-->
        <!--usernameP:false,-->
        <!--passwordP:false,-->
        <!--phoneP:false,-->
        <!--emailP:false,-->
        <!--registerObj:{-->
          <!--email:"",-->
          <!--phone:"",-->
          <!--username:"",-->
          <!--code:"",-->
          <!--password:"",-->
        <!--},-->
        <!--getCodeObj:{-->
          <!--phone:"",-->
          <!--email:"",-->
          <!--code:""-->
        <!--},-->
        <!--phoneQz:[{"short":"AD","name":"安道尔共和国","en":"Andorra","tel":"376"},{"short":"AE","name":"阿拉伯联合酋长国","en":"UnitedArabEmirates","tel":"971"},{"short":"AF","name":"阿富汗","en":"Afghanistan","tel":"93"},{"short":"AG","name":"安提瓜和巴布达","en":"AntiguaandBarbuda","tel":"1268"},{"short":"AI","name":"安圭拉岛","en":"Anguilla","tel":"1264"},{"short":"AL","name":"阿尔巴尼亚","en":"Albania","tel":"355"},{"short":"AM","name":"亚美尼亚","en":"Armenia","tel":"374"},{"short":"","name":"阿森松","en":"Ascension","tel":"247"},{"short":"AO","name":"安哥拉","en":"Angola","tel":"244"},{"short":"AR","name":"阿根廷","en":"Argentina","tel":"54"},{"short":"AT","name":"奥地利","en":"Austria","tel":"43"},{"short":"AU","name":"澳大利亚","en":"Australia","tel":"61"},{"short":"AZ","name":"阿塞拜疆","en":"Azerbaijan","tel":"994"},{"short":"BB","name":"巴巴多斯","en":"Barbados","tel":"1246"},{"short":"BD","name":"孟加拉国","en":"Bangladesh","tel":"880"},{"short":"BE","name":"比利时","en":"Belgium","tel":"32"},{"short":"BF","name":"布基纳法索","en":"Burkina-faso","tel":"226"},{"short":"BG","name":"保加利亚","en":"Bulgaria","tel":"359"},{"short":"BH","name":"巴林","en":"Bahrain","tel":"973"},{"short":"BI","name":"布隆迪","en":"Burundi","tel":"257"},{"short":"BJ","name":"贝宁","en":"Benin","tel":"229"},{"short":"BL","name":"巴勒斯坦","en":"Palestine","tel":"970"},{"short":"BM","name":"百慕大群岛","en":"BermudaIs.","tel":"1441"},{"short":"BN","name":"文莱","en":"Brunei","tel":"673"},{"short":"BO","name":"玻利维亚","en":"Bolivia","tel":"591"},{"short":"BR","name":"巴西","en":"Brazil","tel":"55"},{"short":"BS","name":"巴哈马","en":"Bahamas","tel":"1242"},{"short":"BW","name":"博茨瓦纳","en":"Botswana","tel":"267"},{"short":"BY","name":"白俄罗斯","en":"Belarus","tel":"375"},{"short":"BZ","name":"伯利兹","en":"Belize","tel":"501"},{"short":"CA","name":"加拿大","en":"Canada","tel":"1"},{"short":"","name":"开曼群岛","en":"CaymanIs.","tel":"1345"},{"short":"CF","name":"中非共和国","en":"CentralAfricanRepublic","tel":"236"},{"short":"CG","name":"刚果","en":"Congo","tel":"242"},{"short":"CH","name":"瑞士","en":"Switzerland","tel":"41"},{"short":"CK","name":"库克群岛","en":"CookIs.","tel":"682"},{"short":"CL","name":"智利","en":"Chile","tel":"56"},{"short":"CM","name":"喀麦隆","en":"Cameroon","tel":"237"},{"short":"CN","name":"中国","en":"China","tel":"86"},{"short":"CO","name":"哥伦比亚","en":"Colombia","tel":"57"},{"short":"CR","name":"哥斯达黎加","en":"CostaRica","tel":"506"},{"short":"CS","name":"捷克","en":"Czech","tel":"420"},{"short":"CU","name":"古巴","en":"Cuba","tel":"53"},{"short":"CY","name":"塞浦路斯","en":"Cyprus","tel":"357"},{"short":"CZ","name":"捷克","en":"CzechRepublic","tel":"420"},{"short":"DE","name":"德国","en":"Germany","tel":"49"},{"short":"DJ","name":"吉布提","en":"Djibouti","tel":"253"},{"short":"DK","name":"丹麦","en":"Denmark","tel":"45"},{"short":"DO","name":"多米尼加共和国","en":"DominicaRep.","tel":"1890"},{"short":"DZ","name":"阿尔及利亚","en":"Algeria","tel":"213"},{"short":"EC","name":"厄瓜多尔","en":"Ecuador","tel":"593"},{"short":"EE","name":"爱沙尼亚","en":"Estonia","tel":"372"},{"short":"EG","name":"埃及","en":"Egypt","tel":"20"},{"short":"ES","name":"西班牙","en":"Spain","tel":"34"},{"short":"ET","name":"埃塞俄比亚","en":"Ethiopia","tel":"251"},{"short":"FI","name":"芬兰","en":"Finland","tel":"358"},{"short":"FJ","name":"斐济","en":"Fiji","tel":"679"},{"short":"FR","name":"法国","en":"France","tel":"33"},{"short":"GA","name":"加蓬","en":"Gabon","tel":"241"},{"short":"GB","name":"英国","en":"UnitedKingdom","tel":"44"},{"short":"GD","name":"格林纳达","en":"Grenada","tel":"1809"},{"short":"GE","name":"格鲁吉亚","en":"Georgia","tel":"995"},{"short":"GF","name":"法属圭亚那","en":"FrenchGuiana","tel":"594"},{"short":"GH","name":"加纳","en":"Ghana","tel":"233"},{"short":"GI","name":"直布罗陀","en":"Gibraltar","tel":"350"},{"short":"GM","name":"冈比亚","en":"Gambia","tel":"220"},{"short":"GN","name":"几内亚","en":"Guinea","tel":"224"},{"short":"GR","name":"希腊","en":"Greece","tel":"30"},{"short":"GT","name":"危地马拉","en":"Guatemala","tel":"502"},{"short":"GU","name":"关岛","en":"Guam","tel":"1671"},{"short":"GY","name":"圭亚那","en":"Guyana","tel":"592"},{"short":"HK","name":"香港特别行政区","en":"Hongkong","tel":"852"},{"short":"HN","name":"洪都拉斯","en":"Honduras","tel":"504"},{"short":"HT","name":"海地","en":"Haiti","tel":"509"},{"short":"HU","name":"匈牙利","en":"Hungary","tel":"36"},{"short":"ID","name":"印度尼西亚","en":"Indonesia","tel":"62"},{"short":"IE","name":"爱尔兰","en":"Ireland","tel":"353"},{"short":"IL","name":"以色列","en":"Israel","tel":"972"},{"short":"IN","name":"印度","en":"India","tel":"91"},{"short":"IQ","name":"伊拉克","en":"Iraq","tel":"964"},{"short":"IR","name":"伊朗","en":"Iran","tel":"98"},{"short":"IS","name":"冰岛","en":"Iceland","tel":"354"},{"short":"IT","name":"意大利","en":"Italy","tel":"39"},{"short":"","name":"科特迪瓦","en":"IvoryCoast","tel":"225"},{"short":"JM","name":"牙买加","en":"Jamaica","tel":"1876"},{"short":"JO","name":"约旦","en":"Jordan","tel":"962"},{"short":"JP","name":"日本","en":"Japan","tel":"81"},{"short":"KE","name":"肯尼亚","en":"Kenya","tel":"254"},{"short":"KG","name":"吉尔吉斯坦","en":"Kyrgyzstan","tel":"331"},{"short":"KH","name":"柬埔寨","en":"Kampuchea(Cambodia)","tel":"855"},{"short":"KP","name":"朝鲜","en":"NorthKorea","tel":"850"},{"short":"KR","name":"韩国","en":"Korea","tel":"82"},{"short":"KT","name":"科特迪瓦共和国","en":"RepublicofIvoryCoast","tel":"225"},{"short":"KW","name":"科威特","en":"Kuwait","tel":"965"},{"short":"KZ","name":"哈萨克斯坦","en":"Kazakstan","tel":"327"},{"short":"LA","name":"老挝","en":"Laos","tel":"856"},{"short":"LB","name":"黎巴嫩","en":"Lebanon","tel":"961"},{"short":"LC","name":"圣卢西亚","en":"St.Lucia","tel":"1758"},{"short":"LI","name":"列支敦士登","en":"Liechtenstein","tel":"423"},{"short":"LK","name":"斯里兰卡","en":"SriLanka","tel":"94"},{"short":"LR","name":"利比里亚","en":"Liberia","tel":"231"},{"short":"LS","name":"莱索托","en":"Lesotho","tel":"266"},{"short":"LT","name":"立陶宛","en":"Lithuania","tel":"370"},{"short":"LU","name":"卢森堡","en":"Luxembourg","tel":"352"},{"short":"LV","name":"拉脱维亚","en":"Latvia","tel":"371"},{"short":"LY","name":"利比亚","en":"Libya","tel":"218"},{"short":"MA","name":"摩洛哥","en":"Morocco","tel":"212"},{"short":"MC","name":"摩纳哥","en":"Monaco","tel":"377"},{"short":"MD","name":"摩尔多瓦","en":"Moldova,Republicof","tel":"373"},{"short":"MG","name":"马达加斯加","en":"Madagascar","tel":"261"},{"short":"ML","name":"马里","en":"Mali","tel":"223"},{"short":"MM","name":"缅甸","en":"Burma","tel":"95"},{"short":"MN","name":"蒙古","en":"Mongolia","tel":"976"},{"short":"MO","name":"澳门","en":"Macao","tel":"853"},{"short":"MS","name":"蒙特塞拉特岛","en":"MontserratIs","tel":"1664"},{"short":"MT","name":"马耳他","en":"Malta","tel":"356"},{"short":"","name":"马里亚那群岛","en":"MarianaIs","tel":"1670"},{"short":"","name":"马提尼克","en":"Martinique","tel":"596"},{"short":"MU","name":"毛里求斯","en":"Mauritius","tel":"230"},{"short":"MV","name":"马尔代夫","en":"Maldives","tel":"960"},{"short":"MW","name":"马拉维","en":"Malawi","tel":"265"},{"short":"MX","name":"墨西哥","en":"Mexico","tel":"52"},{"short":"MY","name":"马来西亚","en":"Malaysia","tel":"60"},{"short":"MZ","name":"莫桑比克","en":"Mozambique","tel":"258"},{"short":"NA","name":"纳米比亚","en":"Namibia","tel":"264"},{"short":"NE","name":"尼日尔","en":"Niger","tel":"977"},{"short":"NG","name":"尼日利亚","en":"Nigeria","tel":"234"},{"short":"NI","name":"尼加拉瓜","en":"Nicaragua","tel":"505"},{"short":"NL","name":"荷兰","en":"Netherlands","tel":"31"},{"short":"NO","name":"挪威","en":"Norway","tel":"47"},{"short":"NP","name":"尼泊尔","en":"Nepal","tel":"977"},{"short":"","name":"荷属安的列斯","en":"NetheriandsAntilles","tel":"599"},{"short":"NR","name":"瑙鲁","en":"Nauru","tel":"674"},{"short":"NZ","name":"新西兰","en":"NewZealand","tel":"64"},{"short":"OM","name":"阿曼","en":"Oman","tel":"968"},{"short":"PA","name":"巴拿马","en":"Panama","tel":"507"},{"short":"PE","name":"秘鲁","en":"Peru","tel":"51"},{"short":"PF","name":"法属玻利尼西亚","en":"FrenchPolynesia","tel":"689"},{"short":"PG","name":"巴布亚新几内亚","en":"PapuaNewCuinea","tel":"675"},{"short":"PH","name":"菲律宾","en":"Philippines","tel":"63"},{"short":"PK","name":"巴基斯坦","en":"Pakistan","tel":"92"},{"short":"PL","name":"波兰","en":"Poland","tel":"48"},{"short":"PR","name":"波多黎各","en":"PuertoRico","tel":"1787"},{"short":"PT","name":"葡萄牙","en":"Portugal","tel":"351"},{"short":"PY","name":"巴拉圭","en":"Paraguay","tel":"595"},{"short":"QA","name":"卡塔尔","en":"Qatar","tel":"974"},{"short":"","name":"留尼旺","en":"Reunion","tel":"262"},{"short":"RO","name":"罗马尼亚","en":"Romania","tel":"40"},{"short":"RU","name":"俄罗斯","en":"Russia","tel":"7"},{"short":"SA","name":"沙特阿拉伯","en":"SaudiArabia","tel":"966"},{"short":"SB","name":"所罗门群岛","en":"SolomonIs","tel":"677"},{"short":"SC","name":"塞舌尔","en":"Seychelles","tel":"248"},{"short":"SD","name":"苏丹","en":"Sudan","tel":"249"},{"short":"SE","name":"瑞典","en":"Sweden","tel":"46"},{"short":"SG","name":"新加坡","en":"Singapore","tel":"65"},{"short":"SI","name":"斯洛文尼亚","en":"Slovenia","tel":"386"},{"short":"SK","name":"斯洛伐克","en":"Slovakia","tel":"421"},{"short":"SL","name":"塞拉利昂","en":"SierraLeone","tel":"232"},{"short":"SM","name":"圣马力诺","en":"SanMarino","tel":"378"},{"short":"","name":"东萨摩亚(美)","en":"SamoaEastern","tel":"684"},{"short":"","name":"西萨摩亚","en":"SanMarino","tel":"685"},{"short":"SN","name":"塞内加尔","en":"Senegal","tel":"221"},{"short":"SO","name":"索马里","en":"Somali","tel":"252"},{"short":"SR","name":"苏里南","en":"Suriname","tel":"597"},{"short":"ST","name":"圣多美和普林西比","en":"SaoTomeandPrincipe","tel":"239"},{"short":"SV","name":"萨尔瓦多","en":"EISalvador","tel":"503"},{"short":"SY","name":"叙利亚","en":"Syria","tel":"963"},{"short":"SZ","name":"斯威士兰","en":"Swaziland","tel":"268"},{"short":"TD","name":"乍得","en":"Chad","tel":"235"},{"short":"TG","name":"多哥","en":"Togo","tel":"228"},{"short":"TH","name":"泰国","en":"Thailand","tel":"66"},{"short":"TJ","name":"塔吉克斯坦","en":"Tajikstan","tel":"992"},{"short":"TM","name":"土库曼斯坦","en":"Turkmenistan","tel":"993"},{"short":"TN","name":"突尼斯","en":"Tunisia","tel":"216"},{"short":"TO","name":"汤加","en":"Tonga","tel":"676"},{"short":"TR","name":"土耳其","en":"Turkey","tel":"90"},{"short":"TT","name":"特立尼达和多巴哥","en":"TrinidadandTobago","tel":"1809"},{"short":"TW","name":"台湾省","en":"Taiwan","tel":"886"},{"short":"TZ","name":"坦桑尼亚","en":"Tanzania","tel":"255"},{"short":"UA","name":"乌克兰","en":"Ukraine","tel":"380"},{"short":"UG","name":"乌干达","en":"Uganda","tel":"256"},{"short":"US","name":"美国","en":"UnitedStatesofAmerica","tel":"1"},{"short":"UY","name":"乌拉圭","en":"Uruguay","tel":"598"},{"short":"UZ","name":"乌兹别克斯坦","en":"Uzbekistan","tel":"233"},{"short":"VC","name":"圣文森特岛","en":"SaintVincent","tel":"1784"},{"short":"VE","name":"委内瑞拉","en":"Venezuela","tel":"58"},{"short":"VN","name":"越南","en":"Vietnam","tel":"84"},{"short":"YE","name":"也门","en":"Yemen","tel":"967"},{"short":"YU","name":"南斯拉夫","en":"Yugoslavia","tel":"381"},{"short":"ZA","name":"南非","en":"SouthAfrica","tel":"27"},{"short":"ZM","name":"赞比亚","en":"Zambia","tel":"260"},{"short":"ZR","name":"扎伊尔","en":"Zaire","tel":"243"},{"short":"ZW","name":"津巴布韦","en":"Zimbabwe","tel":"263"}],-->
        <!--confirmPassword:"",-->
        <!--region:"86",-->
        <!--phoneQzTwo:[-->
          <!--{-->
            <!--"short":"CN","name":"中国","en":"China","tel":"86"-->
          <!--}-->
        <!--]-->
      <!--}-->

    <!--},-->
    <!--beforeDestroy(){-->
      <!--window.clearInterval(this.interval)-->
    <!--},-->
    <!--mounted(){-->
      <!--this.selectCountries();-->
      <!--this.selectRegister();-->
      <!--$('#box').keyup(function(){-->
        <!--var c=$(this);-->
        <!--if(/[^\d]/.test(c.val())){//替换非数字字符-->
          <!--var temp_amount=c.val().replace(/[^\d]/g,'');-->
          <!--$(this).val(temp_amount);-->
        <!--}-->
      <!--})-->
    <!--},-->
    <!--methods:{-->
      <!--//选择注册方式-->
      <!--selectRegister(way){-->
       <!--$(".hint-p").hide();-->
       <!--this.registerObj.email = "";-->
       <!--this.registerObj.phone = "";-->
       <!--this.registerObj.username = "";-->
       <!--this.registerObj.password = "";-->
       <!--this.registerObj.code = "";-->
        <!--if(way === 1){-->
          <!--this.isPhone = true;-->
          <!--this.isEmail = false;-->
        <!--}else if(way === 2){-->
          <!--this.isPhone = false;-->
          <!--this.isEmail = true;-->
        <!--}-->
        <!--$(".phone-email span").on("click",function () {-->

          <!--$(this).addClass("active").siblings().removeClass("active");-->
        <!--})-->
      <!--},-->
      <!--//选择国家手机号-->
      <!--selectCountries(){-->
        <!--let vueThis = this;-->
        <!--$("#user-msg-ul li").on("click",function () {-->
          <!--var str = ($(this).children(".phone-span").text());-->
          <!--// if(str !== "86"){-->
          <!--//   alert(vueThis.$t("m.key14"))-->
          <!--// }else {-->
          <!--//-->
          <!--// }-->
          <!--$(".nation-phone").text("+"+str);-->
          <!--vueThis.region = str;-->
        <!--})-->
      <!--},-->
      <!--//校验手机-->
      <!--verifyPhone(str,e){-->
        <!--var event = window.event || e;-->
        <!--var dom = $(event.currentTarget);-->
        <!--if(this.IsPhone(str)){-->
          <!--dom.parent().parent(".username-box").siblings(".phone-p").css("display","none");-->
        <!--}else {-->
          <!--dom.parent().parent(".username-box").siblings(".phone-p").css("display","block");-->
        <!--}-->
      <!--},-->
      <!--//校验邮箱-->
      <!--verifyEmail(str,e){-->
        <!--var event = window.event || e;-->
        <!--var dom = $(event.currentTarget);-->
        <!--if(this.verEmail(str)){-->
          <!--dom.parent(".username-box").siblings(".email-p").css("display","none");-->
        <!--}else {-->
          <!--dom.parent(".username-box").siblings(".email-p").css("display","block");-->
        <!--}-->
      <!--},-->
      <!--//校验用户名-->
      <!--verifyUser(str,e){-->
        <!--var event = window.event || e;-->
        <!--var dom = $(event.currentTarget);-->
        <!--if(this.verifyUsername(str)){-->
          <!--dom.parent(".username-box").siblings(".username-p").css("display","none");-->
        <!--}else {-->
          <!--dom.parent(".username-box").siblings(".username-p").css("display","block");-->
        <!--}-->
      <!--},-->
      <!--//校验密码-->
      <!--verifyPassword(str,e){-->
        <!--var event = window.event || e;-->
        <!--var dom = $(event.currentTarget);-->
        <!--if(this.isNumberOr_Letter(str)){-->
          <!--dom.parent(".username-box").siblings(".password-p").css("display","none");-->
        <!--}else {-->
          <!--dom.parent(".username-box").siblings(".password-p").css("display","block");-->
        <!--}-->
      <!--},-->
      <!--//获取验证码-->
      <!--getCode(index,e){-->
        <!--var event = window.event || e;-->
        <!--var getCodeObj = {};-->
        <!--var path;-->
        <!--var vueThis = this;-->
        <!--if(index === 1){-->
          <!--if(!this.registerObj.phone){-->
            <!--alert(this.$t("m.register.key15"));-->
            <!--return false;-->
          <!--}else if(this.IsPhone(this.registerObj.phone) !== true){-->
            <!--alert(this.$t("m.key2"));-->
            <!--return false;-->
          <!--}else {-->
            <!--// if(this.region !== "86"){-->
            <!--//   getCodeObj.mobile = this.region + this.registerObj.phone-->
            <!--// }else {-->
            <!--//   getCodeObj.mobile = this.registerObj.phone;-->
            <!--// }-->
            <!--path = "sendSMS";-->
            <!--getCodeObj.mobile = this.registerObj.phone;-->
            <!--getCodeObj.countryCode = this.region;-->
            <!--getCodeObj = Qs.stringify(getCodeObj);-->
            <!--let btn = $(event.currentTarget);-->
            <!--btn.attr("disabled", true).css("cursor", "not-allowed");-->
            <!--this.$axios({-->
              <!--method:"POST",-->
              <!--url:this.baseUrl + "v1/user/" + path,-->
              <!--dataType:"json",-->
              <!--data:getCodeObj,-->
              <!--headers: {-->
                <!--'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'-->
              <!--}-->
            <!--}).then(function (res) {-->
              <!--if(res.data.code === 200){-->
                <!--vueThis.countDown(btn);-->
                <!--// alert(vueThis.$t("m.register.key16"));-->
              <!--}else {-->
                <!--btn.removeAttr("disabled").css("cursor","pointer");-->
                <!--if(res.data.code === 1003){-->
                  <!--alert(vueThis.$t("m.register.key17"));-->
                <!--}else if(res.data.code === 500){-->
                  <!--alert(vueThis.$t("m.register.key18"));-->
                <!--}else if (res.data.code === 501) {-->
                  <!--alert(vueThis.$t("m.register.key84"));-->
                <!--} else if (res.data.code === 502) {-->
                  <!--alert(vueThis.$t("m.register.key85"));-->
                <!--}-->
              <!--}-->
            <!--}).catch(function (err) {-->
              <!--btn.removeAttr("disabled").css("cursor","pointer");-->
            <!--})-->
          <!--}-->
        <!--}else if(index === 2){-->
          <!--if(!this.registerObj.email){-->
            <!--alert(vueThis.$t("m.register.key4"));-->
            <!--return false;-->
          <!--}else if(this.vmf(this.registerObj.email) !== true){-->
            <!--alert(this.$t("m.key3"));-->
            <!--return false;-->
          <!--}else{-->
            <!--getCodeObj.email = this.registerObj.email;-->
            <!--path = "sendEmail";-->
            <!--getCodeObj = Qs.stringify(getCodeObj);-->
            <!--let btn = $(event.currentTarget);-->
            <!--btn.attr("disabled", true).css("cursor", "not-allowed");-->
            <!--this.$axios({-->
              <!--method:"POST",-->
              <!--url:this.baseUrl + "v1/user/" + path,-->
              <!--dataType:"json",-->
              <!--data:getCodeObj,-->
              <!--headers: {-->
                <!--'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'-->
              <!--}-->
            <!--}).then(function (res) {-->
              <!--if(res.data.code === 200){-->
                <!--vueThis.countDown(btn);-->
              <!--}else {-->
                <!--btn.removeAttr("disabled").css("cursor","pointer");-->
                <!--if(res.data.code === 1004){-->
                  <!--alert(vueThis.$t("m.register.key24"));-->
                <!--}else if(res.data.code === 500){-->
                  <!--alert(vueThis.$t("m.register.key24"));-->
                <!--}-->
              <!--}-->
            <!--}).catch(function (err) {-->
              <!--btn.removeAttr("disabled").css("cursor","pointer");-->
            <!--})-->
          <!--}-->
        <!--}-->


      <!--},-->
      <!--//注册-->
      <!--register(way,e){-->
        <!--var registerObj = {};-->
        <!--var path;-->
        <!--var event = window.event || e;-->
        <!--if(!this.registerObj.username){-->
          <!--alert(this.$t("m.register.key5"));-->
          <!--return false;-->
        <!--}  else if(this.verifyUsername(this.registerObj.username) !== true){-->
          <!--alert(this.$t("m.register.key8"));-->
          <!--return false;-->
        <!--}-->
        <!--if(way=== 1){-->
          <!--if(!this.registerObj.phone){-->
            <!--alert(this.$t("m.register.key15"));-->
            <!--return false;-->
          <!--}else {-->
            <!--if(this.IsPhone(this.registerObj.phone) !== true){-->
              <!--alert(this.$t("m.key2"));-->
              <!--return false;-->
            <!--}else{-->
              <!--registerObj.mobile = this.registerObj.phone;-->
              <!--registerObj.countryCode = this.region;-->
              <!--path = "mobileRegister";-->
            <!--}-->
          <!--}-->
        <!--}else if(way === 2){-->
          <!--if(!this.registerObj.email){-->
            <!--alert(this.$t("m.register.key4"));-->
            <!--return false;-->
          <!--}else {-->
            <!--if(this.vmf(this.registerObj.email)){-->
              <!--registerObj.email = this.registerObj.email;-->
              <!--path = "emailRegister";-->
            <!--}else {-->
              <!--alert(this.$t("m.key3"));-->
              <!--return false;-->
            <!--}-->

          <!--}-->
        <!--}-->
         <!--if(!this.registerObj.password){-->
          <!--alert(this.$t("m.login.key10"));-->
          <!--return false;-->
        <!--}else if(this.isNumberOr_Letter(this.registerObj.password)!== true){-->
          <!--alert(this.$t("m.key13"));-->
          <!--return false;-->
        <!--}-->
        <!--else  if(!this.confirmPassword){-->
          <!--alert(this.$t("m.register.key11"));-->
          <!--return false;-->
        <!--}else  if(this.registerObj.password !== this.confirmPassword){-->
          <!--alert(this.$t("m.register.key19"));-->
          <!--return false;-->
        <!--}else if(!this.registerObj.code){-->
          <!--alert(this.$t("m.register.key6"));-->
          <!--return false;-->
        <!--}-->
        <!--else if(!$("#tiaokuan-input").prop("checked")){-->
          <!--// alert(this.$t("m.register.key19"));-->
          <!--alert(this.$t("m.register.key26"));-->
          <!--return false;-->
        <!--}-->
        <!--else {-->
          <!--registerObj.username = this.registerObj.username;-->
          <!--registerObj.code = this.registerObj.code;-->
          <!--registerObj.password = this.registerObj.password;-->
          <!--registerObj = Qs.stringify(registerObj);-->
          <!--var vueThis = this;-->
          <!--this.$axios({-->
            <!--method:"post",-->
            <!--url:this.baseUrl + "v1/user/" + path,-->
            <!--data:registerObj,-->
            <!--headers: {-->
              <!--'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'-->
            <!--}-->
          <!--}).then(function (res) {-->
            <!--if(res.data.code === 200){-->
                <!--alert(vueThis.$t("m.register.key20"));-->
                <!--vueThis.$router.push("/login");-->
            <!--}else {-->
              <!--if(res.data.code === 1002){-->
                <!--alert(vueThis.$t("m.register.key21"));-->
              <!--}else if(res.data.code === 2){-->
                <!--alert(vueThis.$t("m.register.key22"));-->
              <!--}else if(res.data.code === 3){-->
                <!--alert(vueThis.$t("m.register.key23"));-->
              <!--}else if(res.data.code === 4){-->
                <!--alert(vueThis.$t("m.register.key23"));-->
              <!--}else if(res.data.code === 1001){-->
                <!--alert(vueThis.$t("m.register.key25"));-->
              <!--}-->
            <!--}-->
          <!--}).catch(function (err) {-->

          <!--})-->
        <!--}-->
      <!--},-->
      <!--popupModal(index){-->
        <!--if(index === "show"){-->
          <!--$("#myModal").modal("show")-->
        <!--}else {-->
          <!--$("#myModal").modal("hide")-->
        <!--}-->

      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style scoped>-->
  <!--*{-->
    <!--color: #fff;-->
  <!--}-->
  <!--.hint-p {-->
    <!--display: none;-->
  <!--}-->
  <!--.parent-box{-->
    <!--background: #5714d1;-->
    <!--/*padding-bottom: 285px;*/-->
    <!--padding-top: 120px;-->
    <!--min-width: 1200px;-->
  <!--}-->
  <!--.login-box{-->
    <!--padding: 10px 0 20px 0;-->
    <!--margin: 0 auto;-->
    <!--width: 408px;-->
    <!--border: 1px solid #e4d494;-->
    <!--text-align: left;-->
    <!--border-radius: 10px;-->
  <!--}-->
  <!--.login-p{-->
    <!--text-align: center;-->
    <!--font-size: 18px;-->
    <!--font-weight: bold;-->
    <!--margin-bottom: 20px;-->
    <!--border-bottom: 1px solid #e4d494;-->
    <!--padding-bottom: 10px;-->
    <!--padding-left: -40px;-->
  <!--}-->
  <!--.register-center{-->
    <!--padding: 0 40px;-->
  <!--}-->
  <!--.login-text{-->
    <!--font-size: 29px;-->
    <!--margin-bottom: 11px;-->
  <!--}-->
  <!--.phone-email{-->
    <!--font-size: 18px;-->
    <!--margin-bottom: 20px;-->
  <!--}-->
  <!--.phone-email span{-->
    <!--margin-right: 15px;-->
    <!--padding-bottom: 5px;-->
    <!--cursor: pointer;-->
  <!--}-->
  <!--.username-box{-->
    <!--margin-bottom: 25px;-->
  <!--}-->
  <!--.selected-countries-box{-->
    <!--width:15% ;-->
    <!--padding-left: 10px;-->
    <!--cursor: pointer;-->
  <!--}-->
  <!--.phoneQz-box{-->
    <!--overflow: hidden;-->
    <!--width: 100%;-->
    <!--height: 300px;-->
    <!--overflow-y: auto;-->
  <!--}-->
  <!--.user-msg-ul li span{-->
    <!--color: black;-->
  <!--}-->
  <!--.user-msg-ul li span:first-child{-->
    <!--margin-right: 10px;-->
  <!--}-->
  <!--.getCode-box{-->
    <!--justify-content: space-between;-->
  <!--}-->
  <!--.getCode-btn{-->
    <!--float: right;-->
    <!--background: transparent;-->
    <!--border: none;-->
  <!--}-->
  <!--.tiaokuan-box{-->
    <!--display: flex;-->
  <!--}-->
  <!--.tiaokuan-box input {-->
    <!--margin-right: 5px;-->
  <!--}-->
  <!--.xieyi-span {-->
    <!--color: #e4d494;-->
    <!--cursor: pointer;-->
    <!--margin-left: 5px;-->
  <!--}-->
  <!--.username-box,.password-box{-->
    <!--display: flex;-->
    <!--border-bottom: 1px solid #e4d494;-->
    <!--padding-bottom: 10px;-->
  <!--}-->
  <!--.forgetPassword{-->
    <!--color: #e4d494;-->
    <!--font-size: 12px;-->
    <!--margin-top: 5px;-->
    <!--text-align: right;-->
    <!--cursor: pointer;-->
  <!--}-->
  <!--.login-btn{-->
    <!--width: 100%;-->
    <!--background-color: transparent;-->
    <!--color: #e4d494;-->
    <!--border: 1px solid #e4d494;-->
    <!--border-radius: 19px;-->
    <!--font-size: 16px;-->
    <!--margin-top: 30px;-->
    <!--padding: 6px 0;-->
    <!--margin-bottom: 28px;-->
  <!--}-->
  <!--.goRegister-p{-->
    <!--font-size: 14px;-->
    <!--color: #e4d494;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.loginText-span{-->
    <!--color: #e4d494;-->
    <!--margin-left: 5px;-->
  <!--}-->
 <!--.login-box input,.login-box select{-->
   <!--background: transparent;-->
   <!--border: none;-->
   <!--outline: none;-->
 <!--}-->
  <!--select{-->
    <!--width: 58px;-->
    <!--margin-left: 20px;-->
  <!--}-->
  <!--input{-->
    <!--padding-left: 5px;-->
  <!--}-->
  <!--.background-box{-->
    <!--padding-top: 128px;-->
    <!--overflow: hidden;-->
    <!--min-width: 1200px;-->
     <!--}-->
  <!--.user-msg-ul{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.user-msg-ul li{-->
    <!--width: 100%;-->
    <!--color: black;-->
    <!--padding-left: 20px;-->
  <!--}-->
  <!--.user-msg-ul li:hover{-->
    <!--width: 100%;-->
    <!--color: black;-->
    <!--background: #ecf6ff;-->
  <!--}-->
  <!--.active{-->
    <!--border-bottom: 2px solid #e4d494;-->
    <!--font-size: 22px;-->
  <!--}-->
  <!--.activeTwo{-->
    <!--border-bottom: 1px solid red;-->
  <!--}-->
  <!--/*弹出框*/-->
  <!--.modal-title{-->
    <!--font-size: 16px;-->
    <!--color: #000;-->
  <!--}-->
  <!--.modal-body-box{-->
    <!--padding: 33px 40px;-->

  <!--}-->
  <!--.modal-body p{-->
    <!--color: black;-->
    <!--text-align: left;-->
  <!--}-->
  <!--.modal-body input{-->
    <!--width: 100%;-->
    <!--height:40px;-->
    <!--font-size: 14px;-->
    <!--border: 1px solid #d5dce3;-->
    <!--border-radius: 20px;-->
    <!--outline: none;-->
    <!--padding-left: 15px;-->
  <!--}-->
  <!--.modal-footer{-->
    <!--padding-left: 55px;-->
    <!--padding-right: 55px;-->
    <!--padding-bottom: 63px;-->
    <!--border-top: none;-->
  <!--}-->
  <!--.btn-primary{-->
    <!--width: 100%;-->
    <!--border-radius: 20px;-->
    <!--background: #4a31c2;-->
    <!--font-size: 14px;-->
  <!--}-->

  <!--@media (min-width: 768px) {-->
    <!--.modal-dialog {-->
      <!--width: 800px;-->
      <!--margin: 30px auto;-->
    <!--}-->
  <!--}-->
<!--</style>-->
