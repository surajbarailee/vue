const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter -= num;
    },
    setname(event, lastname) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('submitted')
    },
    confirmInput() {
      alert('confirm')
    },
    reset() {
      this.name = ''
    }
  }
});

app.mount('#events');
