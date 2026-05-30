import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Onboarding1 = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <Text style={styles.illustrationEmoji}>🍔</Text>
      </View>
      <Text style={styles.title}>Delicious meals delivered fast</Text>
      <Text style={styles.subtitle}>
        Explore local restaurants, customize your order, and get it delivered to
        your door.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  illustration: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#fde8e8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  illustrationEmoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#ff6b00",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
