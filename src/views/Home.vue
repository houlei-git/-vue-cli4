<template>
  <div class="content">
    <!-- <div class="listItem" v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </div> -->
    <!-- <div @click="goRegister">立即注册</div> -->
    <div class="headerApp">
      <img src="../../static/img/app.png" alt="">
    </div>

    <div class="bgMask"></div>
    <div class="mainTit">
      <div class="avata">
        <div class="avaBox">
          <img src="../../static/img/avata.png" alt="">
        </div>
      </div>
      <div class="home">我是公益直播</div>
      <div class="home1">房间：跨融直播</div>
      <div class="home boTit">今晚8:20，跨融直播间公益直播不见不散哦！</div>
      <div class="numPeople">
        <div class="tit1">23670</div>
        <div class="tit2">观看人数</div>
      </div>

      <div class="downLoad" @click="goRegister">注册并下载</div>
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
    goRegister(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped lang="less">
.content{
  width: 100%;
  height: 100%;
  background-image: url(../../static/img/bgImg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
  position: relative;
  .headerApp{
    width: 102px;
    height: 34px;
    float: left;
    margin-top: 54px;
    margin-left: 41px;
    img{
      height: 100%;
      height: 100%;
    }
  }
  .bgMask{
    width: 271px;
    height: 450px;
    background-color:rgba(255,255,255,0.24);
    margin: 0 auto;
    margin-top: 155px;
    border-radius: 10px;
  }
  .mainTit{
    background-color: #fff;
    width: 292px;
    height: 411px;
    position: absolute;
    top: 173px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    .avata{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      margin-top: -50px;
      border: 2px solid #F1153A;
      display: flex;
      justify-content: center;
      align-items: center;
      .avaBox{
        width: 90px;
        height: 90px;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .home{
      margin-top: 10px;
      font-size: 13px;
      color: #333;
    }
    .home1{
      font-size: 22px;
      color: #F1153A;
      font-weight: bold;
      margin-top: 50px;
    }
    .boTit{
      font-size: 16px;
      padding: 0 20px;
      line-height: 22px;
    }
    .numPeople{
      width: 172px;
      height: 96px;
      background-color: #F6F6F6;
      margin: 0 auto;
      border-radius: 5px;
      margin-top: 20px;
      padding-top: 22px;
      .tit1{
        width: 100%;
        font-size: 30px;
        color: #333;
        word-break: break-all;
      }
      .tit2{
        font-size: 11px;
        color: #999;
      }
    }
    .downLoad{
      width: 234px;
      height: 58px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      line-height: 58px;
      border-radius: 50px;
      background:linear-gradient(90deg,#F1153A,#FF6301);
      margin: 0 auto;
      margin-top: 60px;
    }
  }
}
</style>
