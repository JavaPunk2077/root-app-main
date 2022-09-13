const { mongoose} = require('mongoose')

const Item = new mongoose.Schema(
    {   
        itemid: {type:String, required: true, unique: true},
        title: {type:String, required: true},
        image:{type:String},
        base64: {type:String, required: true},
        author: {type: String, required: true},
        type: {type:String, required: true},
    },{ collection: 'ItemData' }
)

const model = mongoose.model('ItemData', Item)

module.exports = model