import React from "react";
import { inventory } from "../../data/dummy-data";
import { cartState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

const AvailableItems = () => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {Object.entries(inventory).map(([id, {name, price}]) => (
          <li key={id}>
            {name} @ ${price.toFixed(2)}
            <button
              onClick={() => {
                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
              }}
            >
              add
            </button>
            {cart[id] && <button onClick={() => {
                const cartCopy = {...cart}
                if(cartCopy[id] === 1){
                    delete cartCopy[id]
                    setCart(cartCopy)
                }
                else{
                    setCart({...cartCopy, [id]: cartCopy[id] - 1})
                }
            }}>rem</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableItems;
