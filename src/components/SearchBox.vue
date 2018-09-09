<template>
  <el-row class="search-container" type="flex" justify="center">
    <el-col :xs="22" :sm="12">
      <el-autocomplete
        class="search-box"
        popper-class="my-autocomplete"
        v-model="query"
        :fetch-suggestions="loadSearchInfo"
        :placeholder="pickplaceHolder"
        @select="handleSelect"
        :trigger-on-focus="false"
        @keyup.enter.native="doSearch(query)">
        <i
          class="el-icon-search el-input__icon"
          slot="suffix">
        </i>
        <el-select class="type-select" v-model="pickType" slot="prepend">
          <img style="width: 25px; margin-top: 7px" :src="pickIcon" slot="prefix">
          <el-option
            v-for="item in searchType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <img style="float: left; width: 20px; margin-top: 5px" :src="item.icon">
            <span style="float: right; color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.label }}</span>
          </el-option>
        </el-select>
        <template slot-scope="{ item }">
          <div class="name">{{ item }}</div>
        </template>
      </el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
import { getBaiduSearchResult } from '../api/searchResult'

export default {
  name: 'SearchBox',
  data() {
    return {
      searchInfoList: [],
      query: '',
      searchType: [
        {
          value: 'baidu',
          label: '百度',
          icon: require('../assets/baidu.png')
        },
        {
          value: 'biying',
          label: '必应',
          icon: require('../assets/biying.png')
        },
        {
          value: 'google',
          label: '谷歌',
          icon: require('../assets/google.png')
        }],
      pickType: 'baidu'
    }
  },
  computed: {
    pickIcon() {
      return require(`../assets/${this.pickType}.png`)
    },
    pickplaceHolder() {
      let placeHolder
      this.searchType.forEach(item => {
        if (item.value === this.pickType) {
          placeHolder = item.label
          return false
        }
      })
      return `${placeHolder}搜索`
    }
  },
  watch: {
    query(newQuery) {
      if (newQuery !== '') {
        this.getBaiduSearchResult(newQuery)
      }
    }
  },
  methods: {
    // 获得百度提示关联
    getBaiduSearchResult(query) {
      getBaiduSearchResult(query).then(res => {
        /* eslint-disable */
        let searchStr = res.data.substring(1, res.data.length - 1)
        let searchResultStr = searchStr.match(/\[.*?\]/)[0]
        let searchResults = searchResultStr.split(',').map(item => {
          return item.replace(/[\"\[\]]/g, '')
        })
        this.searchInfoList = searchResults
        /* eslint-enable */
      })
    },
    // 返回查询提示列表数据
    loadSearchInfo(queryString, callback) {
      let blackArr = []
      if (this.searchInfoList && this.searchInfoList[0] !== '') {
        callback(this.searchInfoList.slice(0, 7))
      } else {
        callback(blackArr)
      }
    },
    handleSelect(query) {
      this.doSearch(query)
    },
    // 开始搜索
    doSearch(query) {
      if (this.pickType === 'baidu') {
        window.open(`https://www.baidu.com/s?ie=utf-8&wd=${query}`)
      } else if (this.pickType === 'google') {
        window.open(`https://www.google.com/search?q=${query}&ie=UTF-8`)
      } else if (this.pickType === 'biying') {
        window.open(`https://cn.bing.com/search?q=${query}`)
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
  .search-container
    width 100%
    .search-box
      width 100%
    .my-autocomplete
      li
        line-height normal
        padding 7px
        .name
          text-overflow ellipsis
          overflow hidden
        .addr
          font-size 12px
          color #b4b4b4
        .highlighted .addr
          color: #ddd
</style>
