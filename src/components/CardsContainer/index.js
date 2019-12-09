import React from "react";

import Card from "../Card";
import { getData } from "../../utils";

import "./styles.css";

const INITIAL_STATE = {
  names: [],
  loadingNames: true
};

class CardsContainer extends React.Component {
  state = {
    ...INITIAL_STATE
  };

  componentDidMount() {
    getData()
      .then(names => {
        this.setState({
          names,
          loadingNames: false
        });
      })
      .catch(err => console.error("err", err));
  }

  filterNames = () => {
    const {
      props: { search },
      state: { names }
    } = this;

    if (search) {
      return names.filter(name =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return names;
  };

  render() {
    const {
      state: { names, loadingNames },
      filterNames
    } = this;

    if (loadingNames) return <p>Loading...</p>;

    const namesToRender = filterNames(names);

    return (
      <div className="CardsContainer">
        {namesToRender.map((name, i) => (
          <Card name={name} key={`name#${i + 1}`} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
