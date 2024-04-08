import React from 'react';


function Header() {
  const navbar = [
    {
      nome: "home",
      link: "#home",
    },
    {
      nome: "Sobre nós",
      link: "#sobre",
    },
    {
      nome: "Experiencia",
      link: "#cards",
    },
    {
      nome: "Contato",
      link: "#contato",
    },
  ];

  return (
    <header>
      <h2>Bem Vindo</h2>
      <ul>
        {navbar.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.nome}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
