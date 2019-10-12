<template>
    <div>
      <ul>
        <li v-for="(news, index) in newsArry" :key="index">{{ news }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      newsArry: ['1', '2', '3']
    }
  }
}
</script>

<style scoped>

</style>
