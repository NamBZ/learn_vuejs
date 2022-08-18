import { createApp } from 'vue'
import App from './App.vue'
import MyFriends from './components/MyFriends.vue';

const app = createApp(App);

app.component(MyFriends);

app.mount('#app');
