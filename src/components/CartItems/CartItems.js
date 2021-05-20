import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoil/atoms";
import { inventory } from "../../data/dummy-data";
const CartItems = () => {
  const cart = useRecoilValue(cartState);
  if (cart.length === 0) return <p>No items.</p>;
  return (
    <ul>
      {Object.entries(cart).map(([id, quantity]) => (
        <li key={id}>
          {inventory[id].name} x {quantity}
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
