import React from 'react';
import PropTypes from 'prop-types';
/* import orbitaImg from '../images/orbitaPlaneta.png'; */

class Orbita extends React.Component {
  render() {
    const { planetName } = this.props;
    const orbitaClassName = `orbita${planetName}`;
    return (
      <div className={ orbitaClassName } />
    );
  }
}

Orbita.propTypes = {
  planetName: PropTypes.string.isRequired,
};

export default Orbita;
