import React from 'react';
import PropTypes from 'prop-types';
import luaImg from '../images/Lua.png';
import Orbita from './Orbita';

class Terra extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    console.log();
    return (
      <div>
        <Orbita planetName={ planetName } />
        <div className="divTerraLua">
          <p data-testid="planet-name">{planetName}</p>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            id={ planetName }
          />
          <img
            src={ luaImg }
            alt="Lua"
            id="Lua"
          />
        </div>
      </div>
    );
  }
}

Terra.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default Terra;
