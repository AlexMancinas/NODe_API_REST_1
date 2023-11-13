const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const router = express.Router();
const { validateCreateItem } = require('../validators/tracks');
const customHeader = require('../middlewares/customHeader');

//TODO http://localhost/tracks GET, POST, PUT, DELETE  

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validateCreateItem , customHeader,createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);


module.exports = router;   // export the router object so it can be used by the rest of the app