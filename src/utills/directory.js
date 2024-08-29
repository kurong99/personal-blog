
const Utills = {
    // 封装一个获取目录内容函数
    getDirectory: (str) => {
        // 正则匹配规则,匹配所有h1~h6标签及其内容
        if (!str) {
            return;
        }
    
        const regex = /<h([1-6])>(.*?)<\/h\1>/g;
        const matches = [...str.matchAll(regex)];
    
        // 如果匹配成功，将其组织成 {级数：['内容1', '内容2', ...]} 的形式
        return matches.reduce((acc, match) => {
            const [, level, content] = match; // 解构出标题级数和内容
            if (!acc[`h${level}`]) acc[`h${level}`] = []; // 如果还没有这个级数的数组，初始化
            acc[`h${level}`].push(content); // 将内容添加到相应级数的数组中
            return acc;
        }, {});
    },
    
    // 给目录添加id属性值 添加锚点链接
    
    getHeadings: (html) => {
        const parse = new DOMParser();
        const serialize = new XMLSerializer();
        const doc = parse.parseFromString(html, 'text/html');
        const headings = [...doc.querySelectorAll('h1, h2, h3, h4, h5, h6')];
        headings.forEach(item => {
            item.id = item.textContent;
        })
        // 将dom对象转为字符串
        const str = serialize.serializeToString(doc)
        return str;
    }
}

export default Utills