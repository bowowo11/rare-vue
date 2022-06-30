<template>
  <div class="mainInterface">

    <div id="deck">

      <div id="header">
      <Portrait id="shit"></Portrait>
    </div>

    <div id="context">

      <div id="rotation">
        <el-carousel :interval="5000" height="50vh" >
        <el-carousel-item v-for="item in img" :key="item.url">
          <img id="pic" :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
      </div>
      

      <div id="nav">
        <ul>
          <li>
            <p>对战</p>
          </li>
          <li>
            <router-link to="/backPack"><p>背包</p></router-link>
          </li>
          <li>
            <router-link to="/chouKa"><p>商店</p></router-link> 
          </li>
        </ul>
      </div>

    </div>

    </div>



  </div>

</template>
<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'


export default {
  name: 'MainInterface',
  data() {
    return {
      img: [
        { url: require("../assets/lay.png") },
        { url: require("../assets/pafu.jpg") }
      ]
    }
  },
  components: {
    Portrait
  }
}
</script>
<style scoped>


#shit {
  background-color: red;
  width: 30vw;
  border-radius: 25px;
  margin: 1%;
}
.mainInterface{
  background-color: white;
}

#deck {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80vw;
  height: 80vh;
  background-color: black;
}
#context{
  display: flex;
  justify-content: space-around;
  flex: auto;
}
#rotation {
 
  width: 50vw;
  direction: vertical;
}
#nav{

}

#pic {
  width: 100%;
  height: 100%;
}

ul p:hover{
  background-color: red;
}


li p {
  font-size: 8vh;
  color: white;
}
router-link-active{
  font-size: 8vh;
  color: white;
  

}

a{
  text-decoration: none;
}
</style>