import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import OrbitaPlanetCard from './OrbitaPlanetCartd';
import Terra from './Terra';
import Sol from './Sol';

class OrbitaDosPlanetas extends React.Component {
  render() {
    const list = Planets.map((planet) => {
      const { name, image } = planet;
      let Component;
      if (name === 'Terra') {
        Component = Terra;
      } else {
        Component = OrbitaPlanetCard;
      }
      return (
        <Component planetName={ name } planetImage={ image } key={ name } />
      );
    });
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="ÓRBITA DOS PLANETAS" />
        <Sol />
        {list}
      </div>
    );
  }
}

export default OrbitaDosPlanetas;
