import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoaches.vue'
import RequestReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: './coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetail, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },

        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },

    ]
})

export default router;