const router = require('express').Router();
const { Ship, Wishlist } = require('../db/models');

module.exports = router;

//get all ships by user's wishlist
router.get('/:userId', async (req, res, next) => {
  try {
    const ships = await Wishlist.findAll({
      include: [{ model: Ship }],
      where: { userId: req.params.userId }
    });

    res.json(ships);
  } catch (error) { next(error) }
});

//post route to add to wishlist but send a message if the item is already in the wishlist
//should this only be to /:userId ???
router.post('/', async (req, res, next) => {
  try {
    const usersWishList = await Wishlist.findOne({
      where: {
        userId: req.body.userId,
        starshipId: req.body.starshipId
      }
    });
    //Checking if User Already has a wishlist with the same product
    if (usersWishList) {
      if (usersWishList.starshipId === req.body.starshipId) {
        res.json('This item is already in your wishlist');

      } else {

        const newWishListShip = await Wishlist.create({
          userId: req.body.userId,
          starshipId: req.body.starshipId
        });
        res.json(newWishListShip);
      }
    }
  } catch (error) { next(error) }
});

router.delete('/:userId/:shipId', async (req, res, next) => {
  try {
    await Wishlist.destroy({
      where: {
        userId: req.params.id,
        starshipId: req.params.shipId
      }
    });
    res.json('removed');
  } catch (error) { next(error) }
});