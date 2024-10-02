const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../models/user_model');

// login saves user id to session
passport.serializeUser((user, done) => {
    console.log('Serializing user...: ', user);
    done(null, { _id: user._id });
});
// user object is attached at req.user
passport.deserializeUser(async (id, done) => {
    console.log('deserialized???')
    try {
        const user = await User.findOne({ _id: id }, 'email');
        console.log('Deserializing user...: ', user);
        done(null, user);
    } catch (err) {
        done(err, null)
    }
});

// passport.deserializeUser((id,done) => {
//     User.findById(id, (err, user) => {
//         done(err, user)
//     })
// })

// passport.deserializeUser((id, done) => {
//     console.log('deserialized???')
//     User.findById(id, (err, user) => {
//         console.log('Deserializing user...: ', user);
//         return done(err, user);
//     })

// });

// local strategy authentication
passport.use(LocalStrategy);

module.exports = passport;
