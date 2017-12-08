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
  ScrollView,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class EndMessage extends React.Component {
  render() {
    console.log(this.props.endMessage);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingRight: 40, paddingLeft: 40 }}>
          <View style={{ height: height / 12 }} />
          <Text style={styles.description}>{this.props.endMessage.text}</Text>
          <View style={{ height: height / 12 }} />
        </ScrollView>
      </View>
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
