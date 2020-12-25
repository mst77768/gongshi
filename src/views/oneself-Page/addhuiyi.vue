<!-- 新增会议报告页面 -->
<template>
    <div class="addpage">
        <div class="xinbox">
            <div class="top">新增会议报告</div>
            <div class="inputbox">
                <div class="itme">
                    <b>报告类型：</b>
                    <Select v-model="model8" clearable style="width: 150px" @on-change="fn">
                        <Option
                            v-for="item in cityList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                        >
                    </Select>
                </div>
                <div class="itme">
                    <b>报告日期：</b>
                    <DatePicker type="date" placeholder="年/月/日" style="width: 150px"></DatePicker>
                </div>
                <div class="itme">
                    <b>报告名称：</b>
                    <Input v-model="value" placeholder="请输入..." style="width: 150px" />
                </div>
            </div>
            <div class="addmain">
                <!-- 这里是tab两个大的自定义组件 -->
                <tab1 v-if="!model8"/>
               <tab2 v-else/>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tab1 from "./comment/tab1";
import tab2 from "./comment/tab2"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        tab1,
        tab2
    },
    data() {
        //这里存放数据
        return {
           value:"",
            cityList: [
                {
                    value: 0,
                    label: "周例会",
                },
                {
                    value: 1,
                    label: "月度会议",
                },
            ],
            model8: 0,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        fn(index){//一会要tab切换
            console.log(index)
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    beforeMount() {}, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
            
            
    },
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.addpage {
    width: 100%;
    height: auto;
    overflow: hidden;
    
  
    background-color: rgba(242, 242, 242, 1);
    .xinbox {
        width: 1147px;
        height: auto;
        margin: 8px auto;
        border: 1px solid #ccc;
        background-color: white;
        .top {
            width: 92%;
            height: 60px;
            border-bottom: 1px solid #ccc;
            line-height: 60px;
            margin: 0 auto;
            text-align: center;
            font-size: 18px;
        }
        .inputbox {
            width: 80%;
            height: 80px;
            display: flex;
            margin-left: 60px;

            justify-content: space-between;
            align-items: center;
            .itme b{
                font-size: 16px;
                font-weight: 500;
                margin-right: 10px;
            }
        }
        .addmain{
            width: 90%;
            margin:  0 auto;
            height:auto;
            padding-bottom: 30px;
        }
    }
}
</style>