<template>
  <section>
    <base-card>
      <header>
        <h1>Requests Received</h1>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You havent received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>
