<template>
  <form class="new-todo-form">
    <label class="new-todo-label">
      New Todo:
      <input v-model="newTodo" type="text" class="new-todo-input" />
    </label>
    <button type="submit" @click.prevent="addTodo()" class="new-todo-button">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$emit("add-todo", this.newTodo);
        this.newTodo = "";
      } else {
        alert("Please input new task!");
      }
    },
  },
};
</script>

<style scoped>
.new-todo-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid #fafafa;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
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
