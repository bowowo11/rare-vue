<template>


  <div>
    <!-- 侧边栏 -->
    <div class="sideNav" id="sideNav">

      <div class="sideNav-inner" v-myfor="userInfo">
      </div>

    </div>
    <!-- 侧边栏 -->
    <div class="mainInterface">

      <div id="deck">
        <!-- <div id="mainBack">
    <img src="../assets/mainbackground1.png" alt="">
      </div> -->


        <div id="header">
          <Portrait id="yourhead" :username="username" v-bind:img="require('../assets/鸭.png')"></Portrait>

          <!-- 音乐 -->
          <div id="page">
            <div style="width: 100%" class="flex-container column">
              <video id="video" src="../music/Volare.mp3" controls="controls" autoplay="autoplay" loop="loop"> </video>
              <img id="img" class="play" style="transform: translate(-1584.4%, 121.5%) scale(1)" :src="sound"
                @click="play()">
            </div>
          </div>

          <!-- 音乐 -->
        </div>

        <div id="context">

          <div id="rotation">
            <el-carousel :interval="5000" height="50vh">
              <el-carousel-item v-for="item in img" :key="item.url">
                <img id="pic" :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>


          <div id="nav">
            <ul>
              <li>
                <p>BATTLE</p>
              </li>
              <li>
                <router-link to="/backPack">
                  <p>STOCK</p>
                </router-link>
              </li>
              <li>
                <router-link to="/chouKa">
                  <p><img class="icon" src="../assets/头部剪影.png">SHOP</p>
                </router-link>
              </li>
              <li>
                <router-link to="/login">
                  <p>EXIT</p>
                </router-link>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>










  </div>

</template>
<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'
import Sidebar from '@/components/Sidebar.vue'
import { startSakura } from "./fullScreenFlower"

! function () {
  function o(w, v, i) {
    return w.getAttribute(v) || i
  }
  function j(i) {
    return document.getElementsByTagName(i)
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
      n: o(v, "count", 150)
    }
  }
  function k() {
    r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
  function b() {
    e.clearRect(0, 0, r, n);
    var w = [f].concat(t);
    var x, v, A, B, z, y;
    t.forEach(function (i) {
      i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
      for (v = 0; v < w.length; v++) {
        x = w[v];
        if (i !== x && null !== x.x && null !== x.y) {
          B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
          y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.01 * B, i.y -= 0.01 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
        }
      }
      w.splice(w.indexOf(i), 1)
    }), m(b)
  }
  var u = document.createElement("canvas"),
    s = l(),
    c = "c_n" + s.l,
    e = u.getContext("2d"),
    r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
      window.setTimeout(i, 1000 / 45)
    },
    a = Math.random,
    f = {
      x: null,
      y: null,
      max: 100000
    };
  u.id = c;
  u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
  j("body")[0].appendChild(u);
  k(), window.onresize = k;
  window.onmousemove = function (i) {
    i = i || window.event, f.x = i.clientX, f.y = i.clientY
  }, window.onmouseout = function () {
    f.x = null, f.y = null
  };
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
      max: 9000
    })
  }
  setTimeout(function () {
    b()
  }, 100)
}();


// let count = 0;


export default {
  name: 'MainInterface',
  data() {
    return {
      username: "123",
      img: [
        { url: require("../assets/抽卡甜心.jpg") },
        { url: require("../assets/女子高中生.jpg") },
        { url: require("../assets/A组.jpg") }
      ],
      list: [
        "1",
        '2',
        '3'
      ],
      userInfo: [
        { username: "Dick", point: 199, },
        { username: "David", point: 1020, },
        { username: "DD", point: 100, }
      ],
      sound: require('../picture/3.jpg')

    }
  },
  methods: {
    play() {
      let vo = document.getElementById("video")
      if (this.sound == require('../picture/3.jpg')) {
        this.sound = require('../picture/3.jpg')
        vo.autoplay = true
        vo.play()
      } else {
        this.sound = require('../picture/3.jpg')
        vo.pause()
      }
    }

  },
  components: {
    Portrait
  },

  mounted: function () {

    fetch("api/usr").then(respone => respone.json()).then(data => {
      this.username = data.nickname;
    })
    fetch("api/usrRank").then(respone => respone.json()).then(data => {
      this.userInfo = data;
    })

  },
  directives: {
    myfor(el, binding) {
      var arr = binding.value;
      el.innerHTML = '';
      for (let i = 0; i < arr.length; i++) {
        let adiv = document.createElement('div');
        let rank = i + 1;
        adiv.innerHTML = '<div style="display:flex;justify-content:space-evenly;padding:0px;margin:0px;font-family:genshin">' + '<div style-"padding:0px;margin:0px;"><p="padding:0px;margin:0px;">' + '第' + rank + '名' + '</p></div>' + '<div style="padding:0px;margin:0px;"><p style="padding:0px;margin:0px;">' + arr[i].nickname + '</p></div>' + '<div style="padding:0px;margin:0px;"><p style="padding:0px;margin:0px;">' + arr[i].score + '</p></div>' + '</div>';
        el.appendChild(adiv);
      }
    }

  }


}



</script>
<style scoped>
#header{
  display:flex;
  flex-direction: row;
}
#page{
  padding: 0px;
  margin:0px;
  height:5vh;
}
/* #mainBack{
  position:absolute;
  width: 20px;
  z-index: 2;
} */

/* template{
  display: flex;
  justify-content: center;
  align-content: center;
} */
#nav {
  display: flex;
  justify-content: center;
}



#yourhead {
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: 20vw;
  border-top-left-radius: calc(0.5*0.25*30vw);
  border-top-right-radius: 25px;
  border-bottom-left-radius: calc(0.5*0.25*30vw);
  border-bottom-right-radius: 25px;
  margin: 2%;
}

.mainInterface {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background-image: url(../assets/主页面背景.png);
  background-repeat: no-repeat;

}

#deck {
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 90vh;
  background-color: black;







  background: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  z-index: 1;

  background-image: url(../assets/哎嘿.png);
  background-image: url(../assets/gameTitle.png);
  background-repeat: no-repeat;
  background-position: 8vw 50vh;



  border-radius: 25px;
}

#context {
  display: flex;

  flex: auto;
  justify-content: space-evenly;
  z-index: 3;
}

#rotation {
  padding: 0px;
  margin: 0px;

  width: 50vw;
  direction: vertical;
  height: 50vh;

  border: 1px solid black;

  border-radius: 25px;
}





#pic {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;

  width: 50vw;
  border-radius: 25px;
}

#pic img {
  border-radius: 25px;
}

.icon {
  width: 5vh;
}

ul p:hover {
  background-color: red;
}


li p {

  font-size: 5vh;
  color: black;
  font-family: "english";
}

router-link-active {
  font-size: 8vh;
  color: white;


}

ul {
  padding-top: 0px;
  margin-top: 0px;
}

li {
  list-style-type: none;
  padding-top: 0px;
  margin-top: 0px;
}

a {
  text-decoration: none;
}



/* 侧边栏 */
.sideNav {

  text-align: end;
  position: fixed;
  display: block;
  background-color: black;
  width: 300px;
  height: 2vw;
  transition: transform 200ms ease-in;
  transform: translateX(calc(-100% + 2vw));
  z-index: 100;

  /* background: #f7f7f7; */
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

}

.sideNav:hover {
  transform: translateX(0px);

}


.sideNav-inner {

  position: fixed;
  background-color: white;
  height: 2000%;
  width: calc(100% - 2vw);
  z-index: 100;


  text-align: center;

  border-bottom-right-radius: 25px;
}

/* 侧边栏 */
</style>