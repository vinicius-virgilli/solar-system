import React from 'react';
import logoTrybe from '../images/logoTrybe.svg';
import logoLinkedIn from '../images/logoLinkedIn.svg';
import logoGithub from '../images/logoGithub.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="icones">
          <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">
            <img src={ logoTrybe } alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-silva-virgilli/" target="_blank" rel="noopener noreferrer">
            <img src={ logoLinkedIn } alt="" />
          </a>
          <a href="https://github.com/vinicius-virgilli" target="_blank" rel="noopener noreferrer">
            <img src={ logoGithub } alt="" />
          </a>
        </div>
        <p>Feito por Vinicius Virgilli</p>
      </div>
    );
  }
}

export default Footer;
