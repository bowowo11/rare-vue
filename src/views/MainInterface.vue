<template>
  <div class="mainInterface">
    <!-- <Sidebar id="ranking"></Sidebar> -->

    <div id="deck">

      <div id="header">
        <Portrait id="yourhead" :username="username" v-bind:img="require('../assets/鸭.png')"></Portrait>
      </div>

      <div id="context">

        <div id="rotation">
          <el-carousel :interval="5000" height="50vh">
            <el-carousel-item v-for="item in img" :key="item.url">
              <img id="pic" :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>


        <div id="nav">
          <ul>
            <li>
              <p>BATTLE</p>
            </li>
            <li>
              <router-link to="/backPack">
                <p>STOCK</p>
              </router-link>
            </li>
            <li>
              <router-link to="/chouKa">
                <p><img class="icon" src="../assets/头部剪影.png">SHOP</p>
              </router-link>
            </li>
            <li>
              <router-link to="/login">
                <p>EXIT</p>
              </router-link>
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
import Sidebar from '@/components/Sidebar.vue'


export default {
  name: 'MainInterface',
  data() {
    return {
      username: "123",
      img: [
        { url: require("../assets/lay.png") },
        { url: require("../assets/pafu.jpg") }
      ]
    }
  },
  methods: {


  },
  components: {
    Portrait,
    Sidebar
  },

  mounted: function () {

    fetch("api/usr").then(respone => respone.json()).then(data => {
      this.username = data.usrname
    })
  }


}




</script>
<style scoped>
#yourhead {
  background-color: red;
  width: 30vw;
  border-radius: 25px;
  margin: 1%;


}

.mainInterface {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  justify-content: center;
  text-align: center;
  background-image: url(../assets/头部剪影.png);

}

#deck {
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 90vh;
  background-color: black;




  background: #f7f7f7;
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

#context {
  display: flex;
  justify-content: space-around;
  flex: auto;
}

#rotation {
  width: 50vw;
  direction: vertical;
  height: 50vh;

  border: 1px solid black;

  border-radius: 25px;
}





#pic {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;

  border-radius: 25px;
}

.icon {
  width: 5vh;
}

ul p:hover {
  background-color: red;
}


li p {
  
  font-size: 5vh;
  color: black;
}

router-link-active {
  font-size: 8vh;
  color: white;


}

ul {
  padding-top: 0px;
  margin-top: 0px;
}

li {
  list-style-type: none;
  padding-top: 0px;
  margin-top: 0px;
}

a {
  text-decoration: none;
}



</style>