const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue) {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    },
    removeGoal(index) {
      this.goals = this.goals.slice(index, 1);
    }
  }
});

app.mount('#user-goals');
