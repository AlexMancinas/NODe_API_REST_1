const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);

    },
    filename: function(req, file, cb){
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);

    }
});

const uploadMiddleware = multer({storage: storage});

module.exports = uploadMiddleware;   // export the router object so it can be used by the rest of the app