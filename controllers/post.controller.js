// importing data schema;
const {
    peers,
    blogs,
    techNews,
    mentors,
    projects,
} = require('../models/data.schema');

const fs = require('fs');

//controllers;

//peer post controller;

const peerPostController = (req, res) => {
    const newPeer = new peers({
        username: req.body.username,
        email: req.body.email,
        portfolio: req.body.portfolio,
        linkedIn: req.body.linkedIn,
        skills: req.body.skills,
    });
    newPeer.save((error) => {
        if (!error) {
            res.status(200).send('saved')
        } else {
            res.send(error.message);
        }
    })
}

//blog post controller;
const blogPostController = (req, res) => {
    try {
        const newBlog = new blogs({
            title: req.body.title,
            content: req.body.content,
            image: {
                data: req.file.filename,
                contentType: 'image/png'
            }
        });
        newBlog.save((error) => {
            if (error) {
                res.send(error.message);
            } else {
                res.status(200).send(newBlog);
            }
        })
    } catch (error) { console.log(error.message) }
}

//news controller;
const newsPostController = (req, res) => {
    try {
        const moreNews = new techNews({
            title: req.body.title,
            content: req.body.content,
            image: {
                data: req.file.filename,
                contentType: 'image/png'
            }
        });
        moreNews.save((error) => {
            if (!error) {
                res.status(200).send(moreNews);
            } else {
                res.send(error.message);
            }
        });
    } catch (error) { console.log(error.message) }
}

//mentors controller;
const mentorsPostController = (req, res) => {
    try {
        const newMentor = new mentors({
            username: req.body.username,
            company: req.body.company,
            meeting: req.body.meeting,
        });
        newMentor.save((error) => {
            if (!error) {
                res.status(200).send(newMentor);
            } else {
                res.send(error.message);
            }
        });
    } catch (error) { console.log(error.message) }
}

//projects controller;
const projectPostController = (req, res) => {
    try {
        const newProject = new projects({
            projectName: req.body.projectName,
            description: req.body.description,
            liveLink: req.body.liveLink,
            gitHub: req.body.gitHub,
            image: {
                data: req.file.filename,
                contentType: 'image/png'
            }
        });
        newProject.save((error) => {
            if (!error) {
                res.status(200).send(newProject);
            } else {
                res.send(error.message);
            }
        });
    } catch (error) { console.log(error.message) }
}


//exporting controllers;
module.exports = {
    peerPostController,
    blogPostController,
    newsPostController,
    mentorsPostController,
    projectPostController,
}