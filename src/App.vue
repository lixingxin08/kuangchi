<template>
  <div id="app">
    <div class="pc">
      <Header class="Header" v-if="isRouterAlive" v-show="$route.path !=='/app'"></Header>
      <router-view class="router-view" v-if="isRouterAliveTwo"></router-view>
      <foo class="Foo" v-show="$route.path !=='/app'"></foo>
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
    }
  },
  created() {
  },
  components: {
    Header: header,
    foo: foo
  }, data() {
    return {
      isRouterAlive: true,
      isRouterAliveTwo: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = true;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      })
    },
    reloadTwo() {
      this.isRouterAliveTwo = false;
      this.$nextTick(function() {
        this.isRouterAliveTwo = true;
      })
    },
  },
  beforeDestroy() {
    // localStorage.removeItem('change')
    // localStorage.removeItem('username')
    // localStorage.removeItem('subusername')
    // localStorage.removeItem('token')
    // localStorage.removeItem('subnameList')
  }
}
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 810px;
  /*margin-top: 60px;*/
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

.el-timeline-item__tail{
  top:0.1rem !important;
}
.el-timeline-item__node--normal{
  top: 0.1rem!important;
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
