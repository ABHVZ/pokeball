/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')
const Bluebird = require('bluebird');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  afterEach(() => {
    return db.sync({ force: true });
  });

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstName: 'Cody',
          lastName: 'Pupperino'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')

  }) // end describe('instanceMethods')

  describe('Class methods', () => {

    beforeEach(() => {
      return Bluebird.all([
        User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstName: 'Cody',
          lastName: 'Pupperino' }),
        User.create({
          email: 'truman@puppybook.com',
          password: 't3nn1sB@LL$',
          firstName: 'Truman',
          lastName: 'Osito' }),
        User.create({
          email: 'ellie@puppybook.com',
          password: 'giveMEf00d',
          firstName: 'Eleanor',
          lastName: 'Amy' }),
        User.create({
          email: 'jimmy@puppybook.com',
          password: 'nick',
          firstName: 'Jimmy',
          lastName: 'Liu' })
      ]);
    });

    // describe('generateSalt', function () {
    //   it('generates a salt for user', function () {
    //     return User.generateSalt()
    //       .then(function (salt) {
    //         return expect(salt.length).to.equal(24)
    //       });
    //     });
    // }); // end describe('generateSalt')

    describe('generateSalt', function () {
      it('generates a salt for user', function () {
        return expect(User.generateSalt().length).to.equal(24)
      });
    }); // end describe('generateSalt')

    describe('encryptPassword', () => {
      it('encrypts user password', () => {
        let salt = User.generateSalt();
        let plainText = 'veekasIsGreatAtWritingTests';
        let encryptedPass = User.encryptPassword(plainText, salt);
        return expect((encryptedPass).length).to.equal(64);
      });
    }); // end describe('encryptPassword')

  }) // end describe('Class methods')

}) // end describe('User model')
