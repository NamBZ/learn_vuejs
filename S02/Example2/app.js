const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    confirmInput(event) {
      this.confirmName = this.name;
    },
    submitForm() {
      alert("Some thing");
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
