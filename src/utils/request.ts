import axios from 'axios'
// axios对象
const service = axios.create({
    // axios请求基础URL
    baseURL: "http://127.0.0.1:5173", //此处根据自己启动的端口来
    timeout: 5000
})
 
export default service