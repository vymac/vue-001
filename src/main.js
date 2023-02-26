import { createApp } from 'vue'
import App from './App.vue'
//https://www.harubears.com/en/bootstrap5-button-with-vue3-cli/
//https://getbootstrap.com/docs/5.3/customize/css-variables/
// tie du duoda klaidos perspejima
//import { BootstrapVue, IconsPlugin } from 'bootstrap'
//import { BootstrapVue, IconsPlugin } from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
//    .use(BootstrapVue)
//    .use(IconsPlugin)
    .mount('#app')
