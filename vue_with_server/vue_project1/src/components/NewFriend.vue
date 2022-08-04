<template>
  <form @submit.prevent="submitData">
    <div>
      <label>
        Name:
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Phone:
        <input type="text" v-model="phone" />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="text" v-model="email" />
      </label>
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>


<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      console.log("asd");
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>
