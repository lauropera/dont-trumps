import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Projeto desenvolvido por
          {' '}
          <a
            href="https://www.linkedin.com/in/lauro-pereira-sr/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Lauro Pereira
          </a>
          !
        </p>
        <p>
          A franquia Don&apos;t Starve e seus personagens pertencem a Klei
          Entertainment, todos os direitos reservados.
          <br />
          Este projeto foi desenvolvido para fins de aprendizado e não tem
          ligação com a companhia.
        </p>
      </footer>
    );
  }
}

export default Footer;
