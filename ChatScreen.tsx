import React, { useCallback, useState } from "react";
import { GiftedChat, Message } from "react-native-gifted-chat";
import getResponse from "./getResponse";
import isHateSpeech from "./isHateSpeech";
import translate from "./translate";

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onSend = useCallback((messages = []) => {
    let newMessages = [...messages];
    const messageText = messages[0].text;
    isHateSpeech(messageText).then((res) => {
      if (res) {
        newMessages = [
          {
            _id: Math.round(Math.random() * 1000000),
            text: "Your message cannot be sent because it contains hate speech.",
            createdAt: new Date(),
            system: true,
            user: {
              _id: 2,
              name: "React Native",
            },
          },
          ...newMessages,
        ];
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessages)
        );
      } else {
        getResponse(messageText).then((res) => {
          newMessages = [
            {
              _id: Math.round(Math.random() * 1000000),
              text: res,
              createdAt: new Date(),

              user: {
                _id: 2,
                name: "ChatBot",
              },
            },
            ...newMessages,
          ];
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
          );
        });
      }
    });
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;
