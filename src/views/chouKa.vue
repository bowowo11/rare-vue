<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-container>
          <div></div><div></div>
        </el-container>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
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
      msg: "111111111111"
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
</style>