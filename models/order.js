const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
    checkout: {
        type: Boolean, 
        default: false
    },
    // items: [{type: Schema.Types.ObjectId, ref: 'Item'}],  //Andrew says item should be items but we will have to "drop" / delete the database collection
    items: {type: [Schema.Types.ObjectId], ref: 'Item',default:[]}, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)