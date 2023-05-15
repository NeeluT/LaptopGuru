// hard code 5 items
// users will be able to add these items from database to their carts or remove them (read and update, CRU only on this app)

require('dotenv').config()
const mongoose = require('../config/database')
const Item = require('./item')
mongoose.connect(process.env.DATABASE_URI)

const db = mongoose.connection

db.on('open', () => {
    // start with an array of items
    const startItems = [
        {
            name: 'macbook air', 
            price: 1500,
            description: 'Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display',
            // img: , 
        },
        {
            name: 'Dell', 
            price: 1200,
            description: 'Dell Newest Inspiron 15 3511 Laptop, 15.6" FHD Touchscreen',
            // img: , 
        },
        {
            name: 'Lenovo', 
            price: 800,
            description: 'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen',
            // img: , 
        },
        {
            name: 'HP', 
            price: 399,
            description: 'HP Pavillion 15.6 HD Newest Laptop Computer for Business and Student',
            // img: , 
        },
        {
            name: 'ASUS', 
            price: 250,
            description: 'ASUS Vivobook Laptop L210 11.6" Ultra Thin Laptop',
            // img: , 
        },
    ]
 
    Item.deleteMany({})
        .then(deletedItems => {
            console.log('this is what deleteMany returns', deletedItems)
            Item.create(startItems)
                .then(data => {
                    console.log('this is what was created', data)
                    db.close()
                })
                .catch(err => {
                    console.log(err)
                    db.close()
                })
        })
        .catch(err => {
            console.log(err)
            db.close()
        })
})