import React from 'react';
import PropTypes from 'prop-types';
import Orbita from './Orbita';

class OrbitaPlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div>
        <Orbita planetName={ planetName } />
        <div className={ planetName }>
          <p>{planetName}</p>
          <img
            src={ planetImage }
            alt={ `Planeta 
        ${planetName}` }
            id={ planetName }
          />
        </div>
      </div>
    );
  }
}

OrbitaPlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default OrbitaPlanetCard;
