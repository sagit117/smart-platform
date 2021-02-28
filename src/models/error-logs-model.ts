import Mongoose, { Schema, Document } from "mongoose"

export interface IErrorLogsModel extends Document {
    date: Date,
    textDescription: string,
    textError: string
}

const SchemaErrorLogs: Schema<IErrorLogsModel> = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    textDescription: String,
    textError: String
})

export default Mongoose.model<IErrorLogsModel>('errorLog', SchemaErrorLogs)
