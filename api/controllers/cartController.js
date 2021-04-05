const router = require('express').Router();
const cartModel = require('../models/carts/cartModel');
const auth = require('../authentication/auth');

router.get('/', auth.verifyToken, cartModel.getCart);
router.post('/new', auth.verifyToken, cartModel.createCart);

module.exports = router;
