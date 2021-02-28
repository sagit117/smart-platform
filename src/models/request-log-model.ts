import Mongoose, { Schema, Document } from 'mongoose'

export interface IRequestLogsModel extends Document {
    date: Date,
    requestUrl: string,
    requestMethod: string,
    requestCookies: object,
    requestSignedCookies: object,
    requestIP: string,
    requestID: string,
    body: object,
    params: object,
    user: {
        email: string,
    },
    accessRoute: object
}

const SchemaRequestLogs: Schema<IRequestLogsModel> = new Mongoose.Schema({ // Описание схемы данных
    date: {
        type: Date,
        default: new Date()
    },
    requestUrl: String,
    requestMethod: String,
    requestCookies: Object,
    requestSignedCookies: Object,
    requestIP: String,
    requestID: String,
    body: Object,
    params: Object,
    user: {
        email: String,
    },
    accessRoute: Object
})

export default Mongoose.model<IRequestLogsModel>('requestLog', SchemaRequestLogs)

