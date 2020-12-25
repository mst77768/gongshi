<!-- 贡献度分析页面 -->
<template>
    <div class="contribution">
        <Breadcrumb>
            <BreadcrumbItem to="/">航次管理</BreadcrumbItem>
            <BreadcrumbItem to="contribution">贡献度分析</BreadcrumbItem>
        </Breadcrumb>
        <div class="contrbox">
            <div class="top">
                <div class="npm nb">
                    <span>船名: </span>
                    <Select v-model="model1" style="width: 170px">
                        <Option
                            v-for="item in cityList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                        >
                    </Select>
                </div>
                <div class="nb">
                    <span>航线: </span>
                    <Select v-model="model1" style="width: 170px">
                        <Option
                            v-for="item in cityList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                        >
                    </Select>
                </div>
                <div class="nb">
                    <span>船队总管: </span>
                    <Input
                        v-model="value14"
                        placeholder="请输入..."
                        clearable
                        style="width: 140px"
                    />
                </div>
                <div class="nb">
                    <span> 海务主管: </span>
                    <Input
                        v-model="value14"
                        placeholder="请输入..."
                        clearable
                        style="width: 140px"
                    />
                </div>
                <div class="nb">
                    <span>油料部: </span>
                    <Input
                        v-model="value14"
                        placeholder="请输入..."
                        clearable
                        style="width: 140px"
                    />
                </div>
                <div class="nb">
                    <span> 月份范围: </span>

                    <DatePicker
                        type="date"
                        placeholder="__年__月__日"
                        style="width: 130px"
                    ></DatePicker>
                    <span class="kong"></span>
                    <DatePicker
                        type="date"
                        placeholder="__年__月__日"
                        style="width: 130px"
                    ></DatePicker>
                    <Button type="primary">查询</Button>
                </div>
            </div>
            <div class="sumbox">
                <div class="left">
                    <div class="hsum">航次总数: 100</div>
                    <div class="Tc">TC损失:5000美金</div>
                </div>
                <div><Button type="warning" @click="updta">导出</Button></div>
            </div>
            <!-- 下面是表格设计 -->
            <div class="tabbox">
                <Table
                    border
                    ref="tables"
                    :columns="columns4"
                    :data="data1"
                    @on-select="fn"
                     height="600"
                ></Table>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            value14: "",
            cityList: [
                {
                    value: "New York",
                    label: "New York",
                },
                {
                    value: "London",
                    label: "London",
                },
                {
                    value: "Sydney",
                    label: "Sydney",
                },
                {
                    value: "Ottawa",
                    label: "Ottawa",
                },
                {
                    value: "Paris",
                    label: "Paris",
                },
                {
                    value: "Canberra",
                    label: "Canberra",
                },
            ],
            model1: "",
            columns4: [
                {
                    type: "selection",
                    width: 60,
                    align: "center",
                },
                {
                    title: "月份",
                    key: "yue",
                    width:90,
                },
                {
                    title: "船名",
                    key: "cm",
                },
                {
                    title: "航次号",
                    key: "hch",
                },
                {
                    title: "航线",
                    key: "hx",
                },
                {
                    title: "币种",
                    key: "bz",
                },
                {
                    title: "理想TC",
                    key: "lxtc",
                },
                {
                    title: "实际TC",
                    key: "sjtc",
                },
                {
                    title: "速度影响-转速",
                    width:130,
                    key: "sdzs",
                },
                {
                    title: "速度影响-天气",
                    
                    key: "sdtq",
                    width:130
                },
                {
                    title: "卸货速度",
                    key: "xhsd",
                    width:120,
                },
                {
                    title: "在港时间",
                    key: "zgsj",
                    width:120,
                },
                {
                    title: "吃水",
                    key: "cs",
                },
                {
                    title: "燃油",
                    key: "ry",
                },
                {
                    title:"加油",
                    key:"jy"
                },
                {
                    title:"offhire",
                    key:"off"
                },
                {
                    title:"间接offhire",
                    width:110,
                    key:"jjoff"
                }

            ],
            data1: [
                {
                    yue: "2020-12",
                    cm: "DHA",
                    hch: "V2001",
                    hx: "RBM",
                    bz:"8K",
                    lxtc:"A-B",
                    sjtc:"乙醇",
                    sdzs:"4200吨",
                    sdtq:"中海壳",
                    xhsd:"1000W",
                    zgsj:"2500",
                    cs:"2800",
                    ry:"2300",
                    jy:"-500",
                    off:"",
                    jjoff:""
                }  
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        
        fn(a) {
            console.log(a);
        },
        updta(){
           
            console.log(this.$refs.tables.exportCsv)
            this.$refs.tables.exportCsv({
                filename: `table-${(new Date()).valueOf()}.csv`
            })
        
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        var clone = function (obj) { return JSON.parse(JSON.stringify(obj)); }//封装的深拷贝的方法
         for(let i=0;i<14;i++){
            this.data1.push(clone(this.data1[0]))
         }
         for(let i=0;i<15;i++){
               this.data1[i].hch="V"+(Number(this.data1[0].hch.substr(1))+i)
         } 
    },
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
.contribution {
    width: 98%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .ivu-breadcrumb {
        margin-top: 5px;
    }
    .contrbox {
        width: 100%;
        border-radius: 5px;
        background-color: white;
        position: absolute;
        top: 23px;
        bottom: 10px;
        transition: all 0.5s;
        border: 1px solid #ccc;
        .top {
            display: flex;
            height: 50px;
            margin-top: 25px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            align-items: center;
            .npm {
                margin-left: 35px;
            }
            .nb {
                width: auto;
                margin-right: 20px;
                .ivu-date-picker {
                    margin-right: 0;
                }
                .kong {
                    margin: 0 10px;
                }
                .ivu-btn {
                    margin-left: 40px;
                    width: 90px;
                }
            }
        }
        .sumbox {
            display: flex;
            width: 97%;
            height: 50px;
            justify-content: space-between;
            align-items: center;
            .left {
                width: 60%;
                display: flex;
                div {
                    width: 30%;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 700;
                }
            }
            .ivu-btn {
                width: 90px;
            }
        }
        .tabbox {
            width: 99%;
            height: auto;
            box-sizing: border-box;
            padding: 5px 5px;
            padding-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
            margin: 0 auto;
        }
        &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
    }
}
</style>