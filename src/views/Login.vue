
<template>
  <div id="login">
    <el-form
        :model="loginForm"
        ref="loginForm"
        label-width="0px"
    ><el-form-item label="" prop="account" style="margin-top: 10px">
      <el-row>
        <el-col :span="2">
          <span class="el-icon-s-custom"></span>
        </el-col>
        <el-col :span="22">
          <el-input
              class="inps"
              placeholder="用户名"
              v-model="loginForm.username"
          >
          </el-input>
        </el-col>
      </el-row>
    </el-form-item>
      <el-form-item label="" prop="passWord">
        <el-row>
          <el-col :span="2">
            <span class="el-icon-lock"></span>
          </el-col>
          <el-col :span="22">
            <el-input
                class="inps"
                type="password"
                placeholder="密码"
                v-model="loginForm.password"
            ></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item style="margin-top: 55px">
        <el-button type="primary" round class="submitBtn" @click="submitForm"
        >登录
        </el-button>
      </el-form-item>
      <div class="unlogin">
        <router-link :to="{ path: '/forgetpwd' }"> 忘记密码? </router-link>
        |
        <router-link :to="{ path: '/register' }">
          <a href="register.vue" target="_blank" >注册新账号</a>
        </router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login"
  ,data(){
    return{
      loginForm:{
        username:"",
        password:"",
        errMsg:""
      }
    }
  }
  ,methods:{
    submitForm() {
      const userAccount = this.loginForm.username;
      const userPassword = this.loginForm.password;
      this.check();
      if (!userAccount) {
        return this.$message({
          type: "error",
          message: "账号不能为空！",
        });
      }
      if (!userPassword) {
        return this.$message({
          type: "error",
          message: "密码不能为空！",
        });
      }
      if(this.loginForm.errMsg){
        return this.$message({
          type:"error",
          message:this.loginForm.errMsg
        })
      }


    },
    check(){
      const data={
        username:this.loginForm.username,
        password:this.loginForm.password
      }

      fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json()).then(res =>{if(res.errMsg){this.loginForm.errMsg=res.errMsg}else{this.$router.push('/mainInterface')}});
    }
  }
}
</script>

<style scoped>
#login {
   border-radius: 10px;
   margin: 0px auto;
   width: 350px;
   padding: 30px 35px 15px 35px;
   background: #fff;
   border: 1px solid #eaeaea;
   text-align: left;
   box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
 }

</style>
