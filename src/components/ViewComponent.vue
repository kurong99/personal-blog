<template>
  <div class="view-container">
    <router-view></router-view>
    <SideComponent/>
  </div>
</template>

<script>
import SideComponent from './SideComponent.vue';

export default {
    name: 'ViewComponent',
    components: {
        SideComponent
    }
}
</script>

<style scoped>
    .view-container {
        width: 90vw;
        /* height:155vh; */
        /* height: auto; */
        margin: 20px auto;
        display: flex;
        gap: 10px;
    }
</style>