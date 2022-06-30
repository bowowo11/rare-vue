<template>
  <el-form
      :model="registerForm"
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
            placeholder="创建一个用户名"
            v-model="registerForm.username"
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
              v-model="registerForm.password"
          ></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item style="margin-top: 55px">
      <el-button type="primary" round class="submitBtn" @click="submitForm"
      >提交
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "register"
  ,data() {
    return {
      registerForm:{
        username:'',
        password:'',
        cpPassword:''
      }
    }
  },
  methods:{
  submitForm(){
    
  }
  }
}
</script>

<style scoped>

</style>
