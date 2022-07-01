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
 /* #container{
  background-color: pink;
  height:80vh;
 }   */
 #container {

  text-align: end;
  position: fixed;
  display: block;
  background-color: grey;
  width: 300px;
  height: 600px;
  transition: transform 200ms ease-in;
  transform: translateX(calc(-100% + 25px));


}

#container:hover {
  transform: translateX(0px);

}
 #label{
  background-color: blueviolet;
            height: 1000px;
            width: calc(100% - 25px);
 } 
</style>
