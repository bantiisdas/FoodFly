import { create } from "zustand";

interface FoodItem {
  item: string;
  quantity: number;
}

interface UseOrderStore {
  cart: FoodItem[];
  orders: FoodItem[];
  //   isCartEmpty: boolean;
  addToCart: (foodItem: string) => void;
  removeFromCart: (foodItem: string) => void;
  addToOrders: (foodItem: string) => void;
  removeFromOrders: (foodItem: string) => void;
}

export const useOrderStore = create<UseOrderStore>()((set, get) => ({
  cart: [],
  orders: [],
  //   isCartEmpty: get().cart.length === 0,
  addToCart: (foodItem) =>
    set((state) => ({
      cart: state.cart.some((cartItem) => cartItem.item === foodItem)
        ? state.cart.map((cartItem) =>
            cartItem.item === foodItem
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          )
        : [{ item: foodItem, quantity: 1 }, ...state.cart],
    })),

  removeFromCart: (foodItem) =>
    set((state) => ({
      cart: state.cart
        .map((cartItem) =>
          cartItem.item === foodItem
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    })),

  addToOrders: (foodItem) =>
    set((state) => ({
      orders: state.orders.some((orderItem) => orderItem.item === foodItem)
        ? state.orders.map((orderItem) =>
            orderItem.item === foodItem
              ? { ...orderItem, quantity: orderItem.quantity + 1 }
              : orderItem,
          )
        : [{ item: foodItem, quantity: 1 }, ...state.orders],
    })),

  removeFromOrders: (foodItem) =>
    set((state) => ({
      orders: state.orders
        .map((orderItem) =>
          orderItem.item === foodItem
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem,
        )
        .filter((orderItem) => orderItem.quantity > 0),
    })),
}));
