const app = Vue.createApp({
    data() {
        return {
            courseGoal1: "Finish the course and learn Vue",
            courseGoal2: "Learn Vuex",
            vueLink: "https://vuejs.org/",
            myhtml: "<h1>Hello World</h1>"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal1;
            }
            else {
                return this.courseGoal2;
                // this works because the vue merges the data and methods into a single object
            }
        }
    }
});
app.mount('#user-goal');

