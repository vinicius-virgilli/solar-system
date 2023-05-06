import React from 'react';
import SolImg from '../images/Sol.png';

class Sol extends React.Component {
  render() {
    return (
      <div className="Sol">
        <p>Sol</p>
        <img
          src={ SolImg }
          alt="Sol"
          id="Sol"
        />
      </div>
    );
  }
}

export default Sol;
