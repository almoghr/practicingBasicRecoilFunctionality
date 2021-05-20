import React from "react";
import { destinationShippingFee } from "../../data/dummy-data";
import {shippingState} from '../../recoil/atoms'
import {useRecoilState} from 'recoil'
const Shipping = () => {
    const [shipping, setShipping] = useRecoilState(shippingState)
  return (
    <div>
        <h2>Shipping</h2>
      {Object.entries(destinationShippingFee).map(([country, price]) => (
        <button onClick={() => {setShipping(country)}}>
          {country} @ {price}
          {country === shipping ? <span> ✅ </span> : ''}
        </button>
      ))}
    </div>
  );
};

export default Shipping;
