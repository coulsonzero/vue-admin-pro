<template>
  <div class="home">
    <image-bg></image-bg>
    <nav-back></nav-back>
    <Slider></Slider>

  </div>
</template>

<script setup>
import Slider from "@/components/Box/Slider.vue";
import ImageBg from "@/components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>