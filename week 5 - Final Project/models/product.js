var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: { type: String, required: true, trim: true },
    //slug
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 1 },
    description: String,
    imageUrl: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category', index: true }],
    brand:{type: Schema.Types.ObjectId, ref: 'Brand'},
    // variants: Array, //price can be on variant
    // features: Array,
    // keyFeatures: Array,
    // UserComment
    isActive:{type:Boolean}
}).index({
    'title': 'text',
    'description': 'text'
});

module.exports = mongoose.model('Product', ProductSchema);