import { createApp } from './lib/vue.esm-browser.js'

import ('../css/login.css')

const login = {
    name: 'login',

    template: `
        <h1> login </h1>
    `,
}

const app = createApp(login)
app.mount('#login')