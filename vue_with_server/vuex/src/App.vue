<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increment(10)">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('increment', 10);
    },
    ...mapActions(['increment']),
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
</style>