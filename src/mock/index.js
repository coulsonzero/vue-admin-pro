// import Mock from "mockjs";

// Mock.mock("/mock/getData", {
// 	ret: 0,
// 	data: {
// 		username: "@cname",
// 		date: "@datetime",
// 		email: "@email()", //email
// 	},
// })


// Mock.mock('/mock/api/getAppInfo', 'get', {
//     id:"@id()",//随机id
//     username:"@cname()",//随机中文名字
//     date:"@date()",//随机生成日期
//     avatar:"@image('')",//图像
//     description:"@paragraph()",//描述
//     ip:"@ip()",//ip
//     email:"@email()"//email
// })

// Mock.mock("/mock/login", {
// 	//输出数据
// 	name: "@name", //随机生成姓名
// 	//还可以自定义其他数据
// })


import Mock from "mockjs"
const Random = Mock.Random;
let data= [];
for (let i = 0; i < 10; i++) {
    let newData = {
        title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
        region: Random.region(), // 随机生成地区
        author: Random.cname(), // 随机生成名字
        date: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
        "star|1-10": "★"
    }
    data.push(newData)
}
// Mock.mock(url,method,chartData) 三个参数对应 api地址、请求方式、数据源
Mock.mock("/mock/getData",'get',data)
