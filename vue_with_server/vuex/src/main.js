import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';


const store = createStore({
    state() {
        return {
            counter: 0
        };

    },
    mutations: {
        increment(state, payload = 1) {
            state.counter = state.counter + payload;
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        }
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000);
        }
    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
