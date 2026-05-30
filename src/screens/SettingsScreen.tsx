import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [savedPayment, setSavedPayment] = useState(true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.subtitle}>Personalize your FoodFly experience.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Push notifications</Text>
            <Text style={styles.settingDescription}>
              Get order updates, promos and reminders.
            </Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#d1d5db", true: "#ff6b35" }}
            thumbColor="#ffffff"
          />
        </View>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Dark mode</Text>
            <Text style={styles.settingDescription}>
              Use a darker interface at night.
            </Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#d1d5db", true: "#ff6b35" }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7}>
          <View>
            <Text style={styles.optionTitle}>Payment methods</Text>
            <Text style={styles.optionSubtitle}>Visa •••• 2471</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7}>
          <View>
            <Text style={styles.optionTitle}>Delivery addresses</Text>
            <Text style={styles.optionSubtitle}>Home, Work, Favorites</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7}>
          <View>
            <Text style={styles.optionTitle}>Saved cards</Text>
            <Text style={styles.optionSubtitle}>
              {savedPayment ? "Enabled" : "Disabled"}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
        </TouchableOpacity>
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
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f1720",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f1720",
    marginBottom: 14,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f1720",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: "#64748b",
    lineHeight: 18,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f1720",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },
});

export default SettingsScreen;
