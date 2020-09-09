<template>
<div id="sang">
    <div class="zuo">
        <img src="../../public/img/tu2.png">
        <el-container style="height: 600px; border: 1px solid #eee">
            <el-aside style="background-color: rgb(238, 241, 246);">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <router-link tag="div" to="/shouye">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-home"></i>
                            <span>文章管理</span>
                        </template>
                        <el-menu-item-group style="text-align: center;">
                            <router-link tag="div" to="/shouye/lunbo">
                                <el-menu-item index="1-1">轮播图管理</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/keche">
                                <el-menu-item index="1-2">课程管理</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/jiaoyu">
                                <el-menu-item index="1-3">教育头条</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/huodong">
                                <el-menu-item index="1-4">活动列表</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/mingxin">
                                <el-menu-item index="1-5">明星教师</el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <router-link tag="div" to="/shouye/dindan">
                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">订单管理</span>
                        </el-menu-item>
                    </router-link>
                    <router-link tag="div" to="/shouye/yonghu">
                        <el-menu-item index="4">
                            <i class="el-icon-document"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                    </router-link>
                    <router-link tag="div" to="/shouye/caiwu">
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">财务管理</span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item-group style="text-align: center;">
                            <router-link tag="div" to="/shouye/tongyong">
                                <el-menu-item index="7-1">通用设置</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/guanyu">
                                <el-menu-item index="7-2">关于我们</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/yuangong">
                                <el-menu-item index="7-3">员工管理</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/jueshe">
                                <el-menu-item index="7-4">角色管理</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/rizi">
                                <el-menu-item index="7-5">操作日志</el-menu-item>
                            </router-link>
                            <router-link tag="div" to="/shouye/waibu">
                                <el-menu-item index="7-6">外部</el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
    <div class="two">
        <img src="../../public/img/tu3.png">
        <input disabled="disabled" :value="value" :key="menuKey" v-show="value" />
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuKey: 1,
            value: false,
        };
    },
    watch: {
        value() {
            ++this.menuKey;
        },
    },
    created() {
        this.value = window.sessionStorage.getItem("user");
    },
}
</script>

<style>
#shang {
    width: 100%;
    height: 100%;

}

.zuo img {
    margin-left: 5%;
}

.el-aside {
    width: 270px !important;
}

@media screen and (max-width: 1100px) {
    .el-aside {
        width: 200px !important;
    }

}

.zuo {
    width: 20%;
    height: 655px;
    border-right: 1px solid #e6e6e6;
    background: white;
    float: left;
    position: fixed;
    z-index: 200;
}

.el-menu-vertical-demo i {
    color: blue;
}

.el-menu-vertical-demo {
    border-right: 1px solid #e6e6e6;
}

.two {
    position: fixed;
    background-color: rgba(145, 55, 243, 1);
    width: 100%;
    height: 100px;
    z-index: 100;
}

.two img {
    float: right;
    margin-right: 220px;
    margin-top: 20px;
}

.two input {
    text-align: center;
    width: 100px;
    float: right;
    margin-right: -220px;
    margin-top: 30px;
    background: rgba(145, 55, 243, 1);
    border: 0px;
}
</style>
