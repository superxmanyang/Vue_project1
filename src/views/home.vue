<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"

          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
           <el-menu-item index="1-3">
               <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </template>
           </el-menu-item>

          </el-submenu>
             <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
           <el-menu-item index="1-3">
               <template slot="title">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </template>
           </el-menu-item>
            <el-menu-item index="1-3">
               <template slot="title">
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </template>
           </el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- ------------- -->
      <el-container>
        <el-header>右边-顶部栏</el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
