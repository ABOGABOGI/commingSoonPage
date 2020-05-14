import React from "react";
import CustomChatBot from "./CustomChatBot";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ADD_EMAIL_MUTATION = gql`
  mutation ADD_EMAIL_MUTATION($email: String!) {
    addEmail(email: $email) {
      id
      email
    }
  }
`;

const AddEmail = () => {
  const [addEmail, { error }] = useMutation(ADD_EMAIL_MUTATION);

  const eventHandler = (email) => {
    addEmail({
      variables: {
        email,
      },
    }).catch((err) => {
      console.log(err);
    });
  };

  if (error) return <p className="error">Error: {error.message}</p>;

  return <CustomChatBot eventHandler={eventHandler} />;
};

export default AddEmail;
