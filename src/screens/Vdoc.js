import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import "react-native-get-random-values";

import { v4 as uuidv4 } from "uuid";

// create a component
const Vdoc = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    myPrompt("hey");
  }, []);

  const myPrompt = (text) => {
    const url = process.env.EXPO_OPENAI_URL;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_OPENAI_TOKEN}`,
      },
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a medical assistant and you have answer patients medical queries if patient gives you symptoms you have to predict disease and give anser in this manner [Symptoms- users symptoms, Disease- user disease, seriousness- ask how serious condition is if user have severe condition just suggest them a doctor according to there disease and if user is not severe then give them medication- mediaction according to user disease ] and also suggest necessary diet- user diet and precatutions.",
        },
        {
          role: "user",
          content: `${text}`,
        },
      ],
      temperature: 0.7,
      stream: false,
    };
    setLoading(true);
    axios
      .post(url, data, config)
      .then((res) => {
        let result = res.data.choices[0]["message"]["content"];
        console.log("res++++", result);

        let my_value = [
          {
            _id: uuidv4(),
            text: result,
            createdAt: new Date(),
            user: {
              _id: 1,
              name: "system",
              avatar: require("../../assets/svg/docAvatar.png"),
            },
          },
        ];

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, my_value)
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("error raised", error);
        alert(error?.response?.data?.error?.message);
        setLoading(false);
      });
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    myPrompt(messages[0]?.text);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          isTyping={isLoading}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          showUserAvatar
          user={{
            _id: 2,
            avatar: require("../../assets/svg/userAvatar.png"),
            name: "user",
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Vdoc;
