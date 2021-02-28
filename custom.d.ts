declare namespace Express {
    export interface Request {
        dataMain?: {
            accessRoute?: { access: true, useLogin: false }
            user?: {
                _id: string | number;
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
