import VueRouter from "vue-router";
import ArticleComponent from "@/pages/ArticleComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import DirectoryComponent from '@/pages/DirectoryComponent.vue';
import SideComponent from '@/pages/SideComponent.vue';

// 路由规则
const routes = [
    // 首页路由
    {
        name: '首页',
        path: '/',
        components: {
            'main': MainComponent,
            'side': SideComponent
        },
    },
    // 文章页面路由
    {
        name: '文章',
        path: '/article/:type/:name', 
        components: {
            'main': ArticleComponent,
            'side': DirectoryComponent
        }
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

const router = new VueRouter({
    mode: 'history',    
    routes
});

export default router;