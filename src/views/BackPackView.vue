<template>
  <div id="page" style="height:1vh" hidden>
    <div style="width: 100%" class="flex-container column">
      <video
        id="video"
        src="../music/sun.mp3"
        controls="controls"
        autoplay="autoplay"
        loop="loop"
      ></video>
      <img
        id="img"
        class="play"
        style="transform: translate(-1584.4%, 121.5%) scale(1)"
        :src="sound"
        @click="play()"
      />
    </div>
  </div>
  <div class="about">
    <h1 style="font-size: 100px; color: black">王の宝库</h1>
    <h1 class="fanhui" @click="logout">←</h1>
  </div>
  <div class="mode1">
    <div class="list">
      <ul class="infinite-list">
        <li v-for="item in imgWrap" :key="item.id">
          <div
            class="modal-box"
            :class="{
              URback: Number(item.rareRank) === 3,
              SSRback: Number(item.rareRank) === 2,
              SRback: Number(item.rareRank) === 1,
            }"
          >
            <!-- 模态框里的图片 -->
            <img
              :src="require('../picture/' + item.id + '.jpg')"
              class="modalimage"
              @click="clickmobal($event)"
            />
            <span class="name">{{ item.name }}</span>
            <span class="message">{{ item.description }}</span>
            <span class="team">{{ item.team }}</span>
            <span
              class="rank"
              :class="{
                URrank: Number(item.rareRank) === 3,
                SRrank: Number(item.rareRank) === 2,
                Rrank: Number(item.rareRank) === 1,
              }"
              >{{ rank(item.rareRank) }}</span
            >
          </div>
          <!-- 卡牌的图片 -->
          <img
            :src="require('../picture/' + item.id + '.jpg')"
            @click="clickfun($event)"
          />
        </li>
      </ul>
    </div>
  </div>
  <div class="mode1"></div>
</template>
<script>
import Portrait from "@/components/Portrait.vue";
import { startSakura } from "./fullScreenFlower";

!(function () {
  function o(w, v, i) {
    return w.getAttribute(v) || i;
  }
  function j(i) {
    return document.getElementsByTagName(i);
  }
  function l() {
    var i = j("script"),
      w = i.length,
      v = i[w - 1];
    return {
      l: w,
      z: o(v, "zIndex", -1),
      o: o(v, "opacity", 7),
      c: o(v, "color", "250,0,0"),
      n: o(v, "count", 150),
    };
  }
  function k() {
    (r = u.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth),
      (n = u.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight);
  }
  function b() {
    e.clearRect(0, 0, r, n);
    var w = [f].concat(t);
    var x, v, A, B, z, y;
    t.forEach(function (i) {
      (i.x += i.xa),
        (i.y += i.ya),
        (i.xa *= i.x > r || i.x < 0 ? -1 : 1),
        (i.ya *= i.y > n || i.y < 0 ? -1 : 1),
        e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
      for (v = 0; v < w.length; v++) {
        x = w[v];
        if (i !== x && null !== x.x && null !== x.y) {
          (B = i.x - x.x), (z = i.y - x.y), (y = B * B + z * z);
          y < x.max &&
            (x === f &&
              y >= x.max / 2 &&
              ((i.x -= 0.01 * B), (i.y -= 0.01 * z)),
            (A = (x.max - y) / x.max),
            e.beginPath(),
            (e.lineWidth = A / 2),
            (e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")"),
            e.moveTo(i.x, i.y),
            e.lineTo(x.x, x.y),
            e.stroke());
        }
      }
      w.splice(w.indexOf(i), 1);
    }),
      m(b);
  }
  var u = document.createElement("canvas"),
    s = l(),
    c = "c_n" + s.l,
    e = u.getContext("2d"),
    r,
    n,
    m =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (i) {
        window.setTimeout(i, 1000 / 45);
      },
    a = Math.random,
    f = {
      x: null,
      y: null,
      max: 100000,
    };
  u.id = c;
  u.style.cssText =
    "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
  j("body")[0].appendChild(u);
  k(), (window.onresize = k);
  (window.onmousemove = function (i) {
    (i = i || window.event), (f.x = i.clientX), (f.y = i.clientY);
  }),
    (window.onmouseout = function () {
      (f.x = null), (f.y = null);
    });
  for (var t = [], p = 0; s.n > p; p++) {
    var h = a() * r,
      g = a() * n,
      q = 2 * a() - 1,
      d = 2 * a() - 1;
    t.push({
      x: h,
      y: g,
      xa: q,
      ya: d,
      max: 9000,
    });
  }
  setTimeout(function () {
    b();
  }, 100);
})();
export default {
  components: {
    Portrait,
  },
  name: "chouKa",
  data() {
    return {
      sound: require("../picture/3.jpg"),
      //根据服务器的数据显示

      // 接受数据的数组

      imgWrap: [],
    };
  },
  methods: {
    play() {
      let vo = document.getElementById("video");
      if (this.sound == require("../picture/3.jpg")) {
        this.sound = require("../picture/3.jpg");
        vo.autoplay = true;
        vo.play();
      } else {
        this.sound = require("../picture/3.jpg");
        vo.pause();
      }
    },
    logout() {
      this.$router.push({
        name: "mainInterface",
      });
    },
    clickRecharge() {},
    clickUR(ID) {
      console.log(ID);
    },
    //模态框的方法
    //点击卡牌打开/关闭模态框
    clickfun(e) {
      if (e.target.parentElement.firstElementChild.style.display == "flex") {
        e.target.parentElement.firstElementChild.style.display = "none";
      } else {
        e.target.parentElement.firstElementChild.style.display = "flex";
      }
      console.log(e.target);
    },
    //点击模态框图片关闭模态框
    clickmobal(e) {
      e.target.parentElement.style.display = "none";
    },
    rank(rare) {
      console.log(rare);
      if (rare == "1") return "R";
      if (rare == "2") return "SR";
      if (rare == "3") return "UR";
    },
  },

  mounted: function () {
    fetch("api/card")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.imgWrap = data;
      });
  },
};
</script>

<style scoped>
h1:hover {
  cursor: default;
}
.fanhui:hover {
  cursor: pointer;
}
.URrank {
  color: rgb(153, 216, 225, 0.8);
}
.SRrank {
  color: rgb(251, 215, 134, 0.9);
}
.Rrank {
  color: rgb(142, 133, 133, 0.8);
}
.URback {
  background: -webkit-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
}

.SSRback {
  background: -webkit-linear-gradient(
    45deg,
    rgb(251, 215, 134) 0%,
    rgb(251, 215, 134) 50%,
    rgb(251, 215, 134) 54%,
    rgb(247, 121, 125) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgb(251, 215, 134) 0%,
    rgb(251, 215, 134) 50%,
    rgb(251, 215, 134) 54%,
    rgb(247, 121, 125) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgb(251, 215, 134) 0%,
    rgb(251, 215, 134) 50%,
    rgb(251, 215, 134) 54%,
    rgb(247, 121, 125) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(251, 215, 134) 0%,
    rgb(251, 215, 134) 50%,
    rgb(251, 215, 134) 54%,
    rgb(247, 121, 125) 100%
  );
  background: linear-gradient(
    45deg,
    rgb(251, 215, 134) 0%,
    rgb(251, 215, 134) 50%,
    rgb(251, 215, 134) 54%,
    rgb(247, 121, 125) 100%
  ) !important;
}

.SRback {
  background: -webkit-linear-gradient(
    45deg,
    rgb(131, 164, 212) 0%,
    rgb(131, 164, 212) 50%,
    rgb(131, 164, 212) 51%,
    rgb(182, 251, 255) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgb(131, 164, 212) 0%,
    rgb(131, 164, 212) 50%,
    rgb(131, 164, 212) 51%,
    rgb(182, 251, 255) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgb(131, 164, 212) 0%,
    rgb(131, 164, 212) 50%,
    rgb(131, 164, 212) 51%,
    rgb(182, 251, 255) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(131, 164, 212) 0%,
    rgb(131, 164, 212) 50%,
    rgb(131, 164, 212) 51%,
    rgb(182, 251, 255) 100%
  );
  background: linear-gradient(
    45deg,
    rgb(131, 164, 212) 0%,
    rgb(131, 164, 212) 50%,
    rgb(131, 164, 212) 51%,
    rgb(182, 251, 255) 100%
  ) !important;
}

.about {
  font-family: "name";
  color: -webkit-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -o-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -ms-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -moz-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
}
img {
  overflow: auto;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
p {
  text-align: left;
  height: 100%;
  width: 100%;
  /* height: 200px; */
  /* margin-bottom: 200px; */
  border-radius: 20px;
  border: 10px;
}
.mode2 {
  /* height: 200px; */
  margin-bottom: 200px;
}
.infinite-list {
  display: grid;
  grid-template-columns: repeat(5, 20vw);
  padding: 10px;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item-sr {
  overflow: auto;
  border: 5px solid plum;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item-r {
  overflow: auto;
  border: 5px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  /* 卡牌的背景颜色 */
  background: var(--el-color-primary-light-9);
  background-image: url("@/assets/4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.list {
  display: flex;
}
.modal-box {
  display: none;
  position: fixed;
  height: 80vh;
  width: 50vw;
  left: 25%;
  /*设置为白色背景  前期可以设置为其他颜色  方便观看*/
  background: -webkit-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  top: -17%;
  margin-top: 12rem;
  border-radius: 30px;
  /*解决高度塌陷的问题*/
  overflow: hidden;
  /*z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面*/
  /*比如在fixed定位中，z-index100大小的会覆盖在50大小的上面*/
  z-index: 111;
}
.modalimage {
  border: 12px;
  border-radius: 30px;
  margin-top: 10px;
  display: block;
  height: 80%;
  width: 100%;
}
.message {
  font-family: "shaonv";
  text-indent: 5em;
  display: grid;
  position: absolute;
  top: 90%;
  font: 300;
  font-size: 30px;
  color: rgba(83, 81, 81, 0.6);
  overflow: hidden;
}
.name {
  font-family: "name";
  text-indent: 1em;
  text-align: center;
  display: grid;
  position: absolute;
  top: 84%;
  font: 300;
  font-size: 30px;
  color: rgba(83, 81, 81, 0.6);
}
.rank {
  font-family: "english";
  /* color: rgba(56, 255, 215, 0.498); */
  /* color: darkgoldenrod; */
  position: absolute;
  font-size: 80px;
  top: 3%;
  left: 5%;
  text-align: right;
}
.team {
  font-family: "shaonv";
  color: rgba(83, 81, 81, 0.6);
  position: absolute;
  font-size: 25px;
  top: 93%;
  left: 70%;
  overflow: hidden;
}
.fanhui {
  font-size: 100px;
  color: black;
  margin-top: -100px;
}
</style>

