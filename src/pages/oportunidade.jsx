import { useState } from "react";

export default function Oportunidade() {
  const [vaga, setVaga] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!vaga) {
      alert("Selecione uma vaga para continuar.");
      return;
    }

    alert(`Inscrição enviada para a vaga: ${vaga}`);
  }

  return (
    <section className="box">
      <h2>Nossas Oportunidades</h2>

      <p>Faça parte da nossa equipe</p>

      <ul>
        <li>Pintor</li>
        <li>Auxiliar de Pintura</li>
      </ul>

      <form onSubmit={handleSubmit} className="form-oportunidade">
        <label>Escolha uma vaga:</label>

        <select value={vaga} onChange={(e) => setVaga(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Pintor">Pintor</option>
          <option value="Auxiliar de Pintura">Auxiliar de Pintura</option>
        </select>

        <button type="submit">Inscrever-se</button>
      </form>

      <div className="historico">
        <h3>Histórico</h3>
        <p>Veja suas participações passadas.</p>
      </div>
    </section>
  );
}
