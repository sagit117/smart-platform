import Mongoose from 'mongoose'

const SchemaRequestLogs = new Mongoose.Schema({ // Описание схемы данных
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
    user: {
        email: String,
    },
    accessRoute: Object
})

export default Mongoose.model('requestLog', SchemaRequestLogs)

