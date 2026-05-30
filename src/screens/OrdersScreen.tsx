import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useOrderStore } from "../stores/order-store";

const OrdersScreen = () => {
  const cartItems = useOrderStore((s) => s.cart);
  const orderBatches = useOrderStore((s) => s.orders);
  const addToCart = useOrderStore((s) => s.addToCart);
  const removeFromCart = useOrderStore((s) => s.removeFromCart);
  const addToOrders = useOrderStore((s) => s.addToOrders);
  const clearCart = useOrderStore((s) => s.clearCart);

  const createOrder = () => {
    if (cartItems.length === 0) return;

    addToOrders(cartItems);
    clearCart();
  };

  console.log(orderBatches);

  const calculateItemPrice = (price: string) =>
    Number(price.replace(/[^0-9.]/g, "")) || 0;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + calculateItemPrice(item.price) * item.quantity,
    0,
  );

  const formattedTotal = `$${totalPrice.toFixed(2)}`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>My Orders</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Cart</Text>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.item} style={styles.itemRow}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>

              <View style={styles.itemRight}>
                <View style={styles.quantityGroup}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    activeOpacity={0.7}
                    onPress={() => removeFromCart(item.item)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    activeOpacity={0.7}
                    onPress={() =>
                      addToCart(
                        item.item,
                        item.restaurantId,
                        item.name,
                        item.price,
                      )
                    }
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        )}

        {cartItems.length > 0 && (
          <View style={styles.cartFooter}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>{formattedTotal}</Text>
            </View>
            <TouchableOpacity
              style={styles.placeOrderButton}
              activeOpacity={0.8}
              onPress={() => createOrder()}
            >
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {orderBatches.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Past Orders</Text>
          {orderBatches.map((order, orderIndex) => {
            const batchId = order[0]?.id ?? `${orderIndex}`;
            const displayId = batchId.length > 8 ? batchId.slice(-8) : batchId;

            return (
              <View key={`order-batch-${batchId}`} style={styles.orderBatch}>
                <Text style={styles.orderBatchTitle}>Order #{displayId}</Text>
                {order.map((item) => (
                  <View key={item.id} style={styles.itemRow}>
                    <View>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemMeta}>Qty {item.quantity}</Text>
                    </View>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f1720",
    marginBottom: 14,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f1720",
    marginBottom: 14,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  itemRight: {
    alignItems: "flex-end",
  },
  quantityGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#eef2ff",
    overflow: "hidden",
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e8f0",
  },
  quantityButtonText: {
    color: "#0f1720",
    fontSize: 18,
    fontWeight: "700",
  },
  quantityText: {
    minWidth: 28,
    textAlign: "center",
    color: "#0f1720",
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 8,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f1720",
  },
  cartFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  totalLabel: {
    fontSize: 16,
    color: "#475569",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f1720",
  },
  placeOrderButton: {
    backgroundColor: "#2563eb",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  placeOrderText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  orderBatch: {
    marginBottom: 16,
    padding: 14,
    backgroundColor: "#f8fafc",
    borderRadius: 16,
  },
  orderBatchTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
  },
  itemMeta: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f1720",
  },
  emptyText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
});

export default OrdersScreen;
