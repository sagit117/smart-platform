interface IDataLogin {
    email: string,
    password: string,
    antiSpam: string
}

interface IResponse {
    message: string,
    success: boolean
}

interface IDataChangePass {
    password: string,
    antiSpam: string,
    hash: string
}

export class UserAPI {
    protected baseURL: string = '/api/users'

    public loginWithEmail(data: IDataLogin): Promise<IResponse> {
        return fetch(this.baseURL + '/login', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response): Promise<IResponse> => response.json())
    }

    public registrationWithEmail(data: IDataLogin): Promise<IResponse> {
        return fetch(this.baseURL + '/registration', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response): Promise<IResponse> => response.json())
    }

    public restorePassword(email: string = ''): Promise<IResponse> {
        return fetch(this.baseURL + `/restore-password/${email}`, {
            credentials: 'include',
        })
            .then((response): Promise<IResponse> => response.json())
    }

    public changePassword(data: IDataChangePass): Promise<IResponse> {
        return fetch(this.baseURL + '/change-password', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response): Promise<IResponse> => response.json())
    }
}
