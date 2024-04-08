import React from 'react';

function Forms() {
  const formFields = [
    {
      for: "email",
      label: "Email",
      type: "email",
      id: "email",
    },
    {
      for: "mensagem",
      label: "Mensagem",
      type: "textarea",
      id: "mensagem",
    },
  ];

  return (
    <section id="contato">
      <form action="/cadastro" method="post" className="bigform">
        <h2>Entre em Contato</h2>
        {formFields.map((field, index) => (
          <div key={index} className="form">
            <label htmlFor={field.for}>{field.label}</label>
            <input type={field.type} id={field.id} name={field.label} />
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Forms;
