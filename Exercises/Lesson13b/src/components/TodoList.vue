<template>
  <ul class="todo-list">
    <todo-item
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
      v-for="todo in todos"
      :key="todo.id"
      :isCompleted="todo.completed"
      :text="todo.text"
      :id="todo.id"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    updateTodo(todo) {
      let newTodoList = this.todos.filter((todoItem) => {
        if (todoItem.id == todo.id) {
          todoItem.completed = todo.completed;
        }

        return todoItem;
      });

      this.$emit("update:todos", newTodoList);
    },
    deleteTodo(todo) {
      if (confirm(`Do you really want to delete the task "${todo.text}"?`)) {
        let newTodoList = this.todos.filter((todoItem) => {
          if (todoItem.id != todo.id) {
            return todoItem;
          }
        });

        this.$emit("update:todos", newTodoList);
      }
    },
    editTodo(todo) {
      let newTodoList = this.todos.filter((todoItem) => {
        if (todoItem.id == todo.id) {
          todoItem.text = todo.text;
        }

        return todoItem;
      });

      this.$emit("update:todos", newTodoList);
    },
  },
};
</script>

<style>

</style>