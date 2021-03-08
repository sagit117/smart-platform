import { createApp } from 'vue'
import Configurator from './components/Configurator.vue'

import router from './components/routes/configurator-routes.ts'
import store from  './components/stores/configurator-store.ts'

const configurator = createApp(Configurator)
configurator.use(router)
configurator.use(store)
configurator.mount('#configurator')
