<template>
  <div>
    <Layout>
      <Row>
        <Col offset="7" span="10" class="searchContainer">
          <Tabs v-model="searchType">
            <TabPane name="baidu" label="百度">
              <Input v-model="bdwd" @keyup.enter.native="search" type="text" size="large" class="searchBox" placeholder="百度搜索">
            </TabPane>
            <TabPane name="google" label="谷歌">
              <Input v-model="ggwd" icon="ios-search" type="text" size="large" class="searchBox" placeholder="谷歌搜索" />
            </TabPane>
            <TabPane name="biying" label="必应">
              <Input v-model="bywd" icon="ios-search" type="text" size="large" class="searchBox" placeholder="必应搜索" />
            </TabPane>
           </Tabs>
        </Col>
      </Row> 
    </Layout>
  </div>
</template>

<script>
  import { getBaiduSearchResult } from '../../config/api/searchResults'
  export default {
    data() {
      return {
        searchType: 'baidu', //搜索方式
        bdwd: '', // 百度搜索关键词
        ggwd: '', // 谷歌搜索关键词
        bywd: '' // 必应搜索关键词
      }
    },
    methods: {
      getSearchResults(wd) {
        getBaiduSearchResult(wd).then(res=>{
            let searchStr = res.data.substring(1,res.data.length-1)
            let searchResultStr = searchStr.match(/\[.*?\]/)[0]
            let searchResults = searchResultStr.split(',').map(item=>{
                return item.replace(/[\"\[\]]/g,"")
            })
        })
      }
    },
    mounted() {
      this.getSearchResults('ss')
    }
  }
</script>

<style scoped>
  .searchContainer {
    padding: 30px 0;
  }
</style>
