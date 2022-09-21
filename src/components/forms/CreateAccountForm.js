function CreateAccountForm() {
  return (
    <form>

      <label>Nome:</label>
      <input type="text" placeholder="Nome" />
      <span id="name-error-message" /><br/>

      <label>Email:</label>
      <input type="text" placeholder="Nome" />
      <span id="email-error-message" /><br/>

      <label>Senha:</label>
      <input type="text" placeholder="Nome" />
      <span id="passowrd-error-message" /><br/>
    </form>
  );
}

export default CreateAccountForm;
