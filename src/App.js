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
import asp from './imagenes/asp.png';
import linkedin from './imagenes/linkedin.svg';
import git from './imagenes/git.png';
import gmail from './imagenes/gmail.svg';
import maletin from './imagenes/maletin.svg';


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
            <a href="#conocimientos">Conocimientos</a>
            <a href="#proyecto-inicio">Proyectos</a>
            <a href="#contact">Contacto</a>
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

        <p className='texto-conocimiento' id='conocimientos'>Conocimientos</p>
        <div className="conocimientos" >
          <div class="columna">
            <img src={csharp} alt="Imagen 1" id="imagen" />
            <p></p>
          </div>
          <div class="columna">
            <img src={java} alt="Imagen 2" id="imagen" />
            <p></p>
          </div>
          <div class="columna">
            <img src={js} alt="Imagen 3" id="imagen" />
            <p></p>
          </div>
          <div class="columna">
            <img src={react} alt="Imagen 4" id="imagen" />
            <p></p>
          </div>
          <div class="columna">
            <img src={sql} alt="Imagen 5" id="imagen" />
            <p></p>
          </div>
        </div>


        <p className='texto-proyecto' id='proyecto-inicio'>Proyectos</p>
        <div className="proyectos" >
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto">
              <img src={htmlJsCss} alt="Imagen del proyecto" id="htmlCssJs" />
            </div>
            <div className="contenido">
              <h1>Portafolio primer version</h1>
              <p >Primer portafolio realizado con HTML-CSS-JAVASCRIPT</p>
              {/* <button onClick={AbrirGit()}></button> */}
            </div>
          </div>
        </div>

        <div className="proyectos">

          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-crud">
              <img src={python} alt="Imagen del proyecto" />
              <img src={postgres} alt="Imagen del proyecto" />
              <img src={react} alt="Imagen del proyecto" />
            </div>
            <div className="contenido-crud">
              <h1>Sistema CRUD</h1>
              <p>FastAPI Python-React-PostgreSQL</p>

            </div>
          </div>
        </div>

        <div className="proyectos">
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-asp">
              <img src={sqlServer} alt="Imagen del proyecto" />
              <img src={asp} alt="Imagen del proyecto" />
              <img src={csharp} alt="Imagen del proyecto" />
            </div>
            <div className="contenido">
              <h1>Sistema CRUD</h1>
              <p>Crud realizado con C#-ASP-MVC-SQL Server</p>

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
              <p>Crud basico con java</p>

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
              <p>Sistema crud</p>

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
              <p>Altas y bajas de mesas de examenes</p>
            </div>
          </div>
        </div>

        <div className='contenedor-contacto' id='contact'>
          <div className='contacto'>
            <h3>Hola! Mi nombre es Iván y estoy a punto de recibirme como Tecnico Universitario en programacion!. Estoy en busca de mi primer experiencia laboral para poder completar mi formación académica</h3>
            <p>Contacto</p>
          </div>
          <div className='imagenes-contacto'>
            <img src={git} alt="Imagen del proyecto" />
            <img src={linkedin} alt="Imagen del proyecto" />
            <img src={gmail} alt="Imagen del proyecto" />


          </div>

        </div>





      </div>



    </>

  );
}

export default App;
