<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div id="msg">
            <Portrait
                :username="msg"
                id="yourhead"
                v-bind:img="require('../assets/鸭.png')"
            ></Portrait>
          </div>
          <el-container id="msg-container">
            <el-button type="primary" round id="diamond" class="btn-primary"
            >钻石：{{ diamond }}
            </el-button
            >
            <el-button
                type="primary"
                round
                id="recharge"
                class="btn-primary"
                @click="recharge"
            >充值
            </el-button
            >
            <el-button
                type="primary"
                circle
                id="tuiChu"
                class="btn-primary"
                @click="logout"
            >×
            </el-button
            >
          </el-container>
        </el-container>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <div id="main">
              <el-carousel height="410px">
                <el-carousel-item v-for="item in imgWrap" :key="item.url">
                  <img :src="item.url" class="picture"/>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-main>
          <el-footer>
            <el-container>
              <div class="wrap">
                <div class="wrap-header">
                  <button class="triggerBtn" id="s01" @click="show01">
                    <img
                        src="../assets/btn1.png"
                        style="width: 70%; height: 70%"
                    />
                  </button>
                </div>
                <div class="wrap-header">
                  <button class="triggerBtn" id="s10" @click="show10">
                    <img
                        src="../assets/btn10.png"
                        style="width: 70%; height: 70%"
                    />
                  </button>
                </div>
              </div>
            </el-container>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <div id="modal-background">
      <div id="modal-display">
        <div class="modal-body">
          <div class="list">
            <ul class="infinite-list">
              <li
                  v-for="i in ur"
                  :key="i"
                  class="infinite-list-item-ur"
                  :class="{
                  URback: Number(i.rareRank) === 3,
                  SSRback: Number(i.rareRank) === 2,
                  SRback: Number(i.rareRank) === 1,
                }"
              >
                <img
                    :src="require('../picture/' + i.id + '.jpg')"
                    class="imgs"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-foot">
          <el-button round @click="nice" id="foot"> nice</el-button>
        </div>
      </div>
    </div>
    <div id="advertisec">
      <div id="advertise-container">
        <h1 id="advertises">看完广告获得1000钻石</h1>
        <ADvideo :src="src"></ADvideo>
      </div>
    </div>
    <div id="tip">
      <div id="tip-container">
        <h1 id="tips">钻石不足</h1>
        <el-button round @click="ok"> ok</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import ADvideo from "@/components/ADvideo.vue";
import Portrait from "@/components/Portrait.vue";

export default {
  components: {ADvideo, Portrait},

  name: "chouKa",
  data() {
    return {
      diamond: "",
      msg: "",
      picture: "",
      imgWrap: [
        {url: require("../assets/5.jpg")},
        {url: require("../assets/4.jpg")},
        {url: require("../assets/3.png")},
        {url: require("../assets/2.png")},
        {url: require("../assets/1.jpg")},
      ],
      ur: [],
      src: "",
      srcs: [],
    };
  },

  created() {
    fetch("/api/usr")
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          this.diamond = response.crystal;
          this.msg = response.nickname;
        });
  },
  methods: {
    selectSource() {
      return this.srcs[Math.floor(Math.random() * this.srcs.length)];
    },
    recharge() {
      this.selectSource();
      fetch("api/charge")
          .then((response) => response.json())
          .then((res) => {
            document.getElementById("advertisec").style.display = "flex";
            setTimeout(function () {
              document.getElementById("advertisec").style.display = "none";
            }, 15000),
                fetch("api/charge")
                    .then((response) => response.json())
                    .then((res) => {
                    });
            this.diamond += 1000;
          });
    },
    show01() {
      if (this.diamond >= 100) {
        document.getElementById("modal-background").style.display = "flex";
        fetch("api/single")
            .then((response) => response.json())
            .then((res) => {
              this.ur[0] = res;
            });
        this.diamond -= 90;
      } else {
        document.getElementById("tip").style.display = "flex";
      }
    },
    show10() {
      if (this.diamond >= 1000) {
        document.getElementById("modal-background").style.display = "flex";
        fetch("api/tencards")
            .then((response) => response.json())
            .then((res) => {
              this.ur = res;
            });
        this.diamond -= 1000;
      } else {
        document.getElementById("tip").style.display = "flex";
      }
    },
    nice() {
      document.getElementById("modal-background").style.display = "none";
      this.ur = [];
    },
    ok() {
      document.getElementById("tip").style.display = "none";
    },
    logout() {
      this.$router.push({
        name: "mainInterface",
      });
    },
  },
};
</script>
<style scoped>
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

.common-layout {
  font-family: genshin, serif;
  height: 100%;
  /*加载背景图*/ /* 背景图不平铺 */
  background: url("../assets/ChouKaBeiJing.png") no-repeat fixed center center;
  background-size: cover; /* 让背景图基于容器大小伸缩 */
}

.el-container {
  height: 100%;
}

.el-header {
  text-align: center;
  height: 19%;
  padding-top: 20px;
  padding-left: 0;
  padding-right: 0;
}

.el-footer {
  /*background-color: #b3c0d1;*/
  /*color: #333;*/
  text-align: center;
  height: 25%;
}

.el-main {
  /*background-color: #e9eef3;*/
  /*color: #333;*/
  text-align: center;
  height: 75%;
}

#main {
  width: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#msg {
  margin-left: 25px;
}

#diamond {
  text-align: right;
  margin-right: 15px;
  width: 18vw;
}

#recharge {
  text-align: left;
  margin: 0;
  border: 0;
  padding: 0 67px 0 67px;
}

#tuiChu {
  text-align: right;
  size: 18px;
  margin-right: 15px;
}

.picture {
  width: 80%;
  height: inherit;
}

.wrap {
  display: flex;
  height: 100%;
  width: 100%;
}

.wrap-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.triggerBtn {
  position: absolute;
  border: 0;
  background: rgba(255, 255, 255, 0);
}

#modal-background {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  justify-self: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}

#tip {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  justify-self: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}

#tip-container {
  margin: auto;
}

#tips {
  text-align: center;
  font-size: 120px;
  color: red;
}

#advertisec {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  justify-self: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}

#advertise-container {
  margin: 0 auto auto;
}

#advertises {
  /*text-align: center;*/
  top: 0;
  font-size: 20px;
  color: red;
}

.modal-body {
  display: block;
  width: 70vw;
  height: 57vh;
  border-radius: 1em;
  background-color: #ffffff;
  /*background:url("../assets/5.jpg");*/
}

.modal-foot {
  /*display: block;*/
  background: rgba(225, 225, 225, 0);
  width: 70vw;
  height: 10vh;
  text-align: center;
  font-size: 30px;
  position: relative;
}

#foot {
  font-size: 20px;
  margin: 0 auto;
  border: 2px solid black;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 10vh;
}

#modal-display {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.infinite-list {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item-ur {
  border: 5px solid goldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  background: var(--el-color-primary-light-9);
  /*backgrounde: url("3.png");*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /*margin: 10px;*/
  color: var(--el-color-primary);
}

.imgs {
  overflow: auto;
  border: 0px solid goldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 168px;
  background: var(--el-color-primary-light-9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: var(--el-color-primary);
}

.btn-primary {
  font-size: 22px;
  font-family: genshin, serif;
  border: 0;
  background: rgba(0, 0, 0, 0.5);
}

#yourhead {
  width: 30vw;
  border-top-left-radius: calc(0.5 * 0.25 * 30vw);
  border-top-right-radius: 25px;
  border-bottom-left-radius: calc(0.5 * 0.25 * 30vw);
  border-bottom-right-radius: 25px;
  margin: 1%;
  background: rgba(0, 0, 0, 0.5);
}

#msg-container {
  margin-left: 30px;
  justify-content: right;
}
</style>