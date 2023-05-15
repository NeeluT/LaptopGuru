const Order = require('../models/order')
const Item = require('../models/item')

// READ and update

// function index(req,res, next) {
//     Item.find({ user: req.user._id })
//         .then(orders => {
//             // this res.render will be looking for a view to render => from this app check the views folder, inside the views folder there is a folder call battle-teams inside of that folder there is a file called index
//             res.render('orders/index', {
//                 // we want to pass in the successfuly found orders as values to our views
//                 orders,
//             })
//         })
//         .catch(next)
// }

// function newOrder(req, res) {
//     res.render('orders/new')
// }

module.exports = {
    // index,
    // newOrder
}