<!--  -->
<template>
    <div class="tab2">
        <div class="top1">
            <div v-for="(item, index1) in arr" :key="index1" @click="fn(index1)">
                <span :class="{ative:index==index1}">
                    {{ item }}
                </span>
            </div>
        </div>
        <div class="mainx">
            <div class="tab">
               <tab1 v-show="index==0"/>
               <tab2 v-show="index==1"/>
               <tab3 v-show="index==2"/>
               <tab4 v-show="index==3"/>
               <tab5 v-show="index==4"/>
               <tab6 v-show="index==5"/>
               <tab7 v-show="index==6"/>

            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tab1 from "./tab/tab1";
import tab2 from "./tab/tab2";
import tab3 from "./tab/tab3";
import tab4 from "./tab/tab4";
import tab5 from "./tab/tab5";
import tab6 from "./tab/tab6";
import tab7 from "./tab/tab7";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        tab1,
        tab2,
        tab3,
        tab4,
        tab5,
        tab6,
        tab7,
    },
    data() {
        //这里存放数据
        return {
            index: 0,
            arr: [
                "月度总结",
                "2020部门目标",
                "2020核心目标和措施",
                "2020－2030利润目标",
                "2020－2022员工收入目标",
                "管理四项基本原则",
                "绩效处罚",
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        fn(index){
            this.index=index;
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    beforeMount() {}, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="less" scoped>
.tab2 {
    width: 100%;
    height: auto;
   
    .top1 {
        display: flex;
        height: 45px;
        width: 100%;
       margin-top: 10px;
        align-items: center;
        justify-content: space-around;
        background-color: #a5e4ea;
        div {
            font-size: 14px;
            font-weight: 800;
            cursor: pointer;
            
            
            &:hover {
                color: white;
            }
        }
        .ative{
            color: white;
            font-size: 15px;
            border-bottom: 3px solid gold;
            border-radius: 100px;
        }
    }
    .mainx{
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        border: 1px solid #ccc;
    }
}
</style>