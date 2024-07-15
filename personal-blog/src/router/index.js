import VueRouter from "vue-router";
import ArticleComponent from "@/pages/ArticleComponent.vue";
import MainComponent from "@/components/MainComponent.vue";

// 路由规则
const routes = [
    // 首页路由
    {
        path: '/index',
        component: MainComponent,
    },
    // 文章页面路由
    {
        path: '/article', 
        component: ArticleComponent
    },
    // 娱乐页面路由
    {
        path: '/recreation', 
        // component:
    },
    // 发现页面路由
    {
        path: '/findings', 
        // component:
    },
    {
        path: '/introduction', 
        // component:
    },
    // 关于页面路由
    {
        path: '/about', 
        // component:
    },
];

const router = new VueRouter(routes);

export default router;