const express = require('express');

//initializing router;
const router = express.Router();

//importing controllers;
const {
    peersGetController,
    blogsGetController,
    newsGetController,
    mentorsGetController,
    projectGetController,
} = require('../controllers/get.controller');

//Application routes;

router.get('/peers', peersGetController);

router.get('/blogs', blogsGetController);

router.get('/news', newsGetController);

router.get('/mentors', mentorsGetController);

router.get('/projects', projectGetController);


//exporting router;
module.exports = {
    getRouter: router,
}
