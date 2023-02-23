<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in columns" :key="index"></el-table-column>
    </el-table>
</template>

<script setup>
import { ref } from 'vue'
import { columns } from './options'
const tableData = ref([
    {
        "username": "john",
        "email": "john@gmail.com",
        "password": "admin123",
    }
])
</script>

