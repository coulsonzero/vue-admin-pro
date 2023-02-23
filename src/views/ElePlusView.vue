<template>
  <image-bg></image-bg>
  <nav-back></nav-back>
  <div class="page-wrapper">
    <h2>Element plus for vue3</h2>
    <!-- button -->
    <div class="ele-container">
      <h3 class="sub-title">Button</h3>
      <div class="flex-center flex-row">
        <el-button type="primary">Primary</el-button>
        <el-button type="success" :icon="Check" circle />
      </div>
    </div>

    <!-- dialog -->

    <div class="ele-container">
      <h3 class="sub-title">Dialog</h3>
      <div class="flex-center">
        <div>
          <el-button @click="visible = true">
            Open Dialog with customized header
          </el-button>
          <el-dialog v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
              <div class="my-header">
                <h4 :id="titleId" :class="titleClass">
                  This is a custom header!
                </h4>
                <el-button type="danger" @click="close">
                  <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                  Close
                </el-button>
              </div>
            </template>
            This is dialog content.
          </el-dialog>
        </div>
      </div>
    </div>

    <div class="ele-container">
      <h3 class="sub-title">Dialog</h3>
      <div class="flex-center">
        <table-ele></table-ele>
        <table-ele-filter></table-ele-filter>
        <table-ele-option></table-ele-option>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageBg from "@/components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";

// button
import { Check } from "@element-plus/icons-vue";

// dialog
import { ref } from "vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";

// table
import TableEle from "@/components/Table/TableEle.vue";

import TableEleFilter from "@/components/Table/TableEleFilter.vue";

import TableEleOption from "@/components/Table/TableEleOption.vue";


const visible = ref(false);
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 80px 9%;
}

.ele-container {
  border: 1px solid #323232;
  padding: 20px 20px 30px;
  margin-top: 30px;
  border-radius: 12px;
  transition: border 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.ele-container:hover {
  border-color: #676867;
}
.sub-title {
  text-align: center;
  margin-bottom: 20px;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-row {
  flex-direction: row;
}

</style>