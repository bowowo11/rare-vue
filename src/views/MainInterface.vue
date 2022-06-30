<template>
  <div class="mainInterface">

    <Portrait id="shit"></Portrait>


    <el-carousel :interval="5000"  height="28.5vh" id="rotation">
    <el-carousel-item v-for="item in img" :key="item.url">

      <img id="pic" :src="item.url" alt="">
    </el-carousel-item>
   </el-carousel>
    
  </div>
  
</template>
<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'


export default {
  name: 'MainInterface',
  data(){
    return{
      img:[
        {url:require("../assets/lay.png")},
        {url:require("../assets/pafu.jpg")}
        ]
    }
  },
  components: {
    Portrait
  }
}
</script>
<style scoped>
.mainInterface{
  background-color: black;
}
el-carousel{
  height:"1000";
  width: 100%;
}


#rotation{
  direction:vertical;
  width: 1920px;
  height: 1080px;
}

#shit{
  width: 50%;
}

  
</style>