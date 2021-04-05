const mongodb = require('mongoose');
const Cart = require('./cartSchema');



exports.getCart = (req, res) => {
  Cart.find({ userId: req.userData.id})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.createCart = (req, res) => {
  const newCart = new Cart({
    cart: req.body,
    userId: req.userData.id
  })
 
  newCart.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Cart created successfully'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create cart'
      })
    })
}
