<template>
 <div>
   <div v-if="!repoUrl">
     loading
   </div>
   <div v-else>
     most star repo is <a :href="repoUrl">{{ repoName }}</a>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
    // this.$http.get(url).then(
    //   response => {
    //     const result = response.data
    //     const mostRepo = result.items[0]
    //     this.repoUrl = mostRepo.html_url
    //     this.repoName = mostRepo.name
    //   },
    //   reponse => {
    //     alert('请求失败')
    //   }
    // )
    // 使用axios 发送ajax 请求

    axios.get(url).then(
      response => {
        const result = response.data
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }
    ).catch(() => {
      alert('请求失败')
    })
  }
}
</script>

<style>
</style>
