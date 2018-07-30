const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
const Cart = require('./cart');
const Payment = require('./payment');


//Reviews
Ship.hasMany(Review)
Review.belongsTo(Ship)
User.hasMany(Review);
Review.belongsTo(User)

//User to Cart
Ship.belongsToMany(User, { through: Cart});
User.belongsToMany(Ship, { through: Cart})

//User can only have one cart
User.hasOne(Cart);

//Carts belong to Users and ship
Cart.belongsTo(User);
Cart.belongsTo(Ship)


//should it be user.hasMany(Payment) ???
Payment.belongsTo(User);

module.exports = {
  User, Ship, Review, Payment, Cart
}

