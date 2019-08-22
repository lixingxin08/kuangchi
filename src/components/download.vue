<template>
  <div class="home">

    <div class="center-box">
      <div class="main-box__bg-1">
        <div class="main-box-left-1">
          <div class="main-box-left_title">
            <span @click="switchBox(0)">{{$t("m.header.key11")}}
              <span class="el-icon-arrow-right arrow_right"></span>
            </span>
          </div>
          <ul class="main-box-left-ul">
            <li v-if="downloadtype==1" @click="switchBox(1)"></li>
            <li v-if="downloadtype==2" @click="switchBox(2)" :class="this.switch?'systemActive':''">{{$t("m.download.key27")}}</li>
            <li v-if="downloadtype==3" @click="switchBox(3)" :class="this.switch?'systemActive':''">{{$t("m.download.key28")}}</li>
            <!--<li>流畅打开国外网站</li>-->
            <!--<li>注册前需要注意的几件事</li>-->
            <!--<li>手把手带您通过实名验证</li>-->
            <!--<li>两步验证相关问题</li>-->
            <!--<li>安全中心</li>-->
            <!--<li>安全指南</li>-->
          </ul>
        </div>

        <div class="main-box-right1">
          <!--帮助中心-->
          <div class="help_main" v-if="this.downloadtype==1">
            <ul class="help_box" v-for="(item,index) in helplist" :key="index" @click="switchBox(index)">
              <li class="help_boxli1">{{item.top}}</li>
              <li class="help_boxli2">{{item.center}}</li>
              <li class="help_boxli3">{{item.bottom}}</li>
            </ul>
          </div>

          <!--工具下载-->
          <div class="main-box__content main-box__content1" v-if="this.downloadtype==2">
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
          </div>
          <!--常见问题-->
          <div class="main-box__content problem" v-if="this.downloadtype==3">
            <div class="main-box_content_item">
              <p>{{$t("m.download.key1")}}</p>
              <p>{{$t("m.download.key2")}}</p>
            </div>
            <div class="main-box_content_item">
              <p>{{$t("m.download.key3")}}</p>
              <p>{{$t("m.download.key4")}}</p>
              <div>
                <span style="margin-right: 10px;">{{$t("m.download.key5")}}</span>
              </div>
              <p>{{$t("m.download.key37")}}</p>
              <div>
                <!--<span style="margin-right: 10px;">{{$t("m.download.key7")}}</span>-->
                <!--<div>{{$t("m.download.key8")}}<a href="https://github.com/WaltonChain/WaltonWallet_Android" target="_blank">https://github.com/WaltonChain/WaltonWallet_Android</a></div>-->
                <!--<div>macOS: <a href="https://github.com/WaltonChain/WaltonWallet_MacOS" target="_blank">https://github.com/WaltonChain/WaltonWallet_MacOS</a></div>-->
                <!--<div>Linux: <a href="https://github.com/WaltonChain/WaltonWallet_Linux" target="_blank">https://github.com/WaltonChain/WaltonWallet_Linux</a></div>-->
                <!--<div>Windows: <a href="https://github.com/WaltonChain/WaltonWallet_Win" target="_blank">https://github.com/WaltonChain/WaltonWallet_Win</a></div>-->
              </div>
            </div>
            <div class="main-box_content_item">
              <p>{{$t("m.download.key9")}}</p>
              <p>{{$t("m.download.key10")}}</p>
              <p>{{$t("m.download.key11")}} &nbsp&nbsp&nbsp
                <span>{{$t("m.download.key12")}}</span>
                <a target="_blank" href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname=">http://file.kirinpool.com/download/FINDMINER</a>
              </p>
              <p>{{$t("m.download.key13")}} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span>{{$t("m.download.key14")}}</span>
                <a target="_blank" href="http://file.kirinpool.com/download/KIRINMINER_1_0_0.zip?attname=">http://file.kirinpool.com/download/KIRINMINER</a>
              </p>
            </div>
            <div class="main-box_content_item">
              <p>{{$t("m.download.key15")}}</p>
              <p>{{$t("m.download.key16")}}</p>
              <p>www.kirinpool.com:5555 </p>
              <p>www.kirinpool.com:6666</p>
              <p>www.kirinpool.com:7777</p>
            </div>
            <div class="main-box_content_item">
              <p>{{$t("m.download.key17")}}</p>
              <p>{{$t("m.download.key18")}}</p>

            </div>
            <div class="main-box_content_item">
              <p>{{$t("m.download.key19")}}</p>
              <p>{{$t("m.download.key20")}}</p>
              <p>{{$t("m.download.key21")}}</p>
              <p>{{$t("m.download.key22")}}</p>
              <p>{{$t("m.download.key23")}}</p>
            </div>
            <div class="main-box_content_item">
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

export default {
  data() {
    return {
      switch: false,
      downloadtype:1,
      helplist:[
        {top:"ICON",center:this.$t("m.header.key28"),bottom:this.$t("m.header.key26")},
        {top:"ICON",center:this.$t("m.header.key18"),bottom:this.$t("m.header.key26")},
        {top:"ICON",center:this.$t("m.header.key28"),bottom:this.$t("m.header.key26")}]
    }
  },
  props: {
    height: {
      type: String,
      default: '251'
    }
  },
  mounted() {
  },
  methods: {
    switchBox(index) {
      if (index == 0) {
        console.log(11)
        this.downloadtype = 1
      } else if (index ==1) { 
        this.downloadtype = 2 }
        else if(index==2){
          this.downloadtype=3
        }
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
  width: 100%;
  height: 100%;
  text-align: left;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}

.main-box__content1 {
  display: flex;
}
.problem{
  padding-left: 0.1rem;
}
.main-box-right1 {
  width: 100%;
  min-height: 5.8rem;
  border: 1px solid rgba(155, 155, 155, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}


.DownloadTool-left,
.DownloadTool-right {
  width: 250px;
  height: 313px;
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

.Download-main {
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

.tool-btn:hover {
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
  margin-top: 0.4rem;
  overflow: auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.main-box-left-1 {
  width: 16%;
  height: 0.44rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main-box-left-1 ul {}

.main-box-left-1 ul li {
  font-size: 14px;
  border-radius: 2px;
  padding: 12px 0;
  cursor: pointer;
}

.main-box-left_title {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  vertical-align: top;
}

.arrow_right {
  font-size: 16px;
  font-weight: 900;
}

.main-box-left_title:hover {
  color: rgb(0, 0, 255);
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

.main-box_content_item {
  margin-top: 20px;
  font-size: 16px;
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

.help_main {
  width: 100%;
   min-height: 5.8rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

}
.help_box{
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 1200px) {
  .home-parent-box,
  .center-box {
    padding: 0 0.25rem;
  }
}
</style>
