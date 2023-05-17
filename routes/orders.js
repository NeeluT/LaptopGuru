const express = require('express')
const router = express.Router()

const orderCtrl = require('../controllers/orders')
const order = require('../models/order')

router.get('/past', orderCtrl.index)
// router.post('/', orderCtrl.updateOrder)

router.get('/', orderCtrl.createEmpty)
// router.get('/:id', orderCtrl.createWithItem)

router.get('/show', orderCtrl.show)


module.exports = router