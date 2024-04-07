const express = require('express');
const { createPirate } = require('../controllers/pirateController');
const {getPirates} = require('../controllers/pirateController');
const {getPirate} = require('../controllers/pirateController');
const {updatePirate} = require('../controllers/pirateController');
const {deletePirate} = require('../controllers/pirateController');
const router = express.Router();

router.post("/", createPirate);
router.get("/", getPirates);
router.get("/:id", getPirate);
router.put("/:id", updatePirate);
router.delete("/:id", deletePirate);


module.exports = {
    pirateRouter: router
}