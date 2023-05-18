const express = require('express')
const router = express.Router()

const orderCtrl = require('../controllers/orders')
const order = require('../models/order')

// router.get('/past', orderCtrl.index)

router.get('/', orderCtrl.createEmpty)

router.get('/:id', orderCtrl.show)

router.patch('/:itemId', orderCtrl.updateOrder)

router.post('/:userId', orderCtrl.checkout)


module.exports = router