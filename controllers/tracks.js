const {tracksModel} = require("../models");

/**
 * Obtain list of tracks
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>{
    
    const data = await tracksModel.find({});

    res.send({data});
}

/**
 * Obtain a track
 * @param {*} req
 * @param {*} res 
 */

const getItem = (req, res) =>{}

/**
 * Create a track
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) =>{
    const {body} = req;

    console.log(body);
    const data = await tracksModel.create(body);

    res.send({data})

}

/**
 * Update a track
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = (req, res) =>{}

/**
 * Delete a track
 * @param {*} req
 * @param {*} res 
 */
const deleteItem = (req, res) =>{}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem};