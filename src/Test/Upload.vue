<template>
  <button @click="handlePlay('audio')">播放</button>

  <audio id="audio" src='https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBa0xtczN5NnpWdEFlUk5MdUp3M05UYTBydGc_ZT1rY3kxQ0Y.mp3'  hidden></audio>
</template>

<script>
export default {
  name: "Upload",
  methods: {
    handlePlay(id) {
      document.getElementById(id).play()
    }
  }
}
</script>

<style scoped>

</style>