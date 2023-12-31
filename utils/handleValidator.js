const { validationResult } = require('express-validator');

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //Continua con el siguiente middleware, controllador o ruta
    } catch (error) {
        res.status(403);
        res.send({ errors: error.array() });
    }
};

module.exports = validateResults ;