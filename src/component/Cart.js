import React, { useContext } from 'react'
import { CartContext } from '../global/CartContext'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)
  const handleToken = async (token) => {
    // console.log(token)
    const product = { name: 'All product', price: totalPrice }
    const response = await axios.post('http://localhost:8080/checkout', {
      product,
      token,
    })
    console.log(response)
  }
  const data = useContext(CartContext)
  console.log(data)
  return (
    <div className='cart-container'>
      <div className='cart-details' style={{ marginTop: '100px' }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className='cart' key={cart.id}>
                <span className='cart-image'>
                  <img src={cart.image} alt='not found' />
                </span>
                <span className='cart-product-name'>{cart.name}</span>
                <span className='cart-product-price'>${cart.price}.00</span>
                <span
                  className='inc'
                  onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}
                >
                  <i className='fa fa-plus' aria-hidden='true'></i>
                </span>
                <span className='product-quantity'>{cart.qty}</span>
                <span
                  className='dec'
                  onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}
                >
                  <i className='fa fa-minus' aria-hidden='true'></i>
                </span>
                <span className='product-total-price'>
                  ${cart.price * cart.qty}.00
                </span>
                <span
                  className='delete-product'
                  onClick={() =>
                    dispatch({ type: 'DELETE', id: cart.id, cart })
                  }
                >
                  <i className='fa fa-trash-o' aria-hidden='true'></i>
                </span>
              </div>
            ))
          : ' Sorry your cart is currently empty'}
      </div>
      {shoppingCart.length > 0 ? (
        <div className='cart-summary'>
          <div className='summary'>
            <h3>Cart Summary</h3>
            <div className='total-items'>
              <div className='items'>Total Items</div>
              <div className='items-count'>{qty}</div>
            </div>
            <div className='total-price-section'>
              <div className='just-title'>Total Price</div>
              <div className='items-price'>${totalPrice}.00</div>
            </div>
            <div className='stripe-section'>
              <StripeCheckout
                stripeKey='pk_test_51Jb7tiSChvDcOVt9O3tP4UcAwbFNMZmCQKwJsI0hyWE3wKEMvbTebi4rh9y41U6uhF0Dtt3ht1Zhfn4Qbyyw3c1i00PH7ICEKR'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name='All products'
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Cart
