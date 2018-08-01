const router = require('express').Router();
const {Wishlist,Ship}  = require('../db/models');

module.exports = router;

//get all ships by user's wishlist
router.get('/', async (req, res, next) => {
  console.log
  try {
    if(req.user){
      const result = await Wishlist.findAll({
        include : [{model : Ship}],
        where :{
          userId : req.user.id
        }
      })
      res.json(result)
    }else {
      res.statusCode(403)
    }

  } catch (error) {
    console.log(error)
  }
});



router.post('/', async (req,res,next)=>{

  console.log('user side',req.user.id, req.body.shipId)

  try {
      
    const found = await Wishlist.findOne({
      where : {
        userId : req.user.id,
        starshipId : req.body.shipId
      }
    })
    console.log(found)
    if(found){
      res.json(found)
    }
    else{
      const addedToWish = await Wishlist.create({
        userId : req.user.id,
        starshipId : req.body.shipId
      })
      res.json(addedToWish)
}
  
  } catch (error) {
    next(error)
  }

})



router.delete('/:shipId',async (req,res,next) => {
  try {
    console.log(req.params.shipId)
    await Wishlist.destroy({
      where : {
        userId : req.user.id,
        starshipId : req.params.shipId
      }
    })
    res.json(203)
  } catch (error) {
    next(error)
  }
})
