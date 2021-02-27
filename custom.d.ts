declare namespace Express {
    export interface Request {
        dataMain?: {
            accessRoute?: { access: true, useLogin: false }
            user?: {
                mainEmail?: string
            },
            body?: {
                email?: string
                password?: string
                antiSpam?: string
            },
            requestIP?: string
        }
    }
}
