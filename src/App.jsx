import WhatsAppButton from "./components/WhatsAppButton";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Orcamento from "./pages/Orcamento";
import Contato from "./pages/Contato";
import Oportunidade from "./pages/Oportunidade";

export default function App() {
  return (
    <>
      <Header />
      <Menu /> {/* 👈 ISSO É O MAIS IMPORTANTE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Orcamento" element={<Orcamento />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Oportunidade" element={<Oportunidade />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
