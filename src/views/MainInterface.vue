<template>
  <div class="MainInterface">
    <Portrait></Portrait>
    <h1>shit</h1>
    <!-- 轮播图 -->
    <p id="container">
    <p id="photo">
        <img src="../assets/bread.png" />
        <img src="../assets/bread.png" />
        <img src="../assets/bread.png" />
    </p>
    <!-- 轮播图 -->
</p>
  </div>
  
</template>
<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'

export default {
  name: 'MainInterface',
  components: {
    Portrait
  }
}
</script>
<style scoped>
/* 轮播图 */
#container {
    border: 1px solid black;

    width: 400px;

    height: 300px;

    overflow: hidden;

}

 

#photo {

    width: 1200px;

    animation: switch 5s ease-out infinite;

}

 

#photo > img {

    float: left;

    width: 400px;

    height: 300px;

}

 

@keyframes switch {

    0%, 25% {

        margin-left: 0;

    }

    35%, 60% {

        margin-left: -400px;

    }

    70%, 100% {

        margin-left: -800px;

    }

}
 /* 轮播图 */ 
  #shit{
    border: 1px solid black;
    display: flex;
    width: 50%;
    aspect-ratio: 8/1;
  }


  
</style>