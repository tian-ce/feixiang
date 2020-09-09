<template>
<div class="chen1">
    <div class="ten1">
        新增轮播图
    </div>
    <botton tag="div" @click="prev">
        <div class="ten2">
            <i class="el-icon-right"></i><span>返回</span>
        </div>
    </botton>
    <div class="ten3">
        <div class="ten4">
            请输入轮播图信息
        </div>
        <div class="ten5">
            <ul class="ten6">
                <li>轮播图名称：<input v-model="names" type="text" placeholder="请输入轮播图名称.." class="ten7"></li>
                <li>轮播图图片：
                </li>
                <li>轮播图状态：<el-switch v-model="valuez" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </li>
                <li>链接地名称：<input v-model="tuo" type="text" class="ten7"></li>
                <li>上传时间*： <div class="block">
                        <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
                        </el-date-picker>
                    </div>
                </li>
                <li>排序号：<input v-model="hao" type="text" class="ten7" value="0">数字越大越靠前</li>
            </ul>
            <div class="uo">
                <div class="uo1"> <i class="el-icon-s-management"></i><span>保存</span></div>
                <div class="uo2"> <i class="el-icon-back"></i><span>取消</span></div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.chen1 {
    float: left;
    margin-left: 23%;
    margin-top: 8%;
}

.ten1 {
    font-size: 25px;
    font-weight: bold;
    color: blue;
    margin-top: 10px;
}

.ten2 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: left;
    margin-top: -30px;
    margin-left: 830px;
    border: 1px solid rgba(145, 55, 243, 1);
}

.ten3 {
    width: 1000px;
    height: 630px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
    margin-bottom: 10px;
}

.ten4 {
    width: 850px;
    height: 60px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    line-height: 60px;
    color: rgba(228, 228, 228, 1);
    margin-left: 75px;
}

.ten6 li {
    margin-left: 75px;
    margin-top: 15px;
}

.ten7 {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    margin-right: 10px;
}

.ten8 {
    margin-left: 100px;
    margin-top: -20px;
}

.block {
    margin-left: 100px;
    margin-top: -25px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.uo1 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    background-color: rgba(145, 55, 243, 1);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid rgba(145, 55, 243, 1);
    display: inline-block;
}

.uo2 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    background-color: rgba(153, 153, 153, 0.266666666666667);
    border-radius: 4px;
    cursor: pointer;
    color: #666666;
    display: inline-block;
    margin-left: 10px;
}

.uo {
    width: 300px;
    margin: 0px auto;
    margin-top: 70px;
}
</style>

<script>
export default {
    data() {
        return {
            names: '',
            valuez: '',
            tuo: '',
            value3: '',
            hao: '',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
        }
    },
    methods: {
        prev() {
            this.$router.go(-1)
        },
    }
}
</script>
