<template>
  <div class="home">
    <div class="home-parent-box">
      <div class="home-header-box">
        <div class="home-header-body">
          <div class="body-left" v-show="!getCookie('isLogin')">
            <div class="body-left-img"><img src="../assets/img/homeBanner.png" alt=""></div>
            <!--<p>立即开启挖矿之旅</p>-->
            <a :href="baseHerf + $i18n.locale">
              <div class="login-box">
                {{$t("m.home.key1")}}
              </div>
            </a>
          </div>
          <div class="body-left-two" v-show="getCookie('isLogin')">
            <div class="parent-box">
              <div class="children-box newBlock-box"><span class="newBlock-span">
                <img src="../assets/img/newblocks.png" alt="">{{$t("m.home.key7")}}</span><span>{{sessionStorage.getItem("newBlock")?sessionStorage.getItem("newBlock"):"--"}}</span>
              </div>
            </div>
            <div class="parent-box">
              <div class="children-box">
                <div class="wtcImg-box"><img src="../assets/img/wtc.png" alt="">WTC</div>
                <div class="ratio-box"><span style="font-size: 16px"><span
                  style="font-size: 20px;font-style: italic;font-weight: bold">1</span> WTC</span> <span
                  style="font-weight: bold;font-size: 20px;font-style: italic">=</span> <span><span
                  style="font-size: 20px;font-style: italic;font-weight: bold;margin-right: 10px;">{{rate}}</span><span
                  style="font-size: 16px">USDT</span></span></div>
              </div>
            </div>
          </div>
          <div class="body-right">
            <img v-if="!getCookie('isLogin')" src="../assets/img/01.png" alt="">
            <img v-if="getCookie('isLogin')" src="../assets/img/02.png" alt="">
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="center-bottom-box">
        <div class="bottom-box-text">
         <div class="bottom-box-text_l">
            <span class="beijin-span"></span>{{$t("m.home.key2")}} ({{totalSize}})
         </div>
         <div>
            <el-input placeholder="请输入块高度"  class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
         </div>
        </div>
        <div class="list-box">
          <ul class="header-ul">
            <li class="li-one"> {{$t("m.home.key3")}}</li>
            <li class="li-two"> {{$t("m.home.key4")}}</li>
            <li class="li-three"> {{$t("m.home.key5")}}</li>
            <li class="li-four"> {{$t("m.home.key6")}}</li>
          </ul>
          <ul class="center-ul" v-for="(item,index) in blockList" :key="index">
            <li class="li-one">{{item.blocknumber}}</li>
            <li class="li-two">{{item.login}}</li>
            <li class="li-three">{{timestampToTime(item.time)}}</li>
            <li class="li-four">{{format(item.reward/(Math.pow(10,18)),2)}}</li>
          </ul>
          <div v-if="!blockList"
               style="padding: 200px 0;font-size: 20px;margin-bottom: 70px;font-weight: bold;color: #888">
            {{$t("m.wallet.key39")}}
          </div>
        </div>
        <!--分页-->
        <div class="page-box">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10,20,50]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalSize"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie, getCookie, delCookie} from "../assets/cookie";
  import bus from "../assets/eventBus"
  export default {
    inject: ["reload"],
    data() {
      return {
        baseUrl: this.GLOBAL.baseUrl,
        baseUrlTwo: this.GLOBAL.baseUrlTwo,
        baseHerf: this.GLOBAL.baseHerf,
        blockList: "",
        totalSize: 0,
        rate: "",
        blockListObj: {
          page: 1,
          pageSize: 10
        },
        newBlock: "",
      }
    },
    created() {
      this.getWtcPoolBlockInfo();
      if(getCookie("isLogin")){
        this.getAccountMill();
        this.getRate();
      }
    },

    mounted() {
      console.log(111)
    },
    methods: {
      //用户矿机信息
      getAccountMill() {
        var vueThis = this;
        this.$axios({
          method: "post",
          url: this.baseUrl + "v1/wtcPool/minerAccountInfo",
          data: {"username": getCookie("username"), "token": getCookie("token")},
          withCredentials: false
        }).then(function (res) {
          if (res.data.code === 200) {
            bus.$emit("payfee", res.data.accountInfo.payFee);
          } else {
            if (res.data.code === 402) {
              alert(vueThis.$t("m.myMill.key13"))
            } else if (res.data.code === 404) {
              alert(vueThis.$t("m.myMill.key14"))
            }
          }
        }).catch(function (err) {
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
        }).then(function (res) {
          
          if (res.data.code === 200) {
            if (res.data.msg === "success") {
              vueThis.rate = res.data.rate.rate;
            }
          } else {
          }
        }).catch(function (err) {

        })
      },
      //获取成熟块
      getWtcPoolBlockInfo() {
        var vueThis = this;
        this.$axios({
          method: "get",
          url: this.baseUrl + "v1/wtcPool/wtcPoolBlockInfo?page=" + vueThis.blockListObj.page + "&pageSize=" + vueThis.blockListObj.pageSize,
          withCredentials: false
        }).then(function (res) {
          if (res.data.code === 200) {
            vueThis.blockList = res.data.data.array;
            vueThis.totalSize = res.data.data.total;
          } else {
          }
        }).catch(function (err) {

        })
      },
      handleSizeChange(val) {
        this.blockListObj.pageSize = val;
        this.getWtcPoolBlockInfo();
      },

      handleCurrentChange(val) {
        this.blockListObj.page = val;
        this.getWtcPoolBlockInfo();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    /*color: #000;*/
  }

  h1, h2 {
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

  .home-header-box {
    /*background: #5714d1;*/
    display: flex;
    justify-content: center;
    min-width: 1200px;
    /*padding-bottom: 40px;*/
    margin: auto;
    height: 440px;
    position: relative;
    width: 100%;
    /*height: 496px;*/
    text-align: center;
    color: #fff;
    background-color: #5714d1;
  }

  .home-header-box:after {
    position: absolute;
    left: -20%;
    right: 0;
    bottom: -100px;
    z-index: -1;
    content: ' ';
    height: 536px;
    width: 140%;
    border-radius: 0 0 50% 50%;
    background-color: #5714d1;
    min-width: 1200px;
  }

  .body-left {
    padding-top: 84px;
  }

  .body-left-two {
    width: 320px;
    height: 350px;
    margin-top: 54px;
    padding: 0px 20px 50px 20px;
    border: 1px solid #e4d494;
    border-radius: 10px;
    margin-right: 250px;
  }

  .body-right {
    margin-top: 34px;
  }

  .parent-box {
    border-bottom: 1px solid #e4d494;
    padding-bottom: 23px;
    padding-top: 50px;
  }

  .parent-box:last-child {
    border-bottom: none;
  }

  .newBlock-box {
    display: flex;
    justify-content: space-between;
  }

  .children-box {
    padding: 0 10px;
  }

  .newBlock-box span {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }

  .newBlock-box span img {
    margin-right: 13px;
  }

  .wtcImg-box {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 27px;
  }

  .ratio-box {
    display: flex;
    justify-content: space-between;
  }

  .wtcImg-box img {
    margin-right: 13px;
  }

  .home-header-body {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .Mention-money-box {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .Total-revenue-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
  }

  .quantity-span {
    font-size: 20px;
  }

  .wtc-text-span {
    font-weight: normal;
    margin-left: 8px;
    font-size: 16px;
  }

  .login-box {
    width: 200px;
    margin-top: 47px;
    padding: 7px 0;
    border: 1px solid #e4d494;
    color: #e4d494;
    border-radius: 19px;
    cursor: pointer;
  }

  .login-box a {
    color: #e4d494;
  }

  /*卡片*/
  .center-box {
    margin: 0 auto;
    /*height: 100px;*/
    /*background: red;*/
    width: 1200px;
    min-width: 1200px;
  }

  .center-top-box {
    display: flex;
    background: url("../assets/img/liutonlv.png");
    border-radius: 10px;
    box-shadow: 0 0 10px 1px #ccc;
  }

  .top-box-left {
    width: 30%;
    padding: 65px 0 110px 0;
  }

  .top-box-left p {
    margin-top: 25px;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }

  .top-box-right {
    width: 70%;
    display: flex;

  }

  .box-right-left {
    padding-top: 40px;
    width: 50%;
  }

  .box-right-right {
    width: 50%;
  }

  .box-right-left ul li {
    line-height: 54px;
  }

  .box-right-left ul li span {
    display: inline-block;

  }

  .li-span-left {
    width: 30%;
    text-align: right;
    padding-right: 16px;
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
    padding-left: 7px;
  }

  /*成熟块*/
  .center-bottom-box {
    margin-top: 72px;
  }

  .bottom-box-text {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: bold;
  }

  .beijin-span {
    display: inline-block;
    width: 13px;
    height: 13px;
    background: #7448cf;
    margin-right: 13px;
  }

  .list-box {
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.06);
  }

  .header-ul {
    /*padding: 5px 0;*/
    background: #7448cf;
    padding: 16px 70px;
    font-size: 14px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .list-box ul li {
    display: inline-block;
    text-align: left;

  }

  .header-ul li {
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
  }

  .center-ul {
    padding: 15px 70px;
    border-bottom: 1px solid #d5dce3;
  }

  .center-ul li {
    color: #7937ff;
    font-size: 13px;
  }

  .li-one {
    width: 17%;
  }

  .li-two {
    width: 47%;
  }

  .li-three {
    width: 22%;
  }

  .li-four {
    width: 12%;
  }

  /*分页*/
  .page-box {
    text-align: right;
    margin-top: 30px;
    margin-bottom: 60px;
  }

  /*媒体查询*/
  @media (max-width: 1200px) {
    .home-parent-box, .center-box {
      padding: 0 25px;
    }
  }
</style>
