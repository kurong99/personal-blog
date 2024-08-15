<template>
  <div class="view-container">
    <router-view name="main"></router-view>
    <router-view
      :activeId="activeId"
      name="side"
      @active="activeId = $event"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "ViewComponent",
  data() {
    return {
      activeId: 0,
    };
  },
};
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