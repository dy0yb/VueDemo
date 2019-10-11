<template>
  <div class="todo-container">
  <div class="todo-wrap">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
    <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
  </div>
</div>
</template>

<script>
// 1. 引入组件
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
// 2. 映射组件标签
export default {
  name: 'App',
  data () {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
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
