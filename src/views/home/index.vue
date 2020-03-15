<template>
<!-- 先在最外层放置一个大容器 因为 小容器只能放到大容器里面 -->
   <el-container>
     <el-aside class="celan" id="celan" style="width:230px;background:#2e2f32">
     <layout-aside></layout-aside>

    </el-aside>
     <!-- 右侧 再嵌套一个 el-container -->
     <el-container>
       <!-- 再上下布局 -->
       <el-header>
         <!-- 顶部操作栏组件 -->
         <layout-header></layout-header>
       </el-header>
       <!-- 主要区域 -->
       <el-main style="padding: 0">
          <!-- 这里应该放置 二级路由容器 -->
         <router-view></router-view>
     </el-main>
     </el-container>
   </el-container>
</template>

<script>
export default {

}
window.onload = function () {
  const qd = document.querySelector('#qd')
  const celan = document.querySelector('#celan')

  qd.addEventListener('click', function () {
    if (celan.style.width === '230px') {
      celan.style.width = '0px'
    } else {
      celan.style.width = '230px'
    }
  })
}
</script>

<style lang='less' scoped>
  .celan {
    transition: all 0.5s;
  }
  // .kg {
  //   position: absolute;
  //   right: -10px;
  //   top: 50px;
  //   z-index:9999;
  // }
</style>
