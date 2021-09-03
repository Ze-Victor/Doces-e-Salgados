import React from 'react';

import './styles.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="image">

        </div>
        <div className="text">
          <h2>Doces e Salgados</h2>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li><a href="../cadastroCliente/index.html">Cadastre um produto</a></li>
          <li><a href="../sobreLoja/index.html">Sobre nós</a></li>
          <li><a href="../contatos/index.html">Contato</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;