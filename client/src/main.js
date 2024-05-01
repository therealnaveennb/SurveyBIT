import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'
import vue3GoogleLogin from 'vue3-google-login'

createApp(App).use(router).mount('#app')

App.use(vue3GoogleLogin, {
    clientId: 'YOUR_GOOGLE_CLIENT_ID'
  })
  

