<template>
  <div class="page">
    <table-line class="my-table"></table-line>
    <calendar></calendar>
</div>
</template>

<script>
import TableLine from "@/components/Table/TableLine.vue";
import Calendar from "../Calendar/Calendar.vue";
export default {
  components: { Calendar },};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
}

.my-table {
    width: 500px;
    height: 300px;
    overflow: scroll;
}


</style>