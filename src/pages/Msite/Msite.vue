<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category ,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>

</template>
<script>
  import Swiper from "swiper"
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from "../../components/ShopList/ShopList.vue"
  import {mapState} from "vuex"
  export default {
    data(){
      return{
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
//    轮播在页面加载完之后再显示
    mounted() {



    },
    computed:{
      ...mapState(["address","categorys","shops"]),
//      轮播需要的二维数组
      categorysArr(){
        const {categorys} = this
        console.log(categorys)
        const max = 8  //小数组中最大存放8个
        const bigArr = []
        let smallArr = []
//        遍历categorys
        categorys.forEach(category =>{
//          将小数组放到大数组中
          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(category)
//          如果已满，创建一个新的小数组
          if(smallArr.length === max){
            smallArr = []
          }
        })
        return bigArr
      }
    },
    watch:{
      categorys(){  //
        // 获得categorys列表数据
//        将回调延迟到下次DOM更新循环之后执行，在修改数据之后立即使用它
        this.$nextTick(()=>{
//          必须在列表界面显示之后才能创建（列表数据显示之后）
          new Swiper('.swiper-container', {
            loop: true,  // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
