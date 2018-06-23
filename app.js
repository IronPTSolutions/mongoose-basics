const PORT = 3000;
const express = require('express');
const path = require('path');
const User = require('./models/user.model');
const app = express();

require('./configs/db.config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/users', (req, res, next) => {
    const criteria = {};
    if (req.query.age) {
        criteria.age = req.query.age;
    }
    if (req.query.name) {
        criteria.name = new RegExp(req.query.name, 'i');
    }

    User.find(criteria)
        .then(users => {
            console.log(users);
            res.render('users/index', {
                users
            })
        })
        .catch(error => next(error));
});

app.get('/users/:email', (req, res, next) => {
    User.findOne({ email: req.params.email })
        .then(user => {
            res.render('users/details', {
                user
            })
        })
        .catch(error => next(error));
});

app.listen(PORT, () => {
    console.info(`App connected to ${PORT} port.`);
});