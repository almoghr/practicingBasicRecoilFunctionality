import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import AvailableItems from './components/AvailableItems/AvailableItems'
import Cart from './components/Cart/Cart'
function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

export default App;
