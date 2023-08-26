const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    uid: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    decription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Products', ProductSchema)