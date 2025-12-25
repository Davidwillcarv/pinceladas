import { Link } from "react-router-dom";

export default function menu() {
  return (
    <nav
      style={{
        background: "#1f1f1f",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Início
      </Link>
      <Link to="/equipe" style={{ color: "white" }}>
        Equipe
      </Link>
      <Link to="/orcamento" style={{ color: "white" }}>
        Orçamento
      </Link>
      <Link to="/contato" style={{ color: "white" }}>
        Contato
      </Link>
      <Link to="/oportunidade" style={{ color: "white" }}>
        Oportunidades
      </Link>
    </nav>
  );
}
