<!--底部导航在这里引入，隐射成标签，使用-->
<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
//  import {reqAddress} from './api'
  export default {

//    async mounted() {
//      const result = await reqAddress('41.20038,116.36867')
//      console.log(result)
//    }
    mounted(){
//      分发action发ajax请求获取address数据
      this.$store.dispatch("getAddress")
    },

    components:{
      FooterGuide
    },
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background: #e4e4e4;
  }
</style>
