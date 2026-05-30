import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useAppStore } from "../stores/app-store";

const Onboarding2 = () => {
  const setIsOnboarded = useAppStore((s) => s.setIsOnboarded);
  const isLoggedIn = useAppStore((s) => s.isAuthenticated);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <Text style={styles.illustrationEmoji}>🚴‍♂️</Text>
      </View>
      <Text style={styles.title}>Track every delivery in real time</Text>
      <Text style={styles.subtitle}>
        Follow your order from kitchen to doorstep and know exactly when it will
        arrive.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          const routeName = isLoggedIn ? "HomeScreen" : "LoginScreen";
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: routeName }],
            }),
          );
          setIsOnboarded();
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding2;

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
    backgroundColor: "#e8f7ff",
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
    backgroundColor: "#0077ff",
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
