const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
    checkout: Boolean,
    item: [{type: Schema.Types.ObjectId, ref: 'Item'}],
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)