import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetClassname = `planeta${planetName}`;
    const idName = `planeta${planetName}`;
    return (
      <div>
        <div data-testid="planet-card" className={ planetClassname }>
          <img
            src={ planetImage }
            alt={ `Planeta 
        ${planetName}` }
            id={ idName }
          />
        </div>
        <p data-testid="planet-name">{planetName}</p>

      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
