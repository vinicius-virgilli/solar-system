import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const list = Planets.map((planet) => {
      const { name, image } = planet;
      return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
    });
    return (
      <div data-testid="solar-system" className="planetas">
        <Title headline="PLANETAS" />
        <div className="planetasList">
          {list}
        </div>
        <div className="line" />
      </div>
    );
  }
}

export default SolarSystem;
