import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding1 from "./src/screens/Onboarding1";
import Onboarding2 from "./src/screens/Onboarding2";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";

//Dynamic Navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
