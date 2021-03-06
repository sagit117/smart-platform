import Mongoose, { Schema, Document } from 'mongoose' // библиотека для подключение к mongodb

export interface IRoutesModel extends Document {
    date: Date
    updatedAt: Date
    url: String
    roleAccessSuccess: string[]
    roleAccessDenied: string[]
    userAccessSuccess: string[]
    userAccessDenied: string[]
}

const SchemaRoutes: Schema<IRoutesModel> = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    url: {
        type: String,
        required: true,
        index: true
    },
    roleAccessSuccess: Array,
    roleAccessDenied: Array,
    userAccessSuccess: Array,
    userAccessDenied: Array,
})

SchemaRoutes.index({ url: 1 })

export default Mongoose.model<IRoutesModel>('routes', SchemaRoutes)
