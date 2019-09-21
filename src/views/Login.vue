<template>
  <div id="login">
    <div class="flex-container">
      <div class="flex-item boxLeft">
        <img src="../assets/favicon.jpg" class="leftImage" />
        <h3>智学无忧后台系统</h3>
        <h4>做最有态度、责任、良心的IT教育</h4>
      </div>

      <div class="boxMiddle"></div> <!-- 中间线 -->

      <div class="flex-item boxRight">
        <el-input
          placeholder="请输入账号"
          v-model="input1">
          <i slot="prefix" class="el-icon-s-custom el-input__icon" style="color: green;font-size: 25px;"></i>
        </el-input>
        <el-input
          placeholder="请输入密码"
          v-model="input2" type="password">
          <i slot="prefix" class="el-icon-lock el-input__icon" style="color: green;font-size: 25px;"></i>
        </el-input>
        <div class="remember">
          <div class="login_other">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
          </div>
        </div>
        <div>
          <button class="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: '', //账号
        input2: '' //密码
      }
    }
  }
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 550px;
  height: 250px;
  background-color: #d8ecf5;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0 0 40px 25px rgb(0, 153, 255);
}

.flex-item {
  margin: 10px;
}

.boxMiddle {
  width: 2px;
  height: 100%;
  background: linear-gradient(#d8ecf5, green, #d8ecf5);
}

.boxLeft,
.boxRight {
  width: 300px;
  text-align: center;
  // border: 1px solid black;
}

h3 {
  color: #088b83;
}

h4 {
  color: #919a9f;
}

.leftImage {
  margin: 10px;
  width: 80px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid rgb(189, 198, 201);
  box-shadow: 0 0 20px #999;
}
 .el-input {
  width: 80%;
  outline: 0px;
  border: 1px solid #55AE4F;
  border-radius: 5px;
  margin-top: 20px;
}
.remember{
  display: flex;
}
.login_other{
  margin: 7px 25px;
}
.login{
  background-color: #66C239;
  border: 1px solid #66C239;
  width: 80%;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  outline: none;
}
</style>