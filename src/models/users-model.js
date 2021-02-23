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
    confirmEmail: Boolean,
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
    phones: [{
        number: String,
    }],
    roles: [{
        name: String,
    }]
})

SchemaUsers.index({ mainEmail: 1 })

SchemaUsers.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    Bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err)

        // hash the password using our new salt
        Bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)
            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

SchemaUsers.methods.comparePassword = function(candidatePassword, cb) {
    Bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

export default Mongoose.model('users', SchemaUsers)
