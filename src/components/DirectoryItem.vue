<template>
  <div
    class="a-container"
    :class="{ active: isActive }"
    @click="$emit('active', content.index)"
  >
    <a :href="'#' + content.dir" @click.prevent="anchor(content.dir)">{{
      content.dir
    }}</a>
  </div>
</template>

<script>
export default {
  name: "SideItem",
  props: {
    dir: {
      type: String,
      default: "",
    },
    content: {
      type: Object,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    anchor(id) {
      // 使用ref无法绑定到对应的标题元素上 只能使用原生获取dom的方法
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
}
a {
  font-size: 1.1rem;
  color: #010614;
  transition: all 0.3s;
}
a:hover {
  font-weight: 500;
  color: #eff4f3;
}
.item {
  cursor: pointer;
}
.item1 {
  height: 30px;
  padding: 5px 0;
  cursor: pointer;
}
.a-container,
.b-container {
  padding: 5px 0;
  padding-left: 1.6rem;
  position: relative;
}
.active a {
  color: #eff4f3;
}
.active::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 3px;
  margin-top: 7px;
  width: 3px;
  height: 14px;
  background: #f2f4f2;
  border-radius: 2px;
}
</style>