<template>
  <header class="page-header"></header>
  <section class="wrapper">
    <form class="new-todo-form">
      <label class="new-todo-label">
        New Todo:
        <input v-model="newTodo" type="text" class="new-todo-input"/>
      </label>
      <button type="submit" @click.prevent="addTodo()" class="new-todo-button">Add</button>
    </form>

    <todo-list v-model:todos="todos"></todo-list>
  </section>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  watch: {
    todos(newList) {
      this.todos = newList;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.unshift({
          id: Date.now(),
          text: this.newTodo,
          completed: false,
        });
        localStorage.setItem("todos", JSON.stringify(this.todos));
        this.newTodo = "";
      } else {
        alert("Input the task. Please!");
      }
    },
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  button {
    cursor: pointer;
  }

  .page-header {
    padding: 5rem 0;
    width: 100%;
    background: #ff33ae;
  }

  .wrapper {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .new-todo-form {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 3px;
    border: 1px solid #fafafa;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .15);
    margin-top: -3rem;
    background: white;
  }

  .new-todo-label {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: flex-start;
    text-align: left;
    font-weight: bold;
  }

  .new-todo-input {
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid lightgrey;
    font-size: 1rem;
    margin-top: 0.5rem;
    font-weight: normal;
  }

  .new-todo-button {
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    background: #ff33ae;
    flex: 1;
    margin-left: 1rem;
    border: 1px solid #ff33ae;
  }
</style>
