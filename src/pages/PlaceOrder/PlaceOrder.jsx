import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>

        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street ' />

        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className='multi-fields'>
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

      </div>

      <div className="place-order-right">

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">

                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>

              </div>
              <hr />
              <div className="cart-total-details">

                <p>Delivery Fee</p>
                <p>${2}</p>

              </div>
              <hr />
              <div className="cart-total-details">

                <p>Total</p>
                <p>${getTotalCartAmount() + 2}</p>

              </div>

            </div>
            <button >Proceed to Payment</button>

          </div>


        </div>
        </div>
    </form>
  )
}

export default PlaceOrder