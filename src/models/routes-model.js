import Mongoose from 'mongoose' // библиотека для подключение к mongodb

const SchemaRoutes = new Mongoose.Schema({
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

export default Mongoose.model('routes', SchemaRoutes)
