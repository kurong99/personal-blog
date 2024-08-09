import axios from 'axios'
import { nanoid } from 'nanoid';
import { marked } from 'marked';
// import store from '@/store';

// 设置跨域请求
axios.defaults.crossDomain = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;

// const TOKEN = store.state.GITHUB_TOKEN;
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
    try{
    const img = await axios.get('https://api.github.com/repos/kurong99/plog/contents/pic/cover.jpg');
    const url = img.data.content.replace(/\n/g, '');
    const imgUrl = `data:image/jpg;base64,${url}`;
    // 获取文章内容
        // const response = await axios.get('https://api.github.com/repos/kurong99/plog/contents/2024', {
        //     headers: {
        //         'Authorization': `token ${TOKEN}`
        //     }
        // });
        const response = await axios.get('https://api.github.com/repos/kurong99/plog/contents/2024');
        if(response.status === 200){
            const list = response.data;
            for(const item of list) {
                const base64Content = (await axios.get(`https://api.github.com/repos/kurong99/plog/contents/2024/${item.name}`)).data.content.replace(/\s/g, '');
                const Base64 = require('js-base64').Base64;
                const decodedContent = marked(Base64.decode(base64Content));
                const introduction = (Base64.decode(base64Content).replace(/<[^>]*>|^#+/gm, '')).split('。')[0];
                const directory = await getDirectory(decodedContent);
                data.push({
                    id: nanoid(),
                    name: item.name.split('.')[0],
                    content: decodedContent,
                    introduction,
                    size: item.size,
                    cover: imgUrl,
                    directory
                });
            }
        }else{
            data.push({
                id: nanoid(),
                name: "暂无内容",
                content: "网络错误",
                introduction: '暂无简介',
                size: 0,
                cover: imgUrl,
                directory: '暂无目录'
            });
        }
    }catch(e){
        console.error('Error fetching file list:', e);
    }
    
}
getMdFiles();

// 封装一个获取目录函数
const getDirectory = (str) => {
    // 正则匹配规则,匹配所有h1~h6标签及其内容
    const regex = /<h([1-6])>(.*?)<\/h\1>/g;
    const matches = [...str.matchAll(regex)];

    // 如果匹配成功，将其组织成 {级数：['内容1', '内容2', ...]} 的形式
    return matches.reduce((acc, match) => {
        const [, level, content] = match; // 解构出标题级数和内容
        if (!acc[`h${level}`]) acc[`h${level}`] = []; // 如果还没有这个级数的数组，初始化
        acc[`h${level}`].push(content); // 将内容添加到相应级数的数组中
        return acc;
    }, {});
};



export default data;