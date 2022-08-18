<template>
  <header class="page-header"></header>
  <section class="wrapper">
    <new-todo-item @add-todo="addTodo" />
    <todo-list v-model:todos="todos"></todo-list>
  </section>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodoItem from "./components/NewTodoItem.vue";

export default {
  name: "App",
  components: {
    TodoList,
    NewTodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  watch: {
    todos(newList) {
      try {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch (error) {
        console.log("Please enable localStorage to continue!");
      }
    },
  },
  mounted() {
    try {
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    } catch (error) {
      this.todos = [];
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.unshift({
        id: Date.now(),
        text: newTodo,
        completed: false,
      });

      try {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch (error) {
        console.log("Please enable localStorage to continue!");
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>
