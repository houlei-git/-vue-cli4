<template>
  <div class="box">
	页面
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
  
    
  }
}
</script>

<style scoped lang="less">

</style>
