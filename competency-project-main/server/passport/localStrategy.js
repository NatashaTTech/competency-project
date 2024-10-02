// const passport = require('passport');
const User = require('../models/user_model');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'email'
        // passReqToCallback :true
        // passwordField: 'password'
    },
     async function (email, password, done) {
        try {
            // find user by email
            const user = await User.findOne({ email: email});
            console.log('user...: ', user)

            // if no user is found
            if (!user) {
                return done(null, false, { message: 'No user found with that email' }); 
            }
            // if entered password doesn't match stored password
            if (!user.checkPass(password)) { 
                return done(null, false, { message: 'Incorrect password' });
            }     
            // if successful, return user 
            return done(null,user); 
        } catch (err) { 
            return done(err);   
        }
    }     
);

module.exports = strategy;
