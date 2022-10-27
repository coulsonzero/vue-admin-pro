<template>
  <image-bg></image-bg>

  <nav-back></nav-back>

  <div class="page-section">
    <div class="title">Charts Demo</div>

    <div class="flex-container">
      <chart-circle
        :percent="30"
        :color="{ circle_color: '#ff7dcb', circle_bg: '#6f5684' }"
      ></chart-circle>

      <chart-circle
        :percent="60"
        :color="{ circle_color: '#00cfde', circle_bg: '#557b88' }"
      />
      <chart-circle
        :percent="90"
        :color="{ circle_color: '#ff9f00', circle_bg: '#776547' }"
      />

      <chart-circle
        :percent="16"
        :color="{ circle_color: '#ff9f00', circle_bg: '#776547' }"
      />
    </div>

    <div class="flex-container">
      <chart-process></chart-process>

      <Glass></Glass>
    </div>
  </div>
</template>

<script setup>
import ChartCircle from "@/components/Chart/Circle.vue";
import ChartProcess from "@/components/Chart/Process.vue";
import Glass from "@/components/Box/Glass.vue";
import ImageBg from "@/components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";
</script>

<style lang="scss" scoped>
.page-section {
  width: 100vw;
  min-height: 100vh;
}

.title {
  margin: 40px;
  font-size: 40px;
}

.flex-container {
  display: flex;
  padding: 20px;
}
</style>