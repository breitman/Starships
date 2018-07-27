const router = require('express').Router()
const {User, Ship, Cart} = require('../db/models')
module.exports = router

//mounted on api/cart
// router.get('/userId', async (req, res, next) => {
//   try {
//     const cart = await Cart.findAll();
//     res.json(cart);
//   } catch(error) { next(error) }
// });

// router.post('/:userId', async (req, res, next) => {
//   try {
//       await Cart.create(req.body)
//   } catch (error) {
//     next(error)
//   }
// });

// router.put('/:userId', async (req, res, next) => {
//   try {
//     //specify shipId in thiunk so we know wehre to update quantity
//       await Cart.update(req.body.quantity)
//   } catch (error) {
//     next(error)
//   }
// });

router.post('/',async (req,res,next)=>{
try {
  await Cart.create(req.body)
  res.json(202)
} catch (error) {
  next(error)
}
})
