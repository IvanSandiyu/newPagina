import '../css/index.css';
import React from 'react';
import img from '../imagenes/imagen.png';
import csharp from '../imagenes/c.png';
import java from '../imagenes/java.png';
import js from '../imagenes/js.png';
import sql from '../imagenes/sql.png';
import react from '../imagenes/react.png';
import web_old from '../imagenes/portafolio.png';
import python from '../imagenes/python.png';
import sqlServer from '../imagenes/sqlServer.png';
import postgres from '../imagenes/postgres.png';
import html from '../imagenes/html.png';
import css from '../imagenes/css.png';
import htmlJsCss from '../imagenes/html-css-js.png';
import asp from '../imagenes/asp.png';
import linkedin from '../imagenes/linkedin.svg';
import git from '../imagenes/git.png';
import gmail from '../imagenes/gmail.svg';
import maletin from '../imagenes/maletin.svg';
import flecha from '../imagenes/flecha2.png';



const abrirGithub = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://portafolioivansandiyu.vercel.app/';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub2 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/CRUD';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub3 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/CRUD-ASP.NET';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub4 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/Crud-con-Java';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub5 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/CRUD-CSHARP';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub6 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/Alta.Baja.Mesa';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGithub7 = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = 'https://github.com/IvanSandiyu/MisionEspacial';
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
}
const abrirGit = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = "https://github.com/IvanSandiyu";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};
const abrirLinkedin = () => {
  const enlaceTemporal = document.createElement("a");
  enlaceTemporal.href = "https://www.linkedin.com/in/ivansandiyu/";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};
const abrirGmail = () => {
    const destinatario = 'isandiyu@gmail.com';
    const enlaceCorreo = `mailto:${destinatario}`;
    window.open(enlaceCorreo);
};



function index(){
    
  return(
    <>
    <div className="div-principal">
        <div className="contenedor" id='inicio' >
          <h1>Desarrollador full stack</h1>
          <nav>
          <a href="#inicio">Inicio</a>
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

        <p className='texto-conocimiento' id='conocimientos'>Conocimientos   </p>
        
        <div className="conocimientos" >
          <div className="columna">
            <img src={csharp} alt="Imagen 1" id="imagen" />
          </div>

          <div className="columna">
            <img src={java} alt="Imagen 2" id="imagen" />
            
          </div>
          <div className="columna">
            <img src={js} alt="Imagen 3" id="imagen" />
            
          </div>
          <div className="columna">
            <img src={react} alt="Imagen 4" id="imagen" />
            
          </div>
          <div className="columna">
            <img src={sql} alt="Imagen 5" id="imagen" />
            
          </div>
        </div>


        <p className='texto-proyecto' id='proyecto-inicio'>Proyectos </p>
        <div className="proyectos" >
          <div className="contenedor-proyecto">
            <div className="imagen-proyecto">
              <img src={htmlJsCss} alt="Imagen del proyecto" id="htmlCssJs" />
            </div>
            <div className="contenido">
              <h1>Portafolio primer version</h1>
              <p >Primer portafolio realizado con HTML-CSS-JAVASCRIPT</p>
              <button onClick={abrirGithub}>Ver mas</button>
            </div>
          </div>
        </div>

        <div className="proyectos">

          <div className="contenedor-proyecto">
            <div className="imagen-proyecto-mision">
              <img src={java} alt="Imagen del proyecto" />
              <img src={postgres} alt="Imagen del proyecto" />
              
            </div>
            <div className="contenido-mision">
              <h1>Sistema API REST solo Backend</h1>
              <p>Java - PostgreSQL</p>
              <button onClick={abrirGithub7}>Ver mas</button>

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
              <button onClick={abrirGithub2}>Ver mas</button>

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
              <button onClick={abrirGithub3}>Ver mas</button>

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
              <button onClick={abrirGithub4}>Ver mas</button>

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
              <button onClick={abrirGithub5}>Ver mas</button>

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
              <button onClick={abrirGithub6}>Ver mas</button>
            </div>
          </div>
        </div>

        <div className='contenedor-contacto' id='contact'>
          <div className='contacto'>
            <h3>Hola! Mi nombre es Iván y estoy a punto de recibirme como Tecnico Universitario en programacion!. Estoy en busca de mi primer experiencia laboral para poder completar mi formación académica</h3>
            <p>Contacto</p>
          </div>
          <div className='imagenes-contacto'>
            <img src={git} onClick={abrirGit} alt="Imagen del proyecto" />
            <img src={linkedin} onClick={abrirLinkedin} alt="Imagen del proyecto" />
            <img src={gmail} onClick={abrirGmail} alt="Imagen del proyecto" />


          </div>

        </div>

        <div className='contenedor-volver' >
          <a href='#inicio'>
          <img src={flecha} ></img>
          </a>
        </div>
      </div> 
    
    </>

  );
    
}
export default index;