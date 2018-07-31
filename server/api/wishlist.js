const router = require('express').Router();
const {Wishlist,Ship}  = require('../db/models');

module.exports = router;

//get all ships by user's wishlist
router.get('/:id', async (req, res, next) => {
  try {
    const result = await Wishlist.findAll({
      include : [{model : Ship}],
      userId : req.params.userId
    })
    res.json(result)

  } catch (error) {
    console.log(error)
  }
});



router.post('/', async (req,res,next)=>{
  try {
    const found = await Wishlist.findOne({
      where : {
        userId : req.body.userId,
        starshipId : req.body.starshipId
      }
    })
    if(found){
      res.json(found)
    }else{
      const addedToWish = await Wishlist.create({
        userId : req.body.userId,
        starshipId : req.body.starshipId
      })
      res.json(addedToWish)
    }
  } catch (error) {
    next(error)
  }

})



router.delete('/',async (req,res,next) => {
  try {
    await Wishlist.destroy({
      where : {
        userId : req.body.userId,
        starshipId : req.body.starshipId
      }
    })
    res.json(202)
  } catch (error) {
    next(error)
  }

})
