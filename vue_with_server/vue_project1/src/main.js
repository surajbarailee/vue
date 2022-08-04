import { createApp } from 'vue';

import App from './App.vue';
import NewFriend from './components/NewFriend.vue';

import FriendContact from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.mount('#app')