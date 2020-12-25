<!-- 默认显示的一个tab组件 -->
<template>
    <div class="ativetab">
        <div class="inputb">
            <div class="item">
                <b>会议地点：</b>
                <Input
                    v-model="value1"
                    placeholder="请输入..."
                    style="width: 150px"
                />
            </div>
            <div class="item">
                <b></b>
                <Button @click="$router.push('/person')" type="primary" style="margin-bottom: -20px"
                    >选择人员</Button
                >
            </div>
            <div class="item">
                <b>参会人员：</b>
                <Input v-model="value" placeholder="" style="width: 90%" />
            </div>
            <div class="item">
                <b>缺席人员：</b>
                <Input v-model="value1" placeholder="" style="width: 90%" />
            </div>
        </div>
        <div class="tabbox">
            <h3>本周公司及船队各轮需重点关注及解决的事项</h3>
            <Table border :columns="columns1" :data="data1">
                <template slot-scope="{ row }" slot="name">
                    <span v-if="!row.flag">{{ row.name }}</span>
                    <span v-else>
                        <Input
                            v-model="value12"
                            placeholder="请输入..."
                            clearable
                            style="width: 120px"
                        />
                    </span>
                </template>
                <template slot-scope="{ row }" slot="text">
                    <span v-if="!row.flag">{{ row.text }}</span>
                    <span v-else>
                        <Input
                            v-model="textarea2"
                            type="textarea"
                            placeholder="请输入..."
                            :autosize="{ minRows: 2, maxRows: 5 }"
                        />
                    </span>
                </template>
                <template slot-scope="{ row }" slot="operation">
                    <span v-if="!row.flag">
                       
                    </span>
                    <span v-else>
                         <Button type="info" ghost @click="nb(row)">确认增加</Button>
                    </span>
                </template>
            </Table>
            <p id="p1" @click="add">+ 新增</p>
            <h3>总裁指示</h3>
            <Input
                v-model="textarea"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 9 }"
            />
        </div>
        <div class="botm">
            <Button size="large" type="primary" @click="$router.push('huiyi')">提交</Button>
            <Button size="large" type="success" @click="$router.push('huiyi')">取消</Button>
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
            value: "",
            value1: "",
            textarea: "",
            flag: true,
            textarea2:"",
            value12:"",
            columns1: [
                {
                    title: "部门名称",
                    slot: "name",
                    width: "150",
                    align: "center",
                },
                {
                    title: "本周汇报及需要协调事项",
                    slot: "text",
                    align: "center",
                },
                {
                    title: "操作",
                    slot: "operation",
                    width: "100",
                    align: "center",
                },
            ],
            data1: [
                {
                    name: "数据化研发部门",
                    text: "无",
                    operation: "",
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
        add() {
            if (this.flag) {
                let obj = {
                    flag: true,
                    name: "",
                    text: "",
                    operation: "",
                };
                this.data1.push(obj);
                this.flag=false
            }else{
                this.$Notice.info({
                    title: "系统提醒！",
                    desc: "你上条数据未操作完成！",
                });
            }
        },
        nb(obj){
            if(this.textarea2!="" &&this.value12!=""){
                this.data1[this.data1.length-1].name=this.value12;
                this.data1[this.data1.length-1].text=this.textarea2;
                this.textarea2="";
                this.value12="";
                this.flag=true;
                this.data1[this.data1.length-1].flag=false
            }else{
                this.$Notice.info({
                    title: "系统提醒！",
                    desc: "请填写！",
                });
            }
            console.log(obj)
        },
        nb2(index){
            alert(index)
        }
    },
    beforeCreate() {}, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        let obj = this.data1[0];
        for (let i = 0; i < 10; i++) {
            this.data1.push(obj);
        }
    },
    beforeMount() {}, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        var str = sessionStorage.getItem("proson") || "[]"
            var arr = JSON.parse(str);
            console.log(arr)
            if(arr.length){
                this.value=arr.toString()
            }
    },
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {
        sessionStorage.removeItem("proson");//清除本地的
    }, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.ativetab {
    width: 100%;
    height: auto;
    border-top: 1px solid #ccc;
    .inputb {
        width: 100%;
        box-sizing: border-box;
        height: 200px;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
        .item {
            width: 100%;
            height: auto;
            line-height: 50px;
            b {
                font-size: 16px;
                margin-right: 10px;
                font-weight: 500;
                display: inline-block;
                width: 82px;
            }
        }
    }
    .tabbox {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ccc;
        h3 {
            margin-bottom: 4px;
        }
        #p1 {
            width: 100%;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border: 1px dashed #ccc;
            margin-bottom: 20px;
            transition: all 0.5s;
            &:hover {
                color: darkturquoise;
                cursor: pointer;
                border-color: darkturquoise;
            }
        }
    }
    .botm {
        width: 23%;
        display: flex;
        margin: 15px auto;
        justify-content: space-between;
        .ivu-btn {
            width: 80px;
        }
        .ivu-btn-success {
            background-color: #d7d7d7;
            border-color: white;
        }
    }
}
</style>