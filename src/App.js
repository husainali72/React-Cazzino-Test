import React from "react";
// ====================== Css
import "./App.css";
// ====================== Component
import { Header, Wrapper, SectionFirst, SectionSecond, SectionThird } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
