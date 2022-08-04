<template>
  <ul>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
      <br />
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phone }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
      </ul>
      <button @click="deleteFriend">Delete Friend</button>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },

  emits: ['delete-friend', 'toggle-favorite'],

  data() {
    return {
      detailsAreVisible: false,
      isFavorite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>