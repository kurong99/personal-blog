<template>
  <div class="article-list">
    <TitleComponent>文章列表</TitleComponent>
    <div class="timelines">
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Dec 25</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Oct 12</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Sep 13</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Aug 07</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Aug 07</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Aug 07</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Aug 07</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
      <div class="timeline">
        <div class="timeline-title"></div>
        <div class="timeline-details">Aug 07</div>
        <div class="timeline-icon"></div>
        <div class="timeline-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent';

export default {
    name: 'ArticleList',
    components: {
      TitleComponent
    }
}
</script>

<style scoped>
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
  }
  .timeline:nth-child(2n) {
    background-color: #003371;
  }
  .timeline:nth-child(2n+1) {
    margin: 10px 0 0 var(--space);
    background-color: #0c6ee5;
  }
</style>