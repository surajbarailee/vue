const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 2342 233', email: 'manuel@localhost.com' },
                { id: 'julie', name: 'Julie Jones', phone: '0987 6543 212', email: 'julie@localhost.com' }
            ]
        }
    }
})

// these are like mini apps
app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{ friend.phone}}</li>
          <li><strong>Email:</strong> {{ friend.email}}</li>
        </ul>
      </li>`,
    data() {
        return {
            friend:
                { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 2342 233', email: 'manuel@localhost.com' }
            ,

            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
});


app.mount('#app')