
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><img class="logo" src="../../images/icon_light.png" alt="icon"></div>
                    <Tooltip class="github-logo" content="Here is my gayHub">
                       <a href="https://github.com/MLuminary"><img class="logo" src="../../images/github.png" alt="github" ></a>
                    </Tooltip>
                    <Tooltip class="progress-box" :content="progressContent" always placement="left">
                      <Mprogress class="my-progress" :percent="percent" ></Mprogress>
                    </Tooltip>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
import Mprogress from '../../base/Mprogress/Mprogress.vue'
export default {
  data() {
    return {
      currentTime: 0,  // 相对于当天 0 时的时间戳
      total: 24 * 60 * 60 * 1000 - 1,  // 一天总共的时间戳
      timeMsg: [
        {start: 0, end:0.25, msg: '别再熬夜伤身体~'},
        {start: 0.25, end:0.5, msg: '新的一天，努力努力！'},
        {start: 0.5, end:0.58, msg: '午饭时间，冲鸭！'},
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
      this.timeMsg.forEach(item=>{
        if(this.percent>=item.start && this.percent<item.end) {
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
    if(timer) {
      clearInterval(timer)
    } 
    let timer = setInterval(()=>{
      this.updateCurrentTime()
    },300)
  }
}
</script>
<style scoped>
.layout-logo,
.github-logo {
  width: 30px;
  height: 30px;
  position: relative;
  top: 12px;
}

.layout-logo {
  float: left;
  left: 20px;
}
.github-logo {
  float: right;
  right: 40px;
}

.layout-logo .logo,
.github-logo .logo {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.layout .progress-box {
  position: relative;
	float: right;
	right: 100px;
}
.layout .my-progress {
  position: relative;
  width: 250px;
  height: 60px;
}
@media screen and (max-width: 600px) {
	.layout .progress-box {
		display: none;
	}
}
</style>