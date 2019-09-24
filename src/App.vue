<template>
  <div id="app">
    <div class="pc">
      <Header class="Header" v-if="isRouterAlive" v-show="$route.path !=='/app'"></Header>
      <router-view class="router-view" v-if="isRouterAliveTwo"></router-view>
      <keep-alive>
        <foo class="Foo" v-show="$route.path !=='/app'"></foo>
      </keep-alive>
      <div class="backtop" v-show="btnFlag" @click="backTop()">
        <img src="./assets/img/backtop.png" alt />
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
      reloadTwo: this.reloadTwo
    };
  },
  created() {},
  components: {
    Header: header,
    foo: foo
  },
  data() {
    return {
      isRouterAlive: true,
      isRouterAliveTwo: true,
      scrollTop: 0,
      btnFlag: false
    };
  },
  methods: {
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
    }
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
  font-size: 14px;
}
.backtop {
  position: fixed;
  bottom: 0.28rem;
  right: 0.26rem;
  border-radius: 50%;
  background-color: rgba(236, 243, 251, 1);
}

.backtop img {
  width: 0.4rem;
  height: 0.4rem;
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
