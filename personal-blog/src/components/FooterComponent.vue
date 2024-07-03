<template>
  <div class="footer">
    <div class="footerLeft">
        <div class="modal">
            <span>Copyright © 2024 Cocan</span>
        </div>
    </div>
    <div class="footerCenter">
        <div class="runTime">
            此网站已经运行了
            <span>{{ runDay }}</span>
            天
            <span>{{ runHour }}</span>
            小时
            <span>{{ runMin }}</span>
            分钟
            <span>{{ runSecond }}</span>
            秒
        </div>
    </div>
    <div class="footerRigth">
        <div class="title">
            <h4>联系我:</h4>
        </div>
        <ul>
            <li>
                <a href="https://github.com/Kurong21">
                    <img src="../assets/imgs/svg/githublogo.svg" alt="">
                </a>
            </li>
            <li>
                <a href="https://blog.csdn.net/weixin_47622761?type=blog">
                    <img src="../assets/imgs/svg/csdnlogo.svg" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/imgs/svg/wechatlogo.svg" alt="">
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    mounted(){
        this.timer = setInterval(() => {
            this.difference = -(new Date(2024,4,21,20,36,40) - new Date());
        })
    },
    data() {
        return {
            timer:null,
            difference: '',
        }
    },
    computed: {
        runDay() {
            return Math.floor(this.difference / (24 * 3600 * 1000));
        },
        runHour() {
            return Math.floor(this.difference % (24 * 3600 * 1000) / (3600 * 1000));
        },
        runMin() {
            return Math.floor((this.difference % (24 * 3600 * 1000)) % (3600 * 1000) / (60 * 1000));
        },
        runSecond() {
            return Math.round((this.difference % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000))/ 1000);
        }
    },
    beforeDestroy() {
        this.timer = null;
    }
}
</script>

<style scoped>
    * {
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .footer {
        width: 90vw;
        height: 10vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        /* overflow: hidden; */
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
    .footerCenter {
        display: flex;
        align-items: center;
    }
    .runTime {
        width: 100%;
        height: 55%;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: transparent;
        background-size: 200% auto;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(-225deg, #231557, #44107a 29%, #ff1361 67%, #fff800);
        animation: roate 2s linear infinite;
    }
    .runTime span {
        font-size: 1.5rem;
    }
    .footerRigth {
        width: 500px;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .title {
        height: 50%;
        /* margin: auto; */
        color: rgb(43, 64, 137);
        cursor: pointer;
    }
    ul {
        max-height: 100%;
        margin: 0;
        padding-left: 30px;
        transform-style: preserve-3d;
        display: flex;
    }
    ul li {
        margin-left: 20px;
        height: 100%;
    }
    .footerRigth img {
        width: 40px;
        height: 40px;
        transition: all .5s;
    }
    .footerRigth img:hover {
        transform: scale(1.6) translateY(-10px);
    }
    h4 {
        margin: 0;
        color: transparent;
        background-size: 200% auto;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(-225deg, #231557, #44107a 29%, #ff1361 67%, #fff800);
        animation: roate 1s linear infinite;
        line-height: 50px;
    }
</style>