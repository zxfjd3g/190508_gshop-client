<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',

    async mounted () {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('autoLogin')
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
