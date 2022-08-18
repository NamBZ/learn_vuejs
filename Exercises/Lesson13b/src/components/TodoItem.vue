<template>
  <li :class="{ 'todo-item_completed': todo.completed }" class="todo-item">
    <label v-if="currentlyEditing !== todo.id" class="todo-item-label">
      <input
        type="checkbox"
        v-model="todo.completed"
        @change="updateTodo(todo)"
        class="todo-item__checkbox"
      />
      {{ todo.text }}
    </label>
    <div v-if="currentlyEditing !== todo.id">
      <button @click="editTodo(todo)" class="todo-button">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Page-1" fill="none" fill-rule="evenodd">
            <g id="Artboard-Copy" transform="translate(-10 -9)" fill="#FF33AE">
              <path
                d="M14.051 25l1.016-1.016-2.623-2.622-1.015 1.015v1.194h1.428V25h1.194zm5.837-10.357c0-.145-.1-.246-.245-.246a.261.261 0 0 0-.19.078l-6.049 6.05a.261.261 0 0 0-.078.19c0 .144.1.245.245.245a.261.261 0 0 0 .19-.078l6.05-6.05a.261.261 0 0 0 .077-.19zm-.602-2.143l4.643 4.643-9.286 9.286H10v-4.643l9.286-9.286zm7.623 1.071c0 .38-.157.748-.413 1.005l-1.853 1.853L20 11.786l1.853-1.842a1.4 1.4 0 0 1 1.004-.424c.38 0 .748.156 1.016.424l2.623 2.612c.256.268.413.636.413 1.015z"
                id="pencil"
              />
            </g>
          </g>
        </svg>
      </button>
      <button @click="deleteTodo(todo)" class="todo-button">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Page-1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-11 -9)" fill="#FF33AE">
              <path
                d="M16.714 16.071V22.5c0 .2-.156.357-.357.357h-.714a.353.353 0 0 1-.357-.357v-6.429c0-.2.156-.357.357-.357h.714c.201 0 .357.157.357.357zm2.857 0V22.5c0 .2-.156.357-.357.357H18.5a.353.353 0 0 1-.357-.357v-6.429c0-.2.156-.357.357-.357h.714c.201 0 .357.157.357.357zm2.858 0V22.5c0 .2-.157.357-.358.357h-.714A.353.353 0 0 1 21 22.5v-6.429c0-.2.156-.357.357-.357h.714c.201 0 .358.157.358.357zm1.428 8.08v-10.58h-10v10.58c0 .536.301.849.357.849H23.5c.056 0 .357-.313.357-.848zm-7.5-12.008h5l-.536-1.306a.43.43 0 0 0-.19-.123h-3.537a.376.376 0 0 0-.19.123l-.547 1.306zm10.357.357v.714c0 .201-.156.357-.357.357h-1.071v10.58c0 1.228-.804 2.278-1.786 2.278h-9.286c-.982 0-1.785-1.005-1.785-2.233V13.571h-1.072a.353.353 0 0 1-.357-.357V12.5c0-.2.156-.357.357-.357h3.449l.781-1.864c.223-.547.893-.993 1.484-.993h3.572c.591 0 1.261.446 1.484.993l.781 1.864h3.45c.2 0 .356.156.356.357z"
                id="trash"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <form v-else class="edit-todo-form">
      <label class="edit-todo-label">
        Edit:
        <input type="text" v-model="todoEditText" class="edit-todo-input" />
      </label>
      <button
        type="submit"
        class="edit-todo-button"
        @click.prevent="updateTodoText()"
      >
        Save
      </button>
    </form>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      todo: {
        id: this.id,
        completed: this.isCompleted,
        text: this.text,
      },
      currentlyEditing: null,
      todoEditText: "",
    };
  },
  methods: {
    updateTodo(todo) {
      this.$emit("update-todo", todo);
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    editTodo(todo) {
      this.currentlyEditing = todo.id;
      this.todoEditText = todo.text;
    },
    updateTodoText() {
      if (this.todoEditText) {
        this.todo.text = this.todoEditText;
        this.$emit("edit-todo", this.todo);
        this.currentlyEditing = null;
        this.todoEditText = "";
      } else {
        alert("Input the task. Please!");
      }
    },
  },
};
</script>

<style>
.todo-item_completed {
  background-color: aquamarine;
}
</style>