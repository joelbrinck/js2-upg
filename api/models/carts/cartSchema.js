const mongodb = require('mongoose');

const cartSchema = mongodb.Schema({

  cart: { type: Object, required: true, default: [] },
  userId: { type: mongodb.Schema.Types.ObjectId, ref: 'User', required: true},
  
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }

}) 

module.exports = mongodb.model('Cart', cartSchema);