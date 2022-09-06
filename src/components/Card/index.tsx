import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        // source={bannerImg}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#feffff",
    borderRadius: 8,
    margin: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
});
