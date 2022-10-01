import React, { useState } from "react";
import styles from "./css/CreateAccountForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateAccountForm() {
  const url = "https://localhost:5001/api/user/";
  const history = useNavigate();
  
  function enviarForm(e) {    
    e.preventDefault();
    
    axios
      .post(url, user)
      .then((response) => {
        console.log(JSON.stringify(response.status));
        alert("Usuário cadastrado com sucesso!");
        history("/");
      })
      .catch((error) =>
        alert("Ocorreu um erro ao enviar o usuário: " + error.message)
      );
  }

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const user = {
    nome: nome,
    email: email,
    senha: senha,
  };
 
  return (
    <div className={`row ${styles.form_style}`}>
      <div className="col-12 col-md-12 col-lg-4 col-xl-4"></div>
      <div className="col-12 col-md-12 col-lg-4 col-xl-4">
        <form onSubmit={enviarForm}>
          <div className="form-group col-12">
            <label htmlFor="nome">Nome</label>
            <input
              type="bome"
              className="form-control"
              id="nome"
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          
          <input
            type="submit"
            className={styles.btn_cadastrar}
            value="Cadastrar"
          />
        </form>
      </div>
      <div className="col-12 col-md-12 col-lg-4 col-xl-4"></div>
    </div>
  );
}

export default CreateAccountForm;
