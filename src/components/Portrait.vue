<template>
<div id="portrait">
  <div id="outer">
    <div id="pic"><img  :src="img" alt="touxiang"></div>
    <div id="personalInfo">
      <p style="padding-right:4vw">{{username}}</p>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'Portrait',
  props: {
    img: String,
    username:String,
    rank:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#portrait,#outer,#pic,img{
  border-radius: 50%;
}
#outer{
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  /* border: 1px solid black; */
  width: 100%;
  /* background-color: red; */

}
#pic{
    flex:1;
    border-radius: 50%;
    border: 2px solid black;
    background-color: white;


}
img{
  width: 100%;
  height: 100%;

}
#personalInfo{
  flex:4;
  border-radius: 50%;

}
/* #personalInfo p{
  background-color:grey;
} */
</style>
