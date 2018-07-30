const User = require('./user');
const Ship = require('./ship');
const Review = require('./review');
const Cart = require('./cart');
const Wishlist = require('./wishlist');
const Payment = require('./payment');


//Reviews
Ship.hasMany(Review)
Review.belongsTo(Ship)
User.hasMany(Review);
Review.belongsTo(User)

//User to Cart
Ship.belongsToMany(User, { through: Cart });
User.belongsToMany(Ship, { through: Cart });

//User can only have one cart
User.hasOne(Cart);

//Carts belong to Users and ship
Cart.belongsTo(User);
Cart.belongsTo(Ship);


//User can only have one wishlist
User.hasOne(Wishlist);

//Wishlists belong to Users and ship
Wishlist.belongsTo(User);
Wishlist.belongsTo(Ship);

//wishlist with starShipId and UserId
Ship.belongsToMany(User, { through: Wishlist });
User.belongsToMany(Ship, { through: Wishlist });


//should it be user.hasMany(Payment) ??? not being used right now b/c pmt info is now attatched to user
Payment.belongsTo(User);



module.exports = {
  User, Ship, Review, Payment, Cart, Wishlist
}

