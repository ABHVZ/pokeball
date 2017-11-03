const { expect } = require('chai');
const db = require('../index');
const Pokemon = db.model('pokemon');

describe('Pokemon model', () => {
  beforeEach(() => {
    return db.sync({
      force: true
    })
  })

  describe('Virtuals', function () {
    let pikachu;

    beforeEach(function () {
      return Pokemon.create({
          name: 'Pikachu',
          type1: 'Electric',
          type2: '',
          total: 320,
          hp: 35,
          atk: 55,
          def: 40,
          spAtk: 50,
          spDef: 50,
          speed: 90,
          gen: 1,
          legendary: false
        })
        .then(pokemon => {
          pikachu = pokemon;
        })
    })

    describe('price', function () {
      it('returns the price of the Pokemon based on total stats and legendary status', function () {
        expect(pikachu.price).to.equal('$320.00');
      })
    });
  })
})
