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
        z-index: 999;
    }
    article {
        flex: 2;
    }
</style>