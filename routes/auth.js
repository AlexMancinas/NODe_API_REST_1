const express = require('express');
const router = express.Router();
const { validatorRegister, validatorRegisterItem, validatorLogin } = require('../validators/auth');
;
const { registerCtrl, loginCtrl} = require('../controllers/auth');
//TODO http://localhost/auth GET, POST, PUT, DELETE  



/**
 * Route that creates a new register
 * http://localhost/auth/login
 */

router.post("/register", validatorRegister,registerCtrl);

router.post("/login", validatorLogin,loginCtrl);



module.exports = router;   // export the router object so it can be used by the rest of the app