<template>
  <div>
    <base-dialog :show="!!error" title="An Error Occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h1>Requests Received</h1>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-if="hasRequests && !isLoading">
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
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
import BaseDialog from "../../components/ui/BaseDialog.vue";
import BaseSpinner from "../../components/ui/BaseSpinner.vue";
export default {
  components: {
    RequestItem,
    BaseDialog,
    BaseSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Failed to fetch requests";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
