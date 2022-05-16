const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    product_name: {
        type: String
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
  

})

module.exports = mongoose.model('Product', productSchema)
