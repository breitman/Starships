const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'googleId', 'firstName', 'lastName']
    })
    res.json(users)
  } catch (error) { next (error) }
});

router.get('/:userId', async (req, res, next) => {
  try{
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) { next (error) }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.sendStatus(201)
  } catch (error) { next (error) }
});

router.put('/:userId', async (req,res,next) => {
  console.log('req.body: ', req.body);
  try {
    const findUser = await User.findById(req.params.userId)
    const updatedUser = await findUser.update(req.body)
    res.status(200).json(updatedUser)
  } catch (error) { next (error) }
});


router.put('/userCart/:userId', async (req,res,next) => {
  try {
    const findUser = await User.findById(req.params.userId);
    const updatedUser = await findUser.update({
      cart: [...findUser.cart, req.body.productId]
    })
    res.json(updatedUser.cart)
  } catch (error) { next (error) }
});

router.delete('/:userId', async (req, res, next) => {
  try {
    await User.destroy({
    where: {
      id: req.params.userId
    }
  })
  res.sendStatus(204)
  } catch (error) { next (error) }
});