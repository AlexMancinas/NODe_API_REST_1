const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage');

//TODO http://localhost/tracks GET, POST, PUT, DELETE

/**
 * 
 */


/**
 * 
 */

router.post("/", uploadMiddleware.single("myfile") , createItem);

module.exports = router;   // export the router object so it can be used by the rest of the app