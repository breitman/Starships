const Sequelize = require('sequelize');
const db = require('../db');

const Ship = db.define('starships', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cost_in_credits :{
    type: Sequelize.STRING
  },

  length: {
    type: Sequelize.STRING
  },
  max_atmosphering_speed: {
    type: Sequelize.STRING
  },
  crew: {
    type: Sequelize.STRING
  },
  passengers: {
    type: Sequelize.STRING
  },

  cargo_capacity: {
    type: Sequelize.STRING
  },
  consumables: {
    type: Sequelize.STRING
  },
  hyperdrive_rating: {
    type: Sequelize.STRING
  },
  MGLT: {
    type: Sequelize.STRING
  },
  starship_class: {
    type: Sequelize.STRING
  },
  pilots: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  films: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  created : {
    type: Sequelize.STRING
  },
  edited : {
    type: Sequelize.STRING
  },
  url : {
    type:Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://i.stack.imgur.com/rsH6n.png'
  },
  isFeatured: {
    type: Sequelize.BOOLEAN,
  }
});

module.exports = Ship;

// "name": "Executor",
// "model": "Executor-class star dreadnought",
// "manufacturer": "Kuat Drive Yards, Fondor Shipyards",

// "cost_in_credits": "1143350000",

// "length": "19000",

// "max_atmosphering_speed": "n/a",
// "crew": "279144",

// "passengers": "38000",
// "cargo_capacity": "250000000",
// "consumables": "6 years",
// "hyperdrive_rating": "2.0",
// "MGLT": "40",
// "starship_class": "Star dreadnought",
// "pilots": [],
// "films": [
//   "https://swapi.co/api/films/2/",
//   "https://swapi.co/api/films/3/"
// ],
// "created": "2014-12-15T12:31:42.547000Z",
// "edited": "2017-04-19T10:56:06.685592Z",
// "url": "https://swapi.co/api/starships/15/"
// },