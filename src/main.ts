import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

import { router } from './router'
import './permissions'

const app = createApp(App)
app.use(router)
app.mount('#app')
