const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        require:[true, 'Book title is require'],
        trim: true,
        maxLength: [100,'Book title cannot be more than 100 characters']
    },
    author:{
        type: String,
        require:[true, 'Author name is require'],
        trim: true,
    },
    year :{
        type:Number,
        require: [true, 'Publication year is required'],
        min: [1000,'Year must be at least 1000'],
        max: [new Date().getFullYear(),'Year cannot be in the future']
    },
    createdAt:{
         type: Date,
         default: Date.now
    }
})

module.exports =  mongoose.model('Book',BookSchema)