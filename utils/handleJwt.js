const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * You must sign and pas the user object to this function
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = await jwt.sign(
        {
            _id: user._id,
            role: user.role,

        },
        JWT_SECRET,
        {
            expiresIn: '2h',

        },

    ); 
    return sign;
};

/**
 * you must pass the token to this function
 * @returns null if the token is not valid
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null;
    }
 }

module.exports = {
    tokenSign,
    verifyToken
}