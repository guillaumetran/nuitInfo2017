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
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Chat extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 0.9, backgroundColor: "white", borderRadius: 15 }}>
          <View style={{ flex: 1 }}>
            {this.props.responses.map(item => {
              return (
                <View key={item._id} style={{ flex: 1, alignItems: "center" }}>
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: "center" }}
                    onPress={() => {
                      this.props.closeModal();
                      this.props.sendMessage({
                        _id: Math.round(Math.random() * 1000000),
                        text: item.text,
                        createdAt: new Date(),
                        user: item.user,
                        next: item.next || null,
                        end: item.end || false,
                        endNumber: item.endNumber || null
                      });
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#5A5A5A"
                      }}
                    >
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flex: 0.2,
              borderTopColor: "grey",
              borderTopWidth: 1
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.closeModal()}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15
                }}
              >
                <Text style={{ color: "red", fontSize: 20 }}>Fermer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
