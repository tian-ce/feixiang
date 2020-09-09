<template>
<div id="zong2">
    <div class="zi">财务管理</div>

    <div class="shai">
        <div class="ten1">
            <i class="el-icon-menu"></i>筛选
        </div>
        <div class="tai">
            <div class="tai1">订单状态</div>
            <div class="tai2">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="待支付"></el-checkbox>
                    <el-checkbox label="已关闭"></el-checkbox>
                    <el-checkbox label="学习中"></el-checkbox>
                    <el-checkbox label="已完成"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="tai">
            <div class="tai1">课程分类</div>
            <div class="tai2">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="课程订单"></el-checkbox>
                    <el-checkbox label="活动订单"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="ten2">
            <div class="shu">输入搜索：<input type="text" placeholder="输入文章标题关键字......" id="tt1"></div>
            <div class="shi">
                <template>
                    <div class="block">
                        <span class="demonstration">上传时间：</span>
                        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </template>
            </div>
            <div class="xuan"><input type="button" value="筛选" id="bt1"></div>
            <div class="qing">
                <p>清空筛选条件</p>
            </div>
        </div>
        <div class="ten1">
            <i class="el-icon-menu"></i>财务统计
        </div>
        <div class="edg">
            <span style="color:black;">订单总额：￥<span style="color:red;">200000</span></span><span style="color:black;  margin-left: 200px;">订单总数：￥<span style="color:red;">200</span></span>
        </div>
    </div>

    <div class=" tian1">
        <div class="jian3">
            <i class="el-icon-s-unfold"></i>财务列表
        </div>
        <div class="tian4">
            <el-table ref="multipleTable" :header-cell-style="rowClass" :cell-style="cellStyle" :data="showTable" tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="订单编号" width="120" style="text-align: center;">
                </el-table-column>
                <el-table-column prop="img" label="订单分类" width="140" style="text-align: center;">
                </el-table-column>
                <el-table-column label="标题" width="140">
                    <template slot-scope="scope">{{ scope.row.xiao }}</template>
                </el-table-column>
                <el-table-column prop="date" label="订单金额" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="shang" label="订单状态" width="120" style="text-align: center;">
                </el-table-column>
                <el-table-column label="下单时间" width="150">
                    <template slot-scope="scope">{{ scope.row.kop }}</template>
                </el-table-column>
            </el-table>
            <div class="qie">
                <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-if="das">
                    <el-pagination background @current-change="handleCurrentChange" layout="total,prev, pager, next" :page-size="pagesize" :total="this.tableData.length">
                    </el-pagination>
                </el-col>
                <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-else>
                    <el-pagination background @current-change="handleCurrentChangelp" layout="total,prev, pager, next" :page-size="pagesize" :total="this.filterAutomobileInfs.length">
                    </el-pagination>
                </el-col>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            checkList: ['选中且禁用', '复选框 A'],
            value7: false,
            value1: '',
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
            pagesize: 6, //设置每页显示条目个数为10
            currentPage: 1, //设置当前页默认为1
            tableData: [{
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'
            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'
            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'
            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }, {
                name: '20182026',
                img: '课程订单',
                xiao: '幼儿英语课程',
                date: '￥2366.00',
                shang: '待支付',
                kop: '201-01-25 10:55'

            }],
            multipleSelection: [],
            filterAutomobileInfs: []
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
            this.value1 = "";
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
            //获取三个选择输入框的内容字符串
            let filtersName = this.zhi1;
            let tiems = this.value2;
            alert(tiems[0])
            alert(tiems[1])
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
    }
}
</script>

<style scoped>
#zong2 {
    float: left;
    margin-left: 15%;
    margin-top: 8%;
    overflow: hidden;
}

.zi {
    width: 180px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #9137F3;
    margin-left: 100px;
    margin-top: 20px;
}

.shai {
    border: 1px solid #E4E4E4;
    width: 1000px;
    height: 300px;
    margin-left: 100px;
    color: #6F6F6F;
    border-radius: 5px;
    background-color: white;
}

.ten1 {
    margin-left: 30px;
    margin-top: 10px;
}

.ten2 {
    width: 1030px;
    height: 80px;
    margin-left: 30px;
    margin-top: 10px;
}

.shu {
    width: 280px;
    height: 40px;
    margin-top: 20px;
}

#tt1 {
    height: 30px;
    width: 180px;
}

.shi {
    width: 500px;
    margin-left: 280px;
    margin-top: -42px;
}

.xuan {
    width: 100px;
    height: 35px;
    margin-left: 735px;
    margin-top: -35px;
}

#bt1 {
    width: 100px;
    height: 38px;
    color: white;
    background-color: #9137F3;
    border: 1px solid #9137F3;
    cursor: pointer;
    border-radius: 5px;
}

.qing {
    margin-left: 862px;
    margin-top: -38px;
    color: #9137F3;
    cursor: pointer;
    font-size: 13px;
}

.tian1 {
    width: 1000px;
    height: 380px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
    margin-left: 100px;
}

.jian3 {
    margin-left: 30px;
    margin-top: 10px;
    color: #6F6F6F;
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

.qie {
    margin-top: -10px;
}

.tai {
    margin: 20px;
}

.tai1 {
    margin-left: 10px;
}

.tai2 {
    margin-left: 110px;
    margin-top: -20px;
}

.edg {
    margin-top: 20px;
    margin-left: 30px;
}
</style>
