import Nodemailer from 'nodemailer'
import { MAILER_FROM } from '../configs/mailer-config'

const transporter = Nodemailer.createTransport({
    port: 587,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'reports.sti.mailer@gmail.com',
        pass: 'neosjhdbhJHJHf34f'
    }
})

export default function (to: string, subject: string, html: string): Promise<any> {
    return transporter.sendMail({
        from: MAILER_FROM,
        to,
        subject,
        html
    })
}
