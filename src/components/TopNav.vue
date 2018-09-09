<template>
  <div class="nav-container">
    <el-row>
      <el-col :span="3">
        <img class="icon-logo" src="../assets/icon_light.png">
      </el-col>
      <el-col :span="18" class="progressBox">
        <span class="progress-text">{{progressContent}}</span>
        <Mprogress class="myProgress" :percent="percent"></Mprogress>
      </el-col>
      <el-col class="github-icon-container" :span="3">
        <el-tooltip effect="dark" content="This is my gayhub" placement="bottom">
          <a target="_blank" href="https://github.com/MLuminary">
            <img class="icon-github" src="../assets/github.png">
          </a>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mprogress from 'base/Mprogress'

export default {
  name: 'TopNav',
  data() {
    return {
      currentTime: 0, // 相对于当天 0 时的时间戳
      total: 24 * 60 * 60 * 1000 - 1, // 一天总共的时间戳
      timeMsg: [
        {start: 0, end: 0.25, msg: '别再熬夜伤身体~'},
        {start: 0.25, end: 0.5, msg: '新的一天，努力努力！'},
        {start: 0.5, end: 0.58, msg: '午饭时间，冲鸭！'},
        {start: 0.58, end: 0.75, msg: '睡够吃饱，继续努力'},
        {start: 0.75, end: 0.83, msg: '下班时间，冲鸭！'},
        {start: 0.83, end: 1, msg: '做下自己想做的事情吧~'}
      ]
    }
  },
  computed: {
    percent() {
      return this.currentTime / this.total
    },
    progressContent() {
      let TooltipMsg = ''
      this.timeMsg.forEach(item => {
        if (this.percent >= item.start && this.percent < item.end) {
          TooltipMsg = item.msg
          return false
        }
      })
      return TooltipMsg
    }
  },
  components: {
    Mprogress
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = new Date().getTime() - new Date(new Date().toLocaleDateString()).getTime()
    }
  },
  mounted() {
    /* eslint-disable */
    if (timer) {
      clearInterval(timer)
    }
    let timer = setInterval(() => {
      this.updateCurrentTime()
    })
    /* eslint-enable */
  }
}
</script>

<style lang="stylus" scoped>
  .nav-container
    height 60px
    .icon-logo
      position relative
      top 15px
      left 15px
      height 30px
    .github-icon-container
      display flex
      justify-content center
      align-items center
      height 60px
      .icon-github
        height 40px
        cursor pointer
      a
        outline none
    .progressBox
      display flex
      justify-content flex-end
      .progress-text
        color #fff
        font-size 12px
        margin-right 10px
        line-height 5
      .myProgress
        width 250px
    @media screen and (max-width: 600px)
      .progress-text,.myProgress
        visibility hidden
</style>
