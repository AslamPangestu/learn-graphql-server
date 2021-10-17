const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    description:String,
    release_year:Number,
    genre:String
})

const BookEntity = mongoose.model('Book',BookSchema)

module.exports = BookEntity