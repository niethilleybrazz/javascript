import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
  // Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(name, email);

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name, email);
  }

  return (
    // Criando um form
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo input*/}
        <label>
          <span>E-mail: </span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default MyForm;
