<template>
  <div class="view-wrapper">

    <table-line></table-line>

    <table-col></table-col>
  </div>
</template>

<script setup>
import TableLine from "@/components/Table/TableLine.vue";
import TableCol from "@/components/Table/TableCol.vue";
</script>

<style>
.view-wrapper {
  color: #fff;
}
</style>