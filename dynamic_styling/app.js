const app = Vue.createApp({

    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {

            return { active: this.boxASelected }
        },
        boxBClasses() {
            return { active: this.boxBSelected }
        },
        boxCClasses() {
            return { active: this.boxCSelected }
        }
    },
    methods: {
        boxSelected(box) {

            if (box === 'a') {
                this.boxASelected = !this.boxASelected
            }
            else if (box === 'b') {
                this.boxBSelected = !this.boxBSelected
            }
            else if (box === 'c') {
                this.boxCSelected = !this.boxCSelected
            }
        }
    }


})

app.mount('#styling')