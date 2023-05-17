const Order = require('../models/order')
const Item = require('../models/item')


function createEmpty (req, res, next) {

    console.log('this is req body in create order*********************', req.user._id)
    Order.create({user: req.user._id})
        .then(order => {
            console.log('this is order*****************', order)
            // res.render('orders/${order._id}',order) Andrew says that I don't HAVE TO render in my response. I might triger this in another controller
            res.redirect('orders/show')
        })
        .catch(next)
}

function show(req,res, next) {
    console.log('in the show function BEFORE look up by id req.params', req.params)
    console.log('in the show function BEFORE look up by id req.params.id is', req.params.id)
    Order.findById(req.params.id)
    .populate('Item')
        .then(order => {
            console.log('in show the order after populate is', order)
            res.render('orders/show', {order}) 
        })
        .catch(next)
}


// function createWithItem (req, res, next) {
//     console.log('this is req body in create order//////////////', req.user._id)
//     console.log('this is req.body in createWithItem/////////////////', req.body)
    // We can put items into the req body from the browser. We specifically want the ids as an array
    // Because the req body already has good data we can add the user to it here before passing to create, to create an order owned by that user with those items
    // We might also have to be explicit about what the value of this checked out / my boulian is because we did not set the default in the model

    // Order.findById(req.params.id)
    //     .then(order => {
    //         order.item.push(req.body.itemId)
    //         return order.save()
    //     })
        //     .then(order => {
        //         res.render('orders/${order._id}',order)
        // })
        // .catch(next)

    // Order.create({user: req.user._id})
    //     .then(order => {
    //         console.log('/this is order//////////////////', order)
    //         res.render('orders/${order._id}',order)
    //     })
    //     .catch(next)
// }

// Do I ever want to have more than one incomplete order or user in the database?
// My route/controller above can contain control flow and conditional logic
// While this is not RESTful it is a good solution if the answer to 29 is No 



// READ and update

//???????? Is this going to show a list of all past orders? Do we want that?
function index(req,res, next) {
    Item.find({ user: req.user._id })
        .then(orders => {
            res.render('orders/index', {
                // we want to pass in the successfuly found orders as values to our views
                orders,
            }) 
        })
        .catch(next)
}


function updateOrder(req, res, next) {
    Item.findById(req.params.id)
        .populate('item')
        .then(order => {
            order.item.push(req.body.orderId)
            return order.save()
            res.render('orders/index', order)
        })
        .catch(next)
    
    }       


module.exports = {
    show,
    index,
    updateOrder,
    createEmpty,
    // createWithItem,
}