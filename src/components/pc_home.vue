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
              <input type="text" class="search_inp" :placeholder="placehoder" v-model="search_data" @keydown="btKeyUp">
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
            {{$t("m.home.key9")}}1{{$t("m.home.key10")}}:{{user_detail_data[0][0]}}
          </div>
          <div class="block_center">
            <div class="block_c_t" :class="[this.hometype==3?'bgc2':'',this.hometype==4?'bgc3':'']">
              <span v-for="(item,index) in block_top_data[0]" :key="index">{{item}}:{{user_detail_data[0][index]}}</span>
            </div>
            <div class="block_c_main" :class="hometype!==3?'':'flex_f'">
              <div class="block_c_main_item" v-for="(item,index) in block_top_data[1]" :key="index" :class="hometype!==3?'':'wallet_top_c'">
                <span>{{item}}</span>
                <span @click="item_search(user_detail_data[1][index])">{{filterFun(user_detail_data[1][index])}}</span>
              </div>
            </div>
            <div class="block_c_main" v-if="hometype!==3">
              <div class="block_c_main_item" v-for="(item,index) in block_top_data[2]" :key="index">
                <span>{{item}}</span>
                <span @click="item_search(user_detail_data[2][index])">{{filterFun(user_detail_data[2][index])}}</span>
              </div>
            </div>
          </div>
          <div class="next" v-if="hometype==2">
            <span @click="other_block(-1)">
              <<{{$t( "m.home.key12")}}{{Number(target_data)-1}}</span>
                <span @click="other_block(1)">{{$t("m.home.key13")}}{{Number(target_data)+1}}>></span>
          </div>
          <div class="search_box block_bottom_title" v-show="hometype!==4">
            <div class="bottom-box-text">
              <div class="bottom-box-text_l"></div>
              <div class="wallet_change" v-if="hometype!==3">{{$t("m.home.key14")}}:{{comdify(datas.length)}}</div>
              <div class="wallet_change" v-if="hometype==3">
                <span @click="wallet_change(true)" class="wallet_change_item1" :class="wallet_changes?'color1':''"> {{$t("m.home.key14")}}</span>
                <span @click="wallet_change(false)" :class="wallet_changes?'':'color1'"> {{$t("m.home.key32")}}</span>
              </div>
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
              <li class="li0" @click="item_search(item.number,index)">{{comdify(item.number)}}</li>
              <li class="li1">{{timestampToTime(item.timestamp)}}</li>
              <li class="li2">
                <img src="../assets/img/KIR.png" alt="" v-if="item.minerFiner==1">
                <img src="../assets/img/NA.png" alt="" v-if="item.minerFiner!==1">
              </li>
              <li class="li3" @click="item_search(item.number)">{{item.hash}}</li>
              <li class="li4">{{changpow(item.difficulty)}}</li>
              <li class="li5">{{comdify(item.transactionNumber)}}</li>
              <li class="li6">{{format(item.reward,8)}}</li>
            </ul>
          </div>
          <!--块高度交易数-->
          <div v-if="hometype==2">
            <ul class="center-ul" v-for="(item,index) in datas" :key="index">
              <li class="li1" @click="item_search(user_detail_data[0][0])">{{filterFun(item.hash)}}</li>
              <li class="li2" @click="item_search(item.fromAddress)">{{filterFun(item.fromAddress)}}</li>
              <li class="li3" @click="item_search(item.toAddress)">{{filterFun(item.toAddress)}}</li>
              <li class="li4">{{((item.gasPrice / Math.pow(10, 18)) * item.gas).toFixed(8)}}</li>
              <li class="li5">{{comdify(item.value).toFixed(8)}}</li>
            </ul>
          </div>
          <!--搜索钱包地址 交易数-->
          <div v-if="hometype==3&&wallet_changes==true">
            <ul class="center-ul" v-for="(item,index) in datas" :key="index">
              <li class="li0">{{comdify(item.blockNumber)}}</li>
              <li class="li1" @click="item_search(item.hash)">{{filterFun(item.hash)}}</li>
              <li class="li2" @click="item_search(item.fromAddress)">{{filterFun(item.fromAddress)}}</li>
              <li class="li3" @click="item_search(item.toAddress)">{{item.toAddress}}</li>
              <li class="li4">{{((item.gasPrice / Math.pow(10, 18)) * item.gas).toFixed(8)}}</li>
              <li class="li5">{{comdify(item.value).toFixed(8)}}</li>
              <li class="li6" v-if="!wallet_changes">{{comdify(item.value).toFixed(8)}}222</li>
            </ul>
          </div>
          <!--搜索钱包地址 挖块统计-->
          <div v-if="hometype==3&&wallet_changes==false">
            <ul class="center-ul" v-for="(item,index) in datas" :key="index">
              <li class="li0" @click="item_search(item.number,index)">{{comdify(item.number)}}</li>
              <li class="li1">{{timestampToTime(item.timestamp)}}</li>
              <li class="li2">
                <img src="../assets/img/KIR.png" alt="" v-if="item.minerFiner==1">
                <img src="../assets/img/NA.png" alt="" v-if="item.minerFiner!==1">
              </li>
              <li class="li3" @click="item_search(item.number)">{{item.hash}}</li>
              <li class="li4">{{changpow(item.difficulty)}}</li>
              <li class="li5">{{comdify(item.transactionNumber)}}</li>
              <li class="li6">{{format(item.reward,8)}}</li>
            </ul>
          </div>
        </div>
        <!--分页-->
        <div class="page-box">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[20,10,30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="totalSize">
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
      username: "",
      totalSize: 0,
      target_data: '',
      rate: "",
      placehoder: this.$t("m.home.key8"),
      blockListObj: {
        page: 1,
        pageSize: 20
      },
      block_top_data: [],
      user_detail_data: [[], [], []],
      newBlock: "",
      page_bg: false,
      hometype: 1,
      homedata: { pagination: [] },
      search_data: "",
      homedatalist: {
        block: '',
        transcationArray: ''
      },
      paginationdata: '',
      datas: [],
      wallet_changes: false,
    }
  },
  created() {
    if (getCookie("isLogin")) {
      this.getAccountMill();
      this.getRate();
    }
  },
  mounted() {
    this.sethomedata()
    this.tosearch()
  },
  methods: {

    wallet_change(val) {
      this.wallet_changes = val,
        this.datas = []
      console.log(this.homedatalist)
      if (this.wallet_changes) {
        console.log("block")
        this.homedata.pagination = [this.$t("m.myMill.key27"), this.$t("m.home.key22"), this.$t("m.home.key23"), this.$t("m.home.key24"), this.$t("m.home.key25")]
        for (let i = 0; i < this.homedatalist.transcationArray.length; i++) {
          this.datas[i] = JSON.parse(this.homedatalist.transcationArray[i])
        }
      } else if (!this.wallet_changes) {
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]

        for (let i = 0; i < this.homedatalist.block.length; i++) {
          this.datas[i] = JSON.parse(this.homedatalist.block[i])
        }
      }
    },
    sethomedata() {
      if (this.hometype == 1) {
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]
      } else if (this.hometype == 4) {
        this.block_top_data = [[this.$t("m.home.key36")],
        [this.$t("m.home.key37"), this.$t("m.home.key24"), this.$t("m.home.key25")],
        [this.$t("m.home.key22"), this.$t("m.home.key23"), '']]
      }
    },
    //item搜索
    item_search(val, index) {
      this.target_data = val
      console.log(val)
      if (this.hometype == 1) {
        val=Number(val)
        this.search_data = val + '';
        this.tosearch()
      } else if (this.hometype == 2) {
        this.search_data = val + '';
        this.tosearch()
      } else if (this.hometype == 3) {
        this.search_data = val + '';
        this.tosearch()
      }
      else if (this.hometype == 4 && val.length > 20) {
        this.search_data = val + '';
        this.tosearch()
      }

    },
    /**搜索**/
    tosearch(val) {
      let _that = this;
      console.log(this.search_data)
      this.search_data = this.search_data.replace(/\s/g, "")
      this.search_data = this.search_data.toLocaleLowerCase()
      console.log(this.search_data)
      let regPos = /^\d+(\.\d+)?$/; //非负浮点数
      let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      let datalist = []
      if (_that.search_data.indexOf("0x") == 0 && _that.search_data.length >= 64) {
        //搜索交易哈希
        _that.hometype = 4
        console.log(44444444)
        let blockInfo =
          {
            "hash": "0xf1656e65801aedc71c7df2b0fa0a8b7b1961a46b0a2082b0e9a5e35a23653b89",
            "nonce": 7554,
            "blockHash": "0x43e00d2933ea4dff07d14f77b956108a065ef828abc1d759803fb17dbc5fb920",
            "blockNumber": 302475,
            "transactionIndex": 0,
            "fromAddress": "0xf08a5446dbefa1e52aa1aa50c7b7de1781133d3f",
            "toAddress": "0xfc324806ab31d5fd9d5459046b58d520deb4b4de",
            "value": "0",
            "gasPrice": "2000000000",
            "gas": 155545,
          }
        _that.user_detail_data[0] = [_that.comdify(blockInfo.blockNumber), blockInfo.hash]
        _that.user_detail_data[1] = [blockInfo.hash, ((blockInfo.gasPrice / Math.pow(10, 18)) * blockInfo.gas).toFixed(8), blockInfo.value]
        _that.user_detail_data[2] = [blockInfo.fromAddress, blockInfo.toAddress]
        this.block_top_data = [[this.$t("m.home.key36")],
        [this.$t("m.home.key37"), this.$t("m.home.key24"), this.$t("m.home.key25")],
        [this.$t("m.home.key22"), this.$t("m.home.key23"), '']]
        // this.$ajax('post', 'http://120.77.241.114:7011/v2/searchBlockInfo', this.blockListObj, function(data) {
        //   let blockInfo = JSON.parse(data).TxArray[0]
        //   _that.user_detail_data[0] = [blockInfo.number, blockInfo.hash]
        //   _that.user_detail_data[1] = [blockInfo.hash,(blockInfo.gasPrice/Math.pow(10,18))*blockInfo.gas, blockInfo.fromAddress]
        //   _that.user_detail_data[2] = [blockInfo.fromAddress, blockInfo.transactionNumber]
        //   console.log(JSON.parse(data))
        //   console.log(_that.user_detail_data)
        // }, function(error) {
        //   console.log(error)
        // })
      } else if (_that.search_data.indexOf("0x") == 0 && _that.search_data.length == 42) {
        //搜索钱包地址
        _that.wallet_changes=false;
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key27"), this.$t("m.home.key22"), this.$t("m.home.key23"), this.$t("m.home.key24"), this.$t("m.home.key25")]
        this.block_top_data = [[this.$t("m.home.key28")],
        [this.$t("m.setting.key1"), this.$t("m.home.key26")],]
        console.log(3333333)
        _that.blockListObj.address = _that.search_data
        _that.hometype = 3;
        _that.datas = []
        this.$ajax('post', 'http://120.77.241.114:7011/v2/searchMinerInfo', this.blockListObj, function(data) {
          let balance = Number(JSON.parse(data).balance) / Math.pow(10, 18);
          _that.user_detail_data[0] = [_that.search_data]
          _that.user_detail_data[1] = [_that.format(balance, 8), _that.comdify(JSON.parse(data).TxCount)]
 
          _that.homedatalist = JSON.parse(data)
          console.log( _that.homedatalist)
          //账户交易
          // if (JSON.parse(data).transcationArray.length>0) {
          //   console.log(1231)
          //   _that.datas = JSON.parse(data).transcationArray
          // _that.homedata.pagination = [_that.$t("m.myMill.key27"), _that.$t("m.home.key22"), _that.$t("m.home.key23"), _that.$t("m.home.key24"), _that.$t("m.home.key25")]
          //   for (let i = 0; i < _that.homedatalist.block.length; i++) {
          //     _that.datas.push(JSON.parse(_that.homedatalist.block[i]))
          //   }
          // } else if (JSON.parse(data).block.length>0) {
          //挖块统计
          _that.datas = JSON.parse(data).block
          _that.homedata.pagination = [_that.$t("m.home.key3"), _that.$t("m.myMill.key10"), _that.$t("m.home.key15"), _that.$t("m.home.key16"), _that.$t("m.home.key17"), _that.$t("m.home.key14"), _that.$t("m.home.key6")]
          _that.totalSize = _that.homedatalist.block.length
          for (let i = 0; i < _that.homedatalist.block.length; i++) {
            _that.datas[i] = JSON.parse(_that.homedatalist.block[i])
          }
          console.log(_that.datas)
          // }
        }, function(error) {
          console.log(error)
        })
      } else if (regPos.test(_that.search_data) || regNeg.test(_that.search_data)) {
        //搜索块详情
        _that.hometype = 2;
        _that.target_data = _that.search_data
        _that.blockListObj.param = this.search_data;
        this.homedata.pagination = [this.$t("m.myMill.key27"), this.$t("m.home.key22"), this.$t("m.home.key23"), this.$t("m.home.key24"), this.$t("m.home.key25")]
        this.block_top_data = [[this.$t("m.myMill.key26"), this.$t("m.home.key16")],
        [this.$t("m.myMill.key10"), this.$t("m.home.key18"), this.$t("m.home.key6"), this.$t("m.home.key35")],
        [this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key21")]]
        console.log(2222222)
        this.$ajax('post', 'http://120.77.241.114:7011/v2/searchBlockInfo', this.blockListObj, function(data) {
          let blockInfo = JSON.parse(data).blockInfo[0]
          _that.user_detail_data[0] = [_that.comdify(blockInfo.number), blockInfo.hash]
          _that.user_detail_data[1] = [_that.timestampToTime(blockInfo.timestamp), blockInfo.size, _that.format(blockInfo.MinerblockRewad, 8), _that.format(blockInfo.MinerTxReward)]
          _that.user_detail_data[2] = [_that.changpow(blockInfo.difficulty), _that.comdify(blockInfo.transactionNumber), blockInfo.miner]
          _that.datas = JSON.parse(data).TxArray
          _that.totalSize = JSON.parse(data).TxArray.length||0

        }, function(error) {
          console.log(error)
        })
      } else if (_that.search_data == '') {
        //首页
        _that.hometype = 1;
        console.log(1111111)
        this.homedata.pagination = [this.$t("m.home.key3"), this.$t("m.myMill.key10"), this.$t("m.home.key15"), this.$t("m.home.key16"), this.$t("m.home.key17"), this.$t("m.home.key14"), this.$t("m.home.key6")]
        this.$ajax('get', 'http://120.77.241.114:7011/v2/getChainBlockInfo?page=' + this.blockListObj.page + '&pageSize=' + this.blockListObj.pageSize, null, function(data) {
          _that.homedatalist = JSON.parse(data).chainInfo
          _that.totalSize = JSON.parse(data).chainCount
          for (let i = 0; i < _that.homedatalist.length; i++) {
            _that.datas[i] = JSON.parse(_that.homedatalist[i])
            if (_that.datas[i].reward.length < 6) {
              _that.datas[i].reward = Number(_that.datas[i].reward).toFixed(9)
            }
            _that.$set(_that.datas, i, _that.datas[i])
          }
        }, function(error) {
          console.log(error);
        })
      }
    },

    //上一个或下一个块
    other_block(val) {
      this.target_data = Number(this.target_data) + val
      this.search_data = this.target_data + '';
      this.tosearch()
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
    handleSizeChange(val) {
      this.blockListObj.pageSize = val;
      // this.getWtcPoolBlockInfo();
      this.tosearch()
    },

    handleCurrentChange(val) {
      this.blockListObj.page = val;
      // this.getWtcPoolBlockInfo();
      this.tosearch()
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

.color1 {
  color: #2e73e8;
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
  margin-top: 0.19rem;
  margin-bottom: 0.11rem;
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


.wallet_change {
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  cursor: pointer;
}

.wallet_change_item1 {
  margin-left: 0.03rem;
  margin-right: 0.29rem;
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
  flex: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2e73e8;
}

.li1 {
  flex: 4;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li2 {
  flex: 4;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li3 {
  flex: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2e73e8;
}

.li4 {
  flex: 4;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li5 {
  flex: 4;
  text-overflow: ellipsis;
  overflow: hidden;
}

.li6 {
  flex: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
}

.li_other {
  flex: 1;
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
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 19px;
  letter-spacing: 0px;
  color: #666666;
  margin-bottom: 0.13rem
}

.block_center {
  border: 1px solid #f9f5f9;
  box-sizing: border-box;
}

.block_c_t {
  height: 0.25rem;
  padding: 0 0.25rem;
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
  padding: 0 0.25rem;
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
  overflow: hidden;
  padding-right: 0.15rem
}

.flex_f {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.wallet_top_c {
  margin-right: 0.8rem;
}

.next {
  display: flex;
  justify-content: space-between;
  color: #2F8CFF;
  margin-top: 0.1rem;
  padding: 0 0.25rem;
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
