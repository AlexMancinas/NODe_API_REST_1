const { tokenSign } = require('../utils/handleJwt');
const { matchedData } = require('express-validator');
const { encrypt } = require('../utils/handlePassword');
const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { compare } = require('bcryptjs');

/**
 * Controller that creates a new register
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false });
        const data = {
            token: await tokenSign(dataUser),
            data: dataUser,

        }
        res.send({ data });
    } catch (error) {

        handleHttpError(res, "ERROR_REGISTER_USER");
    }
}

/**
 * This controller allows you to login
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select("password name role email");
        if (!user) {
            
            handleHttpError(res, "USER_NOT_FOUND");
            return;
        }
        
        const hashPassword = user.get("password");
        console.log({hashPassword});
        const check = await compare(req.password, hashPassword); //Compare the password with the hashpassword in the database 
        
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 402);
            return;
        }
        user.set("password", undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            data: user,
        }

        res.send({ data });
    } catch (error) {

        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}

module.exports = { registerCtrl, loginCtrl }; 