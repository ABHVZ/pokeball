/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Review = db.model('review')
const User = db.model('user')
const Pokemon = db.model('pokemon')

describe('Review routes', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('/api/reviews/', () => {
        const codysFirstName = 'Cody';
        const codysLastName = 'A'
        const codysEmail = 'cody@puppybook.com'
        const reviewATitle = 'a beautiful review title';
        const reviewAContent = 'An exceedingly beautiful review content that is more than 50 characters. It is more than 50 characters.'


        beforeEach('seed user', () => {
            return User.create({
                firstName: codysFirstName,
                lastName: codysLastName,
                email: codysEmail,
            })
        })

        beforeEach('seed pokemon', () => {
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
        })


        beforeEach('seed review', () => {

            return Review.create({
                title: reviewATitle,
                content: reviewAContent,
            })
        })

        it('GET /api/reviews', () => {
            return request(app)
                .get('/api/reviews')
                .expect(200)
                .then(res => {
                    expect(res.body).to.be.an('array')
                    expect(res.body[0].title).to.be.equal(reviewATitle)
                })
        })
    });
});
