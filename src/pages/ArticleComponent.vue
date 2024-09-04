<template>
  <div class="article">
    <header>
      <h1 class="title">{{ articleData.name }}</h1>
      <div class="detail">
        <div class="author">
          <img src="../assets/imgs/icons/writeby.png" alt="#" />
          <span>作者: Cocan</span>
        </div>
        <div class="writeDate">
          <img src="../assets/imgs/icons/date.png" alt="#" />
          <span>发表日期: 2023.6.23</span>
        </div>
        <div class="words">
          <img src="../assets/imgs/icons/words.png" alt="#" />
          <span>字数: {{ articleData.size }}</span>
        </div>
      </div>
      <div class="browse">
        <div class="views">
          <img src="../assets/imgs/icons/views.png" alt="#" />
          <span>阅读数: 2000</span>
        </div>
        <div class="comment">
          <img src="../assets/imgs/icons/comments.png" alt="#" />
          <span>评论: 540</span>
        </div>
        <div class="like">
          <img src="../assets/imgs/icons/heart.png" alt="#" />
          <span>点赞: 1.1w</span>
        </div>
        <div class="sharelink">
          <img src="../assets/imgs/icons/share.png" alt="#" />
          <span>分享</span>
        </div>
      </div>
    </header>
    <div class="dividing"></div>
    <article>
      <div class="blogPage" v-html="articleData.content"></div>
    </article>
    <footer>
      <div class="commentArea"></div>
    </footer>
  </div>
</template>

<script>
import featured from "@/utills/featured";
import common from "@/utills/common";

export default {
  name: "ArticleComponent",
  created() {
    const data = (this.$route.params.type == 'common') ? common : featured;
    
    const pageData = data.filter(item => {
      return item.name === this.$route.params.name;
    })
    this.articleData = pageData[0];

  },
  data() {
    return {
      articleData: {},
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.article {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 2;
  z-index: 999;
  padding: 20px;
  background: rgba(236, 231, 231, 0.3);
  text-align: left;
  word-wrap: break-word;
}
::v-deep .blogPage p {
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Arial !important;
}
::v-deep .blogPage img {
  width: 80%;
  background-size: cover;
  opacity: 0.8;
}
::v-deep .blogPage h3 {
  font-size: 20px;
  padding-left: 0.4em;
  border-left: 0.4em solid #5e5e5e;
  border-bottom: 1px solid #444;
  cursor: pointer;
}
::v-deep .blogPage h4 {
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: bolder;
  color: whitesmoke;
}
::v-deep .blogPage h5 {
  margin-left: 30px;
  font-size: 0.8rem;
  font-weight: bolder;
}
::v-deep code {
  display: inline-block;
  width: 90%;
  font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  word-break: break-word;
  border-radius: 2px;
  overflow-x: auto;
  background-color: #171717;
  color: #bababa;
  font-size: 14px;
  padding: 40px 20px 20px;
  text-align: left;
}
.detail,
.browse {
  width: 40%;
  height: 30px;
  line-height: 30px;
  font-size: 0.8rem;
  display: flex;
  gap: 20px;
}
.detail > *,
.browse > * {
  display: flex;
  align-items: center;
}
.detail img,
.browse img {
  width: 15px;
  height: 15px;
  object-fit: cover;
}
</style>