function App() {
  const paellaImaegeUrl: string =
    "https://images.hola.com/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-m.jpg";

  return (
    <>
      <h1>Hallo</h1>
      <section className="main-content">
        <img
          src={paellaImaegeUrl}
          alt="tremenda paella"
          className="main-content__image"
        />
        <p className="main-content__text">
          Ay qué rica la paella que aparece en la pantalla. ¿A quién no le va a
          gustar una paella valenciana del siglo XX?¿A quién no le va a gustar?
        </p>
        <p className="main-content__text main-content__text--highlighted">
          Os invito a todos a que me invitéis a una paellita bien rica y
          participéis mucho en esta clase.
        </p>
        <p className="main-content__text">
          Ánimos con Flux, mis bebesitos y bebesitas fiu fiu. Gerard, si lees
          esto eres mi{" "}
          <span className="main-context__text--love">pionono de vitrina</span>.
        </p>
      </section>
    </>
  );
}

export default App;
