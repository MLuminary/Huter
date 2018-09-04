<template>
  <div class="container">
    <TopNav></TopNav>
    <el-main class="mid-content">
      <SearchBox></SearchBox>
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
                    <img style="width: 35px;" :src="getUrlIcon()">
                  </el-col>
                  <el-col :span="19">
                    <span style="font-weight: bold;"></span>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col class="hut-card" :md="6">
              <el-card shadow="hover">
                <img src="http://www.12306.cn/favicon.ico" alt="">
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
import { getUrlIcon } from '../common/js/getUrlIcon'

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
    },
    // 根据 url 返回图标
    getUrlIcon() {
      let showUrl = getUrlIcon()
      return showUrl
    }
  },
  mounted() {
    this.NotificationOpen()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    .mid-content
      padding 30px 0
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
      transition: all .2s;
    .main-content
      background-color rgba(0,0,0,0.05)
      .hut-card-box
        margin 20px 0
        .hut-card-content
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
          border 1px solid #ebeef5
          overflow hidden
          padding 40px
          .hut-card
            margin-top 15px
</style>
