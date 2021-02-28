import APP from '../configs/server-config'

export function confirmEmailTemplate(hash: string = ''): string {
    if (!hash) return ``

    return `
        <h3> Здравствуйте! </h3>
        <p> Для подтверждения регистрации на сайте www.${APP.address.HOST}, перейдите по 
            <b>
                <a 
                    href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT 
                            ? ':' + APP.address.PORT 
                            : ''}/confirm_email/${hash}">
                        ссылке
               </a>
            </b>. 
        </p>
        <p> Если Вы не регистрировались на сайте www.${APP.address.HOST}, просто проигнорируйте данное письмо.</p>
    `
}
