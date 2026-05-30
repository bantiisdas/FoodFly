import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrdersScreen from "./OrdersScreen";
import SettingsScreen from "./SettingsScreen";
import HelpScreen from "./HelpScreen";
import Profile from "../components/Profile";

const Drawer = createDrawerNavigator();

const ProfileScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#f8fafc",
          width: 260,
        },
        drawerActiveTintColor: "#ff6b35",
        drawerInactiveTintColor: "#334155",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Orders" component={OrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileScreen;
