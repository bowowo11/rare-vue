<template>
  <div id="register">
    <el-form
        :model="registerForm"
        ref="registerFormRef"
        label-width="100px"
        :rules="rules"
    >
      <el-form-item label="用户名：" prop='username' style="margin-top: 10px">
        <el-input
            class="inps"
            placeholder="创建一个用户名"
            v-model="registerForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="昵称：" prop="account" style="margin-top: 10px">
        <el-row>
          <el-input
              class="inps"
              placeholder="创建一个昵称"
              v-model="registerForm.account"
          >
          </el-input>
        </el-row>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-row>

          <el-input
              class="inps"
              type="password"
              placeholder="请输入密码"
              v-model="registerForm.password"
          ></el-input>
        </el-row>
      </el-form-item>
      <el-form-item label="确认密码：" prop="cpPassword">
        <el-row>

          <el-input
              class="inps"
              type="password"
              placeholder="再次输入密码"
              v-model="registerForm.cpPassword"
          ></el-input>

        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submitBtn" @click="submitForm('registerFormRef')"
        >提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "register",
  data() {


    return {

      registerForm: {
        username: '',
        account: '',
        password: '',
        cpPassword: '',
        errMsg: '',
      },
      rules: {
        username: [{required: true, message: '用户名必填', trigger: 'blur'}, {
          message: '用户名必须要有3-10个字母或数字',
          pattern: /[a-zA-Z1-9]{3,10}/
        }],
        account: [{required: true, message: '昵称必填', trigger: 'blur'}, {message: '昵称必须要有1-10个字符', pattern: /\S{1,10}/}],
        password: [{required: true, message: '密码必填', trigger: 'blur'}, {
          message: '密码必须至少包含字母、数字',
          pattern: /^(?=.*[a-zA-Z])(?=.*\d).{6,16}$/
        }],
        cpPassword: [{required: true, message: '请再次输入密码', trigger: 'blur'}, {
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error("请再次输入密码"));
            } else {
              if (this.registerForm.password !== (value)) {
                callback(new Error("密码不匹配"));
              } else {
                return callback()
              }
            }
          }, trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("success submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      })
      await this.checkForm();
      console.log(this.registerForm.errMsg);
      if (this.registerForm.errMsg) {
        return this.$message({
          type: "error",
          message: this.registerForm.errMsg
        })
      } else {
        console.log("ok");
        this.sentForm();
      }


    },
    async checkForm() {
      console.log(this.registerForm.username);
      console.log(this.registerForm.account);
      const data = {
        username: this.registerForm.username,
        nickname: this.registerForm.account,
      }

      await fetch('api/checkname', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json()).then(res => {
        if (res.errMsg) {
          this.registerForm.errMsg = res.errMsg
        } else {
          return this.$message({
            type: "success",
            message: "注册中",
          })
        }
      });
      console.log("123");
    },
    sentForm() {
      const data = {
        usrname: this.registerForm.username,
        pwd: this.registerForm.password,
        nickname: this.registerForm.account
      }
      fetch('api/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json()).then(res => {
        if (res.errMsg) {

          this.registerForm.errMsg = res.errMsg;
        } else {
          this.$router.push('/login');
        }
      });
    }

  },


}
</script>

<style scoped>
#register {
  font-family:shaonv;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: center;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
</style>
