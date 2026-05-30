import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FoodItem {
  restaurantId: string;
  item: string;
  name: string;
  price: string;
  quantity: number;
}

interface OrderItem extends FoodItem {
  id: string;
}

interface UseOrderStore {
  cart: FoodItem[];
  orders: OrderItem[][];
  //   isCartEmpty: boolean;
  addToCart: (
    foodItem: string,
    restaurantId: string,
    name: string,
    price: string,
  ) => void;
  removeFromCart: (foodItem: string) => void;
  clearCart: () => void;
  addToOrders: (items: FoodItem[]) => void;
}

export const useOrderStore = create<UseOrderStore>()(
  persist(
    (set, get) => ({
      cart: [],
      orders: [],
      //   isCartEmpty: get().cart.length === 0,
      addToCart: (foodItem, restaurantId, name, price) =>
        set((state) => ({
          cart: state.cart.some((cartItem) => cartItem.item === foodItem)
            ? state.cart.map((cartItem) =>
                cartItem.item === foodItem
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem,
              )
            : [
                { restaurantId, name, price, item: foodItem, quantity: 1 },
                ...state.cart,
              ],
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

      clearCart: () =>
        set({
          cart: [],
        }),

      addToOrders: (items) =>
        set((state) => ({
          orders: [
            items.map((item) => ({
              ...item,
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            })),
            ...state.orders,
          ],
        })),
    }),
    { name: "order-storage", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
