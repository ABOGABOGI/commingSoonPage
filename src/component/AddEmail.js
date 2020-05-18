import React from "react";
import CustomChatBot from "./CustomChatBot";
import ErrorMessage from "./ErrorMessage";
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

  if (error) return <ErrorMessage error={error} />;

  return (
    <main className="main">
      <CustomChatBot eventHandler={eventHandler} />
    </main>
  );
};

export default AddEmail;
