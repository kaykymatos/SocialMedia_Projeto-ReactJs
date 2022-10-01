import React, { useState } from "react";
import styles from "./css/LoginForm.module.css"

function LoginForm() {
  function enviarForm(e) {
    e.preventDefault();
    console.log("form de login enviado"+email+senha);
  }
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
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

          <input type="submit" className={styles.btn_logar} value="Logar" />
        </form>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
    </div>
  );
}

export default LoginForm;
