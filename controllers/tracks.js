const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchMedia, matchedData } = require("express-validator");
/**
 * Obtain list of tracks
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    try {
        const user = req.user;
        const data = await tracksModel.find({});
        // console.log(data);
        res.send({ data, user });

    }
    catch (err) {
        handleHttpError(res, 'Error en getItems');
    }
}

/**
 * Obtain a track
 * @param {*} req
 * @param {*} res 
 */

const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error en getItem');
    }
}

/**
 * Create a track
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body);

        res.send({ data })
    } catch (err) {
        handleHttpError(res, 'Error en createItem');
    }


}

/**
 * Update a track
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);

        const data = await tracksModel.findOneAndUpdate(
            { _id: id }, body
        );

        res.send({ data })
    } catch (err) {
        handleHttpError(res, 'Error en updateItem');
    }
}

/**
 * Delete a track
 * @param {*} req
 * @param {*} res 
 */
const deleteItem = async (req, res) => {

    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.delete({ _id: id });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error en deleteItem');
        console.log(error);
    }

}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };