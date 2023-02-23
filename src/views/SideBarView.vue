<template>
  <nav-back></nav-back>
  <div class="page-wrapper"></div>
  <side-menu class="side-menu"></side-menu>
  <main-page class="main-page"> </main-page>
</template>

<script setup>
import NavBack from "@/components/Button/NavBack.vue";
import SideMenu from "@/components/SideBar/SideMenu.vue";
import MainPage from "@/components/HomePage/MainPage.vue";
</script>

<style lang="scss" scoped>
:root {
  --sidebar-width: 200px;
}


.main-page {
  width: calc(100% - var(--sidebar-width));
  float: right;
  background: #323232;
}
</style>