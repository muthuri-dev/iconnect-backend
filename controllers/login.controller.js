//importing bcrypt;
const bcrypt = require('bcryptjs');


//importing data schema;
const {
    register
} = require('../models/data.schema');


// login controller;
const loginController = async(req, res) => {
    const { email, password } = req.body;
    const user = await register.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return res.json({
                user: true,
                status: "ok",
            });
        } else {
            return res.json({
                user: false,
                status: "error",
            });
        }
    } else {
        res.send('email not registered');
    }

}


//exporting controller;
module.exports = {
    loginController,
}