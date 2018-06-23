require('../configs/db.config');
const User = require('../models/user.model');
const users = require('./users.data');

User.insertMany(users)
    .then(() => {
        console.info('Seeds ready!');
    })
    .catch(error => {
        console.error(error);
    });
