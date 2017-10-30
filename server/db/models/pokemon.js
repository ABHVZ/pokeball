const Sequelize = require("sequelize");
const db = require("../db");

const Pokemon = db.define("pokemon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
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
  generation: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 7
    }
  },
  legendary: {
    type: Sequelize.BOOLEAN
  },
  price: {
    type: Sequelize.INTEGER
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png',
    validate: {
      isUrl: true
    }
  }
});

module.exports = Pokemon;
