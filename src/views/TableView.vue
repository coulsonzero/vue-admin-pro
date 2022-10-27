<template>
  <div class="table-page">
    <nav-back></nav-back>
    <image-bg></image-bg>
    <div class="table-page-wrapper">
      <table-line />
      <table-col />
    </div>
  </div>
</template>

<script setup>
import TableLine from "@/components/Table/TableLine.vue";
import TableCol from "@/components/Table/TableCol.vue";
import ImageBg from "../components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";
</script>

<style>
.table-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
}

.table-page-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
</style>