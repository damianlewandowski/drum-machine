import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import BoxContainer from "./containers/BoxContainer";
import { createGlobalStyle } from "styled-components";
import crash from "./sounds/crash.wav";

const GlobalStyle = createGlobalStyle`
  body {
    background: #2f2f2f;
    padding: 30px 15px;
  }

  * {
    font-family: Ariana;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BoxContainer />
      </Provider>
    );
  }
}

export default App;
