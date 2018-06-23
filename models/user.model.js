const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
        minlength: [3, 'Min 3']
    },
    email: {
        type: String,
        required: true,
        unique: false,
        match: [/^\w+@\w+\.\w{2,6}$/, 'Invalid email pattern']
    },
    age: Number,
    married: {
        type: Boolean,
        default: false
    },
    skills: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;