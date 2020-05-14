import React from "react";
import ChatBot from "react-simple-chatbot";
import isEmail from "isemail";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "inherit",
    headerFontColor: "#6B1787",
    headerFontSize: "24px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const config = {
    width: "100%",
    minHeight: "100%",
    margin: "auto",
    floating: false,
    bubbleStyle: {
      background: "white",
      borderRadius: "4px",
      color: "black",
      width: "80%",
    },
    headerTitle: "Toga",
    botAvatar:
      "https://res.cloudinary.com/toga-insure/image/upload/v1589457128/CommingSoonPage/togalogoart_uqekbz.jpg",
  };
  const steps = [
    {
      id: "Greet",
      message:
        "Hey! I'm Tunde, I'm a team member of an exciting and value driven innovation comming soon",
      trigger: "Few question",
    },
    {
      id: "Few question",
      message: "I have just a few question",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "What is your name?",
      trigger: "Waiting user input for name",
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Nice to meet you",
    },
    {
      id: "Nice to meet you",
      message: "Nice to meet you, {previousValue} :)",
      trigger: "Soon launch",
    },
    {
      id: "Soon launch",
      message: "The Innovation will be lauched very soon.",
      trigger: "Excited to see",
    },
    {
      id: "Excited to see",
      message:
        "I know, you are very excited to see it, but we need some time to unveil",
      trigger: "Be among the first",
    },
    {
      id: "Be among the first",
      message: "Would you like to be among the first to see it?",
      trigger: "Displaying options to see",
    },
    {
      id: "Displaying options to see",
      options: [
        {
          value: "Tell me more ",
          label: "Tell me More",
          trigger: "Interested",
        },
        {
          value: "Boring",
          label: "Boring",
          trigger: "Not interested",
        },
      ],
    },
    {
      id: "Interested",
      message:
        "Awesome! Please leave your email here and I will send you a message when it's ready.",
      trigger: "Ask for email",
    },
    {
      id: "Ask for email",
      user: true,
      validator: (value) => {
        if (!isEmail.validate(value)) {
          return "Please type a valid Email Address";
        }
        return true;
      },
      trigger: (details) => {
        props.eventHandler(details.value.toLowerCase());
        return "Vote of thanks";
      },
    },
    {
      id: "Not interested",
      message: "Sad to hear {previousValue} :( See you next time..",
      end: true,
    },
    {
      id: "Vote of thanks",
      message: "Got it! Thank you and see you soon here!",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Thanks for your time, enjoy the rest of your day!!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
