import axios from 'axios'

export function getBaiduSearchResult(wd) {
    const url = 'https://apli.haoqinzz.cn/api/getBaiduSearchResults'
    return axios.get(url,{
        params: {
            wd
        }
    }).then(res=>{
        return Promise.resolve(res)
    })
}