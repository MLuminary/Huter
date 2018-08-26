<style scoped>
</style>
<template>
    <div class="container">
        <TopNav></TopNav>
        <SearchBox></SearchBox>
    </div>
</template>
<script>
import TopNav from './components/TopNav/TopNav'
import SearchBox from './components/SearchBox/SearchBox'
export default {
  data() {
    return {}
  },
  methods: {
    WelcomeToHuter() {
      this.$Notice.open({
        title: 'Huter',
        desc: 'Welcome To Huter',
      });
    },
    WelcomeConfig() {
      this.$Notice.config({
        top: 80,
        duration: 3
      });
    }
  },
  components: {
    TopNav,
    SearchBox
  },
  mounted() {
    this.WelcomeConfig()
    this.WelcomeToHuter() 
  }
}
</script>