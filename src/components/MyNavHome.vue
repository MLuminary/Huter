<template>
  <div class="container">
    <TopNav></TopNav>
    <el-main class="mid-content">
      <SearchBox></SearchBox>
    </el-main>
  </div>
</template>

<script>
import TopNav from './TopNav'
import SearchBox from './SearchBox'

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
  },
  mounted() {
    this.NotificationOpen()
  }
}
</script>

<style lang="stylus" scoped>
  .mid-content
    background-color rgba(0,0,0,0.02)
    box-shadow 0px 2px 10px 0px rgba(0,0,0,0.05), 0 1px rgba(0,0,0,0.05)
    padding 30px 0
</style>
