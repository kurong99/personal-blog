<template>
    <div class="content">
        <div class="container">
            <div class="navlogo">
                <a href="http://localhost:8080/"></a>
                <div class="bubble">
                    达咩!
                </div>
            </div>
            <nav>
                <ul class="nav-list">
                    <li class="active"><a href="#">主页</a></li>
                    <li><a href="#">娱乐</a></li>
                    <li><a href="#">发现</a></li>
                    <li><a href="#">简介</a></li>
                    <li><a href="#">关于本站</a></li>
                </ul>
            </nav>
            <div class="seachInput">
                <input type="text" placeholder="搜索文章" class="search">
                <button class="btn">搜索</button>
            </div>
            <div class="localWeather">
                <iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" 
                src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=0&v=0&d=3&bd=0&k=000000&f=&ltf=8080ff&htf=cc0000&q=1&e=1&a=1&c=57494&w=180&h=36&align=center"></iframe>
            </div>
            <div class="toggleThemes">
                <div class="themeCheck"></div>
                <div class="dark">🌙</div>
                <div class="light">🌞</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>
    * {
        list-style: none;
        text-decoration: none;
    }
    .content {
        width: 100vw;
        min-height: 12vh;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: var(--headerColor); */
        opacity: 0.8;
        /* box-shadow: var(--gradientColor); */
        z-index: 999999;
    }
    /* 左侧conan logo */
    .container {
        min-width: 90vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        border-bottom: #e9e7ef solid 2px;
    }
    .navlogo {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        background-image:url(../assets/imgs/cocan.jpg);
        background-size: cover;
        transition: all 0.8s;
    }
    .navlogo:hover {
        background-image:url(../assets/imgs/xiaolan.jpg);
        background-size: cover;
        transform:scale(1.2);
    }
    .navlogo:hover .bubble {
        opacity: 1;
    }
    .navlogo a {
        display: block;
        height: 100px;
    }
    /* 气泡框 */
    .bubble {
        display: inline-block;
        padding: 10px;
        background-color: var(--buddle);
        color: var(--textColor);
        border-radius: 10px;
        position: absolute;
        width: 2.8em;
        height: 1.5em;
        font-size: 0.8em;
        font-weight: 800;
        font-family: 'Courier New', Courier, monospace;
        top: 10px;
        left:6rem;
        opacity: 0;
        transition: all 0.5s;
        line-height: 25px;
    }
    .bubble::before {
        content: "";
        width: 2rem;
        height: 2rem;
        clip-path: polygon(100% 31%, 40% 53%, 100% 69%);
        background-color: var(--buddle);
        position: absolute;
        top: 0.5rem;
        left: -1.9rem;
        z-index: 99;
    }

    /* 中间导航选项 */
    nav {
        /* flex: 1 1 25rem; */
        width: 35rem;
    }
    .nav-list {
        width: 100%;
        height: 40px;
        padding-left: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav-list li {
        margin-left: 4rem;
        padding: 3px;
        transform: scale(1.2);
    }
    .nav-list li a {
        color: var(--textColor);
        font-size: 1rem;
        font-weight: 800;
    }
    /* .nav-list li a:hover {
        color: rgb(241, 112, 112);
    } */
    /* 被选中后的样式 */
    .active {
        opacity: 1;
        background-color: var(--active);
        border-radius: 15px;
    }
    /* 搜索框和按钮*/
    .search,.btn {
        box-sizing:border-box;
        height: 2.5em;
        vertical-align: middle;
        border: 1px solid #dadadb;
    }
    .search {
        width: 12.5em;
        border-radius: 10px 0px 0px 10px;
        outline-style: none;
        text-indent: 1em
    }
    .search::placeholder {
        font-weight: 200;
        opacity: 0.4;
        color: var(--searchP);
    }
    .search:focus{
        border-color: var(--searchF);
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px var(--seachG);
        box-shadow: inset 0 1px 1px var(--seachG);
    }
    .btn {
        width: 4rem;
        cursor: pointer;
        border-radius: 0 10px 10px 0;
        border: none;
        outline: 0;
        font-weight: 200;
        background-color: var(--btn);
        color: var(--textColor);
        
    }
    .btn:hover {
        background-color: var(--btnH);
    }

    /* 本地时间 */
    /* .localDate {
        color: #725e82;
        font-weight: 800;
    } */

    /* 主题切换样式 */
    .toggleThemes {
        width: 90px;
        height: 2em;
        padding: 10px;
        box-sizing:border-box;
        background-color: var(--textColor);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .themeCheck {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left:10px;
        line-height: 2.5em;
        background-color: var(--toggle);
    }
    .dark, .light, .themeCheck {
        width: 25px;
        height: 25px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 1.1rem;
    }

</style>