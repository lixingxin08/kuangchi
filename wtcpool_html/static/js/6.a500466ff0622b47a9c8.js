webpackJsonp([6],{W1Q4:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("mvHQ"),n=t.n(a),o=t("A0hB"),i={data:function(){return{pop_type:0,edit_son:null,sonset_head:[this.$t("m.sonset.key3"),this.$t("m.sonset.key14"),this.$t("m.sonset.key4"),this.$t("m.sonset.key5"),this.$t("m.sonset.key6"),""],sonset_data:["子账户","矿机数","创建时间","钱包地址"],sonset_inp:this.$t("m.sonset.key16"),sonset_inp_0:this.$t("m.sonset.key17"),sonset_inp_1:this.$t("m.sonset.key11"),sonset_inp_2:this.$t("m.sonset.key13"),sonset_list:[],item_index:"",subList_params:{username:localStorage.getItem("username"),token:localStorage.getItem("token"),subusername:localStorage.getItem("subusername"),address:""},add_sons:{username:localStorage.getItem("username"),subusername:"",token:localStorage.getItem("token"),address:""},setGoogleAuth:"",setPaymentCode:"",delete_params:{subusername:localStorage.getItem("subusername"),username:localStorage.getItem("username"),token:localStorage.getItem("token"),code:"",paypassword:""},delete_tips:"",testdata:{code:200,msg:"success",subList:[{name:"lilinskt1",address:"0x90990117dbaac41df782cb712df4155c58e90a6c",workerNumber:0,createTime:"1566369359"},{name:"asdjkl",address:"",workerNumber:0,createTime:"1566477212000"},{name:"asdjkl3",address:"",workerNumber:0,createTime:"1566477238000"}]}}},created:function(){this.get_sonlist(),this.add_sons.username=localStorage.getItem("subusername"),this.setGoogleAuth=localStorage.getItem("setGoogleAuth"),this.setPaymentCode=localStorage.getItem("setPaymentCode")},methods:{add_son:function(){this.pop_type=1},cancel_edit:function(){this.edit_son=null},remove:function(){this.pop_type=0,this.edit_son=null},get_sonlist:function(){var s=this;this.$ajax("post",this.GLOBAL.baseUrl+"v2/accountSubList",this.subList_params,function(e){console.log(e,"子账户管理页面"),s.sonset_list=JSON.parse(e).subList},function(s){console.log(s)})},delete_son:function(){var s=this;this.delete_tips="",""!=this.delete_params.paypassword?""!=this.delete_params.code?(console.log(this.sonset_list[this.item_index].name),this.pop_type=0,this.delete_params.subusername=this.sonset_list[this.item_index].name,this.delete_params.token=Object(o.a)("token"),console.log(this.delete_params),this.$ajax("post",this.GLOBAL.baseUrl+"v2/deleteAccountSub",this.delete_params,function(e){alert(JSON.parse(e).msg),s.get_sonlist()},function(s){console.log(s),alert("删除失败")})):this.delete_tips="请输入谷歌验证码":this.delete_tips="请输入资金密码"},delete_item:function(s){this.item_index=s,this.sonset_list[s].name!=this.add_sons.username?(this.pop_type=2,console.log(this.item_index)):this.item_index=-2},edit_sons:function(s){this.edit_son=s,this.item_index=s},address_edit:function(){if(0!==this.add_sons.address.indexOf("0x")&&42!==this.add_sons.address.length)return alert("请输入正确钱包地址"),void(this.add_sons.address="");this.pop_type=3},get_edit:function(){var s=this;this.pop_type=0,console.log(s.add_sons.address),this.add_sons.subusername=s.sonset_list[this.item_index].name,this.$ajax("post",this.GLOBAL.baseUrl+"v2/addressForAccountSub",this.add_sons,function(e){console.log(e),console.log(s),s.edit_son=-1,s.get_sonlist()},function(s){console.log(s),alert("编辑失败，请稍后再试")})},createdson:function(){console.log(this.add_sons);var s=this;if(!this.verifyUsername(this.add_sons.usersub))return this.add_sons.usersub="",alert(this.$t("m.sonset.key9"));this.addson=!1,this.removeson=!1,console.log(n()(this.add_sons)),this.$ajax("post",this.GLOBAL.baseUrl+"v2/createAccountSub",this.add_sons,function(e){console.log(e),this.add_sons.subusername="",s.get_sonlist()},function(s){console.log(s),alert("网络出现一点点问题，请稍后再试")}),this.pop_type=0}}},_={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"sonset center-box"},[t("div",{staticClass:"sonset_t"},[t("div",{staticClass:"bottom-box-text_l"},[t("div",{staticClass:"block_box"}),s._v(" "),t("span",[s._v(" "+s._s(s.$t("m.sonset.key1")))])]),s._v(" "),t("div",{staticClass:"add_btn",on:{click:function(e){return s.add_son(1)}}},[t("span",[s._v(s._s(s.$t("m.sonset.key2")))])])]),s._v(" "),t("div",{staticClass:"sonset_main"},[t("ul",{staticClass:"sonset_main_item sonset_m_head"},[t("li",{staticClass:"sonset_list1"},[s._v(s._s(s.sonset_head[0]))]),s._v(" "),t("li",{staticClass:"sonset_list2"},[s._v(s._s(s.sonset_head[1]))]),s._v(" "),t("li",{staticClass:"sonset_list3"},[s._v(s._s(s.sonset_head[2]))]),s._v(" "),t("li",{staticClass:"sonset_list4"},[s._v(s._s(s.sonset_head[3]))]),s._v(" "),t("li",{staticClass:"sonset_list5"},[s._v(s._s(s.sonset_head[4]))]),s._v(" "),t("li",{staticClass:"sonset_list6"},[s._v(s._s(s.sonset_head[5]))])]),s._v(" "),s._l(s.sonset_list,function(e,a){return t("ul",{key:a,staticClass:"sonset_main_item"},[t("li",{staticClass:"sonset_list1"},[s._v(s._s(s.sonset_list[a].name))]),s._v(" "),t("li",{staticClass:"sonset_list2"},[s._v(s._s(s.sonset_list[a].workerNumber))]),s._v(" "),t("li",{staticClass:"sonset_list3"},[s._v(s._s(s.timestampToTime(s.sonset_list[a].createTime)))]),s._v(" "),t("li",{staticClass:"sonset_list4"},[s.edit_son!==a?t("span",[s._v(s._s(s.sonset_list[a].address))]):s._e(),s._v(" "),s.edit_son==a?t("input",{directives:[{name:"model",rawName:"v-model",value:s.add_sons.address,expression:"add_sons.address"}],staticClass:"add_adress",attrs:{type:"text",placeholder:s.sonset_inp},domProps:{value:s.add_sons.address},on:{input:function(e){e.target.composing||s.$set(s.add_sons,"address",e.target.value)}}}):s._e()]),s._v(" "),t("li",{staticClass:"sonset_list5"},[s.edit_son!==a?t("span",{staticClass:"color1",on:{click:function(e){return s.edit_sons(a)}}},[s._v(s._s(s.$t("m.sonset.key7")))]):s._e(),s._v(" "),s.edit_son==a?t("span",{staticClass:"color1",on:{click:function(e){return s.address_edit(a)}}},[s._v(s._s(s.$t("m.wallet.key19")))]):s._e(),s._v(" "),s.edit_son==a?t("span",{staticClass:"sonset_list5_cancel",on:{click:function(e){return s.cancel_edit()}}},[s._v(s._s(s.$t("m.sonset.key15")))]):s._e()]),s._v(" "),t("li",{staticClass:"sonset_list6 color1",on:{click:function(e){return s.delete_item(a)}}},[s._v(s._s(s.$t("m.sonset.key8")))])])})],2),s._v(" "),0!==this.pop_type?t("div",{staticClass:"share",on:{click:function(e){return e.stopPropagation(),s.remove()}}}):s._e(),s._v(" "),1==this.pop_type?t("div",{staticClass:"add_son"},[t("div",{staticClass:"add_son_t"},[t("span",[s._v(s._s(s.$t("m.sonset.key2")))]),s._v(" "),t("span",{staticClass:"el-icon-close close_add",on:{click:function(e){return s.remove()}}})]),s._v(" "),t("div",{staticClass:"add_con_c"},[t("span",[s._v(s._s(s.$t("m.sonset.key3")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.add_sons.subusername,expression:"add_sons.subusername"}],staticClass:"add_inp",attrs:{type:"text",placeholder:s.sonset_inp_0},domProps:{value:s.add_sons.subusername},on:{input:function(e){e.target.composing||s.$set(s.add_sons,"subusername",e.target.value)}}}),s._v(" "),t("div",{staticClass:"inp_label"},[s._v(s._s(s.$t("m.sonset.key9")))])]),s._v(" "),t("div",{staticClass:"add_son_b"},[t("div",{staticClass:"btn btn_cancel",on:{click:function(e){return s.remove()}}},[s._v(s._s(s.$t("m.sonset.key15")))]),s._v(" "),t("div",{staticClass:"btn btn_click",on:{click:function(e){return s.createdson()}}},[s._v(s._s(s.$t("m.wallet.key19")))])])]):s._e(),s._v(" "),2==this.pop_type?t("div",{staticClass:"add_son remove_son"},[t("div",{staticClass:"add_son_t remove_son_t"},[t("span",[s._v(s._s(s.$t("m.sonset.key8"))+s._s(s.$t("m.sonset.key3")))]),s._v(" "),t("span",{staticClass:"el-icon-close close_add",on:{click:function(e){return s.remove()}}})]),s._v(" "),t("div",{staticClass:"remove_son_c"},[t("div",{staticClass:"flex_c remove_son_c_item"},[t("span",[s._v(s._s(s.$t("m.sonset.key10")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.delete_params.paypassword,expression:"delete_params.paypassword"}],staticClass:"add_inp",attrs:{type:"text",placeholder:s.sonset_inp_1},domProps:{value:s.delete_params.paypassword},on:{input:function(e){e.target.composing||s.$set(s.delete_params,"paypassword",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"flex_c remove_son_c_item"},[t("span",[s._v(s._s(s.$t("m.sonset.key12")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.delete_params.code,expression:"delete_params.code"}],staticClass:"add_inp",attrs:{type:"text",placeholder:s.sonset_inp_2},domProps:{value:s.delete_params.code},on:{input:function(e){e.target.composing||s.$set(s.delete_params,"code",e.target.value)}}}),s._v(" "),t("span",{staticClass:"delete_tips"},[s._v(s._s(s.delete_tips))])])]),s._v(" "),t("div",{staticClass:"add_son_b"},[t("div",{staticClass:"btn btn_cancel",on:{click:function(e){return s.remove()}}},[s._v(s._s(s.$t("m.sonset.key15")))]),s._v(" "),t("div",{staticClass:"btn btn_click",on:{click:function(e){return s.delete_son()}}},[s._v(s._s(s.$t("m.wallet.key19")))])])]):s._e(),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:3==this.pop_type,expression:"this.pop_type==3"}],staticClass:"add_son remove_son"},[t("div",{staticClass:"add_son_t remove_son_t"},[t("span",[s._v(s._s(s.$t("m.wallet.key15")))]),s._v(" "),t("span",{staticClass:"el-icon-close close_add",on:{click:function(e){return s.remove()}}})]),s._v(" "),t("div",{staticClass:"remove_son_c"},[t("div",{staticClass:"flex_c remove_son_c_item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.delete_params.paypassword,expression:"delete_params.paypassword"}],staticClass:"add_inp",attrs:{type:"text",placeholder:s.sonset_inp_1},domProps:{value:s.delete_params.paypassword},on:{input:function(e){e.target.composing||s.$set(s.delete_params,"paypassword",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"flex_c remove_son_c_item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.delete_params.code,expression:"delete_params.code"}],staticClass:"add_inp",attrs:{type:"text",placeholder:s.sonset_inp_2},domProps:{value:s.delete_params.code},on:{input:function(e){e.target.composing||s.$set(s.delete_params,"code",e.target.value)}}})])]),s._v(" "),t("div",{staticClass:"add_son_b"},[t("div",{staticClass:"btn btn_cancel",on:{click:function(e){return s.remove()}}},[s._v(s._s(s.$t("m.sonset.key15")))]),s._v(" "),t("div",{staticClass:"btn btn_click",on:{click:function(e){return s.get_edit()}}},[s._v(s._s(s.$t("m.wallet.key19")))])])])])},staticRenderFns:[]};var l=t("VU/8")(i,_,!1,function(s){t("aVZ6")},"data-v-5b55efbc",null);e.default=l.exports},aVZ6:function(s,e){}});
//# sourceMappingURL=6.a500466ff0622b47a9c8.js.map