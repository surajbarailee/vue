<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" myitem="asdasdasd"></slot>
    </li>
  </ul>
</template>



<script>
export default {
  data() {
    return {
      goals: ["Learn Vue", "Learn React", "Learn Angular"],
    };
  },
};
</script>