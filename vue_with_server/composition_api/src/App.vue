<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3> {{ age }}</h3>
    <h3> {{ userObject }}</h3>
    <h3> {{ userObject2 }}</h3>
    <div>
      <input type="text" placeholder="First Name" @input="firstName" />
      <input type="text" placeholder="Last Name" @input="lastName" />

    </div>
  </section>
</template>

<script>
import { ref, reactive, isReactive, toRefs, computed } from 'vue';

// ref is a function that returns a reactive object that works in objects, values, etc
// reactive is a function that returns a reactive object that works in only objects
// isReactive is a function that returns a boolean if the object is reactive or not
// toRefs changes the object and its values to a reactive object
export default {
  setup() {
    const userName = ref('Michael Jackson');
    const age = ref(50);
    const userObject = ref({ name: 'Michael Jackson', age: 50 });
    const userObject2 = reactive({ name: 'Michael Jackson ReactiveNess', age: 50 });
    const firstName = ref('');
    const lastName = ref('');
    setTimeout(() => {
      userName.value = 'Michael Jackson 2';
      userObject.value.name = 'Michael Jackson 2';
      userObject2.name = 'Michael Jackson 2 ReactiveNess 123123';
    }, 3000);
    const userRefs = toRefs(user)
    console.log(isReactive(userObject2))
    function setNewAge() {
      age.value = 100
    }
    function setFirstName(event) {
      firstName.value = event.target.value
    }
    function setLastName(event) {
      lastName.value = event.target.value
    }
    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value
    })
    return { userName, age, userObject, userObject2, userRefs, setNewAge, setFirstName, setLastName, firstName, lastName, uName };
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