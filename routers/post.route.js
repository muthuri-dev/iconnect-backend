const express = require('express');

//initializing router;
const router = express.Router();

//importing controllers;
const {
    registerController
} = require('../controllers/register.controller');

const {
    loginController,
} = require('../controllers/login.controller');

const {
    peerPostController,
    blogPostController,
    newsPostController,
    mentorsPostController,
    projectPostController,
} = require('../controllers/post.controller');


//importing upload middleware;
const {
    upload,
} = require('../middlewares/multer.middleware');


//Application routes;

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/peers', peerPostController);

router.post('/blogs', upload, blogPostController);

router.post('/news', upload, newsPostController);

router.post('/mentors', mentorsPostController);

router.post('/projects', upload, projectPostController);


//exporting controllers;
module.exports = {
    postRouter: router
}