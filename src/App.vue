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
      <Add :addComment="addComment"/>
      <List :comments="comments"/>
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
  methods:{
    addComment (comment) {
      this.comments.unshift(comment);
    }
  },
  components: {List, Add}
}
</script>

<style scoped>

</style>
