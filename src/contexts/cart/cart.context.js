//stores the cart's hidden context
import { createContext } from "react";

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {}
});

export default CartContext;