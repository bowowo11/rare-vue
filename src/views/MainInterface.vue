<template>
  <!-- 侧边栏 -->
  <div class="sideNav" id="sideNav">

    <div class="sideNav-inner" v-myfor="userInfo">
    </div>

  </div>
  <!-- 侧边栏 -->
  <div class="mainInterface">




    <div>

      <div id="deck">

        <!-- <div id="mainBack">
    <img src="../assets/mainbackground1.png" alt="">
      </div> -->


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










  </div>

</template>
<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'
import Sidebar from '@/components/Sidebar.vue'

// let count = 0;


export default {
  name: 'MainInterface',
  data() {
    return {
      username: "123",
      img: [
        { url: require("../assets/抽卡甜心.jpg") },
        { url: require("../assets/女子高中生.jpg") },
        { url: require("../assets/A组.jpg") }
      ],
      list: [
        "1",
        '2',
        '3'
      ],
      userInfo: [
        { username: "Dick", point: 199, },
        { username: "David", point: 1020, },
        { username: "DD", point: 100, }
      ]

    }
  },
  methods: {
    // add(){
    //     var newp =  document.createElement('div');
    //     newp.innerHTML = '<p>aaaa</p>'
    //     document.getElementById("foot").appendChild(newp);
    //     }

  },
  components: {
    Portrait
  },

  mounted: function () {

    fetch("api/usr").then(respone => respone.json()).then(data => {
      this.username = data.nickname;
    })
    fetch("api/usrRank").then(respone => respone.json()).then(data => {
      this.userInfo = data;
    })

  },
  directives: {
    myfor(el, binding) {
      var arr = binding.value;
      el.innerHTML = '';
      for (let i = 0; i < arr.length; i++) {
        let adiv = document.createElement('div');
        let rank = i + 1;
        adiv.innerHTML = '<p>' + '第' + rank + '名' + " " + arr[i].nickname + " " + arr[i].score + '</p>';
        el.appendChild(adiv);
      }
    }

  }


}



</script>
<style scoped>
/* #mainBack{
  position:absolute;
  width: 20px;
  z-index: 2;
} */



#yourhead {
  background-color: rgba(0, 0, 0, 0.5);
  width: 20vw;
  border-top-left-radius: calc(0.5*0.25*30vw);
  border-top-right-radius: 25px;
  border-bottom-left-radius: calc(0.5*0.25*30vw);
  border-bottom-right-radius: 25px;
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

  z-index: 1;

  background-image: url(../assets/哎嘿.png);
  background-image: url(../assets/gameTitle.png);
  background-repeat: no-repeat;
  background-position: 7vw 50vh;
}

#context {
  display: flex;
  
  flex: auto;
  justify-content: space-around;
  z-index: 3;
}

#rotation {
  padding: 0px;
  margin: 0px;

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

  width: 50vw;
  border-radius: 25px;
}

#pic img {
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
  font-family: "english";
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



/* 侧边栏 */
.sideNav {

  text-align: end;
  position: fixed;
  display: block;
  background-color: grey;
  width: 300px;
  height: 2vw;
  transition: transform 200ms ease-in;
  transform: translateX(calc(-100% + 2vw));
  z-index: 100;

}

.sideNav:hover {
  transform: translateX(0px);

}


.sideNav-inner {

  position: fixed;
  background-color: red;
  height: 2000%;
  width: calc(100% - 2vw);
  z-index: 100;
}

/* 侧边栏 */
</style>