import axios from 'axios';
export function request(config) {
//  创建实例
const instance=axios.create({
  baseURL:'http://152.136.185.210:8000/api/w6',
  timeout:5000,
});
//2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    console.log(config);
    return config;
  },err=>{
    console.log(err);
  });
// 2.2.响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data;
  },err =>{
    console.log(err);
  });
  // 3.发送网络请求
  return instance(config);
}
