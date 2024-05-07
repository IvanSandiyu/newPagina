import './App.css';
import React from 'react';
import img from './imagenes/imagen.png';
import csharp from './imagenes/c.png';
import java from './imagenes/java.png';
import js from './imagenes/js.png';
import sql from './imagenes/sql.png';
import react from './imagenes/react.png';
import web_old from './imagenes/portafolio.png';
import python from './imagenes/python.png';
import sqlServer from './imagenes/sqlServer.png';
import postgres from './imagenes/postgres.png';
import html from './imagenes/html.png';
import css from './imagenes/css.png';
import htmlJsCss from './imagenes/html-css-js.png';


const AbrirGit = () => {
  const enlaceTemporal = document.createElement("a");
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/paginaWeb";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};
function App() {
  return (
    <>

      <div className="div-principal">
        <div className="contenedor">
          <h1>Desarrollador full stack</h1>
          <nav>
            <a href="#">Inicio</a>
            <a href="#">Conocimientos</a>
            <a href="#">Proyectos</a>
            <a href="#">Contacto</a>
          </nav>
        </div>

        <div className="informacion">
          <div className="subtitulo">
            <h2>Iván Sandiyú</h2>
            <h2>Técnico Universitario en Programación</h2>
          </div>
          <div className="imagen">
            <img src={img} alt="Iván Sandiyú" id="imagen"></img>
          </div>
        </div>
        <div className="conocimientos">
          <div class="columna">
            <img src={csharp} alt="Imagen 1" id="imagen" />
            <p></p>
          </div>
          <div class="columna">
            <img src={java} alt="Imagen 2" id="imagen"/>
            <p></p>
          </div>
          <div class="columna">
            <img src={js} alt="Imagen 3" id="imagen"/>
            <p></p>
          </div>
          <div class="columna">
            <img src={react} alt="Imagen 4" id="imagen"/>
            <p></p>
          </div>
          <div class="columna">
            <img src={sql} alt="Imagen 5" id="imagen"/>
            <p></p>
          </div>
        </div>

        <div className="proyectos">
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto">
              <img src={htmlJsCss} alt="Imagen del proyecto" id="htmlCssJs"/>
            </div>
            <div className="contenido">
              <h1>Portafolio primer version</h1>
              <p >Primer portafolio realizado</p>
              {/* <button onClick={AbrirGit()}></button> */}
            </div>
          </div>
        </div>

        <div className="proyectos">
        <div className="contenedor-proyecto">
            <div className="imagen-proyecto-crud">
              <img src={python} alt="Imagen del proyecto"  />
              <img src={postgres} alt="Imagen del proyecto"  />
              <img src={react} alt="Imagen del proyecto" />
            </div>
            <div className="contenido-crud">
              <h1>Sistema CRUD</h1>
              <p>Primer portafolio realizado</p>
              
            </div>
          </div>
        </div>

        <div className="proyectos">
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-java">
              <img src={java} alt="Imagen del proyecto" />
            </div>
            <div className="contenido">
              <h1>CRUD local con Java</h1>
              <p>Primer portafolio realizado</p>
             
            </div>
          </div>
        </div>

        <div className="proyectos">
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-csharp">
              <img src={csharp} alt="Imagen del proyecto" />
            </div>
            <div className="contenido">
              <h1>CRUD local con C#</h1>
              <p>Primer portafolio realizado</p>
              
            </div>
          </div>
        </div>

        <div className="proyectos">
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-csharp">
              <img src={csharp} alt="Imagen del proyecto" />
            </div>
            <div className="contenido">
              <h1>Alta y baja de mesa</h1>
              <p>Primer portafolio realizado</p>
            </div>
          </div>
        </div>




      </div>



    </>

  );
}

export default App;
