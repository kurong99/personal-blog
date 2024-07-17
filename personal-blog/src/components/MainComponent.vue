<template>
  <article>
    <CarouselComponent/>
    <ArticleList/>
  </article>
</template>

<script>
import CarouselComponent from './CarouselComponent.vue'
import ArticleList from './ArticleList.vue'

export default {
    name: 'MainComponent',
    components: {
        CarouselComponent,
        ArticleList
    }
}
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 40px;
        flex: 2;
        padding: 20px;
        z-index: 999;
    }
</style>