import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function AddressBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="location-outline"
        size={24}
        color="black"
        style={styles.icon}
      />
      <Text>Enviar para Fulano - Guarapuava</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#bfece9",
  },
  icon: {
    margin: 8,
  },
});
