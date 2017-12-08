/**
 * Created by guillaumetran on 08/12/2017.
 */
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class EndMessage extends React.Component {
  render() {
    return (
      <ScrollView style={{ paddingRight: 40, paddingLeft: 40 }}>
        <View style={{ height: height / 12 }} />
        <Text style={styles.description}>
          Votre amie Eva est décedée car elle a pris le volant avec de l'alcool
          dans le sang Votre amie Eva est décedée car elle a pris le volant avec
          de l'alcool dans le sang Votre amie Eva est décedée car elle a pris le
          volant avec de l'alcool dans le sang
        </Text>
        <Text style={styles.description}>
          est décedée car elle a pris le volant avec de l'alcool dans le sang
          Votre amie Eva est décedée c est décedée car elle a pris le volant
          avec de l'alcool dans le sang Votre amie Eva est décedée car elle a
          pris le volant avec de l'alcool dans le sang Votre amie Eva est
          décedée .
        </Text>
        <View style={{ height: height / 12 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    color: "#000000",
    fontSize: 18,
    textAlign: "justify",
    lineHeight: Platform.OS === "ios" ? 25 : 40,
    paddingBottom: 20
  }
});
