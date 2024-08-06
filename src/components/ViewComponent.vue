<template>
  <div class="view-container">
    <router-view name="main"></router-view>
    <router-view name="side"></router-view>
  </div>
</template>

<script>
// import SideComponent from '../pages/SideComponent.vue';

export default {
    name: 'ViewComponent',
    // components: {
    //     SideComponent
    // }
}
</script>

<style scoped>
    .view-container {
        width: 90vw;
        /* height: auto; */
        margin: 20px auto;
        display: flex;
        gap: 10px;
    }
</style>