const multer = require('multer');


//creating a storage and exporting the middleware function;
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname + "" + Date.now() + file.fieldname);
    }
});

//creating the middleware;
const upload = multer({
    storage: storage,
}).single('image');

//export the middleware;
exports.upload = upload;
