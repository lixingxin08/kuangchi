<template>
  <div class="home">
    <div class="home-parent-box">
      <div class="home-header-box">
        <div class="home-header-body">

          <div class="body-left">
            <div class="body-left-box">
              <p class="header-p">KIRINMINER TOOLS</p>
              <!--<p class="bottom-p">{{$t("m.header.key19")}}</p>-->
              <!--<a target="_blank" href="http://file.kirinpool.com/download/KIRINMINER.zip">-->
              <!--<div class="login-box">-->
              <!--&lt;!&ndash;{{$t("m.header.key20")}}&ndash;&gt;-->

              <!--</div>-->
              <p class="bottom-p" style="text-align: left;margin-top: 20px;">{{$t("m.download.key33")}}</p>
              <!--</a>-->
            </div>
          </div>
          <div class="body-right">
            <img v-if="true" src="../assets/img/04.png" alt="">
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="main-box__bg-1">
        <div class="main-box-left-1">
          <div class="main-box-left_title">
            <span>{{$t("m.header.key11")}}
              <span class="el-icon-arrow-right arrow_right"></span>
            </span>
          </div>
          <ul class="main-box-left-ul">
            <li class="systemActive">{{$t("m.download.key27")}}</li>
            <li>{{$t("m.download.key28")}}</li>
            <!--<li>流畅打开国外网站</li>-->
            <!--<li>注册前需要注意的几件事</li>-->
            <!--<li>手把手带您通过实名验证</li>-->
            <!--<li>两步验证相关问题</li>-->
            <!--<li>安全中心</li>-->
            <!--<li>安全指南</li>-->
          </ul>
        </div>

        <div class="main-box-right1">
          <div class="DownloadTool-left">
            <div class="header-text">
              <span>{{$t("m.download.key29")}}</span>
            </div>
            <div class="Download-main">
              <div class="guide-box">
                <a href="http://file.kirinpool.com/download/zh/KIRINMINER.pdf?attname=" target="_blank" v-if="$i18n.locale === 'zh'">{{$t("m.download.key30")}}</a>
                <a href="http://file.kirinpool.com/download/en/KIRINMINER.pdf?attname=" target="_blank" v-if="$i18n.locale === 'en'">{{$t("m.download.key30")}}</a>
              </div>
              <div class="tool-box">
                <a href="http://file.kirinpool.com/download/KIRINMINER_1_0_0.zip?attname=" target="_blank" class="tool-btn">{{$t("m.download.key32")}}</a>
              </div>
            </div>
          </div>
          <div class="DownloadTool-right">
            <div class="header-text">
              <span>{{$t("m.download.key31")}}</span>
            </div>
            <div class="Download-main">
            <div class="guide-box">
              <a href="http://file.kirinpool.com/download/zh/FINDMINER.pdf?attname=" target="_blank" v-if="$i18n.locale === 'zh'">{{$t("m.download.key34")}}</a>
              <a href="http://file.kirinpool.com/download/en/FINDMINER.pdf?attname=" target="_blank" v-if="$i18n.locale === 'en'">{{$t("m.download.key34")}}</a>
            </div>
            <div class="tool-box">
              <a href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname=" target="_blank" class="tool-btn">{{$t("m.download.key32")}}</a>
            </div>
            </div>
          </div>

          <div class="main-box__content">
            <div>
              <p>{{$t("m.download.key1")}}</p>
              <p>{{$t("m.download.key2")}}</p>
            </div>
            <div>
              <p>{{$t("m.download.key3")}}</p>
              <p>{{$t("m.download.key4")}}</p>
              <div>
                <span style="margin-right: 10px;">{{$t("m.download.key5")}}</span>
              </div>
              <div>
                <!--<span style="margin-right: 10px;">{{$t("m.download.key7")}}</span>-->
                <!--<div>{{$t("m.download.key8")}}<a href="https://github.com/WaltonChain/WaltonWallet_Android" target="_blank">https://github.com/WaltonChain/WaltonWallet_Android</a></div>-->
                <!--<div>macOS: <a href="https://github.com/WaltonChain/WaltonWallet_MacOS" target="_blank">https://github.com/WaltonChain/WaltonWallet_MacOS</a></div>-->
                <!--<div>Linux: <a href="https://github.com/WaltonChain/WaltonWallet_Linux" target="_blank">https://github.com/WaltonChain/WaltonWallet_Linux</a></div>-->
                <!--<div>Windows: <a href="https://github.com/WaltonChain/WaltonWallet_Win" target="_blank">https://github.com/WaltonChain/WaltonWallet_Win</a></div>-->
              </div>
            </div>
            <div>
              <p>{{$t("m.download.key9")}}</p>
              <p>{{$t("m.download.key10")}}</p>
              <p>{{$t("m.download.key11")}}</p>
              <div>
                <span>{{$t("m.download.key12")}}</span>
                <a target="_blank" href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname=">http://file.kirinpool.com/download/FINDMINER</a>
              </div>
              <p>{{$t("m.download.key13")}}</p>
              <div>
                <span>{{$t("m.download.key14")}}</span>
                <a target="_blank" href="http://file.kirinpool.com/download/KIRINMINER_1_0_0.zip?attname=">http://file.kirinpool.com/download/KIRINMINER</a>
              </div>

            </div>
            <div>
              <p>{{$t("m.download.key15")}}</p>
              <p>{{$t("m.download.key16")}}</p>
              <p>www.kirinpool.com:5555 </p>
              <p>www.kirinpool.com:6666</p>
              <p>www.kirinpool.com:7777</p>
            </div>
            <div>
              <p>{{$t("m.download.key17")}}</p>
              <p>{{$t("m.download.key18")}}</p>

            </div>
            <div>
              <p>{{$t("m.download.key19")}}</p>
              <p>{{$t("m.download.key20")}}</p>
              <p>{{$t("m.download.key21")}}</p>
              <p>{{$t("m.download.key22")}}</p>
              <p>{{$t("m.download.key23")}}</p>
            </div>
            <div>
              <p>{{$t("m.download.key24")}}</p>
              <p>{{$t("m.download.key25")}}</p>
              <p>{{$t("m.download.key26")}}</p>
            </div>
          </div>

        </div>

      </div>
      <!--<div class="center-bottom-box">-->
      <!--<p>帮助中心</p>-->
      <!--<ul>-->
      <!--<li>工具下载</li>-->
      <!--<li>常见问题</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--<div class="addMiner-box">-->
      <!--dahdoadlkajdpa-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require('echarts/lib/chart/pie');
require('echarts/lib/chart/funnel');
require('echarts/lib/chart/line');
require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
require("echarts/lib/component/legendScroll");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  data() {
    return {
    }
  },
  props: {
    height: {
      type: String,
      default: '251'
    }
  },
  mounted() {
    this.switchBox()
  },
  methods: {
    switchBox() {
      $(function() {
        $(".main-box-left-ul").children("li").on("click", (function() {
          $(this).addClass("systemActive").siblings().removeClass("systemActive");
          $(this).children("a").css("color", "#fff");
          let index = $(this).index();
          $(".main-box__content").eq(index).addClass("active-show").siblings().removeClass("active-show")
        }))
      })
    },
  }
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

.home-parent-box {
  height: 540px;
  overflow: hidden;
  margin-bottom: 50px;
  min-width: 1200px;
}

.home-header-box {
  /*background: #5714d1;*/
  display: flex;
  justify-content: center;
  min-width: 1200px;
  margin: auto;
  height: 440px;
  position: relative;
  width: 100%;
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

.body-left-box {
  width: 474px;
  height: 192px;
  text-align: left;
}

.header-p {
  font-size: 33px;
  font-weight: bold;
  font-style: italic;
  text-align: left;
}

.bottom-p {
  font-size: 24px;
  text-align: left;
  display: inline-block;
  width: 70%;
}

.body-left-box-top p {
  font-size: 24px;
}

.body-left-box-top img {
  margin-right: 8px;
}

.body-right {
  margin-top: 34px;
}

.newBlock-box span {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
}

.newBlock-box span img {
  margin-right: 13px;
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
  width: 1200px;
  min-width: 1200px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
}

.top-box-left p {
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

.box-right-left ul li {
  line-height: 54px;
}

.box-right-left ul li span {
  display: inline-block;
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

.list-box ul li {
  display: inline-block;
}

.header-ul li {
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
}

.center-ul li {
  color: #7937ff;
  font-size: 13px;
}



/*下载挖矿工具方法*/

.addMiner-box {
  padding-top: 52px;
  padding-left: 52px;
  background: #f5f6f7;

  float: left;
}

.addMiner-box p {
  text-align: left;
  font-size: 14px;
  line-height: 36px;
  color: #666;
}

.main-box__content {
  display: none;
  text-align: left;
}

.main-box__content>div {
  margin-bottom: 20px;
}

.main-box-right1 {
  height: 580px;
  float: right;
  width: 77%;
  border: 1px solid rgba(155, 155, 155, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}


.DownloadTool-left,
.DownloadTool-right {
  width: 30%;
  height: 300px;
  border: 1px solid rgba(155, 155, 155, 0.2);
  box-sizing: border-box;
  border-top: 5px solid rgba(155, 155, 155, 0.2);
}

.DownloadTool-left:hover,
.DownloadTool-right:hover {
  border-top: 5px solid #5714D1;
}

.header-text {
  width: 100%;
  font-size: 22px;
  height: 50%;
  border-bottom: 1px solid rgba(155, 155, 155, 0.2);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: 600
}
.Download-main{
  width: 100%;
  height: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.guide-box,
.tool-box {
  font-size: 15px;
  margin-bottom: 20px;
}

.guide-box {
  margin-bottom: 20px;
}

.guide-box a {
  color: #5714d1;
}

.tool-btn {
  border: 1px solid #5714d1;
  padding: 5px 25px;
  background-color: #fff;
  border-radius: 3px;
  color: #5714d1;
}
.tool-btn:hover{
  background-color: #5714d1;
  color: #fff;
}
.main-box__content img {
  margin: 10px 0;
}

.active-show {
  display: block;
}

.copy input {
  width: 25%;
  padding-left: 5px;
  margin-right: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  color: #666;
}

.copy span {
  color: #ffffff;
  background-color: #5714d1;
  padding: 5px;
  cursor: pointer;
}

.invite-btn-box span {
  font-size: 20px;
  color: #5714d1;
  border: 1px solid #5714d1;
  padding: 18px 80px;
}

.main-box__bg_header p {
  margin-top: 10px;
  border-left: 5px solid #333333;
  padding-left: 16px;
  font-size: 26px;
}

.main-box__bg-1 {
  background: #FFFFFF;
  /* border: 1px solid rgba(155,155,155,0.2); */
  /* -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09); */
  border-radius: 2px;
  min-height: 580px;
  overflow: auto;
  width: 100%;
  text-align: center;
}

.main-box-left-1 {
  float: left;
  width: 23%;
  min-height: 580px;
  padding-top: 20px;
}

.main-box-left-1 ul {
  width: 100%;
}

.main-box-left-1 ul li {
  font-size: 14px;
  border-radius: 2px;
  padding: 12px 0;
  cursor: pointer;
}

.main-box-left_title {
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  vertical-align: top;
}

.arrow_right {
  font-size: 20px;
  font-weight: 900;
}

.main-box-left_title:hover {
  color: seagreen;
}

.main-box-left-1 ul .systemActive {
  color: #8e8e8e;
}

.main-box-left-1 ul li a {
  display: inline-block;
  padding: 12px 0;
  width: 100%;
  height: 100%;
}


.bind-phone>p {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
}

.btn-cancel a {
  color: #5714d1;
}

@media (max-width: 1200px) {
  .home-parent-box,
  .center-box {
    padding: 0 25px;
  }
}
</style>
