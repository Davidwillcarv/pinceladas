import cadastro from "../assets/images/cadastro.jpeg";

export default function Orcamento() {
  return (
    <section>
      <h2>Solicite seu Orçamento</h2>

      <img
  src={cadastro}
  alt="Cadastro"
  className="imagem-orcamento"
/>


     <form className="orcamento-form">
  <h3>Dados do Cliente</h3>

  <div className="form-grid">
    <div className="form-group">
      <label>Nome completo</label>
      <input type="text" placeholder="Ex: João da Silva" required />
    </div>

    <div className="form-group">
      <label>E-mail</label>
      <input type="email" placeholder="exemplo@email.com" required />
    </div>

    <div className="form-group">
      <label>Telefone / WhatsApp</label>
      <input type="tel" placeholder="(15) 99999-9999" required />
    </div>

    <div className="form-group">
      <label>Cidade</label>
      <input type="text" placeholder="Cerquilho / SP" required />
    </div>
  </div>

  <h3>Detalhes do Serviço</h3>

  <div className="form-group">
    <label>Descreva o que precisa...</label>
    <textarea
      placeholder="Ex: pintura interna, 3 quartos e sala..."
      rows="4"
      required
    ></textarea>
  </div>

  <button type="submit">Solicitar Orçamento</button>
</form>
    </section>)
}
