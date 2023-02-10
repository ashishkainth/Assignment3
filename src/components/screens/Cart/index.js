import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../../cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  const handleResetCart = () => {
    dispatch(resetCart());
  };
  return (
    <div>
      <h1>Carts items - {cartItems.length}</h1>
      {cartItems.map((item) => (
        <div>{item}</div>
      ))}
      <button
        className="bg-yellow-300 border-cyan-400 m-4 p-2 rounded-lg shadow-md"
        onClick={handleResetCart}
      >
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
