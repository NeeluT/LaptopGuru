const Order = require('../models/order')
const Item = require('../models/item');
const order = require('../models/order');

// Do I ever want to have more than one incomplete order or user in the database?
// My route/controller above can contain control flow and conditional logic
// While this is not RESTful it is a good solution if the answer to 29 is No 

// when a user logs in if an order doesn't exist create one
// function findCurrentOrCreate (req, res, next) {
//     console.log('this is the user id in my new function', req.user._id)
//     if ()
//     Order.create({user: req.user._id})
//         .then(order => {
//             console.log('this is order*****************', order)
//             // res.render('orders/${order._id}',order) Andrew says that I don't HAVE TO render in my response. I might triger this in another controller
//             res.redirect(`orders/${order.id}`)
//         })
//         .catch(next)
// }

// function createEmpty (req, res, next) {
//     console.log('this is req body in create order*********************', req.user._id)
//     Order.create({user: req.user._id})
//         .then(order => {
//             console.log('this is order*****************', order)
//             // res.render('orders/${order._id}',order) Andrew says that I don't HAVE TO render in my response. I might triger this in another controller
//             res.redirect(`orders/${order.id}`)
//         })
//         .catch(next)
// }


// create an order with no items in it's item array
function createEmpty (req, res, next) {
    console.log('this is req body in create order*********************', req.user._id);
    Order.find({user: req.user._id, checkout: false})
    .then(order => {
        if(!order[0]){
            Order.create({user: req.user._id})
            .then(order => {
                console.log('this is order*****************', order)
                res.redirect(`orders/${order.id}`)
            })
            .catch(next)
        }else{
            res.redirect(`orders/${order[0].id}`)
        };
    })
    .catch(next)
}
// find order and render it's items on orders/show (shopping cart)
function show(req,res, next) {
    console.log('in the show function BEFORE look up by id req.params.id is', req.params.id)
    Order.findById(req.params.id)
    .populate('items')
        .then(order => {
            console.log('in show the order after populate is', order)
            res.render('orders/show', {order}) 
        })
        .catch(next)
}

// find the order that is not complete (not checked out) and add selected items to it's item array.
function updateOrder(req, res, next) {
    console.log('in update order the req.params.itemId is', req.params.itemId)
    // find the order that has a false checkout and then push the item id to the order item array. Then save. 
    Order.findOne({user: req.user._id, checkout: false})
        .then(order => {
            console.log('in updateorder this is order we found', order)
            order.items.push(req.params.itemId)
            return order.save()
        })
        .then(order => {
            console.log('we saved the order', order)
            res.redirect('/')
        })
        .catch(next)
    
    }       

    function checkout(req,res,next){
        Order.findOne({user: req.user._id, checkout: false})
            .then(order => {
                order.checkout = !order.checkout;
                return order.save()
            })
            .then(order => {
                console.log('Checked out!!!!')
                res.redirect('/')
            })
            .catch(next)  
    }

module.exports = {
    show,
    updateOrder,
    createEmpty,
    checkout
}