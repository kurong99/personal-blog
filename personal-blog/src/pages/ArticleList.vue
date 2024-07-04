<template>
  <div class="article-list">
    <TitleComponent>文章"轴"</TitleComponent>
    <div class="timelines">
        <div class="timeline" v-for="item in items" :key="item.id" :class="{'fade-in-right': isLoad }">
          <div class="timeline-title"></div>
          <div class="timeline-details">{{ item.date }}</div>
          <div class="timeline-icon">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="timeline-title">{{ item.title }}</h2>
            <div class="content-details">{{ item.detail }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent';

export default {
    name: 'ArticleList',
    mounted() {
      window.addEventListener('load',this.handleLoad,true);
    },
    components: {
      TitleComponent
    },
    data() {
      return {
        isLoad: false,
        items: [
          {
            id: 1,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          },
          {
            id: 2,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          },
          {
            id: 3,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          },
          {
            id: 4,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          },
          {
            id: 5,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          },
          {
            id: 6,
            date: 'Dec 25 2024',
            title: 'Thanksgiving Day',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni obcaecati et fugiat harum reiciendis'
          }
        ]
      }
    },
    methods: {
      handleLoad() {
          this.isLoad = true;
      }
    },
    beforeMount() {
      window.removeEventListener('load', this.handleLoad);
    }
}
</script>

<style scoped>

  .html {
    font-size: 16px;
  }

  .article-list {
    width: 100%;
    flex-grow: 1;
    /* overflow: scroll; */
  }
  .timelines {
    width: 80%;
    margin: 0 auto;
    margin-top: 90px;
    position: relative;
  }
  .timelines::before {
    content: '';
    background-color: #32363B;
    background-image: -webkit-linear-gradient(top, #4f7da7 0%, #062f61 8%, #526b8a 92%, #0b74fd 100%);
    border-radius: 2px;
    margin-left: -2px;
    position: absolute;
    display: block;
    height: 100%;
    width: 4px;
    left: 50%;
    top: 0;
  }
  .timeline {
    --size: 40%;
    --space: calc(100% - 40% - 20px);
    width: var(--size);
    height: 200px;
    margin: 10px 0 0 20px;
    opacity: 0.8;
    position: relative;
    border-radius: 5px;
    z-index: 9999;
    cursor: pointer;
    transition: all 0.4s linear;
  }

  .fade-in-right{
    animation: appear-in-right 1.3s ease;
  }
  @keyframes appear-in-right {
    from {
      opacity: 0;
      transform: translateX(150px);
    }
    to {
      opacity: 0.8;
      transform: translateX(0px);
    }
  }
  

  .timeline:nth-child(2n) {
    background-color: var(--B);
  }
  .timeline:nth-child(2n)::before {
    content: "";
    clip-path: polygon(0 13%, 0 87%, 89% 50%);
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 20%;
    left: 100%;
    background-color: var(--B);
  }

  .timeline:nth-child(2n+1) {
    margin: 10px 0 0 var(--space);
    background-color: var(--A);
  }
  .timeline:nth-child(2n+1)::before {
    content: "";
    clip-path: polygon(101% 0, 101% 70%, 15% 35%);
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 20%;
    right: 100%;
    background-color: var(--A);
  }

  .timeline:nth-child(2n), .timeline:nth-child(2n + 1) {
    filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.8));
  }

  .timeline:nth-child(2n+1) .timeline-details {
    right: 150%;
  }

  .timeline:nth-child(2n) .timeline-details {
    left: 150%;
  }
  .timeline:nth-child(2n) .timeline-details, .timeline:nth-child(2n+1) .timeline-details {
    color: var(--textColor);
    margin: 50px 0 0 50px;
    position: absolute;
    font-weight: 500;
    width: 100px;
    text-decoration: underline;
    text-decoration-color: var(--underline)
  }
  .timeline:nth-child(2n + 1) .timeline-icon {
    --top: 20%;
    --w: 7px;
    --h: calc(20% + calc(35px / 2) - var(--w));
    --l: calc(0% - var(--size) / 2 - 5px);
    background-color: #1C1F23;
    position: absolute;
    left: var(--l);
    top: var(--h);
    height: 14px;
    width: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 999;
  }
  .timeline:nth-child(2n) .timeline-icon {
    --top: 20%;
    --w: 7px;
    --h: calc(20% + calc(35px / 2) - var(--w));
    --r: calc(0% - var(--size) / 2 - 5px);
    background-color: #152443d8;
    position: absolute;
    right: var(--r);
    top: var(--h);
    height: 14px;
    width: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 999;
  }
  .timeline-bar {
    height: 4px;
    width: 4px;
    background: #C1C1C1;
    border-radius: 5px;
  }
  .timeline-content {
    position: absolute;
    top: 20px;
    color: var(--textColor);
    text-align:left;
    padding: 10px;
  }
</style>