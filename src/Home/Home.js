/**
 * Created by guillaumetran on 08/12/2017.
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={styles.logoImg}
            resizeMode="contain"
            source={require("../assets/images/Logo.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              flex: 0.15,
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.playButton}
              onPress={() => this.props.startGame()}
            >
              <Text style={styles.playText}>Jouer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F"
  },
  logoImg: {
    height: width / 1.5,
    width: width / 1.5
  },
  playText: {
    fontSize: 16,
    color: "white"
  },
  playButton: {
    flex: 0.8,
    backgroundColor: "#FF39D9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});
