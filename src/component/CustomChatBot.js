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
    botBubbleColor: "#fff",
    botFontColor: "#6B1787",
    userBubbleColor: "#6B1787",
    userFontColor: "#fff",
  };

  const config = {
    width: "100%",
    minHeight: "100%",
    margin: "auto",
    floating: false,
    headerTitle: "Toga",
    enableMobileAutoFocus: true,
    botDelay: 1500,
    enableSmoothScroll: true,
    avatarStyle: {
      border: "none",
      boxShadow: "none",
    },
    botAvatar:
      "https://res.cloudinary.com/toga-insure/image/upload/v1589798290/CommingSoonPage/TogaLogo_2x_xhi9a1.png",
  };
  const steps = [
    {
      id: "Greet",
      message:
        "Hey! I'm Tunde, I'm a team member of an exciting and value driven insurance  innovation comming soon",
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
      validator: (value) => {
        const regExp = /^[a-zA-Z]$/;
        if (regExp.test(value)) {
          return "Please type in your First Name";
        }
        return true;
      },
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
      message: ({ steps }) => {
        return `Sad to hear ${steps["Waiting user input for name"].value}:( See you next time..`;
      },
      end: true,
    },
    {
      id: "Vote of thanks",
      message: "Got it! Thank you and see you soon here!",
      trigger: "Done",
    },
    {
      id: "Done",
      message: ({ steps }) => {
        return `Thanks for your time ${steps["Waiting user input for name"].value} :), enjoy the rest of your day!!`;
      },
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
