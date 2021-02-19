import APP from '../configs/server-config.js'

function confirmEmailTemplate() {
    return `
        <h3> Здравствуйте! </h3>
        <p> Для подтверждения регистрации на сайте www.${APP.address.HOST}, перейдите по <b></b><a href="">ссылке</a></b>. </p>
        <p> Если Вы не регистрировались на сайте www.${APP.address.HOST}, просто проигнорируйте данное письмо.</p>
    `
}

export { confirmEmailTemplate }
