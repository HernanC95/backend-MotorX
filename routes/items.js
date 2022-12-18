let  router = require('express').Router()
let {create, read, destroy, readId} = require('../controllers/item')


router.post('/', create)
router.get('/', read)
router.delete('/:id', destroy)
router.get('/:id', readId)

module.exports = router