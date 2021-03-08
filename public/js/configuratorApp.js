import { createApp } from 'vue'
import Configurator from './components/Configurator.vue'

import router from './components/routes/configurator-routes.ts'

const configurator = createApp(Configurator)
configurator.use(router)
configurator.mount('#configurator')
