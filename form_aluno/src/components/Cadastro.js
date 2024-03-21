import { useState } from "react";
import validator from "validator";
import InputMask from "react-input-mask";
import "./Form.css";

function Cadastro() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telStudent, setTelS] = useState("");
  const [telResp, setTelR] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  
  function cadastrar(event) {
    event.preventDefault();
  
    let errors = [];
  
    if (errors.length === 0) {
      let user = JSON.stringify({
        name: name,
        cpf: cpf,
        rg: rg,
        telStudent: telStudent,
        telResp: telResp,
        email: email,
        date: date,
      });
      console.log(user);
    } 
  }  

  return (
    <form onSubmit={cadastrar} className="form">
      <h1>CADASTRO DO ALUNO</h1>
      <input
        type="text"
        placeholder="NOME"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <InputMask
        mask="999.999.999-99"
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <InputMask
        mask="99.999.999-9"
        type="text"
        placeholder="RG"
        value={rg}
        onChange={(event) => {
          setRg(event.target.value);
        }}
      />

      <input
        type="tel"
        placeholder="TELEFONE"
        value={telStudent}
        onChange={(event) => {
          setTelS(event.target.value);
        }}
      />

      <input
        type="tel"
        placeholder="TELEFONE DO RESPONSÁVEL"
        value={telResp}
        onChange={(event) => {
          setTelR(event.target.value);
        }}
      />

      <input
        type="email"
        placeholder="E-MAIL"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        type="date"
        placeholder="DATA DE NASCIMENTO"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastro;
