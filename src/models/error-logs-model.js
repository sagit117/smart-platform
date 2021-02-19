import Mongoose from "mongoose";

const SchemaErrorLogs = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    textDescription: String,
    textError: String
})

export default Mongoose.model('errorLog', SchemaErrorLogs)
