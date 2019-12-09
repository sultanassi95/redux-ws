
import React from "react";

import CardsContainer from "../CardsContainer";
import SearchBar from "../SearchBar";

import './styles.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <SearchBar />
        <CardsContainer />
        <h1>Ma ely da5al</h1>
      </div>
    )
  }
}

export default App;
