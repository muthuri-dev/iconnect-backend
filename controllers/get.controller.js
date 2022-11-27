//importing data schemas;
const {
    peers,
    blogs,
    techNews,
    mentors,
    projects,
} = require('../models/data.schema');



//controllers ;

//peers controller;
const peersGetController = async(req, res) => {
    try {
        await peers.find({})
            .then((response) => {
                if (response) {
                    res.json({ data: response });
                } else {
                    res.send(error.message);
                }
            })
            .catch((error) => {
                console.error(error.message);
                res.status(error.status).json(error.message);
            });
    } catch (error) { console.log(error.message) }
}


//blogs controller;
const blogsGetController = async(req, res) => {
    try {
        await blogs.find({})
            .then((response) => {
                if (response) {
                    res.json({ data: response });
                } else {
                    res.send(error.message);
                }
            })
            .catch((error) => {
                console.error(error.message);
                res.status(error.status).json(error.message);
            });
    } catch (error) { console.log(error.message) }
}

//news controller;
const newsGetController = async(req, res) => {
    try {
        await techNews.find({})
            .then((response) => {
                if (response) {
                    res.json({ data: response });
                } else {
                    res.send(error.message);
                }
            })
            .catch((error) => {
                console.error(error.message);
                res.status(error.status).json(error.message);
            });
    } catch (error) { console.log(error.message) }
}

//mentors controller;
const mentorsGetController = async(req, res) => {
    try {
        await mentors.find({})
            .then((response) => {
                if (response) {
                    res.json({ data: response });
                } else {
                    res.send(error.message);
                }
            })
            .catch((error) => {
                console.error(error.message);
                res.status(error.status).json(error.message);
            });
    } catch (error) { console.log(error.message) }
}


//projects controller;
const projectGetController = async(req, res) => {
    try {
        await projects.find({})
            .then((response) => {
                if (response) {
                    res.json({ data: response });
                } else {
                    res.send(error.message);
                }
            })
            .catch((error) => {
                console.error(error.message);
                res.status(error.status).json(error.message);
            });
    } catch (error) { console.log(error.message) }
}

//exporting controllers;
module.exports = {
    peersGetController,
    blogsGetController,
    newsGetController,
    mentorsGetController,
    projectGetController,
}
