import Mongoose, { Schema, Document, Model } from 'mongoose' // библиотека для подключение к mongodb
import Bcrypt from 'bcrypt'
import events from "../utils/emitters"

import Lang from "../dictionary/language"
import Config from "../configs/server-config"

const L = new Lang(Config.LANG)

export interface IUsersDocument extends Document {
    _id: string
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
    comparePassword: (plaintext: string | undefined, callback: Function) => boolean
}

export interface IUsersModel extends Model<IUsersDocument> {
    findUserByMainEmail: (email: string | undefined) => Promise<IUsersModel | boolean | null>
    findUserByEmail: (email: string | undefined) => Promise<IUsersModel | boolean | null>
    findUserByHash: (hash: string | undefined) => Promise<IUsersDocument | boolean | null>
}

const SchemaUsers: Schema<IUsersDocument> = new Mongoose.Schema({
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
    if (this.isModified('mainEmail')) this.mainEmail = this.mainEmail.toLowerCase()

    if (!this.isModified("password")) return next()
    else this.password = Bcrypt.hashSync(this.password, 10)
    next()
})

/** Методы */

SchemaUsers.methods.comparePassword = function(plaintext: string | undefined = '', callback: Function): boolean { // метод для проверки пароля
    return callback(null, Bcrypt.compareSync(plaintext, this.password))
}

SchemaUsers.statics.findUserByEmail = function(email: string | undefined = ''): Promise<IUsersDocument | boolean | null> { // поиск пользователя по всем email-ам
    return UsersModel.findOne({
        $or: [
            { mainEmail: email },
            { "emails.value": email }
        ]
    })
        .catch(error => {
            events.emit('onError', L.translate('Ошибка при запросе поиска пользователей по email:'), error)
            return false
        })
}

SchemaUsers.statics.findUserByMainEmail = function(email: string | undefined = ''): Promise<IUsersDocument | boolean | null> { // поиск пользователя по email
    return UsersModel.findOne({ mainEmail: email })
        .catch(error => events.emit('onError', L.translate('Ошибка при запросе поиска пользователей по email:'), error))
}

SchemaUsers.statics.findUserByHash = function(hash: string | undefined = ''): Promise<IUsersDocument | boolean | null>  { // поиск пользователя по всем hash-коду
    return UsersModel.findOne({ hash })
        .catch(error => events.emit('onError', L.translate('Ошибка при запросе поиска пользователей по хеш-коду:'), error))
}

const UsersModel: IUsersModel = Mongoose.model<IUsersDocument, IUsersModel>('users', SchemaUsers)

export default UsersModel
