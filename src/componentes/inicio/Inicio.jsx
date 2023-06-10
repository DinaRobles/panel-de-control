import "./InicioStyles.css";

function Inicio() {
  return (
    <>
      <h1 className="subtitulo">
        Hola me llamo <span className="nombre">Dina Robles</span>
      </h1>
      <section className="container-inicio">
        <div className="foto">
          <img
            src="https://avatars.githubusercontent.com/u/132718961?v=4"
            alt="Dinita"
          />
        </div>
        <div className="info">
          <p className="textp">
            Me inscribí en este bootcamp para aprender acerca de la tecnologia y
            adquirir nuevos conocimientos para mi ambiente laboral 🚀.
          </p>
        </div>
      </section>
      <section className="section-boton">
        <a href="https://github.com/DinaRobles" className="boton">
          Visitar perfil Github
        </a>
      </section>
    </>
  );
}

export default Inicio;
