import React from "react";

import CardsContainer from "../CardsContainer";
import SearchBar from "../SearchBar";

import './styles.css';

class App extends React.Component {
  state = {
    search: '',
  }

  handleSearchChange = (search) => {
    this.setState({ search });
  }

  render () {
    const { state: { search }, handleSearchChange } = this;
    return (
      <div className="App">
        <SearchBar onChange={handleSearchChange}/>
        <CardsContainer search={search} />
      </div>
    )
  }
}

export default App;
