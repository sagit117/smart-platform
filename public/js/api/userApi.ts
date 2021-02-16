interface IDataLogin {
    email: string,
    password: string,
    antiSpam: string
}

export default class UserAPI {
    protected baseURL: string = '/api/users'

    public loginWithEmail(data: IDataLogin): Promise<object> {
        return fetch(this.baseURL + '/login', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    public registrationWithEmail(data: IDataLogin): Promise<object> {
        return fetch(this.baseURL + '/registration', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }
}
