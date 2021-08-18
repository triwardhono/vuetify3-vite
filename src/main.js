import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
const app = createApp(App)
app.use(vuetify)

import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
app.use(router)
app.mount('#app')

