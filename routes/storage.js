const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage")
const {
  getItems,
  getItem,
  updateItem,
  deleteItem,
  createItem,
} = require("../controllers/storage");

//TODO http://localhost/tracks GET, POST, PUT, DELETE

/**
 *  get all tracks
 */
router.get("/", getItems);

/**
 *  get a track by id
 */
router.get("/:id", validatorGetItem, getItem);

/**
 *  Create a track
 */
router.post("/", uploadMiddleware.single("myfile") , createItem);

/**
 * Delete a track
 */
router.delete("/:id", validatorGetItem, deleteItem);



module.exports = router;   // export the router object so it can be used by the rest of the app