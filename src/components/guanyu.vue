<template>
<div class="footer">
    <div class="yan1">
        关于我们
    </div>
    <div class="yan2">
        <div class="yan3">
            请填写关于我们
        </div>

        <div class="yan4">
            内容详情
        </div>
        <div class="yan5">
            <img src="../../public/img/t9.png" width="520px" height="50px">
            <div class="yan6" style="overflow-y:auto; overflow-x:auto; width:520px; height:300px;">
                <img src="../../public/img/t8.png">
                <img src="../../public/img/pp.png" width="500px">
            </div>
        </div>
        <div class="bao"><input type="button" value="保存" id="b1"></div>
    </div>
</div>
</template>

<style scoped>
.footer {
    float: left;
    margin-left: 15%;
    margin-top: 8%;
    overflow: hidden;
}

.yan1 {
    width: 180px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #9137F3;
    margin-left: 100px;
    margin-top: 20px;
}

.yan2 {
    border: 1px solid #E4E4E4;
    width: 1000px;
    height: 700px;
    margin-left: 100px;
    color: #6F6F6F;
    border-radius: 5px;
    background-color: white;
}

.yan3 {
    width: 900px;
    height: 50px;
    border-bottom: 1px solid #E4E4E4;
    color: #E4E4E4;
    line-height: 50px;
    margin-left: 50px;
}

.yan4 {
    margin-left: 150px;
    margin-top: 40px;
}

.yan5 {
    margin-left: 250px;
    width: 520px;
    height: 400px;
    border: 1px solid #E4E4E4;
    margin-top: -20px;
    border-radius: 10px;
}

.yan6 {
    margin-top: 20px;
    text-align: center;
}

.bao {
    margin-top: 100px;
    margin-left: 480px;
}

#b1 {
    background-color: #9137F3;
    color: white;
    border: 1px solid #9137F3;
    width: 100px;
    height: 40px;
    border-radius: 8px;
}
</style>

<script>
export default {

}
</script>
