<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
  emits: ['select-topic'],
};
</script>