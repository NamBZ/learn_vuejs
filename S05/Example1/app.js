const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('destroyed()');
  }
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);


/*let data = {
    message: "Hello",
    longMessage: "Hello world"
};

const hander = {
    set(target, key, value) {
        if (key === 'message') {
            target.longMessage = value + "World!";
        }
        target.message = value;
    }
};

const proxy = new Proxy(data, hander);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);*/