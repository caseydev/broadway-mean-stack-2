var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderDetailsSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    total: {type: Number }
});

var OrderSchema = new Schema({
    // buyer details
    name: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    email: String,
    shippingAddress: String,
    billingAddress: String,
    // price details
    items: [OrderDetailsSchema],
    shipping: {type: Number, default: 0.0 },
    tax: {type: Number, default: 0.0 },
    discount: {type: Number, default: 0.0 },
    subTotal: {type: Number },
    total: {type: Number, required: true},
    // payment info
    status: { type: String, default: 'pending' }, // pending, paid/failed, delivered, canceled, refunded.
    paymentType: { type: String, default: 'Stripe' },
    paymentStatus: Schema.Types.Mixed,
    orderStatus: Object({ name: String, val: Number}),
    orderDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Order', OrderSchema);