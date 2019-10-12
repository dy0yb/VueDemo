/*
* 使用localStorageg 存储数据的工具模块
* 函数
* 对象
* 需要向外暴露一个功能还是多个功能
* */
const TODO_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(todos))
  },

  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}
