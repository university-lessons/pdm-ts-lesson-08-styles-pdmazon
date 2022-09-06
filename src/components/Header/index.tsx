import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <AntDesign name="search1" size={24} color="black" />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar na PDMazon.com.br"
        />

        <MaterialCommunityIcons name="qrcode-scan" size={24} color="dimgrey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8cdcdc",
    // height: 64,
    width: "100%",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 48,
    backgroundColor: "#feffff",
    margin: 16,
    padding: 8,
    borderRadius: 8,
    borderColor: "#99acae",
    borderWidth: 1,
    color: "dimgrey",
  },
});
