import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Restaurant } from "../../constatnts/data/restaurants";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  name,
  category,
  rating,
  deliveryTime,
  priceRange,
  distance,
  tags,
  description,
  image,
  offers,
}: Restaurant) => {
  const renderStars = (rating: number) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  const navigator = useNavigation<any>();

  return (
    <Pressable
      onPress={() =>
        navigator.navigate("RestaurantDetails", {
          id: id,
        })
      }
      style={styles.card}
    >
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>{priceRange}</Text>
        </View>
      </View>

      {/* Content Container */}
      <View style={styles.content}>
        {/* Header: Name and Category */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>

        {/* Rating and Stars */}
        <View style={styles.ratingRow}>
          <Text style={styles.stars}>{renderStars(rating)}</Text>
          <Text style={styles.ratingLabel}>({rating})</Text>
        </View>

        {/* Description */}
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        {/* Info Row: Delivery, Distance */}
        <View style={styles.infoRow}>
          <View style={styles.infoPill}>
            <Text style={styles.infoIcon}>⏱️</Text>
            <Text style={styles.infoText}>{deliveryTime}</Text>
          </View>
          <View style={styles.infoPill}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoText}>{distance}</Text>
          </View>
        </View>

        {/* Tags */}
        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.slice(0, 3).map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Offers */}
        {offers && offers.length > 0 && (
          <View style={styles.offersContainer}>
            <Text style={styles.offersLabel}>🎉 Special Offers</Text>
            {offers.map((offer, index) => (
              <Text key={index} style={styles.offerText}>
                • {offer}
              </Text>
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  priceBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  priceText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 12,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: "#666",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stars: {
    fontSize: 14,
    marginRight: 8,
    color: "#FFB800",
  },
  ratingLabel: {
    fontSize: 12,
    color: "#888",
  },
  description: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
  },
  infoIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  infoText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#e8f4f8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 11,
    color: "#0066cc",
    fontWeight: "500",
  },
  offersContainer: {
    backgroundColor: "#fff3e0",
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#ff9800",
  },
  offersLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#e65100",
    marginBottom: 6,
  },
  offerText: {
    fontSize: 11,
    color: "#d84315",
    lineHeight: 16,
  },
});

export default RestaurantCard;
