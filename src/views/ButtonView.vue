<template>
  <div class="wrapper">
    <image-bg></image-bg>
    <nav-back></nav-back>
    <h3>Button Demo</h3>
    <my-button></my-button>

    <nav-button></nav-button>

    <button-shadow></button-shadow>
  </div>
</template>

<script setup>
import ImageBg from "@/components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";

import MyButton from "@/components/Button/MyButton.vue";
import NavButton from "@/components/Button/NavButton.vue";

import ButtonShadow from "@/components/Button/ButtonShadow";
</script>


<style lang="scss" scoped>
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
