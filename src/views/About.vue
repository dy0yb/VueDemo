<template>
    <div>
      About
      <input type="text">
      <div v-text="msg">
<!--        {{ msg }}-->
      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
