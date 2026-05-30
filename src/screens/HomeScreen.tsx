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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import RestaurantDetails from "./RestaurantDetails";
import Home from "../components/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./SearchScreen";
import OrdersScreen from "./OrdersScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }: { route: { name: string } }) => ({
    headerShown: false,
    tabBarActiveTintColor: "#ff6b35",
    tabBarInactiveTintColor: "#64748b",
    tabBarStyle: {
      backgroundColor: "#ffffff",
      borderTopColor: "#e5e7eb",
      height: 100,
      paddingBottom: 6,
      paddingTop: 6,
    },
    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
      let iconName: keyof typeof Ionicons.glyphMap = "home";

      if (route.name === "HomeScreen") {
        iconName = "home";
      } else if (route.name === "Search") {
        iconName = "search";
      } else if (route.name === "Orders") {
        iconName = "basket";
      } else if (route.name === "Profile") {
        iconName = "person";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator> */}

      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
