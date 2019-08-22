<template>
  <div class="home">
    <div class="home_bcg">
      <img src="../assets/img/banner.jpg" alt="">
    </div>
    <div class="home_tips" v-if="hometype==1">
      <div class="center-box">
        <div class="tips_l"> <img src="../assets/img/u68.png" alt="">
          <span class="tips_main">{{$t("m.home.key34")}}</span>
        </div>
        <div class="tips_r">
          {{$t("m.home.key33")}}>
        </div>
      </div>
    </div>
    <!--搜索-->
    <div class="search_box">
      <div class="center-box">
        <div class="bottom-box-text">
          <div class="bottom-box-text_l">
            <div class="block_box">
            </div>
            <span> {{$t("m.home.key2")}}</span>
          </div>
          <div>
            <div class="go_search">
              <input type="text" class="search_inp" :placeholder="placehoder" v-model="search_data">
              <span class="el-icon-search search" @click="tosearch()"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--首页底部-->
    <div class="center-box">
      <!--块详情-->
      <div class="block_detail">
        <div class="block_detail_top_main" v-if="hometype!==1">
          <div class="block_detail_top">
            {{$t("m.home.key9")}}1{{$t("m.home.key10")}}:"46546"
          </div>
          <div class="block_center">
            <div class="block_c_t" :class="[this.hometype==3?'bgc2':'',this.hometype==4?'bgc3':'']">
              <span v-for="(item,index) in block_top_data[0]" :key="index">{{item}}:{{search_data}}</span>
            </div>
            <div class="block_c_main">
              <div class="block_c_main_item" v-for="(item,index) in block_top_data[1]" :key="index">
                <span>{{item}}</span>
                <span>{{user_detail_data[1][index]}}</span>
                <div class="wallet_change" v-if="hometype==3&&index==2">
                  <span @click="wallet_change(true)"> {{$t("m.home.key31")}}</span>
                  <span @click="wallet_change(false)"> {{$t("m.home.key32")}}</span>
                </div>
              </div>
            </div>
            <div class="block_c_main">
              <div class="block_c_main_item" v-for="(item,index) in block_top_data[2]" :key="index">
                <span>{{item}}</span>
                <span>{{user_detail_data[2][index]}}</span>
              </div>
            </div>
          </div>
          <div class="next" v-if="hometype!==3">
            <span>
              <<{{$t( "m.home.key12")}}1513</span>
                <span>{{$t("m.home.key13")}}1513>></span>
          </div>
          <div class="search_box block_bottom_title" v-show="hometype!==4">
            <div class="bottom-box-text">
              <div class="bottom-box-text_l">
                {{$t("m.home.key14")}}:
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div class="center-bottom-box" v-show="hometype!==4">
          <div class="list-box">
            <ul class="header-ul">
              <li :class="'li'+index" v-for="(item,index) in homedata.pagination" :key="index">{{item}}</li>
            </ul>
            <!--首页数据-->
            <div v-if="hometype==1">
              <ul class="center-ul" v-for="(item,index) in datas" :key="index">
                <li class="li0">{{item.number}}</li>
                <li class="li1">{{timestampToTime(item.timestamp)}}</li>
                <li class="li2">
                  <img src="../assets/img/KIR.png" alt="" v-if="item.minerFiner==1">
                  <img src="../assets/img/NA.png" alt="" v-if="item.minerFiner!==1">
                </li>
                <li class="li3">{{item.hash}}</li>
                <li class="li4">{{changpow(item.difficulty)}}</li>
                <li class="li5">{{item.transactionNumber}}</li>
                <li class="li6">{{item.reward}}</li>
              </ul>
            </div>
            <!--搜索钱包地址-->
            <div v-if="hometype==3">
              <ul class="center-ul" v-for="(item,index) in datas" :key="index">
                <li class="li0">{{item.number}}</li>
                <li class="li1">{{item.hash}}</li>
                <li class="li2">{{item.gasUsed}}</li>
                <li class="li3">{{item.hash}}</li>
                <li class="li4">{{item.gasUsed}}</li>
                <li class="li5">{{item.number}}</li>
              </ul>
            </div>
          </div>
          <!--分页-->
          <div class="page-box">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[20,10,50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="totalSize">
            </el-pagination>
          </div>
        </div>
        <div class="nomore nomorecolor" v-if="hometype==4">
          {{$t("m.home.key30")}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setCookie, getCookie, delCookie } from "../assets/cookie";
import bus from "../assets/eventBus"
export default {
  inject: ["reload"],
  data() {
    return {
      baseUrl: this.GLOBAL.baseUrl,
      baseUrlTwo: this.GLOBAL.baseUrlTwo,
      baseUrltree: this.GLOBAL.baseUrltree,
      baseHerf: this.GLOBAL.baseHerf,
      blockList: "",
      totalSize: 0,
      rate: "",
      placehoder: this.$t("m.home.key8"),
      blockListObj: {
        page: 1,
        pageSize: 20
      },
      block_top_data: [],
      user_detail_data:[[],[],[]],
      newBlock: "",
      page_bg: false,
      hometype: 1,
      homedata: { pagination: [] },
      search_data: "",
      homedatalist: [],
      paginationdata: '',
      datas: [],
      wallet_changes: true
    }
  },
  created() {
    // this.getWtcPoolBlockInfo();
    if (getCookie("isLogin")) {
      this.getAccountMill();
      this.getRate();
    }
  },
  mounted() {
    this.sethomedata()
    // this.tosearch()
  },
  methods: {
    wallet_change(val) {
      this.wallet_changes = val
      this.datas = []
      if (this.wallet_changes) {
        this.homedata.pagination = [this.$t("m.home.key26"), this.$t("m.myMill.key27"), this.$t("m.home.key22"), this.$t("m.home.key23"), this.$t("m.home.key24"), this.$t("m.home.key25")]
        for (let i = 0; i < this.homedatalist.block.length; i++) {
          this.datas.push(JSON.parse(this.homedatalist.block[i]))
        }
      } else if (!this.wallet_changes) {
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]
        for (let i = 0; i < this.homedatalist.transcationArray.length; i++) {
          this.datas.push(JSON.parse(this.homedatalist.transcationArray[i]))
        }
      }
    },
    sethomedata() {
      if (this.hometype == 1) {
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]
      } else if (this.hometype == 2) {
      }
    },
    /**搜索**/
    tosearch() {
      this.search_data = this.search_data.toLocaleLowerCase()
      let regPos = /^\d+(\.\d+)?$/; //非负浮点数
      let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      let datalist = []
      let _that = this;
      if (_that.search_data.indexOf("0x") == 0 && _that.search_data == 64) {
        _that.hometype = 4
        console.log(44444444)
        //搜索钱包地址
      } else if (_that.search_data.indexOf("0x") == 0 && _that.search_data.length == 42) {
        this.block_top_data = [[this.$t("m.home.key28")],  
        [this.$t("m.setting.key1"), this.$t("m.home.key26"), this.$t("m.home.key27")],]
        console.log(3333333)
        _that.blockListObj.address = _that.search_data
                console.log(_that.blockListObj)
        _that.hometype = 3;
        this.$ajax('post', 'http://120.77.241.114:7011/v2/searchMinerInfo', this.blockListObj, function(data) {
          console.log(JSON.parse(data))
          let balance = Number(JSON.parse(data).balance) / Math.pow(10, 18);
          _that.user_detail_data[0]=["11"]
          _that.user_detail_data[1]= [balance, JSON.parse(data).TxCount]
          _that.totalSize = JSON.parse(data).blockCount
          _that.homedatalist = JSON.parse(data)
          _that.datas = []
          console.log(_that.user_detail_data)
          //账户交易
          if (_that.wallet_changes) {
            _that.homedata.pagination = [_that.$t("m.home.key26"), _that.$t("m.myMill.key27"), _that.$t("m.home.key22"), _that.$t("m.home.key23"), _that.$t("m.home.key24"), _that.$t("m.home.key25")]
            for (let i = 0; i < _that.homedatalist.block.length; i++) {
              _that.datas.push(JSON.parse(_that.homedatalist.block[i]))
            }
          } else if (!_that.wallet_changes) {
            //挖块统计
            _that.homedata.pagination = [_that.$t("m.home.key3"), _that.$t("m.myMill.key10"), _that.$t("m.home.key15"), _that.$t("m.home.key16"), _that.$t("m.home.key17"), _that.$t("m.home.key14"), _that.$t("m.home.key6")]
            for (let i = 0; i < _that.homedatalist.transcationArray.length; i++) {
              _that.datas.push(JSON.parse(_that.homedatalist.transcationArray[i]))
            }
          }
          console.log(_that.datas)
        }, function(error) {
          console.log(error)
        })
      } else if (regPos.test(_that.search_data) || regNeg.test(_that.search_data)) {
        //搜索块详情
        _that.hometype = 2;
        _that.blockListObj.param = this.search_data;
        this.homedata.pagination = [this.$t("m.home.key26"), this.$t("m.myMill.key27"), this.$t("m.home.key22"), this.$t("m.home.key23"), this.$t("m.home.key24"), this.$t("m.home.key25")]
        this.block_top_data = [[this.$t("m.myMill.key26"), this.$t("m.home.key16")],
        [this.$t("m.myMill.key10"), this.$t("m.home.key18"), this.$t("m.home.key6"), this.$t("m.home.key35")],
        [this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key21")]]
        console.log(2222222)
        this.$ajax('post', 'http://120.77.241.114:7011/v2/searchBlockInfo', this.blockListObj, function(data) {
          let blockInfo=JSON.parse(data).blockInfo[0]
           _that.user_detail_data[0]=[blockInfo.hash]
          _that.user_detail_data[1]=[_that.timestampToTime(blockInfo.timestamp),blockInfo.size,blockInfo.MinerblockRewad,blockInfo.MinerTxReward]
          _that.user_detail_data[2]=[_that.changpow(blockInfo.difficulty),blockInfo.transactionNumber,blockInfo.miner]
          console.log(JSON.parse(data))
          console.log(_that.user_detail_data)
        }, function(error) {
          console.log(error)
        })
      } else {
        //首页
        console.log(1111111)
        _that.hometype = 1;
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]
        this.$ajax('get', 'http://120.77.241.114:7011/v2/getChainBlockInfo?page=' + this.blockListObj.page + '&pageSize=' + this.blockListObj.pageSize, null, function(data) {
          _that.homedatalist = JSON.parse(data).chainInfo
          _that.totalSize = JSON.parse(data).chainCount
          for (let i = 0; i < _that.homedatalist.length; i++) {
            _that.datas[i] = JSON.parse(_that.homedatalist[i])
            if (_that.datas[i].reward.length < 4) {
              _that.datas[i].reward = Number(_that.datas[i].reward).toFixed(9)
            }
            _that.$set(_that.datas, i, _that.datas[i])
          }
          console.log(_that.datas)
        }, function(error) {
          console.log(error);
        })
      }
    },
    //用户矿机信息
    getAccountMill() {
      var vueThis = this;
      this.$axios({
        method: "post",
        url: this.baseUrl + "v1/wtcPool/minerAccountInfo",
        data: { "username": getCookie("username"), "token": getCookie("token") },
        withCredentials: false
      }).then(function(res) {
        if (res.data.code === 200) {
          bus.$emit("payfee", res.data.accountInfo.payFee);
        } else {
          if (res.data.code === 402) {
            alert(vueThis.$t("m.myMill.key13"))
          } else if (res.data.code === 404) {
            alert(vueThis.$t("m.myMill.key14"))
          }
        }
      }).catch(function(err) {
      })
    },
    //获取汇率
    getRate() {
      var vueThis = this;
      this.$axios({
        method: "get",
        url: this.baseUrl + "v1/rate/getRate",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        withCredentials: false
      }).then(function(res) {

        if (res.data.code === 200) {
          if (res.data.msg === "success") {
            vueThis.rate = res.data.rate.rate;
          }
        } else {
        }
      }).catch(function(err) {

      })
    },
    //获取成熟块
    // getWtcPoolBlockInfo() {
    //   var vueThis = this;
    //   this.$axios({
    //     method: "get",
    //     url: this.baseUrl + "v1/wtcPool/wtcPoolBlockInfo?page=" + vueThis.blockListObj.page + "&pageSize=" + vueThis.blockListObj.pageSize,
    //     withCredentials: false
    //   }).then(function(res) {
    //     if (res.data.code === 200) {
    //       vueThis.blockList = res.data.data.array;
    //       vueThis.totalSize = res.data.data.total;
    //       console.log(vueThis.blockList)
    //     } else {
    //     }
    //   }).catch(function(err) {

    //   })
    // },
    handleSizeChange(val) {
      this.blockListObj.pageSize = val;
      // this.getWtcPoolBlockInfo();
      this.tosearch()
    },

    handleCurrentChange(val) {
      this.blockListObj.page = val;
      // this.getWtcPoolBlockInfo();
      this.tosearch()
      console.log(111)
      this.page_bg = true
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /*color: #000;*/
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  /*display: inline-block;*/
}
























































/*顶部*/

.home_bcg img {
  width: 100%;
  height: 1.85rem;
}

.home_tips {
  width: 100%;
  height: 0.2rem;
  background-color: #f8fafc;
  color: #2e73e8;
  text-align: left;
  line-height: 0.2rem
}

.tips_main {
  margin-left: 0.05rem;
  margin-right: 0.25rem;
}

.tips_l {
  float: left;
  overflow: hidden
}

.tips_r {
  height: 0.2rem;
  float: right;
}

.body-left {
  padding-top: 0.84rem;
}

.search_box {
  margin-top: 0.15rem;
  margin-bottom: 0.12rem;
}

.go_search {
  width: 1.9rem;
  height: 0.18rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 0.09rem;
}

.search {
  width: 0.4rem;
  height: 0.18rem;
  line-height: 0.18rem;
  padding-right: 0.09rem;
  text-align: right;
  font-size: 0.08rem;
}

.search_inp {
  width: 1.5rem;
  font-size: 14px;
  border: none;
  margin-left: 0.1rem;
}

input::-webkit-input-placeholder {
  color: rgb(204, 204, 204) !important;
}

input:-moz-placeholder {
  color: rgb(204, 204, 204) !important;
}

input::-moz-placeholder {
  color: rgb(204, 204, 204) !important;
}

input:-ms-input-placeholder {
  color: rgb(204, 204, 204) !important;
}

.body-left-two {
  width: 3.2rem;
  height: 3.5rem;
  margin-top: 54px;
  padding: 0px 0.2rem 0.5rem 0.2rem;
  border: 1px solid #e4d494;
  border-radius: 0.1rem;
  margin-right: 2.5rem;
}

.body-right {
  margin-top: 0.34rem;
}

.parent-box {
  border-bottom: 1px solid #e4d494;
  padding-bottom: 0.23rem;
  padding-top: 0.5rem;
}

.parent-box:last-child {
  border-bottom: none;
}

.newBlock-box {
  display: flex;
  justify-content: space-between;
}

.children-box {
  padding: 0 0.01rem;
}

.newBlock-box span {
  font-size: 0.2rem;
  font-weight: bold;
  font-style: italic;
}

.newBlock-box span img {
  margin-right: 0.13rem;
}

.wtcImg-box {
  text-align: left;
  font-size: 0.2rem;
  font-weight: bold;
  font-style: italic;
  padding-bottom: 0.27rem;
}

.ratio-box {
  display: flex;
  justify-content: space-between;
}

.wtcImg-box img {
  margin-right: 13px;
}

.home-header-body {
  width: 12rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.Mention-money-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 0.2rem;
}

.Total-revenue-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}

.quantity-span {
  font-size: 0.2rem;
}

.wtc-text-span {
  font-weight: normal;
  margin-left: 0.08rem;
  font-size: 0.16rem;
}

.login-box {
  width: 2rem;
  margin-top: 0.47rem;
  padding: 0.07rem 0;
  border: 1px solid #e4d494;
  color: #e4d494;
  border-radius: 0.19rem;
  cursor: pointer;
}

.login-box a {
  color: #e4d494;
}









































/*卡片*/

.center-box {
  width: 6rem;
  margin: 0 auto;
}

.center-top-box {
  display: flex;
  background: url("../assets/img/liutonlv.png");
  border-radius: 0.1rem;
  box-shadow: 0 0 0.1rem 1px #ccc;
}

.top-box-left {
  width: 30%;
  padding: 0.65rem 0 1.1rem 0;
}

.top-box-left p {
  margin-top: 0.25rem;
  font-size: 0.16rem;
  font-weight: bold;
  color: #000000;
}

.top-box-right {
  width: 70%;
  display: flex;
}

.box-right-left {
  padding-top: 0.4rem;
  width: 50%;
}

.box-right-right {
  width: 50%;
}

.box-right-left ul li {
  line-height: 0.54rem;
}

.box-right-left ul li span {
  display: inline-block;
}

.li-span-left {
  width: 30%;
  text-align: right;
  padding-right: 0.16rem;
  font-size: 14px;
  color: #666;
}

.li-span-right {
  width: 70%;
  text-align: left;
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.li-span-right span {
  color: #574a6e;
  font-size: 14px;
  padding-left: 0.07rem;
}
















































/*成熟块*/

.bottom-box-text {
  font-size: 0.08rem;
  font-weight: bold;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block_box {
  width: 0.05rem;
  height: 0.05rem;
  background-color: #2e73e8;
  display: inline-block;
  margin-right: 0.05rem;
}

.bottom-box-text_l {
  font-size: 0.08rem;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}

.list-box {
  box-shadow: 0px 0px 0.08rem 0.02rem rgba(0, 0, 0, 0.06);
}

.header-ul {
  /*padding: 5px 0;*/
  background: #f8fafc;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.15rem;
}

.header-ul li {
  height: 0.25rem;
  font-size: 0.07rem;
  line-height: 0.25rem;
  color: rgba(0, 0, 0, 0.63921568627451);
  font-weight: 700;
  font-style: normal;
}

.center-ul {
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.15rem;
  border-bottom: 1px solid #f2f2f2;
}

.center-ul li {
  height: 0.25rem;
  font-size: 14px;
  line-height: 0.25rem;
}

.active_color {
  color: #2e73e8;
}

.li0 {
  width: 0.71rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2e73e8;
}

.li1 {
  width: 1.15rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li2 {
  width: 0.98rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li3 {
  width: 0.95rem;
  margin-right: 0.83rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2e73e8;
}

.li4 {
  width: 0.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li5 {
  width: 0.93rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li6 {
  width: 0.54rem;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
}

















































/*分页*/

.page-box {
  text-align: right;
  margin-top: 0.3rem;
  margin-bottom: 0.6rem;
}
















































/**底部**/

.block_detail {
  text-align: left;
}

.block_detail_top {
  font-size: 0.16rem;
  font-weight: 400;
  padding-left: 0.4rem;
  margin-bottom: 0.4rem
}

.block_center {
  border: 1px solid #f9f5f9;
  box-sizing: border-box;
}

.block_c_t {
  height: 0.54rem;
  padding: 0 0.6rem;
  background-color: #f9f5f9;
  border: 1px solid #f9f5f9;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bgc2 {
  background-color: #e9f2ff;
}

.bgc3 {
  background-color: #ffe7d7;
}

.block_c_main {
  height: 0.6rem;
  padding: 0 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-overflow: ellipsis;
}

.block_c_main_item {
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
 text-overflow: ellipsis;
}

.wallet_change {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2e73e8;
}

.next {
  display: flex;
  justify-content: space-between;
  color: #2F8CFF;
  margin-top: 0.1rem;
  padding: 0 0.6rem;
  cursor: pointer;
}

.block_bottom_title {
  border: none;
}

.nomore {
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.6rem;
}

.nomorecolor {
  color: rgba(255, 102, 0, 0.698039215686274);
}














































/*媒体查询*/

@media (max-width: 1200px) {
  .home-parent-box,
  .center-box {
    padding: 0 0.25rem;
  }
}
</style>
