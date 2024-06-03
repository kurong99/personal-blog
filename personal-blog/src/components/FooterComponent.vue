<template>
  <div class="footer">
    <div class="footerLeft">
        <div class="modal">
            <span>Copyright © 2024 Cocan</span>
        </div>
    </div>
    <div class="footerRigth">
        <div class="title">
            <h4>联系我:</h4>
        </div>
        <ul>
            <li>
                <a href="https://github.com/Kurong21">
                    <img src="../assets/imgs/githublogo.png" alt="">
                </a>
            </li>
            <li>
                <a href="https://blog.csdn.net/weixin_47622761?type=blog">
                    <img src="../assets/imgs/csdnlogo.png" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/imgs/wechatlogo.png" alt="">
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
    * {
        list-style: none;
        text-decoration: none;
    }
    .footer {
        width: 90vw;
        height: 10vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .footerLeft {
        width: 500px;
        overflow: hidden;
    }
    .modal {
        width: 100%;
        height: 100%;
    }
    .modal span {
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        display: flex;
        justify-content: start;
        align-items: center;
        font-weight: bold;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(-225deg, #231557, #44107a 29%, #ff1361 67%, #fff800);
        animation: roate 3s linear infinite;
        color: transparent;
        background-size: 200% auto;
    }
    @keyframes roate {
        100% {
            background-position: 200%;
        }
    }
    .footerRigth {
        width: 500px;
        position: relative;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .title {
        color: rgb(43, 64, 137);
        cursor: pointer;
    }

    .footerRigth img {
        width: 34px;
        height: 34px;
        line-height: 30;
        border-radius: 50%;
        transition: all .5s;
    }
    .footerRigth img:hover {
        transform: translateY(-15px);
    }
    ul li {
        float: left;
        margin-left: 30px;
    }
    h4 {
        color: transparent;
        background-size: 200% auto;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(-225deg, #231557, #44107a 29%, #ff1361 67%, #fff800);
        animation: roate 1s linear infinite;
    }
</style>