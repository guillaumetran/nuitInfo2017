import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Home from "./src/Home/Home";
import Chat from "./src/Chat/Chat";

export default class App extends React.Component {
  state = {
    start: false
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.start ? (
          <Chat stopGame={() => this.setState({ start: false })} />
        ) : (
          <Home startGame={() => this.setState({ start: true })} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
