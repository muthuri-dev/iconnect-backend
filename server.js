const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT;


//initializing app;
const app = express();


//middleware;
app.use(cors());
app.use(bodyParser.json());

//static folder;
app.use(express.static('uploads'));


//connecting to the database;
const {
    database,
} = require('./database/mongodb');


//importing routes;
const {
    getRouter,
} = require('./routers/get.route');

const {
    postRouter,
} = require('./routers/post.route');


//initializing get routes;
app.use('/IKonnect', getRouter);

//initializing post routes;
app.use('/IKonnect', postRouter);


//listening to the server;
app.listen(port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        database();
        console.log(`App listening on ${port}`);
    }
});
