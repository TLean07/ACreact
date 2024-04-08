import React from 'react';

function Footer() {
  const sobre = [
    {
      Nome: "Victor Cecilio",
      links: [
        "https://github.com/victor12020",
        "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
        "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
      ],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
    {
      Nome: "Pedro Henrique",
      links: ["https://github.com/Pedro2007596", "", ""],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
    {
      Nome: "Leandro Afonso",
      links: [
        "https://github.com/TLean07",
        "https://www.instagram.com/ileandrojr07?igsh=aWFrbm9yems5d3oz",
        "https://wa.me/qr/UX6ZEKFKWHPMF1",
      ],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
  ];

  return (
    <footer className="nomes">
      {sobre.map((item, index) => (
        <div key={index}>
          <h2>{item.Nome}</h2>
          <div className="divicon">
            {item.links.map((link, i) => (
              <a key={i} href={link}>
                <img className="icon" src={item.img[i]} alt={item.sites[i]} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
