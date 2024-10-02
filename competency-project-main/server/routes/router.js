const express = require('express');
const router = express.Router();
const AnimalControl = require('../controllers/animal_controller');
// const UserControl = require('../controllers/user_controller');
const User = require('../models/user_model');
const passport = require('../passport');


// get animals
router.get('/animals', AnimalControl.getAnimals);

// create new user
router.post('/users', async (req, res) => {
    const { email, password } = req.body;
    try {
        const duplicateUser = await User.findOne({ email: email });
        if (duplicateUser) {
            return res.json({
                error: 'That email already exists in the database. Try again!'
            });
        } else {
            const newUser = new User({
                email: email,
                password: password
            });
            const saveNewUser = await newUser.save();
            res.json(saveNewUser)
        }
    } catch (err) {
        console.log('Error creating new user: ', err);
        res.status(500).json({ error: 'An error occurred whie signing up...' })
    }
}); // end create new user

// USER LOGIN ROUTE
// router.post(
//     '/login',
//     function (req, res, next) {
//         console.log('USER LOGIN, REQUEST BODY:');
//         console.log(req.body);
//         next();     
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('req.session.passport.user: ',  req.session.passport.user);
//         console.log('LOGGED IN', req.user);
//         let userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// ); //////////
// // login user
router.post('/login', function (req, res, next) {
    console.log('User login request: ', req.body); 
    next();
}, passport.authenticate('local'), (req, res) => {  
    console.log('req.session: ',  req.session);
    console.log('Logged in as: ', req.user);
    let user = {
        email: req.user.email,
        id: req.user._id,
        cart: req.user.cart
    };
    res.send(user)
}); // end login user


// router.post('/login',
//     passport.authenticate('local'), (req, res) => {
//         console.log('req.session.passport.user: ',  req.session.passport.user)
//         console.log('request: ', req.secret, req.cookies);
//         // res.cookie('user', 'dragon');
//         // console.log('cookies: ',req.cookies);
//         console.log('Logged in as: ', req.user);
//         let user = {
//             email: req.user.email,
//             id: req.user._id,
//             cart: req.user.cart
//         };
//         res.send(user);
//     }); // end login user
 
//  passport.authenticate('local', { 
//     successRedirect: '/about',
//     failureRedirect: '/login',
// })); 
//     console.log('Logged in as: ', req.user);
//     let userEmail = {
//         email: req.body.email
//     };
//     res.send(userEmail) 
// }); // end login user 

// check user status
router.get('/', (req, res, next) => {
    console.log('User status', req.user);
    // check if user is logged in
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
});

// logout user
router.post('/logout', (req, res) => {
    console.log('Logout user')
    // check if user is logged in
    if (req.user) {
        res.logout();
        res.send({ msg: 'Logging out user...' })
    } else {
        res.send({ msg: 'No user is logged in' })
    }
});



// router.put('/user', UserControl.loginUser);
// router.get('/user', UserControl.loginUser);
// router.get('/user/:id', UserControl.getCart);


module.exports = router;