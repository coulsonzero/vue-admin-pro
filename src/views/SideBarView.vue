<template>
  <!-- <nav-back></nav-back> -->
  <div class="page-wrapper">
    <side-menu class="side-menu"></side-menu>
    <main-page class="main-page"></main-page>
  </div>

</template>

<script setup>
// import NavBack from "@/components/Button/NavBack.vue";
import SideMenu from "@/components/SideBar/SideMenu.vue";
import MainPage from "@/components/HomePage/MainPage.vue";
</script>

<style scoped>

.main-page {
  width: calc(100% - 130px);
  float: right;
  background: #323232;
}

.side-menu {
  width: 130px;
  float: left;
  background: #323232;
}

</style>