<template>
<div id="zong">
    <div class="one1">
        <div class="one3">
            <img src="../../public/img/tu1.png" width="300px" height="300px" style=" margin: 4px;" />
        </div>
        <div class="one2">
            <div>登录</div>
            <div>飞翔教育后台管理系统</div>
        </div>
        <div class="two">
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
                <div style="margin: 16px;" class="dian">
                    <van-button round block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</div>
</template>

<style scoped>
#zong {
    width: 100%;
    height: 100%;
    background: url(../../public/img/bg.png) no-repeat;
    background-size: cover;
    height: 656px;
}

.one1 {
    width: 50%;
    height: 350px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
    position: absolute;
    left: 27%;
    right: 30%;
    top: 18%;
    bottom: 25%;
    border-radius: 10px;
    background-color: white;

}

.one2 {
    text-align: center;
    display: inline-block;
    margin-left: 100px;
    position: absolute;
    left: 45%;
    top: 10%;
    color: blue;
}

.one2 div:nth-of-type(1) {
    font-size: 20px;
    font-weight: bold;
}

.one3 {
    display: inline-block;
}

.van-cell {
    width: 300px;
    background-color: rgba(153, 51, 255, 0.0980392156862745);
    border-radius: 10px;
    margin-top: 10px;
}

.van-field__label {
    width: 30px;
    height: 50px;
}

.dian {
    width: 275px;
    border-radius: 10px;
}

.two {
    position: absolute;
    left: 50%;
    top: 30%;
}
</style>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            web17: "",
        };
    },
    methods: {
        onSubmit() {
            this.$axios({
                    url: "http://139.9.169.87:8081/examsystem/login",
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    params: {
                        username: this.username,
                        password: this.password
                    }
                })
                .then((res) => {
                    this.web17 = res.data;
                    if (this.web17.success == "true") {
                        sessionStorage.setItem("user", this.username);
                        this.$router.push({
                            path: "/shouye",
                        });
                        alert("登录成功！");
                    } else {
                        alert("登录失败，请重新输入账号密码！");
                    }
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
}
</script>
