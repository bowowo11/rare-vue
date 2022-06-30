<template>
  <div class="about">
    <h1>我的图鉴</h1>
  </div>
  <div class="mode1">
      <p>UR</p>
      <div class = "list">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in ur" :key="i" class="infinite-list-item-ur">{{ i }}</li>
  </ul>
      </div>
  </div>
    <div class="mode1">
      <p>SR</p>
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="j in sr" :key="j" class="infinite-list-item-sr">{{ j.name }}</li>
  </ul>
      
  </div>
    <div class="mode1">
      <p>R</p>
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="j in r" :key="j" class="infinite-list-item-r">{{ j }}</li>
  </ul>
  </div>

</template>
<script>

export default {
  name: "chouKa",
  // card:{
  //   urList:[
  //     {name:丁真,rank:ur},
  //     {name:ayaya,rank:ur},
  //     {name:niuniu,rank:ur},
  //   ]

  // },
  data() {
    return {
      //根据服务器的数据显示
      ur: [
        1,2,3,4,5
      ],
      sr:[
        {name:1,rank:'ur'},{name:22,rank:'ur'},3,4,5,6,7
      ],
      r:[
        1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5
      ],
      
    }
  },
  methods: {
    clickRecharge() {

    }
  }
}
</script>

<style scoped>
p{
    text-align: left;
    background: aqua;
}
.mode1{
    /* height: 200px; */
   /* margin-bottom: 200px; */
   border-radius: 20px;
   border: 10px;
}
.mode2{
    /* height: 200px; */
   margin-bottom: 200px;
}
.mode3{
    /* height: 200px; */
   margin-bottom: 200px;
}
.infinite-list {
  
  display:grid;
  grid-template-columns: repeat(5,20vw);
  padding: 10px;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item-ur {
   border:5px solid goldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-image: url("3.png");
   background-size:100% 100%;
  background-repeat:no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item-sr {
   border:5px solid plum;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-image: url("3.png");
   background-size:100% 100%;
  background-repeat:no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item-r {
   border:5px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-image: url("3.png");
   background-size:100% 100%;
  background-repeat:no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.list{
  display: flex;
}
</style>
