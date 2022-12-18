let router = require("express").Router();
let cars = require('./cars')
let items = require('./items')

router.use('/cars', cars)
router.use('/items', items)

module.exports = router;
