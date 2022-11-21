// importing data schema;
const {
    peers,
    blogs,
    groups,
    techNews,
    mentors,
    projects,
    teams,
    errors,
} = require('../models/data.schema');



//controllers;

//peer post controller;

const peerPostController = (req, res) => {
    const newPeer = new peers({
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
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
            image: req.file.filename,
        });
        newBlog.save((error) => {
            if (!error) {
                res.status(200).send('saved')
            } else {
                res.send(error.message);
            }
        })
    } catch (error) { console.log(error.message) }
}

//group post  Controller;
const groupPostController = (req, res) => {
        try {
            const newGroup = new groups({
                groupName: req.body.groupName,
                image: req.file.filename,
            });
            newGroup.save((error) => {
                if (!error) {
                    res.status(200).send('saved')
                } else {
                    res.send(error.message);
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
            image: req.file.filename,
        });
        moreNews.save((error) => {
            if (!error) {
                res.status(200).send('saved')
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
            username: req.user.username,
            company: req.user.company,
            linkedIn: req.user.linkedIn,
        });
        newMentor.save((error) => {
            if (!error) {
                res.status(200).send('saved')
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
            category: req.body.category,
            liveLink: req.body.liveLink,
            gitHub: req.body.gitHub,
        });
        newProject.save((error) => {
            if (!error) {
                res.status(200).send('saved')
            } else {
                res.send(error.message);
            }
        });
    } catch (error) { console.log(error.message) }
}

//teams controller;
const teamPostController = (req, res) => {
    try {
        const newTeam = new teams({
            teamName: req.body.teamName,
            members: req.body.members,
        });
        newTeam.save((error) => {
            if (!error) {
                res.status(200).send('saved')
            } else {
                res.send(error.message);
            }
        });
    } catch (error) { console.log(error.message) }
}

//errors controller;
const errorsPostController = (req, res) => {
    try {
        const newError = new errors({
            technology: req.body.technology,
            image: req.file.filename,
            description: req.body.description,
        });
        newError.save((error) => {
            if (!error) {
                res.status(200).send('saved')
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
    groupPostController,
    newsPostController,
    mentorsPostController,
    projectPostController,
    teamPostController,
    errorsPostController,
}