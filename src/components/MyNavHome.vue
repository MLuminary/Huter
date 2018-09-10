<template>
  <div class="container">
    <el-main class="mid-content">
      <div class="modal"></div>
      <TopNav></TopNav>
      <el-row class="webTitle">Huter</el-row>
      <SearchBox class="search-box"></SearchBox>
    </el-main>
    <el-main class="main-content">
      <el-row class="hut-card-box" type="flex" justify="center">
        <el-col class="hut-card-content" :span="20">
          <h1>这是一个版块</h1>
          <el-row class="hut-cards" :gutter="8">
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                <el-row>
                  <el-col :span="5">
                    <img style="height: 35px;width: 35px;">
                  </el-col>
                  <el-col :span="19">
                    <span style="font-weight: bold;"></span>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                <el-row>
                  <el-col :span="5">
                    <img style="height: 35px;width: 35px;" src="https://juejin.im/favicon.ico">
                  </el-col>
                  <el-col :span="19">
                    <span style="font-weight: bold;"></span>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import TopNav from './TopNav'
import SearchBox from './SearchBox'
// import {getUrlIcon} from '../common/js/getUrlIcon'

export default {
  name: 'MyNavHome',
  data() {
    return {}
  },
  components: {
    TopNav,
    SearchBox
  },
  methods: {
    NotificationOpen() {
      this.$notify({
        message: 'Welcome to Huter',
        offset: 80,
        duration: 2000,
        iconClass: 'el-icon-bell'
      })
    }
    // 根据 url 返回图标
  },
  mounted() {
    this.NotificationOpen()
    // console.log(this.getUrlIcon())
  }
}
</script>

<style lang="stylus" scoped>
  .container
    .mid-content
      position relative
      height 400px
      box-shadow 0 1px 2px 0 rgba(0, 0, 0, .05)
      transition all .2s
      background #b6c3d4
      background -webkit-linear-gradient(45deg,#3c3c3c 0,#979797 26%,#848484 66%,#7c7c7c 80%, #707070 100%)
      background linear-gradient(45deg,#3c3c3c 0,#979797 26%,#848484 66%,#7c7c7c 80%, #707070 100%)
      background-size 400%
      background-position 0 100%
      -webkit-animation gradient 20s ease-in-out infinite
      animation gradient 20s ease-in-out infinite
      //   background -webkit-linear-gradient(45deg,#5a3694 0,#13bdce 33%,#0094d9 66%,#6fc7b5 100%)
      // background linear-gradient(45deg,#dab1c5 0,#71aed8 26%,#dbe8ad 66%,#df71a1 80%, #ecc87c 100%)
      .webTitle
        text-align center
        font-size: 8rem
        font-family yxs
        color #fff
        margin-top 2rem
      .search-box
          margin-top 50px
    .main-content
      background-color rgba(0, 0, 0, 0.05)
      .hut-card-box
        margin 20px 0
        .hut-card-content
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
          border 1px solid #ebeef5
          overflow hidden
          padding 40px
          .hut-card
            margin-top 15px
</style>
