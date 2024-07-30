import axios from 'axios'
import { marked } from 'marked';

// 设置跨域请求
axios.defaults.crossDomain = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;

let md = {
    name: '',
    content: ''
};
axios.get('https://api.github.com/repos/kurong99/plog/contents/2024/git和gitee.md',).then((res) => {
    // 返回的是base64编码 需要进行解密
    // 首先去除多余的空格和换行符 (否则解析出来依然可能乱码）
    const base64Content = res.data.content.replace(/\s/g, '');
    // 使用转码插件进行转码 
    const Base64 = require('js-base64').Base64
    const decodedContent = Base64.decode(base64Content);
    md.name = (res.data.name).split('.')[0];
    md.content = marked(decodedContent)
}).catch((e) => {
    console.log(e);
});
export default md;
