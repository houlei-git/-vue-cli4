<template>
  <div class="box">
   <div class="header">
     <div class="close">
       <img src="../../static/img/close.png" alt="" @click="goBack">
     </div>
   </div>
   <div class="title">
     注册跨融直播
   </div>
   <div class="laber">手机号</div>
   <div class="gezi1">
     <input type="text" placeholder="请输入手机号" class="inp"  v-model="phone">
      <div class="line"></div>
      <div class="huoqu">获取验证码</div>
   </div>
      <div class="laber">验证码</div>
   <div class="gezi">
     <input type="text" placeholder="请输入验证码" class="inp" v-model="yanzheng">
   </div>
      <div class="laber">推荐码</div>
   <div class="gezi">
     <input type="text" placeholder="请输入推荐码" class="inp" v-model="tuijian">
   </div>
   <div class=tijiao @click="tijiao">
    提交
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     phone:'',
     tuijian:'',
     yanzheng:''
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
   tijiao(){
   let str= this.valMobile()
   let str1=this.nopeople()
   let str2=this.nopeoples()
    if(str && str1 && str2 ){
      console.log("ok,")
    }
   },
         //验证手机号
      valMobile(){
        let val=this.phone
        let regu = /^1[3456789]\d{9}$/
        let res = new RegExp(regu)
        if(res.test(val)) {
          return true
        }
        else {
console.log("手机号不能为空")
          return false
        }
      },
        //判断推荐人ID不能为空
      nopeople(){
        let val=this.tuijian
        if(val) {
          return true

        } else {
      console.log("推荐码不能")
          return false
        }
      },
      //判断验证码不能为空
      nopeoples(){
        let val=this.yanzheng
        if(val) {
          return true

        } else {
  console.log("推荐不能")
          return false
        }
      },
  }
}
</script>

<style scoped lang="less">
 .box{
   width: 100%;
   height: 100%;
   .header{
     width: 100%;
     height: 40px;
     .close{
       width:20px;
       height: 20px;
       margin-left: 20px;
       margin-top: 10px;
       img{
         width: 100%;
         height: 100%;
       }
     }
 }
 .title{
   width: 90%;
   height: 40px;
   margin-left: 25px;
   text-align: left;
   font-size:25px;
   font-family:PingFang SC;
   font-weight:bold;
   line-height:40px;
   color:rgba(51,51,51,1);
   
 }
 .laber{
   width: 90%;
   height: 40px;
   line-height: 40px;
   font-size:14px;
   font-family:PingFang SC;
   font-weight:400;
   color:rgba(51,51,51,1);
   letter-spacing:8px;
   text-align: left;
   margin-left: 25px;
   margin-top: 20px;
 }
 .gezi{
   width: 90%;
   margin-left: 20px;
   height: 51px;
   background-color: #F5F5F5;
   border-radius:50px;
   margin-top: 15px;
   text-align: left;
   line-height: 51px;
   .inp{
    margin-left: 30px;
    background-color: #F5F5F5;
    font-size:14px;
   }
 }
 .gezi1{
   display: flex;
   width: 90%;
   margin-left: 20px;
   height: 51px;
   background-color: #F5F5F5;
   border-radius:50px;
   margin-top: 15px;
   text-align: left;
   line-height: 51px;
   .inp{
     margin-left: 30px;
     background-color: #F5F5F5;
     width: 160px;
     font-size:14px;

   }
   .line{
     width:1px;
     height:19px;
     background:rgba(153,153,153,1);
     opacity:1;
     margin-top: 15px;
   }
   .huoqu{
     width:100px;
     height: 51px;
     line-height: 51px;
     font-size:14px;
     font-family:PingFang SC;
     font-weight:400;
     color:rgba(255,162,0,1);
     letter-spacing:5px;
     margin-left: 25px;
   }


 }
 .tijiao{
   width: 90%;
   margin-left: 20px;
   height: 51px;
   background:linear-gradient(90deg,rgba(241,21,58,1) 0%,rgba(255,99,1,1) 100%);
   border-radius:50px;
   margin-top: 80px;
   text-align: center;
   line-height: 51px;
   color: white;
   font-size:16px;
   font-family:PingFang SC;
   font-weight:bold;
   .but{
     color: white;
     font-size:16px;
     font-family:PingFang SC;
     font-weight:bold;
     list-style: npne;
   }
 }
  }
</style>
