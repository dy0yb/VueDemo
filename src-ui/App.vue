<template>
  <div>
    <mt-button type="default" size="large" @click.native="handleClick">default</mt-button>
    <h1>sadfsad</h1>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'App',
  methods: {
    handleClick () {
      Toast('提示')
    }
  }
}
</script>

<style>

</style>
