const Item = require('../models/item')

function index(req, res) {
    Item.find({})
    .then(itemDocs => {
        // console.log('found all the items\n', itemDocs)

        res.render('items/index', { items: itemDocs })
    })
    .catch(err => {
        console.log(err)

        return res.send('err creating, check the terminal')
    })
}

function show(req, res, next) {
    Item.findById(req.params.id)
    .then(item => {
        return res.render('items/show', {
            item,
        })
    })
    .catch(next)
}

 

module.exports = {
index,
show
}