import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { restaurants } from "../../constatnts/data/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>FoodFly</Text>
        <Text style={styles.subtitle}>
          Your next meal is just a few taps away.
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants or cuisine..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Sorting Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        <View style={[styles.filterPill, styles.filterPillActive]}>
          <Text style={styles.filterPillTextActive}>All</Text>
        </View>
        <View style={styles.filterPill}>
          <Text style={styles.filterPillText}>Fastest</Text>
        </View>
        <View style={styles.filterPill}>
          <Text style={styles.filterPillText}>Highest Rated</Text>
        </View>
        <View style={styles.filterPill}>
          <Text style={styles.filterPillText}>Budget</Text>
        </View>
      </ScrollView>

      {/* Results Counter */}
      <View style={styles.resultsInfo}>
        <Text style={styles.resultsText}>
          {filteredRestaurants.length} restaurant
          {filteredRestaurants.length !== 1 ? "s" : ""} available
        </Text>
      </View>

      {/* Restaurant List */}
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => <RestaurantCard {...item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>No restaurants found</Text>
            <Text style={styles.emptySubtext}>Try a different search</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  filtersContainer: {
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 12,
    flexDirection: "row",
  },
  filterPill: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  filterPillActive: {
    backgroundColor: "#0066cc",
    borderColor: "#0066cc",
  },
  filterPillText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  filterPillTextActive: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  resultsInfo: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  resultsText: {
    fontSize: 12,
    color: "#999",
    fontWeight: "500",
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 13,
    color: "#999",
  },
});

export default HomeScreen;
