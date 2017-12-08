/**
 * Created by guillaumetran on 08/12/2017.
 */
import React from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class EndMessage extends React.Component {
  render() {
    return (
      <View style={{ paddingRight: 40, paddingLeft: 40 }}>
        <Text style={styles.description}>
          Vous avez rencontré Eva lors d'une soirée chez Guillaume, vous
          l'ajoutez le lendemain pour apprendre à la connaitre
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "justify",
    lineHeight: Platform.OS === "ios" ? 25 : 40,
    paddingBottom: 20
  }
});
