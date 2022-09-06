import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AddressBar from "../AddressBar";
import Banner from "../Banner";
import Card from "../Card";

export default function Content() {
  return (
    <ScrollView style={styles.container}>
      <AddressBar />
      <Banner />

      <ScrollView horizontal={true}>
        <Card title="Pintura a Oleo" />
        <Card title="Canivete suiço" />
        <Card title="Furgão de verdura" />
        <Card title="Caneta bic azul" />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d9d9",
  },
});
