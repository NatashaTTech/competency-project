const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://127.0.0.1/savage_exotics';

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connect(url).then(() => {
    console.log('Mongo connection established')
}, (err) => {
    console.log('Error connecting to Mongo: ', err)
});


module.exports = mongoose.connection; 