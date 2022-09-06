import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={require("./banner.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: 256,
  },
});
