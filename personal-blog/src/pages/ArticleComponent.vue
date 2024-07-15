<template>
  <div class="content">
    <div class="article">
        <header>
            <h1 class="title">HTML基础</h1>
            <div class="detail">
                <div class="author">
                    <img src="../assets/imgs/icons/writeby.png" alt="#">
                    <span>作者: Cocan</span>
                </div>
                <div class="writeDate">
                    <img src="../assets/imgs/icons/date.png" alt="#">
                    <span>发表日期: 2023.6.23</span>
                </div>
                <div class="words">
                    <img src="../assets/imgs/icons/writeby.png" alt="#">
                    <span>字数: 1000</span>
                </div>
            </div>
            <div class="browse">
                <div class="views">
                    <img src="../assets/imgs/icons/views.png" alt="#">
                    <span>阅读数: 2000</span>
                </div>
                <div class="comment">
                    <img src="../assets/imgs/icons/comments.png" alt="#">
                    <span>评论: 540</span>
                </div>
                <div class="like">
                    <img src="../assets/imgs/icons/heart.png" alt="#">
                    <span>点赞: 1.1w</span>
                </div>
                <div class="sharelink">
                    <img src="../assets/imgs/icons/share.png" alt="#">
                    <span>分享</span>
                </div>
            </div>
        </header>
        <div class="dividing"></div>
        <article>

        </article>
        <footer>
            <div class="commentArea"></div>
        </footer>
    </div>
    <div class="side">
        <div class="otherArticle"></div>
        <div class="directory">
            <title>###文章目录</title>
            <ul>
                <li>开头</li>
                <li>正文</li>
                <li>总结</li>
                <li>结尾</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ArticleComponent'
}
</script>

<style>

</style>