const User = require('../models/user.model');
require('../configs/db.config');

const user = new User({
    name: 'Pepe',
    email: 'pepe@gmail.com',
    age: 22,
    skills: [
        "js",
        "?"
    ]
});

user.save()
    .then(() => {
        console.info('OK!');
    })
    .catch(error => {
        console.error(error);
    })

// user.save()
//     .then(() => {
//         console.info('Ok!');
//     })
//     .catch(error => {
//         console.log(error);
//     });

// User.findOneAndUpdate({ email: "carlos@gmail.com" }, { $set: { name: 'Carlos' } })
//     .then(user => {
//         if (user) {
//             console.info('User updated!');
//         } else {
//             console.warn('User not found!');
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     })

// User.findOneAndUpdate({ email: "carlos@gmail.com" }, { $set: { name: 'Carlos' }}, (error, user) => {
//     if (error) {
//         console.error(error);
//     } else if (!user) {
//         console.warn('User not found!');
//     } else {
//         console.info('User updated!');
//     }
// })

// User.findOne({ email: "pepe@gmail.com" })
//     .then(user => {
//         if (user) {
//             user.name = 'Juan';
//             return user.save();
//         }
//     })
//     .then(() => {
//         console.info('User saved!');
//         return User.deleteOne({ email: "pepe@gmail.com" });
//     })
//     .then(() => {
//         console.info('User deleted!');
//     })
//     .catch(error => {
//         console.error(error);
//     })


// User.findOne({ email: "pepe@gmail.com"}, (error, user) => {
//     if (error) {
//         console.error(error);
//     } else if (user) {
//         user.name = 'Juan';
//         user.save(( error) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.info('Ok!');
//                 User.deleteOne({ email: user.email}, (error) => {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.info('deleted!');
//                     }
//                 })
//             }
//         });
//     } else {
//         console.info('User not found!');
//     }
// });

