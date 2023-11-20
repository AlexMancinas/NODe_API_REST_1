const { check, validationResult } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validateCreateItem = [
    check('name')
        .exists()
        .notEmpty(),
    // .isLength({ min: 3, max: 50 }),
    check('album')
        .exists()
        .notEmpty(),
    check('cover')
        .exists()
        .notEmpty(),
    check('artist')
        .exists()
        .notEmpty(),
    check('artist.name')
        .exists()
        .notEmpty(),
    check('artist.nickname')
        .exists()
        .notEmpty(),
    check('artist.nationality')
        .exists()
        .notEmpty(),
    check('duration')
        .exists()
        .notEmpty(),
    check('duration.start')
        .exists()
        .notEmpty(),
    check('duration.end')
        .exists()
        .notEmpty(),
    check('mediaId')
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorGetItem = [
    check('id')
        .exists()
        .notEmpty(),
        

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorUpdateItem = [
    check("id")
        .exists()
        .notEmpty(),
     
    check("name")
        .exists()
        .notEmpty(),
    check("album")
        .exists()
        .notEmpty(),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
module.exports = { validateCreateItem, validatorGetItem }; 