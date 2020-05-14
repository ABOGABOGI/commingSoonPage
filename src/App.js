import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// Component
import Bubbles from "./component/Bubbles";

const client = new ApolloClient({
  uri: "https://toga-comming-soon.herokuapp.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Bubbles />
    </ApolloProvider>
  );
};

export default App;
