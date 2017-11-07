/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('validations', () => {

        it('content should be at least 50 characters', () => {
            const reviewA = Review.build({
                title: "A review",
                content: "It is not a valid review!"
            })
            return reviewA.validate()
            .then(() => {
                throw new Error('validation should fail when content is less than 50 characters')
            },
            (result) => {
                expect(result).to.be.an.instanceOf(Error);
                expect(result.message).to.contain('Validation error');
            })
        })

    });
})
