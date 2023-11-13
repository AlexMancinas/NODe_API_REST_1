const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const router = express.Router();
const { validateCreateItem, validatorGetItem } = require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');

//TODO http://localhost/tracks GET, POST, PUT, DELETE  

/**
 * Route that gives us a list of items
 */
router.get("/", getItems);

/**
 * Route that gives us a specific item
 */
router.get("/:id", validatorGetItem,getItem);

/**
 * Route that creates a new item
 */
router.post("/", validateCreateItem , customHeader,createItem);

/**
 * Route that updates an item
 */
router.put("/:id", validatorGetItem, validateCreateItem, updateItem);

/**
 * Route that deletes an item
 */
router.delete("/:id", deleteItem);


module.exports = router;   // export the router object so it can be used by the rest of the app