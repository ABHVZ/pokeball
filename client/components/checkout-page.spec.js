import React from 'react';
import { createStore } from 'redux';
import chai, {expect} from 'chai'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CheckoutPage } from './checkoutPage/checkout-page';
import actualStore from '../store';

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Checkout Page', () => {

    describe('visual content', () => {

        // Before every `it` spec, we instantiate a new `CheckoutPage` react component.
        let totalPrice, checkoutWrapper;
        beforeEach('Create <CheckoutPage /> wrapper', () => {
            // totalPrice = actualStore.state.session.cart;
            // creates the testable React component
            checkoutWrapper = shallow(<CheckoutPage />);
        });
        // console.log('--------------------', actualStore.getState.session.cart);

        // These specs are relatively promitive — all we are asking you to
        // do is to fill in each JSX tag (h1, h2, etc.) in the `render`
        // method to match the HTML string shown. You can pass these in a
        // "trivial" way, but look five or so specs down for a twist…

        it('includes Shipping Address line as an h3', () => {
            expect(checkoutWrapper.find('h3')).to.have.html('<h3>Shipping Address:</h3>');
        });

    });

});
