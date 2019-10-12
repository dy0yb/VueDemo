<template>
    <div>
      <h2>Home</h2>
      <div>
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
