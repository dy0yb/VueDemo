<template>
  <div class="todo-container">
  <div class="todo-wrap">
<!--    <TodoHeader @addTodo="addTodo"/>-->
    <TodoHeader ref="header"/>
    <TodoList :todos="todos" />
    <todo-footer>
      <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
      <span slot="count">已完成{{ completeSize }} / 全部{{ todos.length }}</span>
      <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="deleted">清除已完成任务</button>
    </todo-footer>
  </div>
</div>
</template>

<script>
// 1. 引入组件
import PubSub from 'pubsub-js'
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

import storageUtil from './util/storageUtil'
// 2. 映射组件标签
export default {
  name: 'App',
  data () {
    return {
      todos: storageUtil.readTodos()
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((PreTotal, todo) => PreTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (Value) {
        this.selectAllTodos(Value)
      }
    }
  },
  mounted () { // 执行异步代码
    this.$refs.header.$on('addTodo', this.addTodo)
    PubSub.subscribe('deleteTodo', (msg, data) => {
      this.deleteTodo(data)
    })//  订阅消息
  },
  watch: {
    todos: {
      deep: true,
      // handler: function (value) {
      //   storageUtil.saveTodos(value)
      // }
      handler: storageUtil.saveTodos
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },

    deleteTodo (index) {
      console.log(index)
      this.todos.splice(index, 1)
    },

    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },

    selectAllTodos (check) {
      this.todos.forEach(todo => (todo.complete = check))
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
