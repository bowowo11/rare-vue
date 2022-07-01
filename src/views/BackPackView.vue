<template>
  <div class="about">
    <h1>我的图鉴</h1>
  </div>
  <div class="mode1">
    <p>UR</p>
    <div class="list">
      <ul class="infinite-list">
        <li v-for="item in imgWrap" :key="item.id">
          <img :src="require('../picture/'+item.id+'.jpg')" class=".infinite-list-item-ur">
        </li>
      </ul>
    </div>
  </div>
  <div class="mode1">
    <p>SR</p>
    <ul class="infinite-list">
      <li v-for="j in sr" :key="j">
        {{ j.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "chouKa",
  data() {
    return {
      //根据服务器的数据显示
      ur: [{ name: 1, rank: "ur", image: "3.png" }, 1, 2, 3, 4, 5],
      sr: [
        { name: 1, rank: "ur", image: "@/assets/5.jpg" },
        { name: 22, rank: "ur" },
        3,
        4,
        5,
        6,
        7,
      ],
      r: [1, 2, 3, 4, 5],
      imgWrap: [],
    };
  },
  methods: {
    clickRecharge() {},
    clickUR(ID) {
      console.log(ID);
    },
  },

  mounted: function () {
    fetch("api/card")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.imgWrap = data})
  },
};
</script>

<style scoped>
img{
  overflow: auto;
  border: 5px solid goldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-image: url("@/assets/5.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
p {
  text-align: left;
  background: aqua;
}
.mode1 {
  /* height: 200px; */
  /* margin-bottom: 200px; */
  border-radius: 20px;
  border: 10px;
}
.mode2 {
  /* height: 200px; */
  margin-bottom: 200px;
}
.mode3 {
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
  background-image: url("@/assets/3.png");
  background-size: 100% 100%;
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
</style>
