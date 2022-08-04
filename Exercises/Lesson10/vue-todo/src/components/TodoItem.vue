<template>
    <li :key="todo.id" :class="{'todo-item_completed': todo.completed}" class="todo-item">
      <label v-if="currentlyEditing !== todo.id" class="todo-item-label">
        <input 
          type="checkbox" 
          v-model="todo.completed" 
          @change="updateTodo(todo)"
          class="todo-item__checkbox">
          {{ todo.text }}
      </label>
      <div v-if="currentlyEditing !== todo.id">
        <button
          @click="editTodo(todo)" 
          class="todo-button">
          <img src="../assets/pencil.svg" alt="Edit todo">
        </button>
        <button
          @click="deleteTodo(todo)" 
          class="todo-button">
          <img src="../assets/trash.svg" alt="Delete todo">
        </button>
      </div>
      <form v-else class="edit-todo-form">
        <label class="edit-todo-label">
          Edit:
          <input type="text" v-model="todoEditText" class="edit-todo-input">
        </label>
        <button 
          type="submit" 
          class="edit-todo-button"
          @click.prevent="updateTodoText()">
          Save
        </button>
      </form>
    </li>
</template>

<script>
export default {
  props: ['todo_prop'],
  data() {
    return {
      todo: this.todo_prop,
      currentlyEditing: null,
      todoEditText: '',
    };
  },
  methods: {
    updateTodo(todo) {
      this.$emit('update-todo', todo)
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo)
    },
    editTodo(todo) {
      this.currentlyEditing = todo.id
      this.todoEditText = todo.text
    },
    updateTodoText() {
      if (this.todoEditText) {
        this.todo.text = this.todoEditText
        this.$emit('edit-todo', this.todo)
        this.currentlyEditing = null
        this.todoEditText = ''
      } else {
        alert("Input the task. Please!")
      }
    }

  }
}
</script>

<style>
  .todo-item_completed {
    background-color: aquamarine;
  }
</style>