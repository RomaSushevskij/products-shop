import { useContext } from "react";

import { ShoppingCartContext } from "./shopping-cart-provider";

export const useShoppingCartContext = () => useContext(ShoppingCartContext);
