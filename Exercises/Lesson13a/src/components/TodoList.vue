<template>
  <div class="warp-tasks">
    <div class="todo-list">
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

      <div class="flex-todo-list">
        <div class="half-flex">
          <h2>Todo Tasks</h2>
          <div v-for="todo in todos" :key="todo.id">
            <slot
              :isCompleted="todo.completed"
              :text="todo.text"
              :id="todo.id"
              v-if="todo.completed"
              ></slot>
          </div>
        </div>
        <div class="half-flex">
          <h2>Completed Tasks</h2>
          <div v-for="todo in todos" :key="todo.id">
            <slot
              name="completeSlot"
              :isCompleted="todo.completed"
              :text="todo.text"
              :id="todo.id"
              v-if="todo.completed == false"
              ></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  margin: 2rem auto;
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

.flex-todo-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.half-flex {
  width: 49%;
}

.todo-item-text {
  padding: 1rem;
  margin: 0;
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
}

.todo-task {
  font-weight: bold;
  background-color: gold;
}

.completed-task {
  background-color: lightblue;
}
</style>