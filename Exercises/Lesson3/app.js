const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputValue : 1,
    };
  },
  methods: {
    add(number) {
      this.counter += number;
    },
    minus(number) {
      this.counter -= number;
    },
    setInput(event) {
      var input = event.target.value;
      if(input.match(/^[0-9]+$/)) {
        this.inputValue = parseInt(event.target.value);
      } else {
        alert('Input number please!')
      }
    }
  },
});

app.mount('#events');
