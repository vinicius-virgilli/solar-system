import React from 'react';
import PropTypes from 'prop-types';
import local from '../images/local.svg';
import bandeira from '../images/bandeira.svg';
import calendario from '../images/calendario.svg';

class MissionCard extends React.Component {
  render() {
    const { name, year } = this.props;
    let { country, destination } = this.props;
    if (country === 'Estados Unidos') { country = 'EUA'; }
    if (destination.includes('Espaço')) { destination = 'Interestelar'; }
    return (
      <div data-testid="mission-card" className="missionCard">
        <p data-testid="mission-name" className="missionTitle">
          {name}
          {' '}
        </p>
        <div className="missionLine" />
        <div className="missionCardSubContainer">
          <div className="missionCardYear">
            <img src={ calendario } alt="" />
            <p data-testid="mission-year">{year}</p>
          </div>
          <div className="missionCardCountry">
            <img src={ local } alt="" />
            <p data-testid="mission-country">{country}</p>
          </div>
          <div>
            <img src={ bandeira } alt="" />
            <p data-testid="mission-destination">{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
