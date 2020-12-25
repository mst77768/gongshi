import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/sample/index"; //这个是主页面的路由

Vue.use(VueRouter)
import ViewUI from 'view-design';
Vue.use(ViewUI);


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: "voyagetable", //重定向到这个航次分析页面
        children: [{
            path: "voyagetable",
            component: () =>
                import ("../views/sample/children/Voyagetable")
        },{
            path:"voyageLook",//二级路由数据显示分析页面的路由定位
            component:()=>import("../views/sample/children/VoyaLooking")
        },{
            path:"contribution",//贡献度分析页面的定位路由！
            component:()=>import("../views/sample/children/contribution")
            
        },{
            path:"Trintyhouse",//海务输入表页面的路由定位
            component:()=>import("../views/sample/children/TrinityHouse")
        },{
            path:"TrinHousePage",//海务输入的界面路由定位
            component:()=>import("../views/sample/children/TrinHousePage")
        },{
            path:"huiyi",//会议报告的路由页面
            component:()=>import("../views/Intelligent-office/huiyi")
        },{
            path:"rlzz",//热力追踪页面
            component:()=>import("../views/Intelligent-office/rlzz")
        }]
    },{
        path:"/addhuiyi",//执行力跟踪的添加单独页面路由
        component:()=>import("../views/oneself-Page/conference")
    },{
        path:"/wenjian",//管理员查看附件的单独页面路由
        component:()=>import("../views/oneself-Page/wenjian")
    },{
        path:"/adwenjian",//添加会议报告单独页面的路由
        component:()=>import("../views/oneself-Page/addhuiyi")
    },{
        path:"/person",//选择参会人员的页面的路由
        component:()=>import("../views/oneself-Page/person")
    },{
        path:"/fankui",//管理员查看附件的反馈页面路由
        component:()=>import("../views/oneself-Page/wenjian2")
    }
   
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {//路由守卫
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(route => {
    console.log(route)
    ViewUI.LoadingBar.finish();
});

export default router