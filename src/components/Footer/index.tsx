import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("handle!!")}>
        <AntDesign name="home" size={24} color="#008296" />
      </TouchableOpacity>

      <AntDesign name="user" size={24} color="black" />

      <AntDesign name="shoppingcart" size={24} color="black" />

      <Feather name="menu" size={24} color="black" />
    </View>
  );
}
