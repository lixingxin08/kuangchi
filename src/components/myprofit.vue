<template>
  <div class="myMill">
    <div class="mymills" v-if="!noson_type">
      <!--收益头部-->
      <div class="mylcted_top flex_a">
        <div class="content_box">
          <div class="flex_a">
            <div v-for="(item,index) in profit_top" :key="index" class="flex_C mylcted_top_main">
              <span class="mylcted_top_item">{{item}}</span>
              <span class="mylcted_top_item font_b" v-show="index==0">
                {{format(Number(profit_data.needPayAndPayHistory.waitPay),8)||0}}WTC
                <div class="profit_tips">还没有支付给矿工的WTC</div>
              </span>

              <span class="mylcted_top_item font_b" v-show="index==1">
                {{format(Number(profit_data.needPayAndPayHistory.paidTotal),8)||0}}WTC
                <div class="profit_tips">总共已经支付给矿工的WTC</div>
              </span>
              <span class="mylcted_top_item font_b" v-show="index==2">
                {{format(Number(profit_data.todayEarningsAndAllEarnings.todatEarnings),8)||0}}WTC
                <div class="profit_tips">指今天挖矿的WTC总收益</div>
              </span>
              <span class="mylcted_top_item font_b" v-show="index==3">
                {{format(Number(profit_data.todayEarningsAndAllEarnings.allEarnings),8)||0}}WTC
                <div class="profit_tips">今日收益+待支付+总支付</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="mymill_bottom">
          <div class="record flex_b">
            <div class="record_l flex_f">
              <div
                class="record_item"
                @click="change_record(true)"
                :class="recordtype?'record_item_active':''"
              >{{$t("m.myprofit.key5")}}</div>
              <div
                class="record_item"
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
          <div class="have_record" v-if="haverecord">
            <!--收益-->
            <div class="record_main" v-if="recordtype">
              <ul class="flex_b record_main_item record_head">
                <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
              </ul>

              <ul
                class="flex_b record_main_item"
                v-for="(item,index) in profit_data.subUserEarningsListInfo.array"
                :key="index"
              >
                <li class="record_main_li">{{profit_data.subUserEarningsListInfo.array[index].date}}</li>
                <li
                  class="record_main_li"
                >{{format(profit_data.subUserEarningsListInfo.array[index].earningsMoney,8)}}</li>
                <li
                  class="record_main_li"
                >{{changpow(profit_data.subUserEarningsListInfo.array[index].dayHr,2)}}H/s</li>
                <li
                  class="record_main_li"
                >{{profit_data.subUserEarningsListInfo.array[index].rewardType==2?'挖块':'pplns'}}</li>
                <li
                  class="record_main_li"
                  :class="profit_data.subUserEarningsListInfo.array[index].status>0?'color_3':'color_4'"
                >{{profit_data.subUserEarningsListInfo.array[index].status>0?'已支付':'未支付'}}</li>
              </ul>
            </div>
            <!--支付-->
            <div class="record_main" v-if="!recordtype">
              <ul class="flex_b record_main_item record_head">
                <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
              </ul>

              <ul
                class="flex_b record_main_item"
                v-for="(item,index) in profit_data.subUserPayListInfo.array"
                :key="index"
              >
                <li
                  class="record_main_li"
                >{{profit_data.subUserPayListInfo.array[index].paytime}}</li>
                <li
                  class="record_main_li"
                >{{profit_data.subUserPayListInfo.array[index].paytime}}</li>
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
            <div class="record_page">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                :page-sizes="[10,20,30]"
                :page-size="100"
                layout="sizes, prev, pager, next, jumper"
                :total="totalSize[0]"
              ></el-pagination>
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
        type: 3,
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
          array: [
            {
              paytime: 0,
              payType: 0,
              payMoney: 0,
              toAddress: "0",
              hash: "0"
            },
            {
              paytime: 0,
              payType: 0,
              payMoney: 0,
              toAddress: "0",
              hash: "0"
            }
          ],
          total: 3,
          totalPage: 1
        },
        subUserEarningsListInfo: {
          array: [
            {
              date: 0,
              waitpay: 0,
              paidTotal: 0,
              earningsMoney: "0",
              dayHr: "0",
              rewardType: 1,
              status: 1
            },
            {
              date: 0,
              waitpay: 0,
              paidTotal: 0,
              earningsMoney: "0",
              dayHr: "",
              rewardType: 1,
              status: 1
            }
          ],
          total: 4,
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
      derive_top: this.$t("m.myprofit.key1"),
      tableData: "",
      noson_type: false,
      list: []
    };
  },
  created() {
    this.recorddata = [];
    this.profit_data = [];
    this.profit_topdata = [];
    this.tableData = "";
    this.list = [];
    if (localStorage.getItem("subnameList") == null||localStorage.getItem("subnameList") < 1) {
      this.$router.push({ name: "unsub" });
    } else {
      this.change_record(true);
      this.getprofitdata();
      this.timeprofitdata(3);
    }
  },
  methods: {
    change_record(val) {
      if (val) {
        this.recordtype = true;
        this.export_name = this.$t("m.myprofit.key18");
        this.recorddata = [
          this.$t("m.myprofit.key7"),
          this.$t("m.myprofit.key8"),
          this.$t("m.myprofit.key9"),
          this.$t("m.myprofit.key10"),
          this.$t("m.myprofit.key11")
        ];
      } else if (!val) {
        this.recordtype = false;
        this.export_name = this.$t("m.myprofit.key19");
        this.recorddata = [
          this.$t("m.myprofit.key12"),
          this.$t("m.myprofit.key13"),
          this.$t("m.myprofit.key14"),
          this.$t("m.myprofit.key15"),
          this.$t("m.myprofit.key16")
        ];
      }
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    //我的收益页
    getprofitdata() {
      let _that = this;
      // this.profit_data = data.accountInfo
      console.log(this.profit_params);
      this.$ajax(
        "post",
        this.GLOBAL.baseUrl + "v2/earningsAndPayment",
        this.profit_params,
        function(data) {
          console.log(data, "profit111");
          _that.profit_data = JSON.parse(data).accountInfo;
          if (
            _that.profit_data.subUserEarningsListInfo.array.length == 0 &&
            _that.profit_data.subUserPayListInfo.array.length == 0
          ) {
            _that.haverecord = false;
          }
          console.log(
            _that.profit_data.subUserPayListInfo.array,
            "profit1222222221"
          );
        },
        function(error) {
          alert("网络出现一点点问题，请稍后再试");
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
        console.log(tHeader, filterVal, list, "8888888888");
        if (_that.recordtype) {
          filterVal = [
            "date",
            "earningsMoney",
            "dayHr",
            "rewardType",
            "status"
          ];
          list = JSON.parse(
            JSON.stringify(_that.profit_data.subUserEarningsListInfo.array)
          );
          for (var i = 0; i < list.length; i++) {
            //  list[i].date = _that.timestampToTime3(list[i].date);
            list[i].rewardType = list[i].rewardType == 2 ? "挖块" : "pplns";
            list[i].status = list[i].status > 0 ? "已支付" : "未支付";
            list[i].dayHr = _that.changpow(list[i].dayHr, 2) + "H/s";
          }
        }
        //导出支付页
        else if (!_that.recordtype) {
          // 上面的index、nickName、name是tableData里对象的属性
          console.log(_that.profit_data.subUserPayListInfo.array, "33444444");
          filterVal = ["payTime", "settleTime", "payMoney", "toAddress", "hash"];
          this.$set(_that.list, 0, _that.profit_data.subUserPayListInfo.array);
          console.log(_that.list, "lisst12222222222");
          list = JSON.parse(
            JSON.stringify(_that.profit_data.subUserPayListInfo.array)
          );
          console.log(list);
          for (var i = 0; i < list.length; i++) {
            // list[i].paytime = _that.timestampToTime3(list[i].paytime);
            // list[i].payMoney = _that.format(list[i].payMoney,8) + list[i].payType == 2 ? '（ERC20）' : ''
          }
          // _that.getValueByKey(_that.profit_data.subUserPayListInfo.array[0], filterVal, list)
          console.log(list, "list15555555", filterVal);
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
    timeprofitdata(index = 3) {
      let _that = this;
      this.profit_params.type = index;
      this.derive_top = this.derive_item[index];
      console.log(index);

      if (_that.recordtype) {
        console.log(_that.tableData);
        this.$ajax(
          "post",
          this.GLOBAL.baseUrl + "v2/exportEarningsInfo",
          this.profit_params,
          function(data) {
            _that.tableData = JSON.parse(data).allEarningsInfo;
          },
          function(error) {
            alert("网络出现一点点问题，请稍后再试");
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
            console.log(data, "时间选择导出类型1113333");
            _that.tableData = JSON.parse(data).allEarningsInfo;
          },
          function(error) {
            alert("网络出现一点点问题，请稍后再试");
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
}

.mylcted_top_item {
  height: 0.3rem;
  font-family: MicrosoftYaHei-Bold;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: rgba(255, 255, 255, 1);
  position: relative;
}
.profit_tips {
  width: 1.5rem;
  display: none;
  top: -0.1rem;
  left: 0.1rem;
  position: absolute;
  transform: translate(-50%, -50%);
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
  width: 0.5rem;
  height: 0.25rem;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  line-height: 0.25rem;
  color: rgba(51, 51, 51, 1);
  box-sizing: border-box;
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
}

.record_r_item:hover {
  border: solid 1px rgba(46, 115, 232, 1);
  color: rgba(46, 115, 232, 1);
}

.all {
  width: 0.4rem;
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
  font-size: 0.2rem;
}
</style>




