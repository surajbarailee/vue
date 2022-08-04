const app = Vue.createApp({
    data() {
        return {
            name: "Suraj Barailee",
            age: "30",
            age_in_five: "35",
            random_image: "https://picsum.photos/200/300/?random",
        }
    },
    methods: {
        random_number_between_zero_and_one: function () {
            return Math.random();
        }
    }
});
app.mount('#assignment')