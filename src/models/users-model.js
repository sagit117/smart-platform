import Mongoose from 'mongoose' // библиотека для подключение к mongodb

const SchemaUsers = new Mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    mainEmail: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    confirmEmail: Boolean,
    emails: [
        {
            value: String,
            confirm: Boolean
        }
    ],
    name: String,
    lastName: String,
    patronymic: String,
    addresses: [{
        country: String,
        city: String,
        street: String,
        houseNumber: String,
        apartmentNumber: String
    }],
    phones: [{
        number: String,
    }],
    roles: [{
        name: String,
    }]
})

SchemaUsers.index({ mainEmail: 1 })

export default Mongoose.model('users', SchemaUsers)
