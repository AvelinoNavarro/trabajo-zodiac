
import "./styles.css";

function Aplicacion() {
  return (
    <main className="pagina">
      <section className="distribucion">
        <header className="encabezado">
          <h1>EL CASO DEL ZODIACO</h1>
        </header>

        <section className="barra-horizontal">
          <h2>Archivo de investigación</h2>
        </section>

        <section className="columnas-texto">
          <article className="bloque-texto">
            <h2>Introducción</h2>
            <p>
              El Asesino del Zodiaco fue un criminal que actuó
              en el norte de California a finales de la década
              de 1960 y principios de la de 1970.
            </p>
          </article>

          <article className="bloque-texto">
            <h2>La investigación</h2>
            <p>
              El caso adquirió notoriedad por las cartas que
              el autor envió a varios periódicos, algunas de
              ellas acompañadas de mensajes cifrados.
            </p>
          </article>

          <article className="bloque-texto">
            <h2>Estado del caso</h2>
            <p>
              La identidad del responsable no se ha establecido
              de forma concluyente. A lo largo de los años
              han surgido múltiples teorías y sospechosos.
            </p>
          </article>
       </section>

        <section className="barra-inferior" >
          <p>Notas adicionales / Fuente de la investigación: Archivos Policiales de California.</p>
        </section>
        

        
        <section className="panel-principal">
          <img
            src="/src/imagenes/zodiac.png"
            alt="Caso Zodiaco."
            className="foto-principal"
          />
        </section>


        <section className="paneles-pequenos">
          <article className="panel-pequeno">
            <h3>Víctimas</h3>
            <p>5 confirmadas.</p>
          </article>

          <article className="panel-pequeno">
            <h3>Cartas</h3>
            <p>4 principales</p>
          </article>

          <article className="panel-pequeno">
            <h3>Cifrados</h3>
            <p>Sin resolver</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Aplicacion;
