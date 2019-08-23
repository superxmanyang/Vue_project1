<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"

      class="demo-ruleForm"
    >
      <el-form-item  prop="username">
        <el-input v-model="loginForm.username" placeholder='请输入用户名'></el-input>
        <!-- READme接口文档把name改成username -->
      </el-form-item>
      <el-form-item  prop="password">
        <el-input v-model="loginForm.password" placeholder='请输入密码'></el-input>
        <!-- READme接口文档把name改成username -->
      </el-form-item>

      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    //   <!-- READme接口文档把name改成username -->

    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          // required:必填，不能为空
          // trigger：什么时候触发这个验证规则
          // message：如果不符合验证规则时的提示信息
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
