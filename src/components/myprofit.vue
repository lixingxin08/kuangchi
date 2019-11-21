<template>
  <div class="myMill">
    <div class="mymills" v-if="!noson_type">
      <!--收益头部-->
      <div class="mylcted_top flex_a">
        <div class="content_box">
          <div class="flex_a">
            <div v-for="(item,index) in profit_top" :key="index" class="flex_C mylcted_top_main">
              <span class="mylcted_top_item">{{item}}</span>
              <div class="mylcted_top_item font_b" v-show="index==0">
                <span>{{format(Number(profit_data.needPayAndPayHistory.waitPay),8)||0}} WTC</span>
                <div class="profit_tips">{{$t("m.account.key6")}}</div>
              </div>

              <div class="mylcted_top_item font_b" v-show="index==1">
                <span>{{format(Number(profit_data.needPayAndPayHistory.paidTotal),8)||0}} WTC</span>
                <div class="profit_tips">{{$t("m.account.key7")}}</div>
              </div>
              <div class="mylcted_top_item font_b" v-show="index==2">
                <span>{{format(Number(profit_data.todayEarningsAndAllEarnings.todatEarnings),8)||0}} WTC</span>
                <div class="profit_tips">{{$t("m.account.key8")}}</div>
              </div>
              <div class="mylcted_top_item font_b" v-show="index==3">
                <span> {{format(Number(profit_data.todayEarningsAndAllEarnings.allEarnings),8)||0}} WTC</span>
               
                <div class="profit_tips">{{$t("m.account.key9")}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="mymill_bottom">
          <div class="record flex_b">
            <div class="record_l flex_f">
              <div
                class="record_item fontweight1"
                @click="change_record(true)"
                :class="recordtype?'record_item_active':''"
              >{{$t("m.myprofit.key5")}}</div>
              <div
                class="record_item fontweight1"
                @click="change_record(false)"
                :class="recordtype?'':'record_item_active'"
              >{{$t("m.myprofit.key6")}}</div>
            </div>
            <div class="record_r flex_f">
              <div class="record_r_item">
                <el-dropdown trigger="click" placement="bottom">
                  <span class="el-dropdown-link">
                    <span class="flex_b all">
                      <span>{{derive_top}}</span>
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="myprofit_head">
                    <el-dropdown-item>
                      <div
                        class="myprofit_slide"
                        @click="timeprofitdata(1)"
                      >{{$t("m.myprofit.key21")}}</div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <div
                        class="myprofit_slide"
                        @click="timeprofitdata(2)"
                      >{{$t("m.myprofit.key22")}}</div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <div
                        class="myprofit_slide"
                        @click="timeprofitdata(3)"
                      >{{$t("m.myprofit.key17")}}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="record_r_item export" @click="exportExcel()">{{export_name}}</div>
            </div>
          </div>
          <div class="have_record">
            <!--收益-->
            <div class="record_main" v-if="recordtype">
              <div>
              <ul class="flex_b record_main_item record_head">
                <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
              </ul>
              </div>
              <div  v-if="haverecord">
              <ul
                class="flex_b record_main_item"
                v-for="(item,index) in profit_data.subUserEarningsListInfo.array"
                :key="index"
              >
                <li class="record_main_li">{{profit_data.subUserEarningsListInfo.array[index].date}}</li>
                <li
                  class="record_main_li"
                > {{profit_data.subUserEarningsListInfo.array[index].miningEarningsMoney}}</li>
                <li
                  class="record_main_li"
                > {{profit_data.subUserEarningsListInfo.array[index].payfee}}</li>
                <li
                  class="record_main_li"
                >{{profit_data.subUserEarningsListInfo.array[index].actualEarningsMoney}}</li>
                <li
                  class="record_main_li"
                >{{changpow(profit_data.subUserEarningsListInfo.array[index].dayHr,2)}}H/s</li>
                <li
                  class="record_main_li"
                >{{profit_data.subUserEarningsListInfo.array[index].rewardType==2?'solo':'pplns'}}</li>
                <li
                  class="record_main_li"
                  :class="profit_data.subUserEarningsListInfo.array[index].status>0?'color_4':'color_3'"
                >{{profit_data.subUserEarningsListInfo.array[index].status>0?$t("m.account.key12"):$t("m.account.key11")}}</li>
              </ul>
              </div>
            </div>
            <!--支付-->
            <div class="record_main" v-if="!recordtype">
              <div>
              <ul class="flex_b record_main_item record_head">
                <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
              </ul>
              </div>
              <div  v-if="haverecord">
              <ul
                class="flex_b record_main_item"
                v-for="(item,index) in profit_data.subUserPayListInfo.array"
                :key="index"
              >
                <li
                  class="record_main_li"
                >{{profit_data.subUserPayListInfo.array[index].payTime}}</li>
                <li
                  class="record_main_li"
                >{{profit_data.subUserPayListInfo.array[index].settleTime}}</li>
                <li
                  class="record_main_li"
                >{{format(profit_data.subUserPayListInfo.array[index].payMoney,8)}}{{profit_data.subUserPayListInfo.array[index].payType==2?'（ERC20）':''}}</li>
                <li
                  class="record_main_li"
                >{{filterFun(profit_data.subUserPayListInfo.array[index].toAddress)}}</li>
                <li
                  class="record_main_li"
                >{{filterFun(profit_data.subUserPayListInfo.array[index].hash)}}</li>
              </ul>
              </div>
            </div>
            <div class="record_page" v-if="profit_params.type==0||profit_params.type==3">
              <div v-if="haverecord">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="profit_params.page"
                :page-sizes="[10,20,30]"
                :page-size="100"
                layout="total,sizes, prev, pager, next, jumper"
                :total="totalSize[0]"
              ></el-pagination>
              </div>
            </div>
          </div>
           <div class="nprecord" v-if="!haverecord">{{$t("m.wallet.key39")}}</div>
        </div>
      </div>
    </div>
    <noson v-if="noson_type"></noson>
  </div>
</template>
<script>
import noson from "./no_son.vue";
export default {
  components: {
    noson
  },
  data() {
    return {
      recordtype: true,
      recorddata: [],
      totalSize: [0],
      export_name: "",
      haverecord: true,
      profit_params: {
        username: localStorage.getItem("username"),
        token: localStorage.getItem("token"),
        subusername: localStorage.getItem("subusername"),
        type: 0,
        page:1,
        pageSize:10
      },
      profit_type: true,
      profit_data: {
        needPayAndPayHistory: {
          waitPay: 0,
          paidTotal: 0
        },
        todayEarningsAndAllEarnings: {
          todatEarnings: 0,
          allEarnings: 0
        },
        subUserPayListInfo: {
          // array: [
          //   {
          //     paytime: 0,
          //     payType: 0,
          //     payMoney: 0,
          //     toAddress: 0,
          //     hash: 0
          //   },
          // ],
          total: 3,
          totalPage: 1
        },
        subUserEarningsListInfo: {
          // array: [
          //   {
          //     date: '',
          //     waitpay: '',
          //     paidTotal: '',
          //     earningsMoney: '',
          //     dayHr: '',
          //     rewardType: '',
          //     status: ''
          //   },
          // ],
          total: 1,
          totalPage: 1
        }
      },

      profit_topdata: "",
      profit_top: [
        this.$t("m.myprofit.key3"),
        this.$t("m.myprofit.key4"),
        this.$t("m.myprofit.key1"),
        this.$t("m.myprofit.key2")
      ],
      derive_item: [
        this.$t("m.myprofit.key17"),
        this.$t("m.myprofit.key21"),
        this.$t("m.myprofit.key22"),
        this.$t("m.myprofit.key17")
      ],
      derive_top: "",
      tableData: "",
      noson_type: false,
      list: []
    };
  },
  created() {
    this.recorddata = [];
    this.tableData = "";
    this.list = [];
    if (localStorage.getItem("subnameList") == null||localStorage.getItem("subnameList") < 1) {
      this.$router.push({ name: "unsub" });
    } else {
      this.change_record(true);
      // this.getprofitdata();//收益信息
      this. timeprofitdata(3)
    }
  },
  methods: {
    change_record(val) {
      let _that=this
      this.recordtype = val;
      this.profit_params.page=1
      if (this.profit_params.type==0) {    
        this.getprofitdata();
         this.derive_top= this.$t("m.myprofit.key17");
      }
       if (this.profit_params.type!==0) {
        this.timeprofitdata(this.profit_params.type);
      }
      if (val) { 
        // console.log(this.recordtype);
        this.export_name = this.$t("m.myprofit.key18");    
        this.recorddata = [
          this.$t("m.myprofit.key7"),
          // this.$t("m.myprofit.key8"),
          this.$t("m.FAQ.key105"),
          this.$t("m.header.key6"),
          this.$t("m.FAQ.key106"),
          this.$t("m.myprofit.key9"),
          this.$t("m.myprofit.key10"),
          this.$t("m.myprofit.key11")
        ];   
            _that.$set(_that.totalSize,0,_that.profit_data.subUserEarningsListInfo.total)
      } else if (!val) {
        // console.log(this.recordtype);
        this.export_name = this.$t("m.myprofit.key19");
        // this.derive_top= this.$t("m.myprofit.key6");
        this.recorddata = [
          this.$t("m.myprofit.key12"),
          this.$t("m.myprofit.key13"),
          this.$t("m.myprofit.key14"),
          this.$t("m.myprofit.key15"),
          this.$t("m.myprofit.key16")
        ];
          _that.$set(_that.totalSize,0,_that.profit_data.subUserPayListInfo.total)
      }
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    //我的收益页
    getprofitdata() {
      let _that = this;
      // this.profit_data = data.accountInfo
      // console.log(this.profit_params);
      this.$ajax(
        "post",
        this.GLOBAL.baseUrl + "v2/earningsAndPayment",
        this.profit_params,
        function(data) {

          let dataInfo = JSON.parse(data).accountInfo;
          if(JSON.parse(data).code==1102){ 
              _that.$message.error(_that.$t("m.account.key2"));    
                  _that.setCookie('token',null)
                 _that.setCookie('username',null)
                 localStorage.removeItem('token')
                 localStorage.removeItem('isLogin')
                  localStorage.removeItem('username')
                localStorage.removeItem("change");
                localStorage.removeItem("subusername");    
                   _that.$router.push({name:'login',query:{isLogin:false}})
              }
          _that.profit_data = dataInfo;
          console.log( _that.profit_data,8888);
          
          // localStorage.setItem( _that.profit_data)    
          if(_that.recordtype==true){
       if (_that.profit_data.subUserEarningsListInfo.total==0) {
              _that.haverecord=false         
            }else{
               _that.haverecord=true
            }
            _that.$set(_that.totalSize,0,_that.profit_data.subUserEarningsListInfo.total)     
          }else{
        if (_that.profit_data.subUserPayListInfo.total==0) {   
              _that.haverecord=false
            }else{
               _that.haverecord=true
            }
              _that.$set(_that.totalSize,0,_that.profit_data.subUserPayListInfo.total)
                   
          }
          if (
            _that.profit_data.subUserEarningsListInfo.array.length == 0 &&
            _that.profit_data.subUserPayListInfo.array.length == 0
          ) {
            _that.haverecord = false;
          } 
        },
        function(error) {
          // alert("网络出现一点点问题，请稍后再试");
          _that.$message.warning(_that.$t("m.key"))
          _that.$router.push({name:'home'})
        }
      );
    },
    //导出excel
    exportExcel() {
      let _that = this;
      require.ensure([], () => {
        const { export_json_to_excel } = require("../vendor/Export2Excel");
        const tHeader = this.recorddata;
        let filterVal = [];
        let list = [];
        let keylist = [];
        //导出收益页
        // console.log(tHeader, filterVal, list, "8888888888");
        if (_that.recordtype) {
          filterVal = [
            "date",
            // "earningsMoney",
            "miningEarningsMoney",
             "payfee",
              "actualEarningsMoney",
            "dayHr",
            "rewardType",
            "status"
          ];
          // list = JSON.parse(
          //   JSON.stringify(_that.profit_data.subUserEarningsListInfo.array)
          // );
          list = _that.tableData;
          // console.log(list);
          for (var i = 0; i < list.length; i++) {
            //  list[i].date = _that.timestampToTime3(list[i].date);
            list[i].rewardType = list[i].rewardType == 2 ? _that.$t("m.account.key13") : "pplns";
            // list[i].status = list[i].status > 0 ? _that.$t("m.account.key12") :_that.$t("m.account.key11");
            // list[i].dayHr=JSON.parse(JSON.stringify(list[i].dayHr))
            list[i].dayHr = _that.changpow(list[i].dayHr, 2) + "H/s";
            // console.log(list[i].dayHr );
          }
        }
        //导出支付页
        else if (!_that.recordtype) {
          // 上面的index、nickName、name是tableData里对象的属性
          filterVal = ["payTime", "settleTime", "payMoney", "toAddress", "hash"];
          this.$set(_that.list, 0, _that.profit_data.subUserPayListInfo.array);
          // list = JSON.parse(
          //   JSON.stringify(_that.profit_data.subUserPayListInfo.array)
          // );
          list = _that.tableData;
          // console.log(list);
          for (var i = 0; i < list.length; i++) {
            // list[i].paytime = _that.timestampToTime3(list[i].paytime);
            // list[i].payMoney = _that.format(list[i].payMoney,8) + list[i].payType == 2 ? '（ERC20）' : ''
          }
          // _that.getValueByKey(_that.profit_data.subUserPayListInfo.array[0], filterVal, list)
          // console.log(list, "list15555555", filterVal);
        }
        const data = _that.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "this_excel");
      });
    },
    handleSizeChange(val) {
      this.profit_params.pageSize = val;
      this.getprofitdata()
    },

    handleCurrentChange(val) {
      this.profit_params.page = val;
      this.getprofitdata()

    },
    //时间选择导出类型
    timeprofitdata(index) {
      let _that = this;
      this.profit_params.type = index;
      this.derive_top = this.derive_item[index];
      if (_that.recordtype) {
        this.$ajax(
          "post",
          this.GLOBAL.baseUrl + "v2/exportEarningsInfo",
          this.profit_params,
          function(data) {
            // console.log( "收益记录");
            // console.log(JSON.parse(data));
            if(index=='1'){
              let InfoData =JSON.parse(data).weekEarningsInfo;
              // console.log(InfoData);
              console.log(1112221);      
              _that.profit_data.subUserEarningsListInfo.array=InfoData;
              _that.tableData =JSON.parse(JSON.stringify(InfoData));
                    if (_that.tableData.length==0) {
              _that.haverecord=false
            }else{
               _that.haverecord=true
            }
               _that.$set(_that.totalSize,0,_that.tableData.length)
              //  console.log( _that.totalSize);  
            }else if(index=='2'){
              console.log(444444);
              
              let InfoData=JSON.parse(data).monthEarningsInfo;
              // console.log(InfoData);
              _that.profit_data.subUserEarningsListInfo.array=InfoData;
              _that.tableData =JSON.parse(JSON.stringify(InfoData));
             if (_that.tableData.length==0) {
              _that.haverecord=false
            }else{
               _that.haverecord=true
            } 
            }else if(index=='3'){
              let InfoData=JSON.parse(data).allEarningsInfo;
              // console.log(InfoData);
              // _that.profit_data.subUserEarningsListInfo.array=InfoData;
              _that.tableData =JSON.parse(JSON.stringify(InfoData));
              _that.getprofitdata()

            }
            // console.log(_that.tableData);
          },
          function(error) {
            // alert("网络出现一点点问题，请稍后再试");
            _that.$message.warning(_that.$t("m.key"))
          }
        );
      }
      if (!_that.recordtype) {
        // _that.tableData = data.allEarningsInfo
        this.$ajax(
          "post",
          this.GLOBAL.baseUrl + "v2/exportPayInfo",
          this.profit_params,
          function(data) {
            // console.log( "支付记录");
            // console.log(data);
            if(index=='1'){
              let InfoData =JSON.parse(data).weekEarningsInfo;
                console.log(InfoData,'InfoDataInfoDataInfoDataInfoData');
                
              _that.profit_data.subUserPayListInfo.array=InfoData;
              _that.tableData =JSON.parse(JSON.stringify(InfoData));
              if (_that.tableData.length==0) {
              _that.haverecord=false
            }else{
               _that.haverecord=true
            } 
            }else if(index=='2'){
              let InfoData=JSON.parse(data).MonthEarningsInfo; 
              _that.profit_data.subUserPayListInfo.array=InfoData;
              _that.tableData = JSON.parse(JSON.stringify(InfoData));
              if (_that.tableData.length==0) {
              _that.haverecord=false
            }else{
               _that.haverecord=true
            } 
            }else if(index=='3'){
              let InfoData=JSON.parse(data).AllEarningsInfo; 
            // _that.profit_data.subUserPayListInfo.array=InfoData;
              _that.tableData = JSON.parse(JSON.stringify(InfoData));
               _that.getprofitdata()
            }
            //  console.log(_that.tableData);
          },
          function(error) {
            // alert("网络出现一点点问题，请稍后再试");
            _that.$message.warning(_that.$t("m.key"))
          }
        );
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  },
  beforeDestroy() {
    this.recorddata = [];
    this.profit_data = [];
    this.profit_topdata = [];
    this.tableData = "";
    this.list = [];
  }
};
</script>
<style scoped>
.content_box {
  width: 6rem;
  margin: 0 auto;
}
.fontweight1{
  font-weight: 700
}
.mylcted_top {
  height: 1.85rem;
  background: url("../assets/img/myltc11.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  color: #fff;
}

.color_3 {
  color: red;
}

.color_4 {
  color: green;
}
.font_b {
  font-size: 0.24rem;
}
.mylcted_top_main {
  width: 1.4rem;
  padding: 0.1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
    position: relative;
}

.mylcted_top_item {
  height: 0.3rem;
  font-family: MicrosoftYaHei-Bold;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: rgba(255, 255, 255, 1);
}
.profit_tips {
  width: 100%;
  display: none;
  top: 0.25rem;
  left: 0px;
  position: absolute;
  text-align: center;
}
.mylcted_top_item:hover .profit_tips {
  display: block;
}
.flex_b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex_a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flex_C {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.flex_b_c {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.flex_f {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.record {
  margin-bottom: 0.1rem;
}

.record_item {
  min-width: 0.5rem;
  height: 0.25rem;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  line-height: 0.25rem;
  color: rgba(51, 51, 51, 1);
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 0.05rem;
}

.record_item:hover {
  color: rgba(46, 115, 232, 1);
}

.record_item_active {
  color: rgba(46, 115, 232, 1);
  border-bottom: 3px solid rgba(46, 115, 232, 1);
}

.record_main {
  width: 6rem;
  text-align: left;
}

.record_main_item {
  height: 0.25rem;
  line-height: 0.25rem;
  padding-right: 0.1rem;
  text-overflow: ellipsis;
  padding-left: 0.1rem;
  text-align: center;
}

.record_head {
  background-color: #eef1fc;
}

.record_main_li {
  flex: 1;
  text-overflow: ellipsis;
  font-size: 14px;
  text-align: left;
}

.record_page {
  margin-top: 0.4rem;
  display: flex;
  justify-content: flex-end;
}

.record_r_item {
  height: 0.15rem;
  line-height: 0.15rem;
  margin-left: 0.1rem;
  border-radius: 4px;
  padding: 0 0.05rem;
  border: solid 1px rgba(220, 220, 220, 1);
}

.mymill_bottom {
  margin-top: 0.22rem;
  min-width: 810px;
   margin-bottom: 0.4rem;
}

.record_r_item:hover {
  border: solid 1px rgba(46, 115, 232, 1);
  color: rgba(46, 115, 232, 1);
}


.myprofit_head {
  margin-top: 0px;
}

.myprofit_slide {
  padding: 0 0.1rem;
}

.nprecord {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #999;
  text-align: center;
  font-size: 0.15rem;
}
.nomore {
    font-size: 0.12rem;
    text-align: center;
}

.nomorecolor {
    color: #999;
}
</style>




