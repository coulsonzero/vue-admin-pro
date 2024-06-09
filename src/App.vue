<template>
  <div class="app">
    <!-- <video-bg></video-bg> -->
    <image-bg></image-bg>
    <nav-back></nav-back>

    <!-- 动态过渡 -->
    <router-view v-slot="{ Component }">
      <!-- 很重要：使用keep-alive 实现无需刷新页面即可跳转页面 -->
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <!-- 过渡动画：好像可有可无 -->
      <transition name="fade" mode="out-in">
        <div>
          <component v-if="!$route.meta.keepAlive" :is="Component" />
        </div>
      </transition>
    </router-view>

    <!-- 默认路由视图 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup>
import NavBack from "@/components/Button/NavBack.vue";
import VideoBg from "@/components/Animate/VideoBg.vue";
import ImageBg from "@/components/Animate/ImageBg.vue";

import { RouterView } from "vue-router";
</script>


<style scoped>
.app {
  min-height: 100vh;
  width: 100%;
}
</style>