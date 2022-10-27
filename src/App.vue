
<template>
  <!-- <image-bg></image-bg> -->
  <video-bg></video-bg>
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";
import ImageBg from "@/components/Animate/ImageBg.vue";
import VideoBg from "./components/Animate/VideoBg.vue";
</script>


<style scoped>
</style>