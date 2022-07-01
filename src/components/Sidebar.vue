<template>
<div class="sidebar">
  <div id="label">
    <div id="container">
        pppp
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #container{
  background-color: pink;
  height:80vh;
 }  
 #label{
  padding: 0px;
  margin:0px;
  background-color: black;
  height:10vh;
  width: 30px;

 } 
</style>
