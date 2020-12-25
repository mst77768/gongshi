<!--这个页面是航次效益分析数据展示页面  -->
<template>
    <div class="VoyaLooking">
        <Breadcrumb>
            <BreadcrumbItem to="/">航次管理</BreadcrumbItem>
            <BreadcrumbItem to="voyagetable">航次效益分析</BreadcrumbItem>
        </Breadcrumb>
        <div class="voyaLookingbox">
            <div class="voyaxin">
                <div class="left">
                    <div id="main1" ref="main1"></div>
                    <!-- 画条形图的 -->
                    <div id="main2" ref="main2"></div>
                    <!-- 画饼图的 -->
                </div>
                <div style="border: 0">
                    <table>
                        <!-- <colgroup span="2"></colgroup>这里span等于三是 第四列 变了颜色 因为下面还有一个语句是执行这个的   -->
                        <!-- <colgroup bgcolor="yellow"></colgroup> -->
                        <tbody>
                            <tr>
                                <td>所属月份</td>
                                <td>12月</td>
                                <td>装港</td>
                                <td>鲅鱼圈</td>
                            </tr>
                            <tr>
                                <td>业务主管</td>
                                <td>孟明涛</td>
                                <td>卸港</td>
                                <td>漕泾</td>
                            </tr>
                            <tr>
                                <td>海务主管</td>
                                <td>马慧博</td>
                                <td>货品</td>
                                <td>NBA</td>
                            </tr>
                            <tr>
                                <td>操作主管</td>
                                <td>马慧博</td>
                                <td>合计货量</td>
                                <td>2981</td>
                            </tr>
                            <tr>
                                <td>油料主管</td>
                                <td>万千</td>
                                <td>满载率</td>
                                <td>85.17%</td>
                            </tr>
                            <tr>
                                <td>租家1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style="height: 60px">
                                <td>租家2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="voyatableb">
                <Table :columns="columns1" :data="data1" height="500">
                    <template slot-scope="{ row }" slot="cha">
                        <a >{{ row.cha }}</a>
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
// import echarts1 from "echarts";
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            columns1: [
                
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
                    key: "cha",
                    slot: "cha",
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
        zhu() {
            var myChart = this.$echarts.init(this.$refs.main1);
            let option = {
                color:['rgb(255,153,00)','rgb(25,46,94)'],
                title: {
                    text: "TC比较",
                },
                legend: {

                },
                tooltip: {},
                dataset: {
                    source: [
                        ["product", "理想TC", "实际TC"],
                        ["", 86544.4, 424444.5],
                    ],
                },
                xAxis: { type: "category", show: false },
                yAxis: {
                    show: false,
                },
               
                series: [
                    {
                        type: "bar",
                        itemStyle: {
                            normal: {
                                color: function (params){
                    var colorList = ['rgb(255,153,00)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                    return colorList[params.dataIndex];
                },
                                label: {
                                    show: true, //开启显示
                                    position: "top", //在上方显示
                                    textStyle: {
                                        //数值样式
                                        color: "black",
                                        fontSize: 16,
                                    },
                                },
                            },
                        },
                    },
                    {
                        type: "bar",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, //开启显示
                                    position: "top", //在上方显示
                                    textStyle: {
                                        //数值样式
                                        color: "black",
                                        fontSize: 16,
                                    },
                                },
                            },
                        },
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        yuan() {
            var myChart = this.$echarts.init(this.$refs.main2);
            let option = {
                color:['rgb(255,153,00)','rgb(42,170,227)','rgb(25,46,94)','#666699','rgb(0,153,51)'],
                title: {
                    text: "负贡献明细",
                    x: "right",
                    y: "top",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    orient: "vertical",
                    left: 10,
                    data: ["转速", "燃油", "卸货速度", "在港时间", "加油"],
                },
                series: [
                    {
                        name: "数据统计",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                formatter: "{b}:{c}: ({d}%)",
                                textStyle: {
                                    fontWeight: "normal",
                                    fontSize: 10,
                                },
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold",
                            },
                        },
                        labelLine: {
                            show: true,
                        },
                        data: [
                            { value: 335, name: "转速" },
                            { value: 310, name: "燃油" },
                            { value: 234, name: "卸货速度" },
                            { value: 135, name: "在港时间" },
                            { value: 1548, name: "加油" },
                        ],
                    },
                ],
            };
            myChart.setOption(option);
        },
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
        console.log(this.$echarts);
        this.zhu();
        this.yuan();
    },
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.VoyaLooking {
    width: 98%;
    height: 100%;
    margin: 0 auto;
    .ivu-breadcrumb {
        margin-top: 3px;
        margin-bottom: 3px;
    }
    .voyaLookingbox {
        width: 100%;
        height: 95%;
        margin: 5px auto;
        background-color: white;
        border-radius: 7px;
        transition: all 0.4s;
        border: 1px solid #ccc;
        &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        .voyaxin {
            width: 92%;
            height: 245px;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;
            div {
                width: 49.5%;
                height: 245px;
                border: 1px solid #ccc;
                border-radius: 3px;
                table td:nth-child(odd) {
                    font-weight: 800;
                    cursor: pointer;
                }
                table {
                    width: 100%;
                    height: 100%;
                    border-collapse: collapse;
                    tbody {
                        tr {
                            td {
                                border: 1px solid #ccc;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .left {
                display: flex;
                justify-content: space-between;
                div {
                    width: 49.5%;
                    height: 100%;
                    border: 0px;
                    text-align: center;
                }
            }
        }
        .voyatableb {
            width: 92%;
            height: auto;
            margin: 20px auto;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 8px 8px;
            box-sizing: border-box;
        }
    }
}
</style>