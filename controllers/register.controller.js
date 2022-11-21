//importing bcrypt;
const bcrypt = require('bcryptjs');


//importing data schemas;
const {
    register,
} = require('../models/data.schema');



//controllers;

//register controller;

const registerController = async(req, res) => {
    const user = new register({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    await user.save((error) => {
        if (!error) {
            res.status(200).json(user);
        } else {
            console.log(error.message);
        }
    });
}

//exporting controller;
module.exports = {
    registerController,
}