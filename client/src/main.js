import { createApp } from 'vue'; // Import createApp function instead of Vue
import App from './App.vue';
import router from './router/main.js';
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App); // Create a Vue app instance using createApp

app.use(router); // Use the router plugin
app.mount('#app'); // Mount the app to the #app element in the DOM

app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID'
});
