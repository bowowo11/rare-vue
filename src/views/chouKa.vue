<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div id="msg">个人信息：{{ msg }}</div>
          <el-container>
            <el-button type="primary" round id="diamond">钻石：{{ diamond }}</el-button>
            <el-button type="primary" round id="recharge" @click="recharge">充值</el-button>
            <el-button type="primary" id="tuiChu" circle @click="logout">×</el-button>
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
                  <button class="triggerBtn" @click="show01">来发单抽</button>
                </div>
                <div class="wrap-header">
                  <button class="triggerBtn" @click="show10">直接十连</button>
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
            <ul class="infinite-list" style="overflow: auto">
              <li v-for="i in ur" :key="i" class="infinite-list-item-ur">{{ i.name }}</li>
            </ul>
          </div>
        </div>
        <div class="modal-foot">
          <button class="triggerBtn" @click="nice">nice！</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chouKa",
  data() {
    return {
      diamond: "111111111111",
      msg: "小熊",
      picture: "",
      imgWrap: [
        {url: require("../assets/5.jpg")},
        {url: require("../assets/4.jpg")},
        {url: require("../assets/3.png")},
        {url: require("../assets/2.png")},
        {url: require("../assets/1.jpg")}
      ],
      ur: [],
    }
  },
  methods: {
    recharge() {
      this.diamond = "1"
    },
    show01() {
      document.getElementById("modal-background").style.display = "flex";
      fetch('api/single').then(response => response.json()).then(res => {
        this.ur[0] = res;
      });

    },
    show10() {
      document.getElementById("modal-background").style.display = "flex";
      fetch('api/tencards').then(response => response.json()).then(res => {
        this.ur = res;
      });
    },
    nice() {
      document.getElementById("modal-background").style.display = "none";
      this.ur = [];
    },
    logout() {
      this.$router.push({
        "name": "mainInterface"
      });
    }
  }
}
</script>
<style scoped>
.common-layout {
  height: 100%;
  /*background-size: 100% 100%;*/
  /*加载背景图*/ /* 背景图不平铺 */
  background: url("../assets/ChouKaBeiJing.png") no-repeat fixed center center;
  background-size: cover; /* 让背景图基于容器大小伸缩 */
}

.el-container {
  height: 100%;
}

.el-header {
  /*background-color: #b3c0d1;*/
  /*color: #333;*/
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
  text-align: left;
  width: 70%;
}

#diamond {
  text-align: right;
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


.modal-body {
  display: block;
  width: 80vw;
  height: 80vh;
  background-color: #000000;
  /*background:url("../assets/5.jpg");*/
}

.modal-foot {
  display: block;
  background-color: #42b983;
  width: 80vw;
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
  height: 190px;
  width: 158px;
  background: var(--el-color-primary-light-9);
  /*backgrounde: url("3.png");*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
</style>