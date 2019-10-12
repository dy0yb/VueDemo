<template>
  <div>
    <p>ID: {{ $route.params.id }}</p>
    <ul>
      <li>ID: {{ msgDetail.id }}</li>
      <li>title: {{ msgDetail.title }}</li>
      <li>content: {{ msgDetail.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data () {
    return {
      msgDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allmessagesDetail = [
        {
          id: 1,
          title: 'message1',
          content: 'tent1'
        },
        {
          id: 2,
          title: 'message2',
          content: 'tent2'
        },
        {
          id: 3,
          title: 'message3',
          content: 'tent3'
        }
      ]
      this.allmessagesDetail = allmessagesDetail
      const id = this.$route.params.id * 1
      this.msgDetail = allmessagesDetail.find(detail => detail.id === id)
    }, 100)
  },
  watch: {
    $route: function (value) {
      const id = value.params.id * 1
      this.msgDetail = this.allmessagesDetail.find(detail => detail.id === id)
    }
  }
}
</script>

<style scoped>

</style>
