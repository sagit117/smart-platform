import Nodemailer from 'nodemailer'
import { MAILER_FROM } from '../configs/mailer-config.js'

const transporter = Nodemailer.createTransport({
    port: 587,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'reports.sti.mailer@gmail.com',
        pass: 'neosjhdbhJHJHf34f'
    }
})

export default function (to, subject, html) {
    return transporter.sendMail({
        from: MAILER_FROM,
        to,
        subject,
        html
    })
}
