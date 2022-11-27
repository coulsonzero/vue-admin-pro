<template>
  <button class="button">Click Me</button>
</template>

<script>
import axios from 'axios'
// post请求需添加qs
import qs from 'qs'

// 封装api调用
import { apiGetDemo, apiPostDemo, apiPostDemo2 } from '@/api/apiview.js'
export default {
    mounted() {
        console.log("hello api view")
        // this.apiGetTest()
        // this.apiGetTest2()
        // this.apiPostTest()
        // this.apiPostTest2()


        // apiGetDemo()
        // apiPostDemo()
        // apiPostDemo2()

        // this.apiGetHttp()

        // this.apiGeiMock()

        axios.get('/mock/getData').then(res => {
            console.log(res)
        })

    },

    methods: {
        apiGetTest() {
            axios.get("http://localhost:8080/user").then(res => {
                console.log(res)
            })
        },
        apiGetTest2() {
            axios({
                method: 'get',
                url: 'http://localhost:8080/user/2',
            }).then(res => {
                console.log(res)
            })
        },
        async apiPostTest() {
            /* ======= 请求结果全为null，post请求格式错误 ======= */

            // axios({
            //     method: 'post',
            //     url: 'http://localhost:8080/user',
            //     data: {
            //         username: 'raopp',
            //         password: 'raopper123'
            //     }
            // })

            // axios.post('http://localhost:8080/user', {
            //     username: 'raopp',
            //     password: 'raopper123'
            // })

            /* ======= 需要将对对象转为json ======= */

            // var params = new URLSearchParams();
            // params.append('username','raoppe');
            // params.append('password','123456');
            // axios.post('http://localhost:8080/user', params)

            var params = new URLSearchParams();
            params.append('username','rtqi');
            params.append('password','123456');
            await axios({
                method:'post',
                url:'http://localhost:8080/user',
                data: params
            })
        },
        async apiPostTest2() {
            await axios.post('http://localhost:8080/user', qs.stringify({
                'username': 'kopp',
                'password': 'admin123'
            }));
        },
        async apiGetHttp() {
            await this.$http.get("/user").then(res => {
                console.log(res)
            })
        },
        apiGeiMock() {
            axios.get('/mock/getData').then(res => {
                console.log(res)
            })
        }
    },
}
</script>

<style scoped>
.button {
  width: 170px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  border: 1px solid #000;
}
.button:hover {
  background: #282829;
  color: aliceblue;
}
</style>