import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "../stores/app-store";
import { useOrderStore } from "../stores/order-store";
import { restaurants } from "../../constatnts/data/restaurants";

const Profile = () => {
  const user = useAppStore((s) => s.userCreds[0]);
  const orders = useOrderStore((s) => s.orders);

  const displayName = user?.name ?? "Guest User";
  const displayEmail = user?.id ?? "guest@example.com";
  const avatarLetter = displayName ? displayName.charAt(0).toUpperCase() : "G";

  const ordersCount = orders.length;

  // Favorites: unique item names across all orders
  const favoriteItems = new Set(orders.flat().map((o) => o.item));
  const favoritesCount = favoriteItems.size;

  // Rating: average rating of restaurants the user has ordered from (fallback to 4.5)
  const orderedRestaurantIds = Array.from(
    new Set(orders.flat().map((o) => o.restaurantId)),
  );
  const orderedRestaurants = restaurants.filter((r) =>
    orderedRestaurantIds.includes(r.id),
  );
  const rating = orderedRestaurants.length
    ? (
        orderedRestaurants.reduce((sum, r) => sum + r.rating, 0) /
        orderedRestaurants.length
      ).toFixed(1)
    : "4.5";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{avatarLetter}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{displayName}</Text>
          <Text style={styles.userEmail}>{displayEmail}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{ordersCount}</Text>
          <Text style={styles.statLabel}>Orders</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{favoritesCount}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick actions</Text>
        <Text style={styles.sectionSubtitle}>
          Manage your orders, favorites, and account settings.
        </Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Ionicons name="receipt" size={22} color="#ff6b35" />
            <Text style={styles.actionLabel}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Ionicons name="heart" size={22} color="#ff6b35" />
            <Text style={styles.actionLabel}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Ionicons name="settings" size={22} color="#ff6b35" />
            <Text style={styles.actionLabel}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Ionicons name="help-circle" size={22} color="#ff6b35" />
            <Text style={styles.actionLabel}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 18,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#ffedd5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#c2410c",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0f1720",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#64748b",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 18,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0f1720",
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 12,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f1720",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 18,
    lineHeight: 20,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#0f1720",
  },
});

export default Profile;
