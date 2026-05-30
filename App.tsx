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
import Home from "./src/components/Home";
import RestaurantDetails from "./src/screens/RestaurantDetails";

//Dynamic Navigation
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

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
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
