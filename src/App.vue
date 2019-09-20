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

a {
  text-decoration: none !important;
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
</style>
