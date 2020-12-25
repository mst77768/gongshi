<template>
    <div id="app">
        <router-view />
        <!-- 这里是一个路由的占位符 -->
    </div>
</template>

<style lang="less">
body,html{
    margin:0px;
    height:100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50;
    .ivu-select-selection {
        width: 100% !important;
    }
}
// #app .ivu-select-selection {
//         width: 100% !important;
//     }
    ul li{
      list-style: none;
    }

.ivu-table-header thead tr th {
    background-color: #a5e4ea;
}
</style>
