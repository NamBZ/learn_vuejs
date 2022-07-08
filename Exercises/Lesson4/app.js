const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: '',
      firstName: '',
      lastName: '',
      fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 150) {
        setTimeout(function() {
          this.counter = 0;
        }, 2000);
      }
    },
    firstName(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = this.firstName + ' ' + this.lastName;
      }
    }
  },
  computed: {
    fullname() {
      console.log("Run again");
      if (this.name == '') {
        return '';
      }

      return this.name + ' ' + 'Schwarzmüller';
    },
    fullName2() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    confirmInput(event) {
      this.confirmName = this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    resetInput1() {
      this.lastName = '';
      this.firstName = '';
    }
  }
});

app.mount('#events');
