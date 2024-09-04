import axios from "axios"
import { nanoid } from "nanoid";
import { marked } from "marked";
import store from "@/store";
import Utills from '../utills/directory'

const data = [];
const { getDirectory, getHeadings} = Utills;
const TOKEN  = store.state.GITHUB_TOKEN;
const getCommon = async () => {

    try {
        // const date = await axios('https://api.github.com/repos/kurong99/plog',{
        //     headers:{
        //         'Authorization': `token ${TOKEN}`
        //     }
        // });
        // const date = await axios('https://api.github.com/repos/kurong99/plog');
        // console.log(date);
        
        const response = await axios.get('https://api.github.com/repos/kurong99/plog/contents/2024/common',{
            headers:{
                'Authorization': `token ${TOKEN}`
            }
        });
        if (response.status == 200) {
            const list = response.data;
            for (const item of list) {
                const response = await axios.get(`https://api.github.com/repos/kurong99/plog/contents/2024/common/${item.name}`,{
                    headers:{
                        'Authorization': `token ${TOKEN}`
                    }
                });
                if (response) {
                    const base64Content = response.data.content;
                    const Base64 = require('js-base64').Base64;
                    const decodedContent = marked(Base64.decode(base64Content));
                    const introduction = (Base64.decode(base64Content).replace(/<[^>]*>|^#+/gm, '')).split('。')[0];
                    const directory = getDirectory(decodedContent);
                    const highLight = getHeadings(decodedContent);
                    data.push({
                        id: nanoid(),
                        name: item.name.split('.')[0],
                        content: highLight,
                        size: item.size,
                        date: 'Dec11',
                        introduction,
                        directory,
                        type: 'common'
                    });
                }
            }
        } else {
            data.push({
                id: nanoid(),
                name: "暂无内容",
                content: "网络错误",
                introduction: '暂无简介',
                size: 0,
                directory: {
                    h3: '暂无目录'
                }
            });
        }
    }catch(e){
        console.log(e.message);
    }

}

getCommon()


export default data;