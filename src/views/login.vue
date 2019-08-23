<template>
    <div class="login">
<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="username">
    <el-input v-model="loginForm.username"></el-input>
    <!-- READme接口文档把name改成username -->
  </el-form-item>

  <el-form-item>
    <el-button type="primary" >立即创建</el-button>
    <el-button >重置</el-button>
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
      }
    }
  },
  rules: {
    username: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ]
  }
}
</script>

<style lang="less" scoped>

</style>
