<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
<!--      子组件调用父组件方法-->
      <Add :addComment="addComment"/>
<!--      <Add @addComment="addComment"/>-->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from './comporents/Add'
import List from './comporents/List'
export default {
  data () {
    return {
      comments: [ //
        {
          name: 'BOB',
          content: '不错'
        },
        {
          name: 'Cat',
          content: '不错'
        },
        {
          name: 'BOB',
          content: '不错'
        }
      ]
    }
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {List, Add}
}
</script>

<style scoped>

</style>
