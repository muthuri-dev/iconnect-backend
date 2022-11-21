const express = require('express');

//initializing router;
const router = express.Router();

//importing controllers;
const {
    peersGetController,
    blogsGetController,
    groupsGetController,
    newsGetController,
    mentorsGetController,
    projectGetController,
    teamsGetController,
    errorsGetController,
} = require('../controllers/get.controller');

//Application routes;

router.get('/peers', peersGetController);

router.get('/blogs', blogsGetController);

router.get('/groups', groupsGetController);

router.get('/news', newsGetController);

router.get('/mentors', mentorsGetController);

router.get('/projects', projectGetController);

router.get('/teams', teamsGetController);

router.get('/errors', errorsGetController);


//exporting router;
module.exports = {
    getRouter: router,
}