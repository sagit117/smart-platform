interface IDataLogin {
    email: string,
    password: string,
    antiSpam: string
}

interface IResponse {
    message: string,
    success: boolean
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
}
