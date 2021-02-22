export interface IMessage {
    title: string
    text: string
    status: 'error' | 'success'
    show: boolean
}
