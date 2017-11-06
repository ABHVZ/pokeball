import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { deleteCartItem, putToCartItem } from '../../store'

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.setCurrentQuantity = this.setCurrentQuantity.bind(this);
  }

  render() {

    return (
      <div className="shopping-bag-container">
        <div className="shopping-bag-info-container">
          <div className="title">Shopping Bag</div>
          <div className="sub-head">
            <div className="product">PRODUCT</div>
            <div className="other-sub-heads">PRICE</div>
            <div className="other-sub-heads">QUANTITY</div>
            <div className="other-sub-heads">TOTAL</div>
          </div>
          <div>_________________________________________________________________________</div>
          {this.props.cart && this.props.cart.map(item => (
            <div className="item-info">
              <div className="img-container">
                {item.pokemon && <img src={item.pokemon.image} />}
              </div>
              <div className="info-container">
                {item.pokemon && item.pokemon.name && <div>{item.pokemon.name.toUpperCase()}</div>}
                {item && <div>{`breed: ${item.breed}`}</div>}
                {item && <div>{`look: ${item.look}`}</div>}
                {item && <div>{`level: ${item.level}`}</div>}
              </div>
              <div className="price-container">
                {item && <div>${item.price}</div>}
              </div>
              <div className="quantity-container">
                <div>
                  <form>
                    <select onChange={this.setCurrentQuantity}>
                      {_.range(1, 5).map(quantity => (
                        quantity !== item.quantity
                          ? <option value={`${item.id}-${quantity}`}>{quantity}</option>
                          : <option value={`${item.id}-${quantity}`} selected>{quantity}</option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
              <div className="total-container">
                {item && <div>${item.price * item.quantity}</div>}
              </div>
            </div>
          ))}
          <div>_________________________________________________________________________</div>
          <button>CHECK OUT</button>
        </div>

        <div className="checkout-login-container" />

      </div>
    )
  }

  setCurrentQuantity(event) {
    const toUpdateItem = this.props.cart.find(item => item.id === parseInt(event.target.value.slice(0, 1), 10));
    let locallyUpdatedItem = Object.assign({}, toUpdateItem);
    locallyUpdatedItem.quantity = parseInt(event.target.value.slice(2), 10);
    this.props.updateItem(locallyUpdatedItem);
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
  deleteItem(item) {
    dispatch(deleteCartItem(item));
  },
  updateItem(item) {
    dispatch(putToCartItem(item))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
