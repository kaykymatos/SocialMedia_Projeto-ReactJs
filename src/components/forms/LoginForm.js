function LoginForm() {
  return (
    <form>
      <label>Email:</label>
      <input type="text" placeholder="Nome" />
      <span id="email-error-message" />
      <br />

      <label>Senha:</label>
      <input type="text" placeholder="Nome" />
      <span id="passowrd-error-message" />
      <br />
    </form>
  );
}

export default LoginForm;
