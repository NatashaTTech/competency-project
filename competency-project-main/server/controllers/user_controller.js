

const Users = require('../models/user_model')

module.exports = {
    // create new user
    // createUser(req, res) {
    //     const {email, password } = req.body;
    //     try {

    //     }


    //     Users.create(userProps)
    //         .then(user => res.send(user))
    //         .catch(err => {
    //             res.status(500).send(err)
    //             console.log('ERROR:' + err)
    //         })  
    // }, 
    // get user for login
    // loginUser(req, res, next) {
    //     const findUser = { email: req.body.email, password: req.body.password };
    //     const logMeIn = { isLoggedIn: true };
    //     Users.findOneAndUpdate(findUser, logMeIn)
    //         .then((user) => { 
    //             console.log('found a match: ' + user._id)
    //             console.log('found user: ' + user)
    //             res.send(user)  
    //         })
    //         .catch((err) => console.log('...does not match any known user' + err))
    // },  
    // loginUser(req, res, next) {
    //     const findUser = { email: req.body.email, password: req.body.password };
    //     // const logMeIn = { isLoggedIn: true };
    //     console.log(req.body)  
    //     Users.findOne(findUser)
    //         .then((user) => { 
    //             console.log('found a match: ' + user._id)
    //             console.log('found user: ' + user)
    //             res.send(user)
    //         })
    //         .catch((err) => console.log('...does not match any known user' + err))
    // },
    // get user's cart after login
    getCart(req, res) {
        const getUserCart = req.params.id; 
        console.log('find this user ', getUserCart)
        Users.findById(getUserCart)
            .then(user => {
                console.log('found this user cart: ' + user.cart)
                res.send(user.cart)
            }) 
            .catch(err => console.log('error: ' + err)) 
    }
} 