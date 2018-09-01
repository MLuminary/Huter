<template>
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  watch: {
    percent(newPercent) {
      if (newPercent > 0) {
        const barWidth = this.$refs.progressBar.clientWidth
        const offsetWidth = newPercent * barWidth
        this.$refs.progress.style.width = `${offsetWidth}px`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .progress-bar
    height 40px
    overflow hidden

  .bar-inner
    position relative
    top 23px
    background-color rgba(0, 0, 0, 0.3)
    width 100%
    height 14px
    border-radius 14px
    overflow hidden

  .messageTxt
    color #fff
    font-size 12px
    height 15px
    text-align center

  .progress
    position absolute
    background-color #fff
    height 14px
    border-radius 14px
    transition 0.3s all

</style>
