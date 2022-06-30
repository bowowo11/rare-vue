<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div id="msg">个人信息：{{ msg }}</div>
          <el-container>
            <el-button type="primary" round id="diamond">钻石：{{ diamond }}</el-button>
            <el-button type="primary" round id="recharge" @click="recharge">充值</el-button>
          </el-container>
        </el-container>
      </el-header>
      <el-container>
        <el-aside width="200px">
          11111111111111
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
              <div id="chouKa">
                <div class="wrap">
                  <button id="triggerBtn">模态框</button>
                  <button id="triggerBtn">模态框</button>
<!--                  <a href="#modal-one" class="btn btn-big">来发单抽</a>-->
<!--                </div>-->
<!--                <div class="wrap">-->
<!--                  <a href="#modal-one" class="btn btn-big">直接十连</a>-->
                </div>
              </div>
            </el-container>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <div class="modal" id="modal-one" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-body">{{ picture }}</div>
        <div class="modal-footer">
          <a href="#" class="btn">Nice!</a>
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
      ]
    }
  },
  methods: {
    recharge() {
      this.diamond = "1"
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

.wrap {
  padding: 40px;
  text-align: center;
}

.btn {
  background: #428bca;
  border: #357ebd solid 1px;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  padding: 8px 15px;
  text-decoration: none;
  text-align: center;
  min-width: 60px;
  position: relative;
  transition: color 0.1s ease;
}

.btn:hover {
  background: #357ebd;
}

.btn.btn-big {
  font-size: 18px;
  padding: 15px 20px;
  min-width: 100px;
}

.modal:before {
  content: "";
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.modal:target:before {
  display: block;
}

.modal:target .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  top: 20%;
}

.modal-dialog {
  background: #fefefe;
  border: #333 solid 1px;
  border-radius: 5px;
  margin-left: -200px;
  position: fixed;
  left: 50%;
  top: -100%;
  z-index: 11;
  width: 360px;
  -webkit-transform: translate(0, -500%);
  -ms-transform: translate(0, -500%);
  transform: translate(0, -500%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 10px 20px;
}

.modal-footer {
  border-top: #eee solid 1px;
  text-align: right;
}

#chouKa {
  display: flex;
  margin: 0 auto;
}
</style>