import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import IconsPlugin from '../src/assets/icons'

const app = createApp(App)

app.use(router)
app.use(IconsPlugin)

app.mount('#app')
