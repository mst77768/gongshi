
<template>
    <div class="sample">
        <Sheader />
        <!-- 头部组件的位置 -->
        <div class="main">
            <Sleft />
            <!-- 公共左边组件 -->
            <div class="right">
                <router-view></router-view>
                <!-- 这里是不同的页面 ---站位符 -->
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Sheader from "@/components/header"; //引入头部组件
import Sleft from "@/components/left"; //引入左边的组件
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        Sheader, //注册头部组件
        Sleft,
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    beforeMount() {}, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // aioxs.get("http://192.168.0.90:8080/hello/stu").then((roust) => {
        //     console.log(roust.data);
        // });
    },
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  lang="less">
.sample {
    width: 1920px;
    height: 100vh;
    background-color: rgba(242, 242, 242, 1);
    position: relative;
    overflow: hidden;

    .main {
        position: absolute;
        top: 67px;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        .right {
            position: relative;

            flex: 1;
            height: 99%;
            // overflow: hidden;
        }
    }
    /* 高度的话100% */
}
</style>
   
