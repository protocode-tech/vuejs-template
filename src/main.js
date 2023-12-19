// Styles
import './assets/main.scss';

// Main vue app
import { createApp } from 'vue';
import App from './App.vue';

// Router
import router from '@/plugins/router';

// Vuetify
import { i18n, vuetify } from './plugins/vuetify';

const app = createApp(App);

app.use(i18n);
app.use(vuetify);
app.use(router);

app.mount('#app');
