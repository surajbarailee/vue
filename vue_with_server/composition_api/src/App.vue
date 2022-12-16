<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3> {{ age }}</h3>
    <h3> {{ userObject }}</h3>
    <h3> {{ userObject2 }}</h3>
  </section>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
  setup() {
    const userName = ref('Michael Jackson');
    const age = ref(50);
    const userObject = ref({ name: 'Michael Jackson', age: 50 });
    const userObject2 = reactive({ name: 'Michael Jackson ReactiveNess', age: 50 });
    setTimeout(() => {
      userName.value = 'Michael Jackson 2';
      userObject.value.name = 'Michael Jackson 2';
      userObject2.name = 'Michael Jackson 2 ReactiveNess 123123';
    }, 3000);
    return { userName,age,userObject,userObject2 };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>