/**
 * Created by guillaumetran on 07/12/2017.
 */
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import { GiftedChat, SystemMessage } from "react-native-gifted-chat";
import Modal from "../shared/ModalBox";
import CardModal from "../shared/CardModal";
import ModalLine from "../shared/ModalLine";
import Answers from "./Answers";
import Header from "./Header";
import EndMessage from "./EndMessage";
import InfoMessage from "./InfoMessage";

const { width, height } = Dimensions.get("window");

export default class Chat extends React.Component {
  state = {
    messages: [],
    responses: [],
    replyModal: false,
    infoModal: false,
    endModal: false,
    end: false,
    typingText: ""
  };
  constructor(props) {
    super(props);

    this._isMounted = false;
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require("../assets/messages.js"),
        responses: require("../assets/responses.js")
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      this.setState(previousState => {
        return {
          typingText: "Eva est entrain d'écrire"
        };
      });
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        this.onReceive("Alright");
      }

      this.setState(previousState => {
        return {
          typingText: null
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Eva Martin",
            avatar: require("../assets/images/eva.jpg")
          }
        })
      };
    });
  }

  renderComposer(props) {
    return this.state.end ? (
      <View
        style={{
          flex: 1,
          height: height / 18
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.props.stopGame();
          }}
          style={{
            flex: 1,
            paddingLeft: "5%",
            backgroundColor: "#EA3A41",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Quitter</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          height: height / 18,
          borderTopColor: "#C9C9C9",
          borderTopWidth: 1
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.setState({ replyModal: true });
          }}
          style={{
            flex: 1,
            paddingLeft: "5%",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Text style={styles.inputMessageText}>Votre message ...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    );
  }

  renderFooter() {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{this.state.typingText}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#1F1F1F" }}>
        <Header />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          locale="fr"
          user={{
            _id: 1
          }}
          renderSystemMessage={() => this.renderSystemMessage()}
          renderFooter={() => this.renderFooter()}
          renderComposer={() => this.renderComposer()}
          bottomOffset={500}
        />
        <Modal
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center"
          }}
          swipeArea={height / 4}
          swipeThreshold={50}
          coverScreen={true}
          isOpen={this.state.replyModal}
          onClosed={() => this.setState({ replyModal: false })}
        >
          <Answers
            responses={this.state.responses}
            sendMessage={messages => this.onSend(messages)}
            closeModal={() => this.setState({ replyModal: false })}
          />
        </Modal>
        <Modal
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center"
          }}
          swipeArea={height / 4}
          swipeThreshold={50}
          coverScreen={true}
          backdropOpacity={0.9}
          isOpen={this.state.infoModal}
          onClosed={() => this.setState({ infoModal: false })}
        >
          <InfoMessage />
        </Modal>
        <CardModal
          swipeArea={height / 4}
          swipeThreshold={50}
          isOpen={this.state.endModal}
          onClosed={() => this.setState({ endModal: false })}
          headerSize={0.2}
          backdropOpacity={0.9}
          header={
            <View style={{ flex: 0.2, backgroundColor: "transparent" }}>
              <ModalLine />
            </View>
          }
          backdropContent={
            <View style={{ flex: 0.19, backgroundColor: "transparent" }}>
              <Image
                style={{ flex: 1, height: "100%", width: "100%" }}
                source={require("../assets/images/end_alcool.jpg")}
                blurRadius={0.5}
                resizeMode="cover"
              />
            </View>
          }
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <EndMessage />
          </View>
        </CardModal>
      </View>
    );
  }

  findById(element, id) {
    for (let i = 0; i < element.length; i++) {
      if (element[i]._id === id) {
        return element[i];
      }
    }
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  footerText: {
    fontSize: 14,
    color: "#aaa"
  },
  inputMessageText: {
    fontSize: 18,
    color: "grey"
  }
});
