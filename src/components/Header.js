import React from 'react';
import titulo from '../images/título.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ titulo } alt="imagem do título" className="tituloImg" />
      </header>
    );
  }
}

export default Header;
