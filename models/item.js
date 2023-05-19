const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {type:String,default:''}
},{
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)