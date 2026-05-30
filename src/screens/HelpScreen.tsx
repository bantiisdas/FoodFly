import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const supportTopics = [
  {
    title: "Order status",
    detail: "Track your delivery and recent orders.",
  },
  {
    title: "Payment help",
    detail: "Update cards, promo codes, and receipts.",
  },
  {
    title: "Account security",
    detail: "Manage login settings and privacy.",
  },
];

const HelpScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.header}>Help Center</Text>
      <Text style={styles.subtitle}>
        Need assistance? Browse quick answers or contact support.
      </Text>

      <View style={styles.section}>
        {supportTopics.map((topic, index) => (
          <TouchableOpacity
            key={index}
            style={styles.topicItem}
            activeOpacity={0.75}
          >
            <View>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDetail}>{topic.detail}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.contactHeading}>Contact support</Text>
        <Text style={styles.contactBody}>
          Reach out for faster help with orders, payments, or account issues.
        </Text>
        <TouchableOpacity style={styles.contactButton} activeOpacity={0.8}>
          <Ionicons name="chatbubble-ellipses" size={18} color="#fff" />
          <Text style={styles.contactButtonText}>Chat with support</Text>
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
    borderRadius: 20,
    paddingVertical: 14,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 3,
  },
  topicItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f1720",
  },
  topicDetail: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
    lineHeight: 20,
  },
  contactCard: {
    backgroundColor: "#ffedd5",
    borderRadius: 20,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 2,
  },
  contactHeading: {
    fontSize: 17,
    fontWeight: "700",
    color: "#c2410c",
    marginBottom: 8,
  },
  contactBody: {
    fontSize: 14,
    color: "#92400e",
    lineHeight: 20,
    marginBottom: 18,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f97316",
    borderRadius: 14,
    paddingVertical: 14,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 10,
  },
});

export default HelpScreen;
