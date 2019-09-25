<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length>0">
        <div class="swiper-wrapper">
          <!-- cateogorysArr -->
          <div class="swiper-slide" v-for="(cateogorys, index) in cateogorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="loading" v-else>
    </nav>
    <ShopList/>
  </section>
</template>

<script type="text/ecmascript-6">
  // import _ from 'lodash' // 打包所有工具函数模块
  import chunk from 'lodash/chunk' // 只引入需要工具函数
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  // import ShopList from '../../components/ShopList/ShopList.vue'
  import ShopList from 'components/ShopList/ShopList.vue'

  export default {

    async mounted () {

      this.$store.dispatch('getShops')

      // 异步获取分类列表到vuex的state
      /* this.$store.dispatch('getCategorys', () => {// categorys状态数据更新了
        // 在此次数据变化导致界面更新后执行
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          // 创建Swiper对象的时机: 必须在列表数据显示之后
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }) */
      await this.$store.dispatch('getCategorys') // dispatch()返回的promise在状态更新且界面更新后才成功
      // 创建Swiper对象的时机: 必须在列表数据显示之后
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      
    },

    computed: {
      // ...mapState(['address', 'categorys']),
      ...mapState({
        address: state => state.msite.address,
        categorys: state => state.msite.categorys,
      }),

      /* 
      分类轮播的二维数组
      小数组的长度最大为8
      */
      cateogorysArr () {
        const {categorys} = this
        // return _.chunk(categorys, 8)
        return chunk(categorys, 8)
      }
    },

   /*  watch: {
      // vue处理: 更新状态数据 ==> 调用监视的回调函数 ==> 异步更新界面
      categorys () {// categorys状态数据更新了

        // 在此次数据变化导致界面更新后执行
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          // 创建Swiper对象的时机: 必须在列表数据显示之后
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }, */

    components: {
      ShopList
    }
  }

  /* 
  解决swiper异步轮播的bug
  1. watch + nectTick()
  2. callback + nextTick()
  3. 利用dispatch()返回的promise
  
  */
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>
