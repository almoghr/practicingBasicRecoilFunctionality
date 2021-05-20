import { selector } from "recoil";
import { cartState, shippingState } from "./atoms";
import { destinationShippingFee, inventory } from "../data/dummy-data";

export const totalsState = selector({
  key: "totalsState",
  get: ({ get }) => {
    const cart = get(cartState);
    const shipping = get(shippingState);
    const subTotal = Object.entries(cart).reduce(
      (acc, [id, quantity]) => acc + inventory[id].price * quantity,
      0
    );
    const shippingTotal = destinationShippingFee[shipping];
console.log(shippingTotal)
    return {
      subTotal,
      shippingTotal,
      total: subTotal + shippingTotal,
    };
  },
});
