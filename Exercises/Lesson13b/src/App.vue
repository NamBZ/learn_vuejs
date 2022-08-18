<template>
  <header class="page-header"></header>
  <section class="wrapper">
    <new-todo-item @add-todo="addTodo" />

    <div class="tab">
      <button class="tablinks" :class="{ active: selectedComponent == 'todo-tasks' }" @click="setSelectedComponent('todo-tasks')">Todo Tasks</button>
      <button class="tablinks" :class="{ active: selectedComponent == 'completed-tasks' }" @click="setSelectedComponent('completed-tasks')">Completed Tasks</button>
    </div>
    <component :is="selectedComponent" v-model:todos="todos"></component>
  </section>
</template>

<script>
import TodoTasks from "./components/TodoTasks.vue";
import CompletedTasks from "./components/CompletedTasks.vue";
import NewTodoItem from "./components/NewTodoItem.vue";

export default {
  name: "App",
  components: {
    TodoTasks,
    CompletedTasks,
    NewTodoItem,
  },
  data() {
    return {
      selectedComponent: 'todo-tasks',
      todos: [],
    };
  },
  watch: {
    todos() {
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

    setSelectedComponent (cmp) {
      this.selectedComponent = cmp;
    }
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
.edit-todo-form {
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
}

.edit-todo-label {
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
}

.edit-todo-input {
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: 1rem;
  font-weight: normal;
  flex: 1;
  margin-left: 1rem;
}

.edit-todo-button {
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  color: #ff33ae;
  font-weight: bold;
  margin-left: 1rem;
  border: 1px solid #ff33ae;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}

.todo-item:first-of-type {
  border-radius: 3px 3px 0 0;
}

.todo-item:last-of-type {
  border-bottom: 1px solid lightgrey;
  border-radius: 0 0 3px 3px;
}

.todo-item-label {
  cursor: pointer;
  padding: 1rem;
}

.todo-item__checkbox {
  margin-right: 1rem;
}

.todo-list {
  max-width: 100%;
  margin: 0;
}

.todo-button {
  background: transparent;
  border: 0;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
}

/* Style the tab */
.tab {
  overflow: hidden;
  margin-top: 2rem;
}

.tab::after {
  content: "";
  clear: both;
  display: table;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  float: left;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ff33ae;
  color: white;
}
</style>
