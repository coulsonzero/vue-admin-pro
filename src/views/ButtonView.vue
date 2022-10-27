<template>
  <div class="wrapper">
    <video-bg></video-bg>
    <h3>Button Demo</h3>
    <my-button></my-button>
    <load-demo></load-demo>
  </div>
</template>

<script setup>
import VideoBg from "@/components/Animate/VideoBg.vue";
import MyButton from "@/components/Button/MyButton.vue";
import LoadDemo from "@/components/Animate/LoadDemo.vue";
</script>


<style>
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
