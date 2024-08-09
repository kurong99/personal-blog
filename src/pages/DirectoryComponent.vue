<template>
  <aside>
    <div class="directory">
      <div class="catalog-title">
        <div>目录</div>
        <div class="direction">
          <div class="text">展开</div>
          <svg width="12" height="12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,30 L50,70 L80,30" stroke="#8a919f" stroke-width="10" fill="none" />
          </svg>
        </div>
      </div>
      <div class="catalog-body">
        <ul class="catalog-list">
          <li v-for="(dir,index) in firstLevel" :key="index">
            <div class="a-container">
              <a href="#" class="active">{{ dir }}</a>
            </div>
            <ul class="sub-list">
              <li v-for="(dir,index) in secondLevel" :key="index">
                <a href="#">{{ dir }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend">
      <div class="catalog-title">相关推荐</div>
      <ul class="catalog-list">
        <li>
          <div class="b-container">
            <a href="#" class="active">Lorem ipsum dolor sit.</a>
          </div>
        </li>
        <li>
          <div class="b-container">
            <a href="#" class="active">Lorem ipsum dolor sit.</a>
          </div>
        </li>
        <li>
          <div class="b-container">
            <a href="#" class="active">Lorem ipsum dolor sit.</a>
          </div>
        </li>
        
      </ul>
    </div>
    <!-- <div class="advertise">
      <span>广告位招租</span>
      <img src="../assets/imgs/logo.png" alt="">
    </div> -->
  </aside>
</template>

<script>
import data  from '@/utills/markdown'

export default {
  name: 'DirectoryComponent',
  created() {
    const pageData = data.filter((item) => {
        return item.name === this.$route.params.name;
    })
    this.firstLevel = pageData[0].directory.h3;
    this.secondLevel = pageData[0].directory.h4;
  },
  data() {
    return {
      firstLevel: [],
      secondLevel: []
    }
  }
};
</script>

<style scoped>
  * {
    list-style: none;
    text-decoration: none;
  }
  a {
    font-size: 1.3rem;
    color: #010614;
    transition: all .3s;
  }
  a:hover {
    font-weight: 500;
    color: #eff4f3;
  }
  aside {
    margin-top: 80px;
    height: 80vh;
    color: var(--textColor);
    box-shadow: 0 8px 30px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5);
    opacity: 0.8;
    flex: 0.5;
    position: sticky;
    top: 12vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
  }
  .directory {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .catalog-title {
    font-weight: 700;
    margin: 0 1.6rem;
    font-size: 1rem;
    line-height: 2rem;
    color: #f5f5f7;
    border-bottom: 1px solid #8a919f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
  }
  .direction {
    display: flex;
    align-items: center;
  }
  .text {
    font-weight: 500;
    font-size: .8rem;
    color: #8a919f;
    cursor: pointer;
  }
  .catalog-body {
    width: 100%;
    margin-top: 20px;
  }
  .catalog-list {
    width: 100%;
    padding: 0px;
    text-align: left;
  }
  .catalog-list li {
    cursor: pointer;
  }
  .sub-list li {
    padding: 5px 0;
  }
  .a-container {
    padding: 5px 1.6rem;
    position: relative;
  }
  .b-container {
    padding: 5px 1.6rem;
  }
  .active {
    color: #eff4f3;
  }
  .a-container::before {
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