import React from "react";
import CartItems from '../CartItems/CartItems'
import Shipping from '../Shipping/Shipping'
import Totals from '../Totals/Totals'
const Cart = () => {
  return (
    <div>
      <h2>Cart</h2>
      <CartItems />
      <Shipping />
      <Totals/>
    </div>
  );
};

export default Cart;
