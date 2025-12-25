import fachada from "../assets/images/fachada.jpeg";


export default function Galeria() {
  const imagens = [
    {
      src: fachada,
      titulo: "Fachada e acabamento final",
    },
   
 
   
  ];

  return (
    <section className="box">
      <h2>Nossos Trabalhos</h2>

      <div className="galeria-grid">
        {imagens.map((img, index) => (
          <div className="galeria-card" key={index}>
            <img src={img.src} alt={img.titulo} />
            <span>{img.titulo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
