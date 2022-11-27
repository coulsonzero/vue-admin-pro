<template>
  <nav-back></nav-back>
  <div class="api-view">
    <ApiButton />
  </div>
</template>

<script>
import NavBack from "@/components/Button/NavBack.vue";
import ApiButton from "@/components/Button/ApiButton.vue";
</script>


<style lang="scss" scoped>
.api-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>

