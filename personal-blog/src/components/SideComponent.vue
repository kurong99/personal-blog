<template>
  <aside>
        <div class="about">
            <div class="content">
                <h2>About Author</h2>
                <img src="../assets/imgs/avatar.jpg" alt="">
                <span>"一条咸鱼🐟: 爱好篮球🏀，计算机💻，瞎折腾🎰，浪费时间🕐，最在行最爱冰激凌🍦"</span>
            </div>
        </div>
        <div class="skill">
            <div class="skill-item">
                <div class="skill-text">
                    <h6>HTML</h6>
                    <h6>80%</h6>
                </div>
                <div class="skill-progress"></div>
            </div>
            <div class="skill-item">
                <div class="skill-text">
                    <h6>CSS</h6>
                    <h6>70%</h6>
                </div>
                <div class="skill-progress"></div>
            </div>
            <div class="skill-item">
                <div class="skill-text">
                    <h6>JAVASCRIPT</h6>
                    <h6>90%</h6>
                </div>
                <div class="skill-progress"></div>
            </div>
            <div class="skill-item">
                <div class="skill-text">
                    <h6>PHP</h6>
                    <h6>30%</h6>
                </div>
                <div class="skill-progress"></div>
            </div>
            <div class="skill-item">
                <div class="skill-text">
                    <h6>VUE</h6>
                    <h6>70%</h6>
                </div>
                <div class="skill-progress"></div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'SideComponent'
}
</script>

<style>
    aside {
        margin-top: 100px;
        height: 70vh;
        color: aliceblue;
        box-shadow: 0 8px 30px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5);
        opacity: 0.8;
        flex: 0.5;
    }
    .about {
        width: 100%;
        height: 50%;
        opacity: 0.8;
    }
    .skill {
        width: 100%;
    }
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .content h2 {
        position: relative;
    }
    .content h2::before {
        content: "";
        width: 50px;
        height: 2px;
        position: absolute;
        left: 50%;
        margin-left: -25px;
        bottom: -5px;
        background-color: rgb(235, 13, 13);
    }
    .content img {
        width: 40%;
        height: 40%;
        margin: 0px auto;
        border-radius: 100px;
    }
    .content span {
        margin-top: 20px;
        margin-left: 20px;
        text-align: left;
        font-weight: bold;
    }
    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        /* border-top: 2px solid rgb(172, 172, 172); */
    }
    .skill-item {
        width: 90%;
    }
    .skill-text {
        width: 100%;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
    }
    .skill-text h6 {
        margin: 0;
        padding: 10px 0px;
    }
    .skill-progress {
        width: 100%;
        height: 5px;
        position: relative;
        background-color: rgb(15, 15, 16);
    }
    .skill-progress::before {
        content: "";
        width: 70%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(123, 125, 126, 0.842);
    }
</style>