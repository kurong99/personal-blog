<template>
  <div class="side">
    <div class="catalog-title">
      <slot name="title"></slot>
    </div>
    <div class="catalog-body" :style="{ height }">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>