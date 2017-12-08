/**
 * Created by guillaumetran on 08/12/2017.
 */
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class Header extends React.Component {
  render() {
    return (
      <View style={{ flex: 0.15, paddingTop: 20, backgroundColor: "#404040" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={styles.logoImg}
              resizeMode="cover"
              source={require("../assets/images/eva.jpg")}
            />
          </View>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center"
            }}
          >
            <Text style={styles.nameText}>Eva Choppin</Text>
          </View>
          <View
            style={{ flex: 1.5, alignItems: "center", flexDirection: "row" }}
          >
            <FontAwesome
              style={{ flex: 1 }}
              color="white"
              size={25}
              name="phone"
            />
            <FontAwesome
              style={{ flex: 1 }}
              color="white"
              size={25}
              name="video-camera"
            />
            <Ionicons
              style={{ flex: 1 }}
              color="white"
              size={25}
              name="md-information-circle"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoImg: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  nameText: {
    color: "white",
    fontSize: 18
  }
});
