import axios from 'axios'

export function getUrlIcon(targetUrl) {
  const url = 'https://apli.haoqinzz.cn/api/getWebIconAndTitle'

  return axios.get(url, {
    params: {
      targetUrl
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
