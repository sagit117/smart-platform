import Mongoose, { Schema, Document } from "mongoose"

export interface IEventLogs extends Document {
    date: Date
    eventName: string
    text: string
    user: Mongoose.Schema.Types.ObjectId
    requestIP: string
}

const SchemaEventLogs: Schema<IEventLogs> = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    eventName: String,
    text: String,
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    requestIP: String
})

export default Mongoose.model<IEventLogs>('eventLog', SchemaEventLogs)
