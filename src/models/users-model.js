import Mongoose from 'mongoose' // библиотека для подключение к mongodb
import Bcrypt from 'bcrypt'

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
    if(!this.isModified("password")) return next()

    this.password = Bcrypt.hashSync(this.password, 10)
    next()
})

// SchemaUsers.methods.comparePassword = function(candidatePassword, cb) {
//     Bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err)
//         cb(null, isMatch)
//     })
// }

// TODO: протестировать
SchemaUsers.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password))
}

export default Mongoose.model('users', SchemaUsers)
