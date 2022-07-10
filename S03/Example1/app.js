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
    }
  }
});

app.mount('#user-goals');
