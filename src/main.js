import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Importo mis estilos sass
import './styles/styles.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
