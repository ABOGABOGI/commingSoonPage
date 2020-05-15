import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { LinkedinIcon, TwitterIcon } from "react-share";

// Component
import Bubbles from "./component/Bubbles";

const client = new ApolloClient({
  uri: "https://toga-comming-soon.herokuapp.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Bubbles />
      <div className="bottom-section">
        <h2>Coming Soon</h2>
        <div className="social-icon-container">
          <a
            className="social-icon"
            href="https://www.linkedin.com/company/toga-device-insurance/"
          >
            <LinkedinIcon size={42} />
          </a>
          <a className="social-icon" href="https://twitter.com/Togainsurance">
            <TwitterIcon size={42} />
          </a>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
