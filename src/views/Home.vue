<template>
  <div class="home">
    <div class="listItem" v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'vue-cli4脚手架' },
        { name: 'vant按需引入' },
        { name: '移动端rem适配' },
        { name: 'axios拦截封装' },
        { name: 'util工具类函数封装' },
        { name: 'vue-router配置' },
        { name: '登录权限校验' },
        { name: '多环境变量配置' },
        { name: 'vue.config.js配置' },
        { name: 'toast组件封装' },
        { name: 'dialog组件封装' },
        { name: '跨域代理设置' },
        { name: 'webpack打包可视化分析' },
        { name: 'CDN资源优化' },
        { name: 'gzip打包优化' },
        { name: '首页添加骨架屏' },
        { name: '首页添加骨架屏' },
        { name: '使用SvgIcon 组件' }
      ]
    }
  },
  methods:{
   
  }
}
</script>

<style scoped lang="less">

</style>
