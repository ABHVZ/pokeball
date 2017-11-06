const Sequelize = require('sequelize');
const db = require('../db');

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type1: {
    type: Sequelize.ENUM('Bug',
      'Dark',
      'Dragon',
      'Electric',
      'Fairy',
      'Fighting',
      'Fire',
      'Flying',
      'Ghost',
      'Grass',
      'Ground',
      'Ice',
      'Normal',
      'Poison',
      'Psychic',
      'Rock',
      'Steel',
      'Water')
  },
  type2: {
    type: Sequelize.ENUM('Bug',
      'Dark',
      'Dragon',
      'Electric',
      'Fairy',
      'Fighting',
      'Fire',
      'Flying',
      'Ghost',
      'Grass',
      'Ground',
      'Ice',
      'Normal',
      'Poison',
      'Psychic',
      'Rock',
      'Steel',
      'Water',
      '')
  },
  price: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return this.total * (this.legendary ? 20 : 1);
    }
  },
  total: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  hp: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  atk: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  def: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  spAtk: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  spDef: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  speed: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  gen: {
    type: Sequelize.INTEGER,
  },
  legendary: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png',
    validate: {
      isUrl: true
    }
  },
  title: {
    type: Sequelize.VIRTUAL,
    get: function () { return this.name }
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = Pokemon;

