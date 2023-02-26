import { createApp } from 'vue'
import App from './App.vue'

//import { BootstrapVue, IconsPlugin } from 'bootstrap'
import { BootstrapVue } from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(BootstrapVue,{})
    .mount('#app')

//createApp(App).mount('#app')
