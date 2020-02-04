import React from "react";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApClient from "./apClient";
import renderer from "react-test-renderer";

test("App rendered successfully", () => {
  const component = renderer.create(
    <ApolloProvider client={ApClient}>
      <App />
    </ApolloProvider>
  );
  let tree = component.toJSON();
  console.log(tree);
});
