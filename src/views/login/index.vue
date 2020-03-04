<template>
  <div class="login">
    <!-- 卡片容器 -->
    <el-card class="login-card">
      <!-- 1.logo部分 -->
      <div class="login-logo">
        <img src="../../assets/img/logo-public.png" alt="">
      </div>
      <!-- 2.表单部分 表单需要绑定model对象 绑定rules校验规则-->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <!-- 2.1手机号 绑定prop属性需要校验的字段-->
        <el-form-item prop="mobile" >
          <!-- v-model实现数据双向绑定 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <!-- 2.2验证码 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="width:32%;float:right" plain>发送验证码</el-button>
        </el-form-item>

        <!-- 2.3协议 -->
        <el-form-item prop="checked">
           <el-checkbox v-model="loginForm.checked" >我已阅读同意用户协议和隐私条款</el-checkbox>
         </el-form-item>

        <!-- 2.4登录 -->
         <el-form-item>
          <el-button @click="login" type="primary" style="width:100%" round>登录</el-button>
         </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 1.表单的数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 协议
      },
      // --------------------------------------------
      // 2.定义表单的校验规则
      loginRules: {
        // required 如果为true表示该字段必填
        // 2.1
        mobile: [{ required: true, message: '您的手机号不能为空' }, {
          pattern: /^1[3-9]\d{9}$/, // 正则表达式
          message: '您的手机号格式不正确'
        }],
        // 2.2
        code: [{ required: true, message: '您的验证码不能为空' }, {
          pattern: /^\d{6}$/, // 要求6个数字
          message: '验证码应该是6位数字'
        }],
        // 2.3
        // 自定义校验  required不能校验true/false
        checked: [{
          validator: function (rule, value, callback) {
            // rule是当前的校验规则
            // value是当前的要校验的字段的值
            // calllback是一个回调函数 不论成功或者失败都要执行
            // 成功执行callback 失败执行 callback(new Error('错误信息'))
            // 我们认为 如果 value 为true 就表示 校验成功 如果value 为false就表示校验失败
            // new Error(错误信息) 就是我们提示的错误信息
            value ? callback() : callback(new Error('您必须同意我们的不平等匹配机制条约'))
          }
        }]
        // --------------------------------------------
      }
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法
      // console.log(this)
      //    this.$refs.loginForm 获取的就是el-form的对象实例
      // this.$refs.loginForm.validate(function (isOK) {
      //   if (isOK) {
      //     console.log('校验通过')
      //   } else {
      //     console.log('校验未通过')
      //   }
      // })
      this.$refs.loginForm.validate().then(() => {
      // 如果成功通过 校验就会到达 then
        // console.log('校验通过')
        // 校验通过 > 调用接口
        this.$axios({
          url: '/authorizations',
          data: this.loginForm,
          method: 'post'
        }).then(result => {
          window.localStorage.setItem('user-token', result.data.data.token)
          // 跳转到主页
          this.$router.push('/home')
        }).catch(() => {
          // 提示消息
          // this.$message({ message: '用户名或者验证码错误', type: 'error' })
          this.$message.error('用户名或者验证码错误')
        })
      })
    }
  }
}
</script>
//  加了scoped属性 就只会对当前自己的组件起作用
<style lang="less" scoped>
  .login {
    background-image: url('../../assets/img/timg.jpg');
    height: 100vh; // 当前屏幕可视区域分成100份
     display: flex;
  justify-content: center;
  align-items: center;
    .login-card {
      background: rgba(255, 255, 255, 0.5);
      width: 570px;
      height: 340px;
      padding: 0 50px;
      box-sizing: border-box;
      .login-logo {
        text-align: center;
      }
      .el-input__inner {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
</style>
