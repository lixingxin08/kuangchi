<template>
    <div>
    </div>
</template>

<script>
    export default {
      data(){
          return{

          }
      },
      mounted(){
        this.downloadApp();
      },
      methods:{
        downloadApp(){
          var browser = {
            versions: function() {
              var u = navigator.userAgent, app = navigator.appVersion;
              return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
              };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
          }

          if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
            var is_weixin = (function(){return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1})();
            if(is_weixin){

                // alert("暂不支持ios下载");
                alert(this.$t("m.header.key24"));

            }else {
              alert(this.$t("m.header.key25"));
              this.$router.push('/')
            }

// TODO 此处写ios的下载地址                window.location="https://itunes.apple.com/cn/app/xxx";
          }
          else if (browser.versions.android) {
            var is_weixin = (function(){return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1})();
            if(is_weixin){
                alert(this.$t("m.header.key24"));
            }else {
              window.location="http://file.kirinpool.com/KIRINMINER_1_1_0_20190613.apk?attname=";
              this.$router.push('/')
            }
            // alert("暂不支持android下载");

            // 此处写Andoird 的下载地址               window.location="http://zhj8.aliapp.com/xxx.apk";
          }


        }
        },
    }
</script>

<style scoped>

</style>
