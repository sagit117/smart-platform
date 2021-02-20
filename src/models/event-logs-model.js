import Mongoose from "mongoose";

const SchemaEventLogs = new Mongoose.Schema({
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

export default Mongoose.model('eventLog', SchemaEventLogs)
