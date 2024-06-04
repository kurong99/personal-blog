<template>
    <div class="content">
        <div class="container">
            <div class="navlogo">
                <a href="http://localhost:8080/"></a>
                <div class="bubble">
                    达咩!
                    <span class="triangle"></span>
                </div>
            </div>
            <nav>
                <ul class="nav-list">
                    <li><a href="#">文章</a></li>
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
            <div class="localDate">
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
        min-height: 11vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c3e50;
        opacity: 0.6;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.18), 0 40px 80px rgba(0, 0, 0, 0.24);
        z-index: 999999;
    }
    /* 左侧conan logo */
    .container {
        min-width: 80vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
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
        padding: 10px 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        position: absolute;
        width: 3em;
        height: 1.5em;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 0.8em;
        font-weight: 400;
        font-family: 'Courier New', Courier, monospace;
        top: 10px;
        left:90px;
        opacity: 0;
        transition: all 0.5s
    }
    .triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
    }
    .bubble .triangle {
        top: 25px;
        margin-top: -5px;
        left: -10px;
        border-width: 5px 15px 5px 0;
        border-color: transparent #f9f9f9 transparent transparent;
        transform: rotate(-30deg);
    }

    /* 中间导航选项 */
    .nav-list {
        height: 40px;
    }
    .nav-list li {
        float: left;
        margin-left: 4em;
        line-height: 40px;
    }
    .nav-list li a {
        color:whitesmoke;
        font-size: 1rem;
        font-weight: 800;
    }
    .nav-list li a:hover {
        color: #c3272b;
    }

    /* 搜索框和按钮*/
    .search,.btn {
        box-sizing:border-box;
        height: 2.5em;
        vertical-align: middle;
        border: 1px solid whitesmoke;
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
        color: #8c4356;
    }
    .search:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    }
    .btn {
        width: 4rem;
        cursor: pointer;
        border-radius: 0 10px 10px 0;
        border: none;
        outline: 0;
        font-weight: 200;
        background-color: #1677ff;
        color: #f9f9f9;
        
    }
    .btn:hover {
        background-color: #4096ff;
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
        background-color: #f9f9f9;
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
        background-color: #00bc12;
    }
    .dark, .light, .themeCheck {
        width: 25px;
        height: 25px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 1.1rem;
    }

</style>