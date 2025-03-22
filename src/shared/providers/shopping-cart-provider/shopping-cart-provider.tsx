"use client";

import { createContext, PropsWithChildren, useCallback, useMemo, useState } from "react";

type TCartItem = {
  item: { id: string; price: number } & unknown;
  count: number;
};

type ShoppingCartContext = {
  cartItems: TCartItem[];
  addToCart: (item: TCartItem) => void;
  removeFromCart: (id: string) => void;
  cartItemsCount: number;
  cartItemsTotalPrice: number;
};

export const ShoppingCartContext = createContext<ShoppingCartContext | null>(null);

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const addToCart = useCallback((itemForAdd: TCartItem) => {
    setCartItems((prevCartItems) => {
      const isItemAlreadyInCart = prevCartItems.find(
        (cartItem) => cartItem.item.id === itemForAdd.item.id,
      );

      if (!isItemAlreadyInCart) {
        return [...prevCartItems, itemForAdd];
      }

      return prevCartItems.map((cartItem) => {
        if (cartItem.item.id === itemForAdd.item.id) {
          return { ...cartItem, count: cartItem.count + itemForAdd.count };
        }

        return cartItem;
      });
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prevCartItems) => {
      const itemForRemoving = prevCartItems.find((cartItem) => cartItem.item.id === id);

      if (!itemForRemoving) return prevCartItems;

      if (itemForRemoving.count > 1) {
        return prevCartItems.map((cartItem) => {
          if (cartItem.item.id === itemForRemoving.item.id) {
            return { ...cartItem, count: cartItem.count - 1 };
          }

          return cartItem;
        });
      }

      return prevCartItems.filter((cartItem) => {
        return cartItem.item.id !== itemForRemoving.item.id;
      });
    });
  }, []);

  const cartItemsCount = useMemo(() => {
    return cartItems.reduce((count, cartItem) => {
      return (count += cartItem.count);
    }, 0);
  }, [cartItems]);

  const cartItemsTotalPrice = useMemo(() => {
    return cartItems.reduce((totalPrice, cartItem) => {
      return (totalPrice += cartItem.count * cartItem.item.price);
    }, 0);
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartItemsCount, cartItemsTotalPrice }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
