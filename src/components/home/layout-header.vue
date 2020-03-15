<template>
  <!-- elementUI布局组件 el-row 和 el-col -->
  <el-row align="middle" type='flex' class='layout-header'>
      <!-- 等分为两列  为什么是:span="12"-->
    <el-col  class='left' :span="12">
       <!-- 图标 -->
       <img src="../../assets/img/header-logo.png" alt="">
       <span >
          <img id="qd" src="../../assets/img/logo2.png" alt="">
       </span>
    </el-col>
    <!-- 右侧列 -->
    <el-col class='right' :span="12">
        <!-- 再次放置一个 row组件  align属性设置垂直对齐方式  justify设置 水平对齐属性-->
        <el-row type='flex' justify="end" align="middle">
          <img :src="userInfo.photo" alt="">
           <!-- 下拉菜单 -->
           <el-dropdown trigger='click' @command="clickMenu">
               <!-- 显示的内容 -->
               <span>{{ userInfo.name }}</span>
                <!-- 下拉内容需要做具名插槽dropdown  el-dropdown-menu是专门做下拉的组件 -->
                <el-dropdown-menu slot="dropdown" >
                   <!-- 下拉选项 el-dropdown-item 作为下拉选项组件-->
                    <el-dropdown-item command="info">个人信息</el-dropdown-item>
                    <el-dropdown-item command="git">git地址</el-dropdown-item>
                    <el-dropdown-item command="lgout">退出</el-dropdown-item>

                </el-dropdown-menu>
           </el-dropdown>
        </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {} // 用户个人信息
    }
  },
  methods: {
    clickMenu (command) {
      // 三种情况
      if (command === 'info') {
        // 点击个人信息
      } else if (command === 'git') {
        // 点击git地址
        window.location.href = 'https://github.com/webzht'
      } else {
        // 退出系统 1. 删除token 2. 跳转返回登录页
        window.localStorage.removeItem('user-token') // 删除钥匙
        this.$router.push('/login') // 跳回登录页
      }
    }
  },
  // created 这个钩子函数是在实例被创建之后调用
  created () {
    const token = localStorage.getItem('user-token') // 从本地取到钥匙
    // 获取用户的个人信息
    this.$axios({
      url: '/user/profile', // 请求地址
      headers: {
        Authorization: `Bearer ${token}`
      } // 请求头参数 headers放置请求头参数
    }).then(result => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
  .layout-header {
      height: 60px;
      background-color: #111111;
      margin: 0 -20px;
      padding: 0 30px;
      .left {
          img {
              vertical-align: middle;
          }
          span {
              margin-left:10px;
          }
      }

      .right {
          .el-dropdown{
              color: #ffffff;
          }
          img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 4px;
          }
      }
  }
</style>
