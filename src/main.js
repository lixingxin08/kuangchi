// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import router from './router'
import Vue from 'vue'
import App from './App'
import { setCookie, getCookie, delCookie } from "./assets/cookie";
import i18n from "./i18n/i18n"
import axios from "axios"
import global from "./components/Global/Global"
import Qs from "qs"
import "babel-polyfill"
import md5 from "js-md5"
import './components/common/rem.js'
import echarts from 'echarts'
import ajax from './components/common/mixin.js'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;
Vue.prototype.md5 = md5;
Vue.prototype.$ajax = ajax;
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
import Blob from './vendor/Blob'
import Export2Excel from './vendor/Export2Excel.js'

Vue.use(HappyScroll)
// axios.defaults.headers.common['Authorization'] = "Bearer " + getCookie("userToken");
axios.defaults.withCredentials = true;//让ajax携带cookie
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//进入路由前校验是否需要登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (getCookie("isLogin")) {
      next()
    } else {
      // next(
      //   // alert(window.vm.$t("m.main.key4")),
      //   // window.location.href = global.baseHerf + vm.$i18n.locale
      // );
      // next({
      //   path:"/"
      // })
      window.location.href = global.baseHerf + vm.$i18n.locale
    }
  } else {
    next()
  }
});

axios.interceptors.request.use(
  config => {

    let token = getCookie("userToken");
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = "Bearer " + `${token}`;
    }

    return config;
  },
  err => {
      return Promise.reject(err);
    }
);

axios.interceptors.response.use(
  response => {
    if(response.data.msg === "账户未登录"){
      sessionStorage.removeItem("newBlock");
      sessionStorage.removeItem("userMsg");
      setCookie("isLogin","",-1);
      if(response.data.code !== 1068){
        // router.replace({
        //   path:"login",
        //   // query:{redirect:router.currentRoute.fullPath}
        // });
        alert(window.vm.$t("m.main.key3"));
        // window.history.go(0);
        window.location.href = global.baseHerf + vm.$i18n.locale;
        return false;
      }else if(response.data.code === 1068){
        router.replace({
          path:"/",
          // query:{redirect:router.currentRoute.fullPath}
        });
        alert(window.vm.$t("m.main.key3"));
        // window.history.go(0);
        return false;
      }
    
    }
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },error => {
    if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
      alert(window.vm.$t("m.key4"));
      return Promise.reject(error);          // reject这个错误信息
    }else {
      alert(window.vm.$t("m.key"));
    }
    return Promise.reject(error);
  }
);

//校验手机号
Vue.prototype.IsPhone = function (phone) {
  var myreg = /^[1][1-9]\d{9}$/;
  if (myreg.test(phone) !== true){
    return false;
  }else {
    return true;
  }
  return true;
};
//验证邮箱格式
Vue.prototype.vmf = function (str) {
  if (this.verEmail(str) !== true) {
    return false;
  } else {
    return true;
  }
},
  //验证密码
  Vue.prototype.isNumberOr_Letter = function (s) {
    var regu = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
    if (regu.test(s)) {
      return true;
    } else {
      return false;
    }
  };

//校验用户名
Vue.prototype.verifyUsername = function (str) {
  var re = /^[a-z][a-z0-9]{7,15}$/;
  if (re.test(str) !== true) {
    return false;
  } else {
    return true
  }
},
  //千位分隔符
  Vue.prototype.format = function (num, index) {
    if (num) {
      if (typeof num === "string") {
        num = parseFloat(num)
      }
      var b = num.toFixed(index).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      // var reg = /\d{1,3}(?=(\d{3})+$)/g;
      // return (num + '').replace(reg, '$&,');
      return b;
    }

  },
  //转化M,G,T
  Vue.prototype.changpow = function (val) {
    val = Number(val)
    let val1 = new Number()
    var num = 1024.00;
    if (val < Math.pow(num, 2)) {
      val1 = val / Math.pow(num, 2)
      val1 = val1.toFixed(2)
      return val1 + "M";
    } else if (val < Math.pow(num, 3)) {
      val1 = val / Math.pow(num, 3)
      val1 = val1.toFixed(2)
      return val1 + "G"
    } else if (val > Math.pow(num, 3)) {
      val1 = val / Math.pow(num, 4)
      val1 = val1.toFixed(2)
      return val1 + "T";
    }
  }
//设置cookie
Vue.prototype.setCookie = function (key, val, time) {
  var date = new Date(); //获取当前时间
  var expiresDays = time;  //将date设置为n天以后的时间
  date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
  document.cookie = key + "=" + val + ";expires=" + date.toGMTString();  //设置cookie
};
//获取cookie
Vue.prototype.getCookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) !== -1) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//验证邮箱格式
Vue.prototype.verEmail = function (str) {
  var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if (re.test(str) !== true) {
    return false;
  } else {
    return true;
  }
};
//中国标准时间转化时间格式
Vue.prototype.Format = function (time, format) {
  var t = new Date(time);
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;
      case 'MM':
        return tf(t.getMonth() + 1);
        break;
      case 'mm':
        return tf(t.getMinutes());
        break;
      case 'dd':
        return tf(t.getDate());
        break;
      case 'HH':
        return tf(t.getHours());
        break;
      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  })
}
//时间戳转化时间格式
Vue.prototype.timestampToTime = function (value) {
  let date = new Date(value * 1000);
  var Y = date.getFullYear();
  var M = date.getMonth() + 1;
  var D = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  return Y + "-" + M + "-" + D + " " + h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};
//倒计时
Vue.prototype.countDown = function (btn) {
  let seft = this;
  clearInterval(seft.interval);
  seft.interval = window.setInterval(function () {
    seft.time--;
    btn.text(seft.$t("m.main.key2") + " (" + seft.time + ")");
    if (seft.time <= 0) {
      btn.text(seft.$t("m.main.key1"));
      seft.time = 60;
      btn.removeAttr("disabled").css("cursor", "pointer");
      window.clearInterval(seft.interval)
    }
  }, 1000)
};
var axios_instance = axios.create({
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data
  }],
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
Vue.prototype.sessionStorage = sessionStorage;
/* eslint-disable no-new */
window.vm = new Vue({
  // el:"#app",
  i18n,
  // router,
  // components: { App },
  // template: '<App/>'
});

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',

})

