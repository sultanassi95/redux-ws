import React from "react";
import { connect } from 'react-redux';

import { getNamesAction } from '../../actions';

import Card from "../Card";

import "./styles.css";

class CardsContainer extends React.Component {
  componentDidMount() {
    const { props: { getNamesAction } } = this;
    getNamesAction();
  }

  filterNames = () => {
    const {
      props: { names: { names, search } },
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
      props: { names: { names, loaders: { getNames } } },
      filterNames
    } = this;

    if (getNames) return <p>Loading...</p>;

    const namesToRender = filterNames();

    return (
      <div className="CardsContainer">
        {namesToRender.map((name, i) => (
          <Card name={name} key={`name#${i + 1}`} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ names }) => ({
  names
});

const mapDispatchToProps = {
  getNamesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
