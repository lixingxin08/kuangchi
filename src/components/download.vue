<template>
  <div class="home">
    <div class="home_bcg">
      <img src="../assets/img/help.jpg" alt="">
    </div>
    <div class="center-box">
      <div class="main-box__bg-1">
        <div class="main-box-left-1">
          <div class="main-box-left_title" :class="this.switch?'color1':''">
            <div class="block_box"></div>
            <span @click="switchBox(0)">{{$t("m.header.key11")}}
            </span>
          </div>
          <ul class="main-box-left-ul">
            <li v-show="downloadtype[0]==1"></li>
            <li v-show="downloadtype[0]==2" :class="this.switch?'systemActive':''">
              <span class="el-icon-arrow-right"></span>{{$t("m.download.key27")}}</li>
            <li v-show="downloadtype[0]==3" :class="this.switch?'systemActive':''">
              <span class="el-icon-arrow-right"></span>{{$t("m.download.key28")}}</li>
            <li v-show="downloadtype[0]==4" :class="this.switch?'systemActive':''">
              <span class="el-icon-arrow-right"></span>{{$t("m.download.key38")}}</li>
          </ul>
        </div>
        <!-- 工具下载 -->
        <div class="main-box-right1" v-show="this.downloadtype[0]!==3">
          <!--帮助中心-->
          <div class="help_main" v-if="this.downloadtype[0]==1">
            <ul class="flex_a_c help_box" v-for="(item,index) in helplist" :key="index" @click="switchBox(index+1)">
              <li class="help_boxli1"><img :src="imgsrc[index]" alt=""></li>
              <li class="flex_a_c help_boxli2">
                <span class="help_boxli2_t">{{item.center}}</span>
                <span>{{item.bottom}}</span>
              </li>
            </ul>
          </div>
          <!--工具下载-->
          <div class="main-box__content" v-show="this.downloadtype[0]==2">
            <div class="gonggao">
              <div class="flex_b Download_item">
                <div class="flex_b header-text">
                  <img src="../assets/img/updata.png" width="50">
                  <div class="flex_c down_text">
                    <span>Updata:</span>
                    <span>{{$t("m.account.key91")}}</span>
                  </div>
                </div>
                <div class="guide-box">
                  <a href="https://file.kirinpool.com/download/OneClickUpgrading_InstructionManual-v1.zip?attname=">{{$t("m.account.key92")}}</a>
                </div>
                <div class="Download-main">
                  <div class="tool-box">
                    <a href="https://file.kirinpool.com/download/One-clickUpgrading.exe?attname=" target="">{{$t("m.account.key93")}}</a>
                  </div>
                  <div class="tool-box">
                    <a href="https://file.kirinpool.com/download/One-clickUpgrading.app.zip?attname=" target="">{{$t("m.account.key94")}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex_b Download_item">
              <div class="flex_b header-text">
                <img src="../assets/img/donwn_logo2.png" alt="">
                <div class="flex_c down_text">
                  <span>FindMiner:</span>
                  <span>{{$t("m.download.key31")}}</span>
                </div>
              </div>
              <div class="guide-box">
                <a href="http://file.kirinpool.com/download/zh/FINDMINER.pdf?attname=">{{$t("m.download.key34")}}</a>
              </div>
              <div class="Download-main">
                <div class="tool-box">
                  <a href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname=" target="" class="tool-btn">{{$t("m.account.key93")}}</a>
                </div>
              </div>
            </div>
            <div class="flex_b Download_item">
              <div class="flex_b header-text">
                <img src="../assets/img/down_logo1.png" alt="">
                <div class="flex_c down_text">
                  <span>KIRINMINER:</span>
                  <span>{{$t("m.download.key29")}}</span>
                </div>
              </div>
              <div class="guide-box">
                <a href="https://file.kirinpool.com/download/KIRINMINER_InstructionManual-v1.zip?attname=">{{$t("m.download.key30")}}</a>
              </div>
              <div class="Download-main">
                <div class="tool-box">
                  <a href="https://file.kirinpool.com/download/KIRINMINER_Install.exe?attname=" target="">{{$t("m.account.key93")}}</a>
                </div>
                <div class="tool-box">
                  <a href="https://file.kirinpool.com/download/KIRINMINER.dmg?attname=" target="">{{$t("m.account.key94")}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!--常见问题-->
        <div class="main-box__content main-box-right1" v-show="this.downloadtype[0]==3">
          <div class="gonggao">
          <el-collapse class="problem_main">
            <el-collapse-item :title="problem_tile[0]" name="1" class="problem_item">
              <p>{{$t("m.download.key2")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[1]" name="2" class="problem_item">
              <p>{{$t("m.download.key4")}}</p>
              <div>
                <span style="margin-right: 10px;">{{$t("m.download.key5")}}</span>
              </div>
              <p>{{$t("m.download.key37")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[2]" name="3" class="problem_item">
              <p>{{$t("m.download.key10")}}</p>
              <p>{{$t("m.download.key11")}}
                <span>{{$t("m.download.key12")}}</span>
                <a href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname="> http://file.kirinpool.com/download/FINDMINER</a>
              </p>
              <p>{{$t("m.download.key13")}}
                <span>{{$t("m.download.key14")}}</span>
                <a href="http://file.kirinpool.com/download/KIRINMINER_1_0_0.zip?attname="> http://file.kirinpool.com/download/KIRINMINER</a>
              </p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[3]" name="4" class="problem_item">
              <p>{{$t("m.download.key16")}}</p>
              <p>www.kirinpool.com:5555 </p>
              <p>www.kirinpool.com:6666</p>
              <p>www.kirinpool.com:7777</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[4]" name="5" class="problem_item">
              <p>{{$t("m.download.key18")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[5]" name="6" class="problem_item">
              <p>{{$t("m.download.key20")}}</p>
              <p>{{$t("m.download.key21")}}</p>
              <p>{{$t("m.download.key22")}}</p>
              <p>{{$t("m.download.key23")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[6]" name="7" class="problem_item">
              <p>{{$t("m.download.key25")}}</p>
              <p>{{$t("m.download.key26")}}</p>
            </el-collapse-item>
          </el-collapse>
          </div>
        </div>
        <!-- 矿池公告 -->
        <div class="main-box__content main-box-right1" v-show="this.downloadtype[0]==4">
          <div class="gonggao">
            <div class="dialogCon">
              <div class="dialogTitle" style="text-align:center">{{$t("m.account.key101")}}</div>
              <div class="dialogTable">
                <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{$t("m.account.key102")}}</p>
                <p>{{$t("m.account.key103")}}</p>
                <p>{{$t("m.account.key104")}}</p>
                <p>{{$t("m.account.key105")}}</p>
                <p>{{$t("m.account.key106")}}</p>
                <p>{{$t("m.account.key107")}}</p>
                <p>{{$t("m.account.key108")}}</p>
              </div>
              <div class="dialogFoot">
                <p>{{$t("m.account.key109")}}</p>
                <p style="text-align:right">2019-09-24</p>
              </div>
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
import img1 from '../assets/img/help1.png'
import img2 from '../assets/img/help2.png'
import img3 from '../assets/img/help3.png'
export default {
  data() {
    return {
      switch: false,
      downloadtype: [1],
      imgsrc: [img1, img2, img3],
      helplist: [
        { top: "ICON", center: this.$t("m.header.key28"), bottom: this.$t("m.download.key40") },
        { top: "ICON", center: this.$t("m.header.key18"), bottom: this.$t("m.download.key41") },
        { top: "ICON", center: this.$t("m.download.key38"), bottom: this.$t("m.download.key39") }],
      problem_tile: [this.$t("m.download.key1"), this.$t("m.download.key3"), this.$t("m.download.key9"), this.$t("m.download.key15"), this.$t("m.download.key17")
        , this.$t("m.download.key19"), this.$t("m.download.key24")]
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
  created() {
    console.log(localStorage.getItem('to_down2'))
    if (localStorage.getItem('to_down2')) {
      this.$set(this.downloadtype, 0, localStorage.getItem('to_down2'))
      localStorage.removeItem('to_down2')
    }
  },
  methods: {
    switchBox(index) {
      console.log(index)
      if (index == 0) {
        this.switch = false
        // this.downloadtype[0] = 1
        this.$set(this.downloadtype,0,1)
      } else if (index == 1) {
        this.downloadtype[0] = 2
        this.switch = true
      }
      else if (index == 2) {
        this.switch = true
        this.downloadtype[0] = 3
      } else if (index == 3) {
        this.switch = true
        this.downloadtype[0] = 4
      }
      if (localStorage.getItem('to_down2')) {
        this.$set(this.downloadtype, 0, localStorage.getItem('to_down2'))
        localStorage.removeItem('to_down2')
        return
      }
    },

  },
  watch: {
    '$route'(to, from) {
      if (to.query.t !== from.query.t) {
        console.log(to.query)     // 在此调用函数
        this.switchBox(localStorage.getItem('to_down2'))
      }
    }
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

.color1 {
  color: rgba(51, 51, 255, 1)
}

.problem_item {
  width: 100%;
  margin-bottom: 0.1rem;
}

.flex_a_c {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
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

.flex_c {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.gonggao {
  /* min-height: 2.9rem; */
}

.problem_main {}










.help_boxli1{
  width: 80%;
  padding-bottom: 40px;
  border-bottom: 1px dashed #dddddd
}
.dialogTable{
  padding: 20px 0px;
}
.dialogTable p{
  line-height: 30px;
}
.dialogTitle{
  font-size: 16px;
  text-align: center;
  font-weight: 600
}
.dialogCon{
  padding: 0px 60px;
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

.block_box {
  width: 0.05rem;
  height: 0.05rem;
  background-color: #2e73e8;
  display: inline-block;
  margin-right: 0.05rem;
}


























/*卡片*/

.center-box {
  margin: 0 auto;
  width: 6rem;
  min-width: 810px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
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
  box-sizing: border-box;
}

.Download_item {
  height: 0.7rem;
  border-bottom: 1px solid rgba(0, 0, 1, 0.08);
}



.main-box-right1 {
  width: 100%;
  box-sizing: border-box;
  /* border: 2px solid rgba(242, 242, 242, 1); */
  border-radius: 4px;
  padding: 0 0.15rem;
}

.home_bcg img{
  width: 100%;
}


.header-text {
  margin-left: 0.25rem;
  box-sizing: border-box;
}

.guide-box {
  border-bottom: 1px solid rgba(46, 115, 232, 1)
}

.guide-box a {
  color: rgba(46, 115, 232, 1);
}

.down_text {
  width: 1.2rem;
  margin-left: 0.08rem;
}

.Download-main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.tool-box {
  width: 0.6rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  border: 1px solid rgba(46, 115, 232, 1);
  border-radius: 4px;
  color: rgba(46, 115, 232, 1);
  margin: 0.01rem;
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
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.main-box-left-1 {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
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
  color: #666666;
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
  min-height: 2.9rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.help_box {
  width: 1.33rem;
  height: 1.7rem;
  margin-top: 0.2rem;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #2e73e8;
}

.help_boxli2 {
  line-height: 0.17rem;
   font-size: 14px;
   cursor: pointer;
}

.help_boxli2_t {
  font-size: 14px;
  font-weight: 900;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}

@media (max-width: 1200px) {
  .home-parent-box,
  .center-box {
    padding: 0 0.25rem;
  }
}
</style>
