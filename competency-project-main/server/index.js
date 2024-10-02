const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const db = require('./config');

const app = express();
const PORT = 3030;

const router = require('./routes/router');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// sessions
app.use(
    session({
        secret: 'dragonsecret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            // secure: false  
            // httpOnly: true,
        }
    })
)
app.use(cookieParser('dragonsecret'));

app.use(passport.initialize());
app.use(passport.session()); // deserialize user

app.use('/users', router)
app.use('/login', router)
app.use('/api', router)
// app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app; 


// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const morgan = require('morgan');
// // const passport = require('./passport');
// // const session = require('express-session');

// // const app = express();
// // const PORT = 3030;

// // const router = require('./routes/router');

// // app.use(cors());
// // app.use(morgan('dev'));
// // // app.use(cookieParser('dragons-bane'));
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// // // passport.use(LocalStrategy);
// // // sessions
// // app.use(
// //     session({
// //         secret: 'dragons-bane',
// //         resave: false,
// //         saveUninitialized: false,
// //         cookie: {
// //             maxAge: 86400000,
// //             // secure: false
// //             // httpOnly: true, 
// //         }
// //     })
// // )

// // app.use(passport.initialize());
// // app.use(passport.session()); // deserialize user

// // // app.use('/', router); 
// // app.use('/users', router)
// // app.use('/login', router)
// // app.use('/api', router)
// // // app.use(express.static(path.join(__dirname, '/')));

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// // module.exports = app; 

// ///////////////////////
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const morgan = require('morgan');
// const passport = require('passport');
// const session = require('express-session');
// const User = require('./models/user_model')
// const LocalStrategy = require('passport-local').Strategy

// const app = express();
// const PORT = 3030;

// const router = require('./routes/router');

// app.use(cors());
// app.use(morgan('dev'));
// // app.use(cookieParser('dragons-bane'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// // passport.use(LocalStrategy);
// // sessions
// app.use(
//     session({
//         secret: 'dragons secret clubhouse',
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24,
//             // secure: false
//             // httpOnly: true, 
//         }
//     })
// )

// app.use(passport.initialize());
// app.use(passport.session()); // deserialize user


// // const authUser = (email, password, done) => {

// //     const user = User.findOne({email: email});
// //     // IF NO USER IS FOUND, RETURN AN ERROR
// //     if (!user) {
// //         return done(null, false, { message: 'Incorrect username' });
// //     }

// //     // CHECKS IF THE PASSWORD PROVIDED MATCHES THE USER'S PASSWORD
// //     if (!user.checkPassword(password)) {
// //         return done(null, false, { message: 'Incorrect password' });
// //     }

// //     // IF EVERYTHING IS VALID, RETURN THE USER
// //     return done(null, user);
// // }


// passport.use(new LocalStrategy(
//     {
//         usernameField: 'email',
//         passwordField: 'password'
//     },
//     function (email, password, done) {
//         User.findOne({ email: email }).then(theUser => {
//             if (!theUser) {
//                 return done(null, false, {
//                     message: "User does not exist"
//                 }); 
//             }
//             if (!theUser.validPass(password)) {
//                 return done(null, false, { message: "Password is not valid." });
//             }
//             return done(null, true);
//         });
//     }
// ))

// passport.serializeUser(function (user, done) {
//     console.log('serialized user')
//     done(null, user.id);
// });
// passport.deserializeUser(function (user, done) {
//     console.log('deserialized user')
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// app.post(
//     '/api/login', passport.authenticate("local"),
//     function (req, res) {
//         console.log('posting login')
//         res.json(req.user);
//     }
// ); 



// // app.use('/', router); 
// app.use('/users', router)
// // app.use('/login', router)
// app.use('/api', router)
// // app.use(express.static(path.join(__dirname, '/')));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// module.exports = app; 