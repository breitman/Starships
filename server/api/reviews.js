const router = require('express').Router()
const {Review, User, Ship} = require('../db/models')
module.exports = router


//GET single ship reviews
router.get('/:id', async(req, res, next) =>{
  try{
    const review = await Review.findAll({
      where: {
        shipId: req.params.id
      }
    } )
    res.json(review);
  }catch(error){
    next(error) 
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const addReview = await Review.create(req.body)
    res.json(addReview)
  } catch (error) {
    console.error(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deleteReview = await Review.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deleteReview)
  } catch (error) {
    console.error(error)
  }
})