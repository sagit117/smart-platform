import Mongoose, { Schema, Document } from 'mongoose' // библиотека для подключение к mongodb
import Bcrypt from 'bcrypt'

export interface IUsersModel extends Document {
    date: Date
    updatedAt: Date
    mainEmail: string
    confirmEmail: boolean
    hash: string
    emails: string[]
    password: string
    name: string
    lastName: string
    patronymic: string
    addresses: Array<{
        country: string,
        city: string,
        street: string,
        houseNumber: string,
        apartmentNumber: string
    }>
    phones: string[]
    roles: string[]
}

const SchemaUsers: Schema<IUsersModel> = new Mongoose.Schema({
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
    confirmEmail: {
        type: Boolean,
        default: false
    },
    hash: String,
    emails: [
        {
            value: String,
            confirm: Boolean
        }
    ],
    password: {
        type: String,
        required: true
    },
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
    phones: [String],
    roles: [String]
})

SchemaUsers.index({ mainEmail: 1 })

SchemaUsers.pre('save', function(next) {
    // хеширование пароля перед сохранением
    if(!this.isModified("password")) return next()

    this.password = Bcrypt.hashSync(this.password, 10)
    next()
})

// Метод для проверки пароля
SchemaUsers.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password))
}

export default Mongoose.model<IUsersModel>('users', SchemaUsers)
