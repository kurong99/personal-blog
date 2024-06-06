<template>
  <div class="article-list">
    <div class="title">
      <span>文章列表</span>
    </div>
    <div class="article">
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'ArticleList',
}
</script>

<style scoped>
  .title {
    float: left;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    transform: perspective(1000px) rotateY(10deg);
    margin-top: 20px;
  }
  .title span {
    color: aliceblue;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: underline;
    cursor: pointer;
  }
</style>