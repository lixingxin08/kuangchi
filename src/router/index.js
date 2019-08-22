import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
let home=''

const mobile_home = resolve => require(['@/components/mobile_home'], resolve);
const myprofit = resolve => require(['@/components/myprofit'], resolve);
const myltc = resolve => require(['@/components/myltc'], resolve);
const sonset = resolve => require(['@/components/son_set'], resolve);
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
 function browserRedirect() {
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
                   home= resolve => require(['@/components/mobile_home'], resolve);
           
            } else {
                // document.writeln("pc");
               home= resolve => require(['@/components/pc_home'], resolve);
                 console.log("pc")
            }
        }

        browserRedirect();
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/miner',
    //   name: 'miner',
    //   component: miner,
    //   meta: {
    //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    //   }
    // },
    {
      path: '/myprofit',
      name: 'myprofit',
      component: myprofit,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/myltc',
      name: 'myltc',
      component: myltc,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/sonset',
      name: 'sonset',
      component: sonset,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // {
    //   path: '/wallet',
    //   name: 'wallet',
    //   component: wallet,
    //   meta: {
    //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    //   }
    // },
    {
      path: '/download',
      name: 'download',
      component: download,
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
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: register
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // }
  ]
})
