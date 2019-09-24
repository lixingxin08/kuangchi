import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
let home = ''

const mobile_home = resolve => require(['@/components/pc_home'], resolve);
const pc_home = resolve => require(['@/components/pc_home'], resolve)
const homeitem = resolve => require(['@/components/homeitem'], resolve)
const myprofit = resolve => require(['@/components/myprofit'], resolve);
const nothing = resolve => require(['@/components/nothing'], resolve);
const myltc = resolve => require(['@/components/myltc'], resolve);
const sublist = resolve => require(['@/components/son_set'], resolve);
const unsub = resolve => require(['@/components/no_son'], resolve);
const login = resolve => require(['@/components/login'], resolve);
const register = resolve => require(['@/components/register'], resolve);
const restePassword = resolve => require(['@/components/restePassword'], resolve);
const personal = resolve => require(['@/components/personal'], resolve);
// const sevices = resolve => require(['@/components/termsOfSevices'], resolve);
// import wallet from '@/components/wallet'
// const wallet=resolve=>require(['@/components/wallet'],resolve);
// import register from '@/components/register'
// import reset from '@/components/restePassword'
// import download from '@/components/download'
const download = resolve => require(['@/components/download'], resolve);
// import setting from '@/components/setting'
// const setting=resolve=>require(['@/components/setting'],resolve);
// import app from '@/components/downloadApp'
const app = resolve => require(['@/components/downloadApp'], resolve);
function browserRedirect(pcdata, mobiledata) {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  // document.writeln("您的浏览设备为：");
  console.log("您的浏览设备为：")
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    // document.writeln("phone");
    console.log("phone")
    resolve => require(['@/components/mobile_home'], resolve);
    return home = mobiledata

  } else {
    // document.writeln("pc");

    console.log("pc")
    return home = pcdata
  }
}

browserRedirect(pc_home, mobile_home);
Vue.use(Router);

export default new Router({
  routes: [
        { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: home
    },
        {
      path: '/homeitem',
      name: 'homeitem',
      component: homeitem
    },
    {
      path: '/myprofit',
      name: 'myprofit',
      component: myprofit,
      meta: {
        // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/unsub',
      name: 'unsub',
      component: unsub,
      meta: {
        // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/myltc',
      name: 'myltc',
      component: myltc,
      meta: {
        // requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/sublist',
      name: 'sublist',
      component: sublist,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/download',
      name: 'download',
      component: download,
      meta: {
      }
    },
    // {
    //   path: '/sevices',
    //   name: 'sevices',
    //   component: sevices,
    // },
    {
      path: '/nothing',
      name: 'nothing',
      component: nothing,
      meta: {
      }
    },
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: setting,
    //   meta: {
    //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    //   }
    // },
    // {
    //   path: '/reset',
    //   name: 'reset',
    //   component: reset,
    // },
    {
      path: '/app',
      name: 'app',
      component: app
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/restePassword',
      name: 'restePassword',
      component: restePassword
    },
  ]
})
