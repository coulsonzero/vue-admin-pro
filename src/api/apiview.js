import axios from "axios"
import qs from 'qs'

// 配置请求的基准路由
axios.defaults.baseURL = 'http://localhost:8080'
// 请求超时
axios.defaults.timeout = 120000


export function apiGetDemo() {
	return axios.get("/user")
}

export function apiGetDemo2() {
	return axios({
		url: "/user/2",
		method: "get",
	})
}

export async function apiPostDemo() {
	await axios.post("/user",
		qs.stringify({
			username: "yupp",
			password: "admin123",
		})
	)
}

export async function apiPostDemo2() {
	return axios({
		url: "/user",
		method: "post",
		data: qs.stringify({
			username: "tupp",
			password: "admin123",
		}),
	})
}


