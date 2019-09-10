<template>
  <div class="foo">
    <div class="parent-box">
      <div class="foo-parent-box">
        <div class="login-box"><img src="../assets/img/bottom_logo.png" alt="">
          <!-- <div class="app-download" @mouseover="func(1)" @mouseout="func2(1)" id="app-download">{{$t("m.header.key21")}}</div>
              <div class="QrCode-div"><div class="QrCode-box" id="QrCode-box"> <img src="../assets/img/1560146560.png" alt=""><p style="color: black;margin-top: 5px;">{{$t("m.header.key22")}}</p></div></div> -->
        </div>
        <div class="foo_r">
          <div class="service-box">
            <h5 style="font-size: 12px;font-weight: bold;color: #fff;opacity: 0.5;padding-bottom: 32px;">SERVICES</h5>
            <!--<p class="service-box-p">{{$t("m.header.key17")}}</p>-->
            <p class="service-box-p" style="cursor: pointer">
              <router-link :to="{name:'download',query:{t:4}}">
                <span @click="to_down2(2)">{{$t("m.download.key27")}}</span>
              </router-link>
            </p>
            <p class="service-box-p" style="cursor: pointer">
              <router-link :to="{name:'download',query:{t:5}}">
                <span @click="to_down2(3)">{{$t("m.download.key28")}}</span>
              </router-link>
            </p>
            <p class="service-box-p" style="cursor: pointer">
              <a href="https://kirinminer.waltymall.com/pc/home_0?ver=2.5">
                {{$t("m.header.key26")}}
              </a>
            </p>
          </div>
          <div class="relation-box">
            <h5 style="font-size: 12px;font-weight: bold;color: #fff;opacity: 0.5;padding-bottom: 32px">CONTACT US</h5>
            <p class="relation-box-p">
              <a href="mailto:service@kirinpool.com">E-mail: service@kirinpool.com</a>
            </p>
            <!--<p class="relation-box-p">Phone:  +86 0755 55247</p>-->
            <div class="share-box">
              <a href="https://twitter.com/Waltonchain" target="_blank"><img src="../assets/img/twitter.png" alt=""></a>
              <img src="../assets/img/wx.png" alt="" @mouseover="func(2)" @mouseout="func2(2)">
              <a href="https://weibo.com/waltonchain?is_hot=1" target="_blank"><img src="../assets/img/wb.png" alt=""></a>
              <a v-if="$i18n.locale === 'zh'" href="https://t.me/waltonchaincommunity_cn" target="_blank"><img src="../assets/img/feiji.png" alt=""></a>
              <a v-if="$i18n.locale === 'en'" href="https://t.me/waltonchain_en" target="_blank"><img src="../assets/img/feiji.png" alt=""></a>
              <a v-if="$i18n.locale === 'ko'" href="https://t.me/koreawalton" target="_blank"><img src="../assets/img/feiji.png" alt=""></a>
            </div>
            <div class="QrCode-div" id="QrCode-div2">
              <div id="QrCode-box2"> <img src="../assets/img/wxQr.png" alt=""></div>
            </div>
            <p style="font-size: 12px;color: #fff;opacity: 0.6;padding-top: 10px;"> © 2019 www.kirinpool.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {

    }
  },

  created() {

  },
  mounted() {

  },
  methods: {
    func(index) {
      if (index === 1) {
        var dom = document.getElementById("QrCode-box");
      } else {
        var dom = document.getElementById("QrCode-box2");
      }

      $(dom).css("display", "block");
    },
    func2(index) {
      if (index === 1) {
        var dom = document.getElementById("QrCode-box");
      } else {
        var dom = document.getElementById("QrCode-box2");
      }
      $(dom).css("display", "none");
    },
    to_down2(val) {
       localStorage.removeItem('to_down2')
      localStorage.setItem('to_down2', val)
    }
  }
}
</script>
<style scoped>
a:link {
  color: #fff
}



/* 未被访问的链接 蓝色 */

a:visited {
  color: #fff
}



/* 已被访问过的链接 蓝色 */

a:hover {
  color: #fff
}



/* 鼠标悬浮在上的链接 蓝色 */

a:active {
  color: #fff
}



/* 鼠标点中激活链接 蓝色 */

#QrCode-div2 {
  display: flex;
  justify-content: start;
}

.foo {
  margin-top: 0.25rem;
}

#QrCode-box2 {
  display: none;
  text-align: center;
  /*background-color: white;*/
  /*width: 30%;*/
  padding: 5px;
  margin-left: 15px;
}

#QrCode-box2>img {
  width: 75px;
}

* {
  color: #fff;
  margin: 0;
  padding: 0;
}

.parent-box {
  background: #1e284f;
  display: flex;
  min-width: 1200px;
  justify-content: center;
}

.foo-parent-box {
  width: 6rem;
  margin: 0 auto;
  background: #1e284f;
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  /*padding-bottom: 40px;*/
}

.login-box,
.service-box,
.relation-box {
  text-align: left;
  min-height: 265px;
}

.service-box-p a:hover {
  color: #ffffff;
}

.service-box-p a:link {
  color: #ffffff;
}

.service-box-p a:visited {
  color: #ffffff;
}

.service-box-p a:active {
  color: #ffffff;
}

.app-download {
  text-align: center;
  margin-top: 15px;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;
}

.QrCode-div {
  display: flex;
  justify-content: center;
}

.QrCode-box {
  text-align: center;
  display: none;
  background-color: white;
  padding: 10px 10px 5px 10px;
  width: 70%;
}

.QrCode-box img {
  width: 120px;
  /*background: white;*/
}

.login-text {
  font-size: 14px;
  margin-top: 20px;
}

.service-box-p {
  font-size: 12px;
  line-height: 18px;
  padding-bottom: 25px;
}

.relation-box-p {
  font-size: 12px;
  line-height: 18px;
  padding-bottom: 10px;
}

.share-box img {
  margin-right: 10px;
  cursor: pointer;
}

.foo_r {
  width: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



/*媒体查询*/

@media (max-width: 1200px) {
  .foo-parent-box {
    padding: 44px 25px 0 25px;
  }
}
</style>
