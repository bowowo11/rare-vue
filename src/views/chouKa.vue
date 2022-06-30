<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div id="msg">个人信息：{{ msg }}</div>
          <el-container>
            <el-button type="primary" round id="diamond">钻石：{{ diamond }}</el-button>
            <el-button type="primary" round id="recharge">充值</el-button>
          </el-container>
        </el-container>
      </el-header>
      <el-container>
        <el-aside width="200px">

        </el-aside>
        <el-container>
          <el-main>
            <el-carousel height="410px">
              <el-carousel-item v-for="item in imgWrap" :key="item.url">
                <img :src="item.url" class="picture"/>
              </el-carousel-item>
            </el-carousel>
          </el-main>
          <el-footer>
            <el-container>
              <el-button type="primary" round id="lottery01">来发单抽</el-button>
              <el-button type="primary" round id="lottery10">直接十连</el-button>
            </el-container>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "chouKa",
  data() {
    return {
      diamond: "111111111111",
      msg: "小熊",
      imgWrap: [
        {url: require("../assets/5.jpg")},
        {url: require("../assets/4.jpg")},
        {url: require("../assets/3.png")},
        {url: require("../assets/2.png")},
        {url: require("../assets/1.jpg")}
      ]
    }
  },
  methods: {
    clickRecharge() {

    }
  }
}
</script>
<style scoped>
.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 19%;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 25%;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 75%;
}

.el-menu {
  background-color: #d3dce6;
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

.picture {
  width: 100%;
  height: inherit;
}

#lottery01 {
  width: 50%;
  height: 100%;
  text-align: center;
}

#lottery10 {
  width: 50%;
  height: 100%;
  text-align: center;
}
</style>