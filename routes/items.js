const express = require('express')
const router = express.Router()

const itemCtrl = require('../controllers/items')

router.get('/', itemCtrl.index)
router.get('/:id', itemCtrl.show)



module.exports = router