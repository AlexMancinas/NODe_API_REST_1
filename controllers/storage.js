const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * Obtain list of tracks
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    const data = await storageModel.find({});

    res.send({ data });
}

/**
 * Obtain a track
 * @param {*} req
 * @param {*} res 
 */

const getItem = (req, res) => { }

/**
 * Create a track
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const { body, file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`

        }
        console.log(file);
        const data = await storageModel.create(fileData);

        res.send({ data })
    } catch (error) {
        res.status(400).send({ error: error.message })
        
    }

}

/**
 * Update a track
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = (req, res) => { }

/**
 * Delete a track
 * @param {*} req
 * @param {*} res 
 */
const deleteItem = (req, res) => { }

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };