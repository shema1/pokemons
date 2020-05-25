import React, { Component } from "react";
import { Provider } from "react-redux";
import "./styles/breakpoints.scss";
import store from "./store";
import Pokedex from "./features/pokeDex/component/Pokedex";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pokedex />
      </Provider>
    );
  }
}

export default App;
