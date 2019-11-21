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
            <li v-show="downloadtype[0]==4" :class="this.switch?'systemActive':''"  @click="switchBox(4)">
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
                <div class="flex_a_c"> <span class="help_boxli2_t">{{item.center}}</span>
                <span v-if="lang!=='en'">{{item.bottom}}</span></div>           
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
                    <span>One-clickUpgrading:</span>
                    <span>{{$t("m.account.key91")}}</span>
                  </div>
                </div>
                <!--一键升级工具-->
                <div class="guide-box">
                  <a href="https://file.kirinpool.com/download/OneClickUpgrading_InstructionManual_20190928_1.zip?attname=OneClickUpgrading_InstructionManual.zip" target="_blank">{{$t("m.account.key92")}}</a>
                </div>
                <div class="Download-main">
                  <div class="tool-box">
                    <a  href="https://file.kirinpool.com/download/One-clickUpgrading_20191101_1.exe?attname=One-clickUpgrading-v6-0.exe" target="_blank">{{$t("m.account.key93")}}</a>
                  </div>
                  <div class="tool-box">
                    <a href="https://file.kirinpool.com/download/OneClickUpgrading_20191101_1.zip?attname=One-clickUpgrading-v6-0.zip" target="_blank">{{$t("m.account.key94")}}</a>
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
                <!-- <a  v-bind:href="'http://file.kirinpool.com/download/zh/FINDMINER.pdf?'+timestamp">{{$t("m.download.key34")}}</a> -->
                <div v-if="lang=='zh'">
                <a  href="http://file.kirinpool.com/download/zh/FINDMINER.pdf?attname=FINDMINER.pdf" target="_blank">{{$t("m.download.key34")}}</a>
                </div>
                  <div v-if="lang!=='zh'">
                <a  href="https://file.kirinpool.com/download/en/FINDMINER.pdf?attname=FINDMINER.pdf" target="_blank">{{$t("m.download.key34")}}</a>
                </div>
              </div>
              <div class="Download-main">
                <div class="tool-box">
                  <a  href="http://file.kirinpool.com/download/FINDMINER_1_0_0.zip?attname=FINDMINER_1_0_0.zip" target="_blank" class="tool-btn">{{$t("m.account.key93")}}</a>
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
                <a  href="https://file.kirinpool.com/download/KIRINMINER_InstructionManual-v3_20191101_1.zip?attname=KIRINMINER_InstructionManual-v3.zip" target="_blank">{{$t("m.download.key30")}}</a>
              </div>
              <div class="Download-main">
                <div class="tool-box">
                  <a href="https://file.kirinpool.com/download/KIRINMINER_Install_20191101_1.exe?attname=KIRINMINER_Install.exe" target="_blank">{{$t("m.account.key93")}}</a>
                </div>
                <div class="tool-box">
                  <a  href="https://file.kirinpool.com/download/KIRINMINER_20191101_1.dmg?attname=KIRINMINER.dmg" target="_blank">{{$t("m.account.key94")}}</a>
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
              <p>{{$t("m.FAQ.key2")}}</p>
              <p>{{$t("m.FAQ.key3")}}</p>
              <p>{{$t("m.FAQ.key4")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[1]" name="2" class="problem_item">
              <p>{{$t("m.FAQ.key6")}}</p>
              <p>{{$t("m.FAQ.key7")}}</p>
              <p>{{$t("m.FAQ.key8")}}
                <a href="https://token.im/"  target="_blank"> https://token.im/</a>
              </p>
              <p>{{$t("m.FAQ.key9")}}</p>
              <p v-if="lang=='zh'">{{$t("m.FAQ.key10")}}
                <a href="https://support.token.im/hc/zh-cn/articles/360008124173" target="_blank"> https://support.token.im/hc/zh-cn/articles/360008124173</a>
              </p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[2]" name="3" class="problem_item">
              <p>{{$t("m.FAQ.key12")}}</p>
              <p>{{$t("m.FAQ.key13")}}</p>
              <p>{{$t("m.FAQ.key14")}}
                <a href="asia.kirinpool.com:5555"  target="_blank"> asia.kirinpool.com:5555</a>
              </p>
              <p>{{$t("m.FAQ.key15")}}
                <a href="asia.kirinpool.com:6666"  target="_blank"> asia.kirinpool.com:6666</a>
              </p>
              <p>{{$t("m.FAQ.key16")}}
                <a href="asia.kirinpool.com:7777"  target="_blank">asia.kirinpool.com:7777</a>
              </p>
              <p>{{$t("m.FAQ.key17")}}</p>
              <p>{{$t("m.FAQ.key18")}}
                <a href="america.kirinpool.com:5555"  target="_blank">america.kirinpool.com:5555</a>
              </p>
              <p>{{$t("m.FAQ.key19")}}
                <a href="america.kirinpool.com:6666"  target="_blank"> america.kirinpool.com:6666</a>
              </p>
              <p>{{$t("m.FAQ.key20")}}
                <a href="america.kirinpool.com:7777"  target="_blank">america.kirinpool.com:7777</a>
              </p>
              <p>{{$t("m.FAQ.key21")}}</p>
              <p>{{$t("m.FAQ.key22")}}
                <a href="europe.kirinpool.com:555"  target="_blank">europe.kirinpool.com:5555</a>
              </p>
              <p>{{$t("m.FAQ.key23")}}
                <a href="europe.kirinpool.com:6666"  target="_blank">europe.kirinpool.com:6666</a>
              </p>
              <p>{{$t("m.FAQ.key24")}}
                <a href="europe.kirinpool.com:7777"  target="_blank">europe.kirinpool.com:7777</a>
              </p>
              <p>{{$t("m.FAQ.key25")}}</p>
              <p>{{$t("m.FAQ.key26")}}
                <a href="australia.kirinpool.com:5555"  target="_blank">australia.kirinpool.com:5555</a>
              </p>
              <p>{{$t("m.FAQ.key27")}}
                <a href="australia.kirinpool.com:6666"  target="_blank">australia.kirinpool.com:6666</a>
              </p>
              <p>{{$t("m.FAQ.key28")}}
                <a href="australia.kirinpool.com:7777"  target="_blank">australia.kirinpool.com:7777</a>
              </p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[3]" name="4" class="problem_item">
              <p>{{$t("m.FAQ.key30")}}</p>
              <p>{{$t("m.FAQ.key31")}}</p>
              <p>{{$t("m.FAQ.key32")}}</p>
              <p>{{$t("m.FAQ.key33")}}</p>
              <p>{{$t("m.FAQ.key34")}}</p>
              <p>{{$t("m.FAQ.key35")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[4]" name="5" class="problem_item">
              <p>{{$t("m.FAQ.key37")}}</p>
              <p>{{$t("m.FAQ.key38")}}</p>
              <p>{{$t("m.FAQ.key39")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[5]" name="6" class="problem_item">
              <p>{{$t("m.FAQ.key41")}}</p>
              <p>{{$t("m.FAQ.key42")}}</p>
            </el-collapse-item>
            <el-collapse-item :title="problem_tile[6]" name="7" class="problem_item">
              <p>{{$t("m.FAQ.key44")}}</p>
            </el-collapse-item>
             <el-collapse-item :title="problem_tile[7]" name="8" class="problem_item">
              <p>{{$t("m.FAQ.key46")}}</p>
              <p>{{$t("m.FAQ.key47")}}</p>
              <p>{{$t("m.FAQ.key48")}}</p>
              <p>{{$t("m.FAQ.key49")}}</p>
              <p>
                <a href="asia.kirinpool.com:5555"  target="_blank">{{$t("m.FAQ.key50")}}</a>
              </p>
              <p>
                <a href="asia.kirinpool.com:6666"  target="_blank">{{$t("m.FAQ.key51")}}</a>
              </p>
              <p>
                <a href="asia.kirinpool.com:7777"  target="_blank">{{$t("m.FAQ.key52")}}</a>
              </p>
              <P>{{$t("m.FAQ.key53")}}</P>
            </el-collapse-item>
             <el-collapse-item :title="problem_tile[8]" name="9" class="problem_item">
              <p>{{$t("m.FAQ.key55")}}</p>
              <p>{{$t("m.FAQ.key56")}}</p>
            </el-collapse-item>
              <el-collapse-item :title="problem_tile[9]" name="10" class="problem_item">
              <p>{{$t("m.FAQ.key108")}}</p>
              <p>{{$t("m.FAQ.key109")}}</p>
               <p>{{$t("m.FAQ.key110")}}</p>
            </el-collapse-item>
              <el-collapse-item :title="problem_tile[10]" name="11" class="problem_item">
              <p>{{$t("m.FAQ.key112")}}</p>
              <p>{{$t("m.FAQ.key113")}}</p>
               <p>{{$t("m.FAQ.key114")}}</p>
            </el-collapse-item>
          </el-collapse>
          </div>
        </div>
        <!-- 矿池公告 -->
        <div class="main-box__content main-box-right1" v-show="this.downloadtype[0]==4">
          <div class="Upgrade" v-if="Upgradeid==0">
            <div class="flex_b Upgrade_item" v-for="(item,index) in Upgrade_list[0]" :key="index" @click="selectUpgrade(index+1)">
              <div class="Upgrade_item_l">
                   <div class="Upgrade_item_lt"> {{Upgrade_list[2][index]}}</div>
                   <div class="Upgrade_item_lb">{{item}}</div>
              </div>
              <div class="Upgrade_item_r">
               {{Upgrade_list[1][index]}}
                <div class="Upgrade_item_rb">{{$t("m.upgrade.key19")}}></div>
              </div>
             
            </div>
          </div>
          <div class="gonggao minheight" v-if="Upgradeid==1">
            <div class="dialogCon">
              <div class="dialogTitle" style="text-align:center">{{$t("m.upgrade.key1")}}</div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key2")}}</strong></p>
               </div>  
              <div class="dialogTable"> 
                <p>{{$t("m.upgrade.key26")}}</p>
              </div> 
                <div class="dialogTable">
                <p><strong>{{$t("m.account.key109")}}</strong></p>
                <p>{{$t("m.account.key110")}}</p>
                <p>{{$t("m.account.key111")}}</p>
              </div>  
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key27")}}</strong></p>
                <p><strong>{{$t("m.upgrade.key28")}}</strong></p>
              </div>
            </div>
          </div>              
          <div class="gonggao minheight" v-if="Upgradeid==2">
            <div class="dialogCon">
              <div class="dialogTitle" style="text-align:center">{{$t("m.upgrade.key1")}}</div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key2")}}</strong></p>
               </div>  
              <div class="dialogTable"> 
                <p>{{$t("m.upgrade.key22")}}</p>
                 <p>{{$t("m.upgrade.key23")}}</p>
              </div> 
                <div class="dialogTable">
                <p><strong>{{$t("m.account.key109")}}</strong></p>
                <p>{{$t("m.account.key110")}}</p>
                <p>{{$t("m.account.key111")}}</p>
              </div>  
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key15")}}</strong></p>
                <p><strong>{{$t("m.upgrade.key24")}}</strong></p>
              </div>
            </div>
          </div>          
          <div class="gonggao minheight" v-if="Upgradeid==3">
            <div class="dialogCon">
              <div class="dialogTitle" style="text-align:center">{{$t("m.upgrade.key1")}}</div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key2")}}</strong></p>
               </div>  
              <div class="dialogTable"> 
                <p>{{$t("m.upgrade.key3")}}</p>
              </div>  
               <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key4")}}</strong></p>
                <p>{{$t("m.upgrade.key5")}}</p>
                <p>{{$t("m.upgrade.key6")}}</p>
              </div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key7")}}</strong></p>
                <p>{{$t("m.upgrade.key8")}}</p>
                <p>{{$t("m.upgrade.key9")}}</p>
                 <p>{{$t("m.upgrade.key10")}}</p>
                <p>{{$t("m.upgrade.key11")}}</p>
              </div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key12")}}</strong></p>
                <p>{{$t("m.upgrade.key13")}}</p>
                 <p>{{$t("m.upgrade.key14")}}</p>
              </div>
              <div class="dialogTable">
                <p><strong>{{$t("m.upgrade.key15")}}</strong></p>
                <p><strong>{{$t("m.upgrade.key16")}}</strong></p>
              </div>
            </div>
          </div>  
                <div class="gonggao" v-if="Upgradeid==4">
            <div class="dialogCon">
              <div class="dialogTitle" style="text-align:center">{{$t("m.account.key101")}}</div>
              <div class="dialogTable">
                <p><strong>{{$t("m.account.key102")}}</strong></p>
               </div>  
              <div class="dialogTable"> 
                <p>{{$t("m.account.key103")}}</p>
              </div>  
               <div class="dialogTable">
                <p><strong>{{$t("m.account.key104")}}</strong></p>
                <p>{{$t("m.account.key105")}}</p>
                <p>{{$t("m.account.key106")}}</p>
                <p>{{$t("m.account.key107")}}</p>
                <p>{{$t("m.account.key108")}}</p>
              </div>
              <div class="dialogTable">
                <p><strong>{{$t("m.account.key109")}}</strong></p>
                <p>{{$t("m.account.key110")}}</p>
                <p>{{$t("m.account.key111")}}</p>
              </div>
              <div class="dialogTable">
                <p><strong>{{$t("m.account.key112")}}</strong></p>
                <p><strong>{{$t("m.account.key113")}}</strong></p>
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
      Upgradeid:0,
      lang:'zh',
      Upgrade_list:[[this.$t("m.upgrade.key26"),this.$t("m.upgrade.key22"),this.$t("m.upgrade.key3"),this.$t("m.account.key103")],
      [this.$t("m.upgrade.key28"),this.$t("m.upgrade.key24"),this.$t("m.upgrade.key16"),this.$t("m.upgrade.key18")],
      [this.$t("m.upgrade.key31"),this.$t("m.upgrade.key30"),this.$t("m.upgrade.key1"),this.$t("m.account.key101")]],
      helplist: [
        { top: "ICON", center: this.$t("m.header.key28"), bottom: this.$t("m.download.key40") },
        { top: "ICON", center: this.$t("m.header.key18"), bottom: this.$t("m.download.key41") },
        { top: "ICON", center: this.$t("m.download.key38"), bottom: this.$t("m.download.key39") }],
      problem_tile: [this.$t("m.FAQ.key1"), this.$t("m.FAQ.key5"), this.$t("m.FAQ.key11"), this.$t("m.FAQ.key29"), this.$t("m.FAQ.key36")
        , this.$t("m.FAQ.key40"), this.$t("m.FAQ.key43"), this.$t("m.FAQ.key45"), this.$t("m.FAQ.key54"),this.$t("m.FAQ.key107"),this.$t("m.FAQ.key111")],
        timestamp:Date.parse(new Date())
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
    if (localStorage.getItem('lang')=='zh') {
      this.lang='zh'
    }else if(localStorage.getItem('lang')=='en'){
       this.lang='en'
    }else if(localStorage.getItem('lang')=='ko'){
       this.lang='ko'
    }
    if (localStorage.getItem('to_down2')) {
      this.$set(this.downloadtype, 0, localStorage.getItem('to_down2'))
      localStorage.removeItem('to_down2')
    }
  },
  methods: {
    switchBox(index) {
     this.Upgradeid=0
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
      selectUpgrade(id){
        this.Upgradeid=id
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
.minheight{
  min-width: 2.9rem;
}
.color1 {
  color: #2e73e8;
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
.Upgrade{
  padding: 0 0.15rem;
}
.Upgrade_item{
  min-height: 0.65rem;
  padding: 0.1rem 0;
  border-bottom: 1px solid #d5d8dc;

}
.Upgrade_item_l{
    margin-right: 0.88rem;
       cursor: pointer;
}
.Upgrade_item_r{
  min-width:130px ;
  position: relative;
     cursor: pointer;
}
.Upgrade_item_rb{
  position: absolute;
  bottom: -0.2rem;
  color: #2e73e8;
  cursor: pointer;
}
.Upgrade_item_lt{
  font-family: MicrosoftYaHei-Bold;
	font-size: 16px;
	font-weight: 600;
     line-height: 35px;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #2c3e50;
}
.Upgrade_item_lb{
   line-height: 35px;
}
.problem_main {}










.help_boxli1{
  width: 80%;
  padding-bottom: 0.2rem;
  border-bottom: 1px dashed #dddddd
}
.dialogTable{
  padding: 5px 0px;
}
.dialogTable p{
  line-height: 30px;
}
.dialogTitle{
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 1px solid #d5d8dc;
}
.dialogCon{
  padding: 0px 0.5rem;
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
  margin-top: 0.2rem;
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
  color: #2e73e8;
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
  min-height: 2.5rem;
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
  border: solid 1px #e5e5e5;
}
.help_box:hover{
 border: solid 1px #2e73e8;
}
.help_boxli2 {
  line-height: 0.17rem;
   font-size: 14px;
   height: 0.75rem;
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
