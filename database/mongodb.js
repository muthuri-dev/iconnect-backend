const mongoose = require('mongoose');
require('dotenv').config();

//database url;
const mongodb = process.env.MONGODB_ONLINE_DATABASE;


//connecting to mongodb function;

const database = () => {
    mongoose.connect(mongodb)
        .then(() => console.log('Connected to the database'))
        .catch(error => console.error(error.message));

}

//exporting database function;
module.exports = {
    database
}