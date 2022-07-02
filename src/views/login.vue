
<template>
  <div id="page">
    <div style="width: 100%" class="flex-container column">
      <video id="video" src="../music/Volare.mp3" controls="controls" autoplay="autoplay"  loop="loop"> </video>
      <img  id="img" class="play" style="transform: translate(-1584.4%, 121.5%) scale(1)" :src="sound" @click="play()">
    </div>
  </div>
  <div id="login">
    <audio id="audio" loop preload="auto" :src='require("../music/Volare.mp3")'>111</audio>
    <el-formn
        :model="loginForm"
        ref="loginForm"
        label-width="80px"
        label-position="top"
    ><el-form-item label="用户名" prop="account" style="margin-top: 10px">
      <el-row>
        <el-col :span="2">
          <span class="el-icon-s-custom"></span>
        </el-col>
        <el-col :span="22">
          <el-input
          style="margin-left: 0px;width: 110%"
              class="inps"
              placeholder="请输入用户名"
              v-model="loginForm.username"
          >
          </el-input>
        </el-col>
      </el-row>
    </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-row>
          <el-col :span="2">
            <span class="el-icon-lock"></span>
          </el-col>
          <el-col :span="22">
            <el-input
            style="margin-left: 18px;width: 20vm"
                class="inps"
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
            ></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button auto-insert-space="auto-insert-space" type="primary"  class="submitBtn" @click="submitForm"
        >登录
        </el-button>
        <el-button @click="register" >注册新账号</el-button>
      </el-form-item>
  
    </el-formn>
  </div>
</template>

<script>
import {startSakura} from"./fullScreenFlower"

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

export default {
  name: "Login"
  ,data(){
    return{
      loginForm:{
        username:"",
        password:"",
        errMsg:"",
        sound: require('../picture/3.jpg')
      }
    }
  }
  ,mounted() {
    startSakura()
  }
  ,methods:{
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
    },register(){this.$router.push('/register')},
    submitForm() {
      const userAccount = this.loginForm.username;
      const userPassword = this.loginForm.password;
      this.check();
      if (!userAccount) {
        return this.$message({
          type: "error",
          message: "账号不能为空！",
        });
      }
      if (!userPassword) {
        return this.$message({
          type: "error",
          message: "密码不能为空！",
        });
      }
      if(this.loginForm.errMsg){
        return this.$message({
          type:"error",
          message:this.loginForm.errMsg
        })
      }


    },
    check(){
      const data={
        username:this.loginForm.username,
        password:this.loginForm.password
      }

      fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json()).then(res =>{if(res.errMsg){this.loginForm.errMsg=res.errMsg}else{this.$router.push('/mainInterface')}});
    }
  }
}
</script>

<style scoped>
#login {
  font-family: shaonv;
   border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
   margin: 0px auto;
   width: 350px;
   padding: 30px 35px 15px 35px;
   background: #fff;
   border: 1px solid #eaeaea;
   text-align: center;
   box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
 }

</style>
