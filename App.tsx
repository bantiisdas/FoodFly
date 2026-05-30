import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import Onboarding1 from "./src/screens/Onboarding1";
import Onboarding2 from "./src/screens/Onboarding2";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import Home from "./src/components/Home";
import RestaurantDetails from "./src/screens/RestaurantDetails";
import { useAppStore } from "./src/stores/app-store";

//Dynamic Navigation
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.createURL("/"), "foodfly://"],
  config: {
    screens: {
      RestaurantDetails: "restaurant/:id",
    },
  },
};

export default function App() {
  const isLoggedIn = useAppStore((s) => s.isAuthenticated);
  console.log(isLoggedIn);
  const isOnboarded = useAppStore((s) => s.isOnboarded);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboarded && (
          <>
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Static Navigation
// const OnboardingStack = createStackNavigator({
//   screens: {
//     Onboarding1: Onboarding1,
//     Onboarding2: Onboarding2,
//     Home: HomeScreen,
//   },
//   screenOptions: {
//     headerShown: false,
//     gestureEnabled: true,
//     gestureDirection: "horizontal",
//     gestureResponseDistance: 50,
//   },
// });

// const HomeNavigation = createStaticNavigation(OnboardingStack);

// export default function App() {
//   return <HomeNavigation />;
// }
