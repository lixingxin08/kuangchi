<template>
  <div id="app">
    <div class="pc">
      <Header class="Header" v-if="isRouterAlive" v-show="$route.path !=='/app'"></Header>
      <router-view class="router-view" v-if="isRouterAliveTwo"></router-view>
      <keep-alive>
        <foo class="Foo" v-show="$route.path !=='/app'"></foo>
      </keep-alive>
      <div class="upgrade" v-show="btnFlag" @click="gethelp()">
              
          <div class="upgrade_img upgrade_img1" v-if="langtype==1"></div>
           <div class="upgrade_img upgrade_img2" v-if="langtype==2"></div>
            <div class="upgrade_img upgrade_img3" v-if="langtype==3"></div>
      </div>   
      <div class="backtop" v-show="btnFlag" @click="backTop()">
        <!-- <img src="./assets/img/backtop.png" alt /> -->
            <div class="totop"></div> 
      </div>
          <!-- 指导 -->
          <div>
      <el-dialog title="" :visible.sync="dialogTableVisible" width="4rem"  custom-class="dialogConTop" @close="closeLDialog">
        <div class="beginTep01" v-if="step0">
          <p class="step0_title">{{$t( "m.FAQ.key57")}}</p>
          <p class="step0_text">{{$t( "m.FAQ.key58")}}</p>
          <p class="step0_img">
            <img src="./assets/img/step/img1.png" alt="">
          </p>
          <p class="stepo_btn" @click="stepo_btn()">{{$t( "m.FAQ.key59")}}</p>
        </div>
        <div class="beginTep02" v-if="step1">
          <div class="step1_img"  style="background:#f8fafc" v-if="step00">
            <p class="step1_title">{{$t( "m.FAQ.key60")}}</p>
            <p class="step1_text">{{$t( "m.FAQ.key61")}}->{{$t( "m.FAQ.key62")}}，{{$t( "m.FAQ.key63")}}</p>
          </div>
          <div class="step1_img"  style="background:#f8fafc" v-if="step01">
            <p class="step1_title">{{$t( "m.FAQ.key64")}}</p>
            <p class="step1_text">{{$t( "m.FAQ.key65")}}</p>
          </div>
          <div class="step1_img"  style="background:#f8fafc" v-if="step02">
            <p class="step1_title">{{$t( "m.FAQ.key66")}}</p>
            <p class="step1_text">{{$t( "m.FAQ.key67")}}</p>
          </div>
          <div class="step1_img"  style="background:#f8fafc" v-if="step03">
            <p class="step1_title">{{$t( "m.FAQ.key68")}}</p>
            <p class="step1_text">{{$t( "m.FAQ.key69")}}</p>
          </div>
          <div class="step1_img"  style="background:#f8fafc" v-if="step04">
            <p class="step1_title">{{$t( "m.FAQ.key70")}}</p>
            <p class="step1_text">{{$t( "m.FAQ.key71")}}</p>
          </div>
          <div style="margin-top:0.18rem">
            <el-carousel :interval="5000" arrow="always" :autoplay="false" :loop="false" trigger="click"  @change="onChange">
              <el-carousel-item style="margin-bottom:0.5rem">
                <div v-if="langtype==1"><img src="./assets/img/step/step1.jpg" alt=""></div>
                 <div v-if="langtype==2"><img src="./assets/img/step/step6.jpg" alt=""></div>
                  <div v-if="langtype==3"><img src="./assets/img/step/step10.jpg" alt=""></div>
                
              </el-carousel-item>
              <el-carousel-item>
                 <div v-if="langtype==1"><img src="./assets/img/step/step2.jpg" alt=""></div>
                 <div v-if="langtype==2"><img src="./assets/img/step/step7.jpg" alt=""></div>
                  <div v-if="langtype==3"><img src="./assets/img/step/step11.jpg" alt=""></div>
              </el-carousel-item>
              <el-carousel-item>
                <div v-if="langtype==1"><img src="./assets/img/step/step3.png" alt=""></div>
                 <div v-if="langtype==2"><img src="./assets/img/step/step8.png" alt=""></div>
                  <div v-if="langtype==3"><img src="./assets/img/step/step12.png" alt=""></div>
              </el-carousel-item>
              <el-carousel-item>
                <img src="./assets/img/step/step4.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                  <div v-if="langtype==1"><img src="./assets/img/step/step5.jpg" alt=""></div>
                 <div v-if="langtype==2"><img src="./assets/img/step/step9.jpg" alt=""></div>
                  <div v-if="langtype==3"><img src="./assets/img/step/step13.jpg" alt=""></div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="skip" v-if="SKIP1" @click="closeLDialog1">{{$t( "m.FAQ.key73")}}</div>
          <div class="skip" v-else @click="closeLDialog1">{{$t( "m.FAQ.key72")}}</div>
        </div>
      </el-dialog> 
      </div> 
    </div>
  </div>
</template>

<script>
import header from "./components/header";
import foo from "./components/foo";
export default {
  provide() {
    return {
      reload: this.reload,
      reloadTwo: this.reloadTwo,
    };
  },
  created() {  
      if (localStorage.getItem("lang")) {
        if (localStorage.getItem("lang")=='zh') {
          this.langtype=1
        }if (localStorage.getItem("lang")=='en') {
          this.langtype=2
        }if (localStorage.getItem("lang")=='ko') {
          this.langtype=3
        }
      }
    if ( localStorage.getItem("offer")==1) {
        this.dialogTableVisible=false
    }
  },
  components: {
    Header: header,
    foo: foo
  },
  data() {
    return {
      isRouterAlive: true,
      isRouterAliveTwo: true,
      scrollTop: 0,
      btnFlag: false,
      dialogTableVisible:true,
      step0:true,
      step1:false,
      step00:false,
      step01:false,
      step02:false,
      step03:false,
      step04:false,
      SKIP1:true,
      langtype:1,
    };
  },
  methods: {
    gethelp(){
      this.dialogTableVisible=true
    },
    reload() {
      this.isRouterAlive = true;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    reloadTwo() {
      this.isRouterAliveTwo = false;
      this.$nextTick(function() {
        this.isRouterAliveTwo = true;
      });
    },
    showIcon() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        
        let ispeed = Math.floor(-that.scrollTop / 5);
        window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;

        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    closeLDialog(){
      console.log(1111);
      this.dialogTableVisible=false
      sessionStorage.setItem("offer",'1');
      localStorage.setItem("offer",'1');
       this.step0=true
      this.step1=false
      this.step00=false
      this.step01=false
      this.step02=false
       this.step03=false
       this.step04=false
       this.SKIP1=true
       
       },
    closeLDialog1(){
      sessionStorage.setItem("offer",'1');
       localStorage.setItem("offer",'1');
      this.dialogTableVisible=false
      this.step0=true
      this.step1=false
      this.step00=false
      this.step01=false
      this.step02=false
       this.step03=false
       this.step04=false
       this.SKIP1=true
    }, 
     stepo_btn(){
      this.step0=false;
      this.step1=true;
    },  
    onChange(index,a){
      console.log(index);
      if(index=='0'){
        this.step00=true;
        this.step01=false;
        this.step02=false;
        this.step03=false;
        this.step04=false;
        this.SKIP1=true;
      }else if(index=='1'){
        this.step00=false;
        this.step01=true;
        this.step02=false;
        this.step03=false;
        this.step04=false;
        this.SKIP1=true;
      }else if(index=='2'){
        this.step00=false;
        this.step01=false;
        this.step02=true;
        this.step03=false;
        this.step04=false;
        this.SKIP1=true;
      }else if(index=='3'){
        this.step00=false;
        this.step01=false;
        this.step02=false;
        this.step03=true;
        this.step04=false;
        this.SKIP1=true;
      }else if(index=='4'){
        this.step00=false;
        this.step01=false;
        this.step02=false;
        this.step03=false;
        this.step04=true;
        this.SKIP1=false;
      }
    }, 
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon, true);
  },
  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.showIcon);
  },
  beforeDestroy() {
    // localStorage.removeItem('subnameList')
    // localStorage.removeItem('token')
    // localStorage.removeItem('isLogin')
    // localStorage.removeItem('username')
    // localStorage.removeItem("change");
    // localStorage.removeItem("subusername");    
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.step0_title{
   background-image: -webkit-linear-gradient(#001f80,#2f25ff,#00ffdd);
  -webkit-background-clip:text; 
  -webkit-text-fill-color:transparent; 
  font-size: 0.12rem;
  font-weight: 600
}
.step0_text{
	font-family: MicrosoftYaHei;
	font-size: 0.09rem;
	font-weight: normal;
	font-stretch: normal;
	color: #333333;
  text-align: center;
  margin-top: 0.08rem;
}
.step0_img{
  margin-top: 0.17rem;
}
.stepo_btn{
  width: 0.6rem;
  height: 0.2rem;
  margin: auto;
  margin-top: 0.27rem;
	background-color: #2e73e8;
	border-radius: 4px;
  line-height: 0.2rem;
  color: #f2f2f2;
  cursor: pointer;
  margin-bottom: 0.32rem;
  font-size: 0.07rem;
}
.step1_title{
  font-size: 0.12rem;
}
.step1_text{
  padding-top: 0.08rem;
  font-size: 0.09rem;
  color: #2e73e8
}
.step1_img img{
  margin-top: 0.2rem
}
.step1_img{
  padding-bottom: 0.1rem;
  padding-top: 0.15rem;
}
.skip{
  position: absolute;
  right: 81px;
  bottom: 35px;
  font-size: 15px;
  z-index: 222;
  color: rgb(46, 115, 232);
  cursor: pointer;
}
.beginTep01{
  padding-top: 50px;
  padding-bottom: 30px;
}
.beginTep02{

}





























p {
  margin: 0;
}
.colorred:{
  color: red;
}
a {
  text-decoration: none !important;
}
.el-step__head.is-finish{
  color: #fff;
}
.is-finish .el-step__icon{
  background-color: #2f76ec;
}
.is-process .el-step__icon{
   background-color: #2f76ec;
   color: #fff;
    border: 2px solid #2f76ec;
}
.el-step__title.is-process{
  color:#2f76ec;
}
.el-icon--right{
  margin-left:1px;
}
 .is-wait .el-step__icon{
   background-color: #dcdcdc;
    color: #fff;
    border: 2px solid #dcdcdc;
}
a li {
  color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1300px!important;
  /*margin-top: 60px;*/
}
.flex_fc_c{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column
}
.el-dropdown-menu{
  max-height: 1900px
}
.pc{
  min-width: 1300px!important;
  font-family: MicrosoftYaHei;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
}
.upgrade{
  position: fixed;
  bottom: 0.78rem;
  right: 0.26rem;
}
.upgrade_img{
  min-width: 50px;
  width: 0.31rem;
  height: 0.31rem;
  line-height: 0.31rem;
  text-align: center;
 overflow: hidden;
 font-size: 0.05rem;
 color: red;
 text-overflow: ellipsis;
}
.upgrade_img1{
  background: url('./assets/img/step/help1.png') 100% 100% no-repeat;
  background-size:100% 100%;
}
.upgrade_img1:hover{
   background: url('./assets/img/step/help4.png') 100% 100% no-repeat;
   background-size:100% 100%; 
}
.upgrade_img2{
  background: url('./assets/img/step/help2.png') 100% 100% no-repeat;
  background-size:100% 100%;
}
.upgrade_img2:hover{
   background: url('./assets/img/step/help5.png') 100% 100% no-repeat;
   background-size:100% 100%; 
}
.upgrade_img3{
  background: url('./assets/img/step/help3.png') 100% 100% no-repeat;
  background-size:100% 100%;
}
.upgrade_img3:hover{
   background: url('./assets/img/step/help6.png') 100% 100% no-repeat;
   background-size:100% 100%; 
}

.backtop {
  position: fixed;
  bottom: 0.28rem;
  right: 0.26rem;
  background-color: rgba(236, 243, 251, 1);
  border-radius: 50%
}
.totop{
  width: 0.31rem;
  height: 0.31rem;
  background: url('./assets/img/backtop.png') 100% 100% no-repeat;
  background-size:100% 100%; 
 overflow: hidden;
 }
.totop:hover{
   background: url('./assets/img/backtoped.png') 100% 100% no-repeat;
   background-size:100% 100%; 
}
body {
  /*background: #5714d1;*/
}

li {
  list-style: none;
  /*display: inline-block;*/
}

input,
button {
  outline: none;
  line-height: normal;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /*-webkit-appearance: none;*/
  /*appearance: none;*/
  margin: 0;
  color: #999999;
}

.el-timeline-item__tail {
  top: 0.1rem !important;
}

.el-timeline-item__node--normal {
  top: 0.1rem !important;
}
@media (max-width: 1300px) {
#app{
  font-size: 100px!important
}
}
/* 火狐 */

/*input{*/

/*-moz-appearance:textfield;*/

/*}*/

/*input::-webkit-input-placeholder ,textarea::-webkit-input-placeholder {*/

/*color: #666*/

/*}*/

/*　input::-moz-placeholder textarea::-moz-placeholder {*/

/*color: #666*/

/*}*/

/*input::-moz-placeholder, textarea::-moz-placeholder {*/

/*color:#666;*/

/*}*/

/*　　input:-ms-input-placeholder, textarea:-ms-input-placeholder {*/

/*color:#666;*/

/*}*/
.el-carousel__button{
  width: 8px!important;
  height: 8px!important;
  background: #2e73e8!important;
  border-radius: 50%!important;
}
.el-carousel__item{
  margin-bottom:0rem!important
}
.el-carousel__container{
  height: 407px;
}
.el-carousel__arrow{
  top: 40%
}
.el-dialog__body{
  padding: 0px;
}
.el-dialog__header{
  background:#f8fafc
}
.el-dialog__header{
  padding: 0px;
}
.el-carousel__indicators{
  bottom: 20px
}
.el-carousel__arrow{
  color: #b4b4b4;
  font-size: 30px;
  background-color:#fff;
}
.el-carousel__arrow:hover{
  background-color:#fff;
  color: #2e73e8;
 border-radius: 0px;
}
</style>
