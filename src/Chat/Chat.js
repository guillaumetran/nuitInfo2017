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
    chat: [],
    messages: [],
    nextMessage: null,
    responses: [],
    currentResponses: [],
    infoMessages: [],
    info: null,
    endMessages: [],
    end: null,
    endMessage: null,
    replyModal: false,
    infoModal: false,
    endModal: false,
    isFinish: false,
    canAnswer: false,
    typingText: ""
  };

  componentWillMount() {
    this.setState(() => {
      return {
        messages: require("../assets/messages.js"),
        responses: require("../assets/responses.js"),
        infoMessages: require("../assets/infoMessages.js"),
        endMessages: require("../assets/endMessages.js")
      };
    });
  }

  componentDidMount() {
    this.showInfo(1);
  }

  showInfo(id) {
    let info = this.findById(this.state.infoMessages, id);
    let nextMessage = this.findById(this.state.messages, info._id);
    this.setState({
      infoModal: true,
      info: info,
      nextMessage: nextMessage
    });
    setTimeout(() => {
      this.setState({
        infoModal: false
      });
      this.onReceive(nextMessage);
    }, 1000);
  }

  onSend(messages = []) {
    console.log(messages);
    if (messages.end) {
      if (messages.endNumber) {
        this.setState({
          endMessage: this.findById(this.state.endMessages, messages.endNumber),
          isFinish: true,
          endModal: true
        });
      } else this.setState({ isFinish: true });
    } else {
      this.setState(previousState => {
        return {
          chat: GiftedChat.append(previousState.chat, messages),
          canAnswer: false
        };
      });
      let message = this.findById(this.state.messages, messages.next[0]);
      this.onReceive(message);
    }
  }

  onReceive(message) {
    console.log(message);
    setTimeout(() => {
      this.setState({
        typingText: "Eva est entrain d'écrire.."
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        typingText: null,
        canAnswer: true
      });
      if (message.end) {
        if (message.endNumber) {
          this.setState({
            endMessage: this.findById(
              this.state.endMessages,
              message.endNumber
            ),
            isFinish: true,
            endModal: true
          });
        } else this.setState({ isFinish: true });
      }
      let answers = [];
      for (let i = 0; i < message.next.length; i++) {
        answers.push(this.findById(this.state.responses, message.next[i]));
      }
      this.setState(previousState => {
        return {
          currentResponses: answers,
          chat: GiftedChat.append(previousState.chat, {
            _id: Math.round(Math.random() * 1000000),
            text: message.text,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Eva Martin",
              avatar: require("../assets/images/eva.jpg")
            }
          })
        };
      });
    }, 2000);
  }

  renderComposer(props) {
    return this.state.isFinish ? (
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
            if (this.state.canAnswer) this.setState({ replyModal: true });
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
          messages={this.state.chat}
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
        <CardModal
          swipeArea={height / 4}
          swipeThreshold={50}
          isOpen={this.state.endModal}
          headerSize={0.2}
          backdropOpacity={0.9}
          onClosed={() => this.setState({ endModal: false })}
          header={
            <View style={{ flex: 0.2, backgroundColor: "transparent" }}>
              <ModalLine />
            </View>
          }
          backdropContent={
            <View style={{ flex: 0.19, backgroundColor: "transparent" }}>
              <Image
                style={{ flex: 1, height: "100%", width: "100%" }}
                source={
                  this.state.endMessage
                    ? this.state.endMessage.image
                    : require("../assets/images/end_alcool.jpg")
                }
                blurRadius={0.5}
                resizeMode="cover"
              />
            </View>
          }
        >
          <EndMessage endMessage={this.state.endMessage} />
        </CardModal>
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
            responses={this.state.currentResponses}
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
        >
          <InfoMessage info={this.state.info} />
        </Modal>
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
