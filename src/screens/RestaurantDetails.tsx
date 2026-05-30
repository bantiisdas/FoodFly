import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { restaurants } from "../../constatnts/data/restaurants";

const RestaurantDetails: React.FC<any> = ({ route, navigation }) => {
  const { id } = route.params || {};
  const restaurant = restaurants.find((r) => r.id === id) || restaurants[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Image header */}
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.headerImage}
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack?.()}
            accessibilityLabel="Back"
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerOverlay} />
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingBadgeText}>⭐ {restaurant.rating}</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.category}>
            {restaurant.category} • {restaurant.priceRange}
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Delivery</Text>
              <Text style={styles.infoValue}>{restaurant.deliveryTime}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Distance</Text>
              <Text style={styles.infoValue}>{restaurant.distance}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Rating</Text>
              <Text style={styles.infoValue}>{restaurant.rating}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{restaurant.description}</Text>

          {restaurant.tags?.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Tags</Text>
              <View style={styles.tagsContainer}>
                {restaurant.tags.map((tag, idx) => (
                  <View key={idx} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          {restaurant.offers && restaurant.offers.length > 0 && (
            <View style={styles.offersBox}>
              <Text style={styles.offersTitle}>Special Offers</Text>
              {restaurant.offers.map((offer, idx) => (
                <Text key={idx} style={styles.offerText}>
                  • {offer}
                </Text>
              ))}
            </View>
          )}

          <View style={styles.ctaRow}>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaText}>Order Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb" },
  headerContainer: { height: 260, position: "relative" },
  headerImage: { width: "100%", height: "100%", resizeMode: "cover" },
  headerOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 12,
    backgroundColor: "rgba(255,255,255,0.85)",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    elevation: 4,
  },
  backText: {
    fontSize: 20,
    color: "#333",
    lineHeight: 40,
    textAlign: "center",
  },
  ratingBadge: {
    position: "absolute",
    bottom: 14,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingBadgeText: { color: "#fff", fontWeight: "700" },
  content: { padding: 16 },
  name: { fontSize: 22, fontWeight: "800", color: "#0f1720", marginBottom: 6 },
  category: { color: "#64748b", fontSize: 13, marginBottom: 12 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  infoItem: { alignItems: "flex-start" },
  infoLabel: { fontSize: 12, color: "#94a3b8" },
  infoValue: { fontSize: 14, fontWeight: "700", color: "#0f1720" },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#0f1720",
  },
  description: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 12,
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: { color: "#3730a3", fontSize: 12, fontWeight: "600" },
  offersBox: {
    backgroundColor: "#fff7ed",
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#fb923c",
    marginBottom: 16,
  },
  offersTitle: { fontWeight: "700", color: "#b45309", marginBottom: 6 },
  offerText: { color: "#92400e", fontSize: 13, marginBottom: 4 },
  ctaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  ctaButton: {
    flex: 1,
    backgroundColor: "#ff6b35",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  ctaText: { color: "#fff", fontWeight: "800", fontSize: 16 },
  secondaryButton: {
    width: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  secondaryText: { color: "#333", fontWeight: "700" },
});

export default RestaurantDetails;
