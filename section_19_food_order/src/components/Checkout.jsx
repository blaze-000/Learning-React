import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./ui/Modal";

import Input from "./ui/Input";
import Button from "./ui/button";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action="">
        <h2>Your Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input id="name" label="Your Name" type="text" />
        <Input id="email" label="Your Email" type="email" />
        <Input id="street" label="Street" type="text" />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>

        <p className="modal-actions"></p>
        <Button type="button" textOnly onClick={handleClose}>
          Cancel
        </Button>
        <Button>Submit Order</Button>
      </form>
    </Modal>
  );
}
