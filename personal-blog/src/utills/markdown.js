import axios from 'axios'
import { nanoid } from 'nanoid';

// 设置跨域请求
axios.defaults.crossDomain = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;

// const GITHUB_TOKEN = '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';
const data = [];
// 获取单个md文件
// axios.get('https://api.github.com/repos/kurong99/plog/contents/2024/git和gitee.md',).then((res) => {
//     // 返回的是base64编码 需要进行解密
//     // 首先去除多余的空格和换行符 (否则解析出来依然可能乱码）
//     console.log(res.data);
//     const base64Content = res.data.content.replace(/\s/g, '');
//     // 使用转码插件进行转码 
//     const Base64 = require('js-base64').Base64
//     const decodedContent = Base64.decode(base64Content);
//     md.name = (res.data.name).split('.')[0];
//     md.content = marked(decodedContent)
// }).catch((e) => {
//     console.log(e);
// });
// export default md;

// 获取仓库内所有文章
const getMdFiles = async () => {
    // 获取封面
    const img = await axios.get('https://api.github.com/repos/kurong99/plog/contents/pic/cover.jpg');
    const url = img.data.content.replace(/\n/g, '');
    const imgUrl = `data:image/jpg;base64,${url}`;
    // 获取文章内容
    const response = await axios.get('https://api.github.com/repos/kurong99/plog/contents/2024');
    if(response.status === 200){
        const list = response.data;
        for(const item of list) {
            const base64Content = (await axios.get(`https://api.github.com/repos/kurong99/plog/contents/2024/${item.name}`)).data.content.replace(/\s/g, '');
            const Base64 = require('js-base64').Base64;
            const decodedContent = Base64.decode(base64Content);
            data.push({
                id: nanoid(),
                name: item.name.split('.')[0],
                content: decodedContent,
                size: item.size,
                cover: imgUrl,
                path: item.path.split('.')[0]
            });
        }
    }else{
        data.push({
            id: nanoid(),
            name: "暂无内容",
            content: "网络错误",
            size: 0,
            cover: imgUrl,
            path: '/'
        });
    }
    
}
getMdFiles();
console.log(data);
export default data;