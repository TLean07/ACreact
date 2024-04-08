export default function Principal (){
    const cards = [
        {
          nome: "Victor Cecilio",
          hardskills:
            "Proficiência em inglês, Excel avançado, Operação de máquinas e sistemas, Domínio de Javascript, Domínio de CSS",
          softskills:
            "Comunicação, Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
        },
        {
          nome: "Pedro H. Sartorelli Ferreira",
          hardskills:
            "Proficiência em inglês, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
          softskills:
            "Comunicação, Flexibilidade, Motivação, Persuasão, Trabalho em equipe",
        },
        {
          nome: "Leandro Afonso S.S Júnior",
          hardskills:
            "Proficiência em inglês, Operação de sistemas, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
          softskills:
            "Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
        },
      ]
    
    return (
            <main>
              {cards.map((card, index) => (
                <div key={index} className="cards">
                  <h3>{card.nome}</h3>
                  <p>Hardskills: {card.hardskills}</p>
                  <p>Softskills: {card.softskills}</p>
                </div>
              ))}
            </main>
    )
}