import React from 'react';
import Header from './components/Header';
import OrbitaDosPlanetas from './components/OrbitaDosPlanetas';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <OrbitaDosPlanetas />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}
console.log(window.innerHeight);
export default App;
