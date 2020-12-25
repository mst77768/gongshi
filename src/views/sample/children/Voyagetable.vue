<!-- 本页面是航次效益分析表页面 -->
<template>
    <div class="Voyagebox">
        <Breadcrumb>
            <BreadcrumbItem to="/">航次管理</BreadcrumbItem>
            <BreadcrumbItem to="voyagetable">航次效益分析</BreadcrumbItem>
        </Breadcrumb>
        <!-- 页面的面包屑 -->
        <div class="banbox">
            <!-- 这个是内容区的盒子！ -->
            <div class="banboxtop">
                <ul v-if="flag">
                    <li
                        v-for="(item, index) in week"
                        :class="index == card ? 'ative' : ''"
                        :key="index"
                        @click="getweek(index)"
                    >
                        {{ item }}
                    </li>
                </ul>
                <div class="right">
                    <Button type="primary" con="ios-search" @click="nb"
                        >搜索</Button
                    >
                    <Button type="warning" @click="updta">
                      导出</Button>
                </div>
            </div>
            <!-- 头部第一行结束了！ -->
            <Seach v-if="!flag"/>
            
            <!-- 下面开始不表格的盒子 -->
            <div class="sumbox" v-if="!flag">
                <span>航次总数: 100</span>
                <span>货运总量: 100吨</span>
                <span>平均TC: 5000美金</span>
            </div>
            <div class="tablebox" ref="table" >
                <Table
                    border
                    stripe
                    ref="tables"
                    :columns="columns4"
                    :data="data1" 
                    height="600"      
                >
                    <template slot-scope="{ row }" slot="cha">
                        <a style="color:red" @click="golook(row)">{{row.cha}}</a>
                        <!-- 这里是差异 -->
                    </template>
                </Table>
            </div>
           
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Seach from "./componts/seach"
// import ExcellentExport from 'excellentexport';
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        Seach
    },
    data() {
        //这里存放数据
        return {
            week: ["51w", "52w", "53w", "54w", "55w"],
            card: 0, //默认第一
            flag: true,
            columns4: [
                {
                    type: "selection",
                    width: 60,
                    align: "center",
                },
                {
                    title: "月份",
                    key: "yue",
                },
                {
                    title: "船名",
                    key: "chaun",
                },
                {
                    title: "航次号",
                    key: "hangchihao",
                },
                {
                    title: "币别",
                    key: "bibie",
                },
                {
                    title: "船型",
                    key: "chuanxing",
                },
                {
                    title: "航线",
                    key: "hangxian",
                },
                {
                    title: "货品",
                    key: "huopin",
                },
                {
                    title: "货量",
                    key: "huoliang",
                },
                {
                    title: "租家",
                    key: "zhujia",
                },
                {
                    title: "运费",
                    key: "yufei",
                },
                {
                    title: "预算TC",
                    key: "Tc",
                },
                {
                    title: "理想TC",
                    key: "lTc",
                },
                {
                    title: "实际TC",
                    key: "STc",
                },
                {
                    title: "差异",
                    key:"cha",
                    slot: "cha",
                    fixed: 'right',
                },
            ],
            data1: [
                {
                    yue: "2020-12",
                    chaun: "DHA",
                    hangchihao: "V2001",
                    bibie: "RBM",
                    chuanxing: "8K",
                    hangxian: "A-B",
                    huopin: "乙醇",
                    huoliang: "4200吨",
                    zhujia: "中海壳",
                    yufei: "1000W",
                    Tc: "2500",
                    lTc: "2800",
                    STc: "2300",
                    cha: "-500",
                },
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getweek(i) {
            this.card = i; //点击修改数据
        },
        nb() {
            this.flag = false;
            
        },
        golook(a){//跳转到航次效益分析数据的页面
           localStorage.setItem("id",JSON.stringify(a))
           this.$router.push("voyageLook");
        },
        updta(){//导出表功能的实现
            console.log(this.$refs.tables.exportCsv)
            this.$refs.tables.exportCsv({
                filename: `table-${(new Date()).valueOf()}.csv`
            })
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
         var data=this.data1[0];
         for(let i=0;i<15;i++){
             this.data1.push(data)
         }

    },
    beforeMount() {}, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
    },
};
</script>
<style lang="less" >
.Voyagebox {
    width: 98.5%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    .ivu-breadcrumb {
        margin-top: 5px;
    }
    .banbox {
        width: 100%;
        position: absolute;
        top: 23px;
        left: 0;
        right: 0;
        bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: white;
        transition: all 0.5s;
        &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        .banboxtop {
            height: 60px;
            // background-color: red;
            width: 100%;
            position: relative;
            ul {
                li {
                    float: left;
                    width: 55px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-weight: 700;
                    cursor: pointer;
                    background-color: rgba(170, 231, 234, 1);
                    border-right: 1px solid #ccc;
                    transition: all 0.3s;
                    &:hover {
                        color: white;
                    }
                }
                .ative {
                    color: white;
                    transform: scale(1.1, 1.1);
                    background-color: #3399CC;
                }
            }
            .right {
                width: 40%;
                position: absolute;
                right: 30px;
                top: 10px;
                height: 50px;
                text-align: right;
                .ivu-btn {
                    margin-right: 30px;
                    width: 80px;
                }
            }
        }
        .tablebox {
            width: 99.5%;
            height: auto;
            margin: 0px auto;
            box-sizing: border-box;
            padding: 10px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .sumbox{
            display: flex;
            width: 50%;
            justify-content: space-around;
            height: 35px;
            align-items: center;
            margin-top: 3px;
            font-weight: 700;
        }
    }
}
.ivu-table-column-YCKolu {
    background-color: lightcoral !important;
}
.ivu-table-column-Os3LNb > .ivu-table-cell > span {
    color: red !important;
}
.ivu-table-header thead tr th {
background-color:#a5e4ea;
}
.ivu-select-selection{
    width: 150px !important;
}
</style>