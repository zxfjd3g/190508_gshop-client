<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>{{$t('footer_home')}}</span>
    </span>
    <span class="guide_item" :class="{on: '/search'===$route.path}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>{{$t('footer_search')}}</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>{{$t('footer_order')}}</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>{{$t('footer_own')}}</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterGuide',
    methods: {
      goto (path) {
        console.log('goto()', this.$router)
        if (this.$route.path!==path) {
          this.$router.replace(path)
        } else { // 如果请求的时当前的, 直接强制刷新
          window.location.reload()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
