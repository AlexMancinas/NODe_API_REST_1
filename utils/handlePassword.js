const bypcryptjs = require('bcryptjs');


/**
 * passwordPlain: password in plain text without encrypt as example '123456'
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) =>{
    const hash = await bypcryptjs.hash(passwordPlain, 10);
    return hash;
}

/**
 * passwordPlain: password in plain text without encrypt as example '123456'
 * hashPassword: pa
 */
const compare = async (passwordPlain, hashPassword) =>{
        return await bypcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {
    encrypt,
    compare
}