let  router = require('express').Router()
let {create, read, update, destroy, readId} = require('../controllers/car')
/* const schemaCar = require('../schemas/carEdit') */


router.post('/', create)
router.get('/', read)
/* router.put('/:id',passport.authenticate("jwt", { session: false }),validator(schemaCity), update) */
router.delete('/:id', destroy)
router.get('/:id', readId)




module.exports = router