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
    meeting: {
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
    image: Buffer,
}, { timestamp: true });


const projects = mongoose.model('project', projectsSchema);




//exporting schemas;
module.exports = {
    register,
    peers,
    blogs,
    techNews,
    mentors,
    projects,
}
