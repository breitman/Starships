'use strict'

const db = require('../server/db')
const {Ship, User} = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

const results = [
  {
    "name": "Executor",
    "model": "Executor-class star dreadnought",
    "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
    "cost_in_credits": "1143350000",
    "length": "19000",
    "max_atmosphering_speed": "n/a",
    "crew": "279144",
    "passengers": "38000",
    "cargo_capacity": "250000000",
    "consumables": "6 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "40",
    "starship_class": "Star dreadnought",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T12:31:42.547000Z",
    "edited": "2017-04-19T10:56:06.685592Z",
    "url": "https://swapi.co/api/starships/15/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/es.starwars/images/8/82/Executor_and_escorts-0.jpg/revision/latest?cb=20170806065124",
    "price" : 114335,
    "isFeatured" : true
  },
  {
    "name": "Sentinel-class landing craft",
    "model": "Sentinel-class landing craft",
    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
    "cost_in_credits": "240000",
    "length": "38",
    "max_atmosphering_speed": "1000",
    "crew": "5",
    "passengers": "75",
    "cargo_capacity": "180000",
    "consumables": "1 month",
    "hyperdrive_rating": "1.0",
    "MGLT": "70",
    "starship_class": "landing craft",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T15:48:00.586000Z",
    "edited": "2014-12-22T17:35:44.431407Z",
    "url": "https://swapi.co/api/starships/5/",
    "imageUrl" :"http://www.scifi-meshes.com/forums/attachment.php?attachmentid=104960&d=1375269194",
    "price" : 24000,
    "isFeatured" : true
  },
  {
    "name": "Death Star",
    "model": "DS-1 Orbital Battle Station",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "cost_in_credits": "1000000000000",
    "length": "120000",
    "max_atmosphering_speed": "n/a",
    "crew": "342953",
    "passengers": "843342",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "hyperdrive_rating": "4.0",
    "MGLT": "10",
    "starship_class": "Deep Space Mobile Battlestation",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T16:36:50.509000Z",
    "edited": "2014-12-22T17:35:44.452589Z",
    "url": "https://swapi.co/api/starships/9/",
    "imageUrl" :"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/55958abde4b0b0384005cb9e/1435863746718/fan-theory-that-will-change-the-way-you-see-star-wars-and-the-death-star",
    "price" : 20000000,
    "isFeatured" : true
  },
  {
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "100000",
    "length": "34.37",
    "max_atmosphering_speed": "1050",
    "crew": "4",
    "passengers": "6",
    "cargo_capacity": "100000",
    "consumables": "2 months",
    "hyperdrive_rating": "0.5",
    "MGLT": "75",
    "starship_class": "Light freighter",
    "pilots": [
      "https://swapi.co/api/people/13/",
      "https://swapi.co/api/people/14/",
      "https://swapi.co/api/people/25/",
      "https://swapi.co/api/people/31/"
    ],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/7/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T16:59:45.094000Z",
    "edited": "2014-12-22T17:35:44.464156Z",
    "url": "https://swapi.co/api/starships/10/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/starwars/images/f/f5/YT1300-CHRON.jpg/revision/latest?cb=20070106183944",
    "price" : 40000,
    "isFeatured" : true
  },
  {
    "name": "Y-wing",
    "model": "BTL Y-wing",
    "manufacturer": "Koensayr Manufacturing",
    "cost_in_credits": "134999",
    "length": "14",
    "max_atmosphering_speed": "1000km",
    "crew": "2",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "80",
    "starship_class": "assault starfighter",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-12T11:00:39.817000Z",
    "edited": "2014-12-22T17:35:44.479706Z",
    "url": "https://swapi.co/api/starships/11/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/starwars/images/4/45/BTL-B_Y-wing_BF2.png/revision/latest?cb=20171129235141",
    "price" : 75000
  },
  {
    "name": "X-wing",
    "model": "T-65 X-wing",
    "manufacturer": "Incom Corporation",
    "cost_in_credits": "149999",
    "length": "12.5",
    "max_atmosphering_speed": "1050",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "100",
    "starship_class": "Starfighter",
    "pilots": [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/9/",
      "https://swapi.co/api/people/18/",
      "https://swapi.co/api/people/19/"
    ],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-12T11:19:05.340000Z",
    "edited": "2014-12-22T17:35:44.491233Z",
    "url": "https://swapi.co/api/starships/12/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/starwars/images/8/80/X-wing_Fathead.png/revision/latest?cb=20161004003846",
    "price" : 50000
  },
  {
    "name": "TIE Advanced x1",
    "model": "Twin Ion Engine Advanced x1",
    "manufacturer": "Sienar Fleet Systems",
    "cost_in_credits": "unknown",
    "length": "9.2",
    "max_atmosphering_speed": "1200",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "150",
    "consumables": "5 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "105",
    "starship_class": "Starfighter",
    "pilots": [
      "https://swapi.co/api/people/4/"
    ],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-12T11:21:32.991000Z",
    "edited": "2014-12-22T17:35:44.549047Z",
    "url": "https://swapi.co/api/starships/13/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/ru.starwars/images/f/f4/TIEx1_NEGVV.png/revision/latest?cb=20180304151352",
    "price" : 80000
  },
  {
    "name": "Slave 1",
    "model": "Firespray-31-class patrol and attack",
    "manufacturer": "Kuat Systems Engineering",
    "cost_in_credits": "unknown",
    "length": "21.5",
    "max_atmosphering_speed": "1000",
    "crew": "1",
    "passengers": "6",
    "cargo_capacity": "70000",
    "consumables": "1 month",
    "hyperdrive_rating": "3.0",
    "MGLT": "70",
    "starship_class": "Patrol craft",
    "pilots": [
      "https://swapi.co/api/people/22/"
    ],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/"
    ],
    "created": "2014-12-15T13:00:56.332000Z",
    "edited": "2014-12-22T17:35:44.716273Z",
    "url": "https://swapi.co/api/starships/21/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/starwars/images/b/ba/Slave_I_DICE.png/revision/latest?cb=20170825000729",
    "price" : 700334
  },
  {
    "name": "Imperial shuttle",
    "model": "Lambda-class T-4a shuttle",
    "manufacturer": "Sienar Fleet Systems",
    "cost_in_credits": "240000",
    "length": "20",
    "max_atmosphering_speed": "850",
    "crew": "6",
    "passengers": "20",
    "cargo_capacity": "80000",
    "consumables": "2 months",
    "hyperdrive_rating": "1.0",
    "MGLT": "50",
    "starship_class": "Armed government transport",
    "pilots": [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/13/",
      "https://swapi.co/api/people/14/"
    ],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T13:04:47.235000Z",
    "edited": "2014-12-22T17:35:44.795405Z",
    "url": "https://swapi.co/api/starships/22/",
    "imageUrl" :"https://vignette.wikia.nocookie.net/starwars/images/a/af/Shuttle-CHRON.jpg/revision/latest?cb=20100813150543",
    "price" : 30000
  },
  {
    "name": "EF76 Nebulon-B escort frigate",
    "model": "EF76 Nebulon-B escort frigate",
    "manufacturer": "Kuat Drive Yards",
    "cost_in_credits": "8500000",
    "length": "300",
    "max_atmosphering_speed": "800",
    "crew": "854",
    "passengers": "75",
    "cargo_capacity": "6000000",
    "consumables": "2 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "40",
    "starship_class": "Escort ship",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T13:06:30.813000Z",
    "edited": "2014-12-22T17:35:44.848329Z",
    "url": "https://swapi.co/api/starships/23/",
    "imageUrl" :"https://i.imgur.com/NtYVogC.png",
    "price" : 80000
  }
]


































const ships = [{
  name: "Executor",
  model: "Executor-class star dreadnought",
  manufacturer: "Kuat Drive Yards, Fondor Shipyards",
  price: 400,
  isFeatured: true
  },
  {
    name: "Death Star",
    model: "DS-1 Orbital Battle Station",
    manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
    price: 8000,
    isFeatured: true
  },
  {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    price: 700,
    isFeatured: true
  },
  {
    name: "Y-wing",
    model: "BTL Y-wing",
    manufacturer: "Koensayr Manufacturing",
    price: 140,
  },
  {
    name: "X-wing",
    model: "T-65 X-wing",
    manufacturer: "Incom Corporation",
    price: 900,
  },
  {
    name: "Slave 1",
    model: "Firespray-31-class patrol and attack",
    manufacturer: "Kuat Systems Engineering",
    price: 457,
  },
  {
    name: "Imperial shuttle",
    model: "Lambda-class T-4a shuttle",
    manufacturer: "Sienar Fleet Systems",
    price: 172,
  },
  {
    name: "EF76 Nebulon-B escort frigate",
    model: "EF76 Nebulon-B escort frigate",
    manufacturer: "Kuat Drive Yards",
    price: 850,
  },
  {
    name: "TIE Advanced x1",
    model: "Twin Ion Engine Advanced x1",
    manufacturer: "Sienar Fleet Systems",
    price: 730,
  },
]
//whats good

async function seed() {
  await db.sync({force: true})
  //await Promise.all(ships.map(ship => Ship.create(ship)));
  await Promise.all([
    User.create({firstName: 'Cody', lastName: 'Pug', email: 'cody@email.com', password: '123'}),
    User.create({firstName: 'Han', lastName: 'Solo', email: 'Hsolo@email.com', password: '123'}),
    results.map(ship => Ship.create(ship))
  ])
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
