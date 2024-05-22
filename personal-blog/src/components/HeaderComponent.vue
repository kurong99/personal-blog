<template>
    <header>
        <div class="container">
            <div class="navlogo">
                <a href="http://localhost:8080/"></a>
                <div class="bubble">
                    达咩!
                    <span class="triangle"></span>
                </div>
            </div>
            <div class="nav">
                <ul class="nav-list">
                    <li><a href="#">文章</a></li>
                    <li><a href="#">娱乐</a></li>
                    <li><a href="#">发现</a></li>
                    <li><a href="#">关于我</a></li>
                </ul>
            </div>
            <div class="seachInput">
                <input type="text" placeholder="搜索文章">
                <button>搜索</button>
            </div>
            <div class="toggleThemes">
                <button>主题</button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style>
    * {
        list-style: none;
        text-decoration: none;
    }
    header {
        position: sticky;
        width: 100vw;
        min-height: 11vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c3e50;
    }
    /* 左侧conan logo */
    .container {
        min-width: 80vw;
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
        transition: all 0.8s
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
        font-family: Arial, sans-serif;
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

</style>