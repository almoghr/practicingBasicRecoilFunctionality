import React from "react";
import { totalsState } from "../../recoil/selectors";
import { useRecoilValue } from "recoil";
const Totals = () => {
  const totals = useRecoilValue(totalsState);
  return (
    <div>
      <h2>Totals</h2>
      <p>Subtotal: ${totals.subTotal.toFixed(2)}</p>
      <p>Shipping total: ${totals.shippingTotal}</p>
      <strong><p>total price: ${totals.total.toFixed(2)}</p></strong>
    </div>
  );
};

export default Totals;
