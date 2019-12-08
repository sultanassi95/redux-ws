import React from 'react';

import Card from '../Card';

import './styles.css';

const INITIAL_STATE = {
  names: ["Jack", "Matt", "Carla", "Simpson", "Andro"]
}

class CardsContainer extends React.Component {
  state = {
    ...INITIAL_STATE,
  }

  static getDerivedStateFromProps(props, state){
    if(props.search) {
      return {
        names: INITIAL_STATE.names.filter(name => name.toLowerCase().includes(props.search.toLowerCase()))
      }
    }

    if(!props.search && state.names.length !== INITIAL_STATE.names.length) {
      return {
        names: INITIAL_STATE.names,
      }
    }

    return null;
  }

  render () {
    const { state: { names } } = this;

    return (
      <div className="CardsContainer">
        {names.map(name => (
          <Card name={name} key={name}/>
        ))}
      </div>
    )
  }
}


export default CardsContainer;
