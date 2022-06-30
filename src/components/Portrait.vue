<template>
<div id="portrait">
  <div id="outer">
    <div id="pic"><img  src="../assets/bread.png" alt=""></div>
    <div id="name"><p>用户名</p></div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Portrait',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#outer{
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  border: 1px solid black;
  width: 100%;
  
}
#pic{
    flex:1;
    border-radius: 25px;
    border: 1px solid black;
}
img{
  width: 100%;
  height: 100%;
}
#name{
  flex:3;
}
</style>
