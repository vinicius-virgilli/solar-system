import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Footer from './Footer';

class Missions extends React.Component {
  render() {
    const list = missions.map((mission) => {
      const n = mission.name;
      const y = mission.year;
      const c = mission.country;
      const d = mission.destination;
      return (
        <MissionCard name={ n } year={ y } country={ c } destination={ d } key={ n } />
      );
    });
    return (
      <div>
        <div className="missionsContainer">
          <div data-testid="missions" className="Missions">
            <Title headline="MISSÕES" />
            <div className="missionsListContainer">
              {list}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Missions;
