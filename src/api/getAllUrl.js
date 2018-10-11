import axios from 'axios'

export function getAllUrl() {
  const url = 'http://localhost:3000/'
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}
