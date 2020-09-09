<template>
<div class="ding">
    <div class="jian1">
        订单管理
    </div>
    <div class="jian2">
        <div class="jian3">
            <i class="el-icon-menu"></i>筛选
        </div>
        <div class="shou1">
            <span class="shou2">输入搜索</span><input v-model="zhi1" class="shou4" type="text" placeholder="输入标题...">
            <span class="shou2">上传时间</span>
            <div class="block">
                <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                </el-date-picker>
            </div>
            <div class="shou6" @click="searchAutomobile">
                <i class="el-icon-s-open"></i><span>筛选</span>
            </div>
            <div class="shou0" @click="qin">
                清空筛选条件
            </div>
        </div>
    </div>
    <div class="tian1">
        <div class="jian3">
            <i class="el-icon-s-unfold"></i>订单列表
        </div>
        <div class="tian4">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="订单管理" name="first">

                    <el-table ref="multipleTable" :header-cell-style="rowClass" :cell-style="cellStyle" :data="showTable" tooltip-effect="dark" style="width: 100%;" @selection-change='selectRow'>
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="name" label="订单名称" width="140" style="text-align: center;">
                        </el-table-column>
                        <el-table-column prop="img" label="缩略图" width="220" style="text-align: center;">
                            <template slot-scope="scope">
                                <img :src="scope.row.img" min-width="70" height="70" />
                            </template>
                        </el-table-column>
                        <el-table-column label="日期" width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column prop="address" label="上传人" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-if="das">
                        <el-pagination background @current-change="handleCurrentChange" layout="total,prev, pager, next" :page-size="pagesize" :total="this.tableData.length">
                        </el-pagination>
                    </el-col>
                    <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-else>
                        <el-pagination background @current-change="handleCurrentChangelp" layout="total,prev, pager, next" :page-size="pagesize" :total="this.filterAutomobileInfs.length">
                        </el-pagination>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</div>
</template>

<script>
var _index;
export default {
    data() {
        return {
            editForm: [],
            editFormVisible: false,
            dialogFormVisible: false,
            activeName: 'second',
            form: {
                name: '',
                imgs: require("../../public/img/t1.png"),
                datae: '',
                rj: '',
                indexs: 1,
                id: '',
                delivery: false,
            },
            formLabelWidth: '120px',
            zhi1: "",
            das: true,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value2: '',
            pagesize: 2, //设置每页显示条目个数为2
            currentPage: 1, //设置当前页默认为1
            tableData: [{
                id: 1,
                index: '1',
                name: 'bannes',
                img: require("../../public/img/t1.png"),
                date: '2016-05-03',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                index: '2',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-02',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 3,
                index: '3',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-04',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 4,
                index: '4',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-01',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 5,
                index: '5',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-08',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 6,
                index: '6',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-06',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 7,
                index: '7',
                name: 'banner',
                img: require("../../public/img/t1.png"),
                date: '2016-05-07',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: [],
            filterAutomobileInfs: [],
            selectlistRow: [],
        };
    },
    computed: {
        //showTable计算属性通过slice方法计算表格当前应显示的数据
        showTable() {
            if (this.das) {
                return this.tableData.slice(
                    (this.currentPage - 1) * this.pagesize,
                    this.currentPage * this.pagesize
                );
            } else {
                return this.filterAutomobileInfs.slice(
                    (this.currentPage - 1) * this.pagesize,
                    this.currentPage * this.pagesize
                );
            }
        }
    },
    methods: {
        qin() {
            this.zhi1 = "";
            this.value2 = "";
        },

        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        rowClass() {
            return "text-align:center"
        },
        cellStyle() {
            return "text-align:center"
        },
        //设置当前页为点击页
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
        },
        handleCurrentChangelp(currentPage) {
            this.currentPage = currentPage;
        },
        searchAutomobile() {
            //currentPage赋值为1
            this.currentPage = 1;
            //筛选方法
            this.filterAutomobile();

        },
        filterAutomobile() {
            //获取选择输入框的内容字符串
            let filtersName = this.zhi1;
            let tiems = this.value2;
            console.log(tiems[0], tiems[1]);
            //筛选原始数组并赋值给filtersAutomobile数组
            let filtersAutomobile = this.tableData.filter(item => {
                //定义筛选条件，默认为true，这样就可以让不符合动态选择条件时不影响筛选条件
                var isFiltersName = true;
                //符合动态选择条件就给筛选条件赋值
                if (filtersName.length != 0) {
                    isFiltersName = item.name.indexOf(filtersName) != -1;
                    this.das = false
                }
                //返回筛选条件
                return isFiltersName;
            });
            //把筛选后的数组赋值给列表显示数组
            this.filterAutomobileInfs = filtersAutomobile;
        },
    },
    created() {
        this.form.indexs = this.tableData.length + 1
        this.form.id = this.tableData.length + 1
    },
}
</script>

<style scoped>
.ding {
    float: left;
    margin-left: 23%;
    margin-top: 8%;
}

.jian1 {
    font-size: 25px;
    font-weight: bold;
    color: blue;
    margin-top: 10px;
}

.jian2 {
    width: 1000px;
    height: 130px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
}

.jian3 {
    margin-top: 10px;
    margin-left: 10px;
    color: #666666;
    font-weight: 400;
}

.jian3 i {
    margin-left: 10px;
    margin-right: 10px;
}

.shou1 {
    margin-top: 25px;
}

.shou2 {
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;
}

.block {
    margin-left: 400px;
    margin-top: -28px;
}

.shou6 {
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    background-color: rgba(145, 55, 243, 1);
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -33px;
    margin-right: 150px;
}

.shou0 {
    font-size: 14px;
    float: right;
    margin-top: -30px;
    cursor: pointer;
    margin-right: 50px;
    color: #9137F3;
}

.tian1 {
    width: 1000px;
    height: 350px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
    margin-bottom: 10px;
}

.tian2 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -22px;
    margin-right: 160px;
    border: 1px solid rgba(145, 55, 243, 1);
}

.tian3 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -22px;
    margin-right: -250px;
    border: 1px solid rgba(145, 55, 243, 1);
}

.el-table th>.cell {
    text-align: center;
}

.el-table .cell {
    text-align: center;
}
</style>
