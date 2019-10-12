<template>
  <div class="container">
    <search></search>
    <users-main></users-main>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Search,
    UsersMain: Main
  }
}
</script>

<style>

</style>
