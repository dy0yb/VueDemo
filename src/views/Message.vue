<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
<!--        <a href="">{{ message.title }}</a>-->
        <router-link :to="`/home/message/detail/${message.id}`">{{ message.title }}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message1'
        },
        {
          id: 2,
          title: 'message2'
        },
        {
          id: 3,
          title: 'message3'
        }
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style scoped>

</style>
