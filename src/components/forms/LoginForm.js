import React, { useState } from "react";
import styles from "./css/LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const url = "https://localhost:5001/api/User/Login";
  const history = useNavigate();

  function enviarForm(e) {
    e.preventDefault();
    axios
      .post(url, state)
      .then((response) => {
        console.log(JSON.stringify(response.status));
        history("/");
      })
      .catch((error) =>
        alert("Ocorreu um erro ao enviar o usuário: " + error.message)
      );
  }
  const [state, setState] = useState();

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  }
  return (
    <div className={`row ${styles.login_form_style}`}>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>

      <div className="col-12 col-md-12 col-lg-4 col-xl-4">
        <form onSubmit={enviarForm}>
          <div className="form-group col-12">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
            />
          </div>

          <input type="submit" className={styles.btn_logar} value="Logar" />
        </form>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
    </div>
  );
}

export default LoginForm;
