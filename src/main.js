import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// axios
import axios from 'axios'
// mockjs模拟接口数据
import "./mock/index"



const app = createApp(App)

// // 基准路径
// axios.defaults.baseURL = "http://localhost:8080"
// // 将 axios 挂载为全局对象 $http
// app.config.globalProperties.$http = axios


app.use(router)
app.mount('#app')

