const mongoose = require('mongoose');
const schema = mongoose.Schema;


//login schema;
const registerSchema = new schema({
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamp: true });

const register = mongoose.model('register', registerSchema);


//peers schema;
const peerSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    portfolio: String,
    linkedIn: String,
    gitHub: String,
    twitter: String,
    skills: String,

}, { timestamp: true });

const peers = mongoose.model('peers', peerSchema);

//blogs schema;
const blogSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
    }
}, { timestamp: true });

const blogs = mongoose.model('blogs', blogSchema);

//groups schema;
const groupSchema = new schema({
    groupName: {
        type: String,
        required: true,
    },
    image: Buffer,
}, { timestamp: true });

const groups = mongoose.model('groups', groupSchema);

//techNews schema;
const techNewsSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
    }
}, { timestamp: true });

const techNews = mongoose.model('techNews', techNewsSchema);


//mentors schema;
const mentorSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    company: String,
    linkedIn: {
        type: String,
        required: true,
    }
}, { timestamp: true });

const mentors = mongoose.model('mentor', mentorSchema);


//project schema;
const projectsSchema = new schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: String,
    liveLink: String,
    gitHub: String,
}, { timestamp: true });


const projects = mongoose.model('project', projectsSchema);


//teams schema;
const teamsSchema = new schema({
    teamName: {
        type: String,
        required: true
    },
    members: String,
}, { timestamp: true });


const teams = mongoose.model('teams', teamsSchema);


//errors schema;
const errorSchema = new schema({
    technology: String,
    image: Buffer,
    description: String,
});

const errors = mongoose.model('errors', errorSchema);


//exporting schemas;
module.exports = {
    register,
    peers,
    blogs,
    groups,
    techNews,
    mentors,
    projects,
    teams,
    errors,
}