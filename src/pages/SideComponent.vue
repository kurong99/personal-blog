<template>
  <aside>
        <div class="about">
            <div class="content">
                <h2>About Author</h2>
                <img src="../assets/imgs/avatar.jpg" alt="">
                <span>"一条咸鱼🐟: 爱好篮球🏀，计算机💻，瞎折腾🎰，浪费时间🕐，最爱冰激凌🍦"</span>
            </div>
        </div>
        <div class="skill">
            <div class="skill-item" v-for="skill in skillList" :key="skill.id">
                <div class="skill-text">
                    <h6>{{ skill.name }}</h6>
                    <h6>{{ skill.proficiency }}</h6>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" :style="{ width: skill.proficiency }"></div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'SideComponent',
    data() {
        return {
            skillList: [
                {
                    id: 1,
                    name: 'HTML',
                    proficiency: '90%'
                },
                {
                    id: 2,
                    name: 'CSS',
                    proficiency: '80%'
                },
                {
                    id: 3,
                    name: 'JAVASCRIPT',
                    proficiency: '80%'
                },
                {
                    id: 4,
                    name: 'PHP',
                    proficiency: '30%'
                },
                {
                    id: 5,
                    name: 'VUE',
                    proficiency: '80%'
                },
            ]
        }
    }
}
</script>

<style scoped>
    aside {
        margin-top: 80px;
        height: 70vh;
        color: var(--textColor);
        box-shadow: 0 8px 30px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5);
        opacity: 0.8;
        flex: 0.5;
        position: sticky;
        top: 12vh;
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
    .skill-bar {
        width: 100%;
        height: 5px;
        position: relative;
        background-color: rgb(1, 1, 11);
    }
    .skill-progress {
        content: "";
        width: 120%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--progress);
    }
</style>