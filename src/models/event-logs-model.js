import Mongoose from "mongoose";

const SchemaEventLogs = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    eventName: String,
    text: String
})

export default Mongoose.model('eventLog', SchemaEventLogs)
