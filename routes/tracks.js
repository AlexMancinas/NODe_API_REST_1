const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const router = express.Router();
const { validateCreateItem, validatorGetItem } = require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');
const authMiddleware = require('../middlewares/sessionMiddleware');
const checkRol = require('../middlewares/rol');
//TODO http://localhost/tracks GET, POST, PUT, DELETE  

/**
 * Route that gives us a list of items
 */
router.get("/", authMiddleware ,getItems);

/**
 * Route that gives us a specific item
 */
router.get("/:id", authMiddleware,validatorGetItem,getItem);

/**
 * Route that creates a new item
 */
router.post(
    "/", 
    authMiddleware,
    checkRol(["admin", "user"]),
    validateCreateItem,
    createItem
    );

/**
 * Route that updates an item
 */
router.put("/:id", authMiddleware,validatorGetItem, validateCreateItem, updateItem);

/**
 * Route that deletes an item
 */
router.delete("/:id", authMiddleware, deleteItem);


module.exports = router;   // export the router object so it can be used by the rest of the app