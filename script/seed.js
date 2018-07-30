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
    ships.map(ship => Ship.create(ship))
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
