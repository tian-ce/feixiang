<template>
<div class="three">
    <p class="three1">首页</p>
    <div class="three2">
        <div class="ten1">
            经营概况<i class="el-icon-s-unfold"></i>
        </div>
        <div class="ten2">
            <img src="../../public/img/tu4.png">
            <img src="../../public/img/tu5.png">
            <img src="../../public/img/tu6.png">
            <img src="../../public/img/tu7.png">
        </div>
    </div>
    <div class="three3">
        <div class="ten1">
            代办事项<i class="el-icon-s-unfold"></i>
        </div>
        <div class="ten2">
            <img src="../../public/img/tu8.png">
            <img src="../../public/img/tu9.png">
            <img src="../../public/img/tu10.png">
        </div>
    </div>
    <div class="three4">
        <div class="ten1">
            收入趋势<i class="el-icon-s-data"></i>
        </div>
        <div id="myChart" :style="{width: '1000px', height: '300px'}"></div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                tooltip: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['8-12', '8-13', '8-14', '8-15', '8-16', '8-17', '8-18']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            });
        }
    }
}
</script>

<style scoped>
.three {
    float: left;
    margin-left: 23%;
    margin-top: 8%;
}

.three1 {
    font-size: 25px;
    font-weight: bold;
    color: blue;
}

.three2 {
    width: 1000px;
    height: 200px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
}

.three3 {
    width: 1000px;
    height: 200px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 15px;
}

.three4 {
    width: 1000px;
    height: 300px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 15px;
}

.ten1 {
    margin-top: 10px;
    margin-left: 10px;
    color: #666666;
    font-weight: 400;
}

.ten1 i {
    margin-left: 10px;
}

.ten2 img {
    margin-top: 10px;
    margin-left: 20px;
}
</style>
