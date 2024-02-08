import logo from './logo.svg';
import './App.css';
import './estilos.css';
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';


import {Footer} from './componentes/Footer';
import { Articulos } from './componentes/Articulos';


function App() {
  return (
    <>
    <header id="header">
        <div className="wrap_cabecera">
          <div id="logo"> 
            <span className="gear">S</span>
            <h3><a href="blog.html">BLOG</a></h3>
          </div>
          <nav id="menu">
            <ul>
              <li><NavLink to='/'>INICIO</NavLink></li>
              <li><NavLink to='/' >BLOG</NavLink></li>
              <li><NavLink to='/'>FORMACIÓN</NavLink></li>
              <li><NavLink to='/'>CONTACTO</NavLink></li>
            </ul>
          </nav>
        </div>
	  </header>
    <main className="wrap">
      <section id="info">
      <div id="banner">
          <h1>Re-diseño de CSS por MIGUEL RUEDA</h1>
      </div>
      <div id="cards">
          <div className="card">
              <p className="icon">H</p>
              <h2 className="category">Desarrollo Web</h2>
              <p className="description">
                  Aprende los principales lenguajes para desarrollar webs. !Conviértete en Web Master!
              </p>
          </div>
          <div className="card">
              <p className="icon">_</p>
              <h2 className="category">Sistemas Operativos</h2>
              <p className="description">
                  Aprende a administrar sistemas operativos linux y windows.
              </p>
          </div>
          <div className="card">
              <p className="icon">S</p>
              <h2 className="category">Hardware</h2>
              <p className="description">
                  Conoce los entresijos del hardware.
              </p>
          </div>
          <div className="card">
              <p className="icon">u</p>
              <h2 className="category">Redes e Internet</h2>
              <p className="description">
                  Aprende a configurar y administrar redes informáticas y servidores.
              </p>
          </div>
          <div className="card">
              <p className="icon">a</p>
              <h2 className="category">Bases de Datos</h2>
              <p className="description">
                  Aprende a instalar y administrar bases de datos.
              </p>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <div className="contenedor-flex">
        <aside id="lateral">
          <h3>BUSCAR</h3>
          <div id="search">
            <form>
              <input type="text"/>
              <input type="button" value="L" class="icon"/>
            </form>
          </div>
          <h3>LOGIN</h3>
          <div id="login" className="caja-lateral">
              <form>
                  <label id="user" className="icon">U</label>
                  <input type="email"/>
                  <label id="password" className="icon">w</label>
                  <input type="password"/>
                  <input type="submit" value="Entrar"/>
                  <input type="reset" value="Limpiar"/>
                  <a href="#">Regístrate aquí</a>
                  <a href="#">Has olvidado tu contraseña?</a>
              </form>
          </div>
          <h3>REDES SOCIALES</h3>
          <div id="social" className="caja-lateral">
              <div className="twitter">
                  <a href="#" class="icon">t</a>
                  <p className="overlay">
                      Twitter
                  </p>
              </div>
              <div className="facebook">
                  <a href="#" class="icon">f</a>
                  <p className="overlay">
                      Facebook
                  </p>
              </div>
              <div className="youtube">
                  <a href="#" className="icon">y</a>
                  <p className="overlay">
                      Youtube
                  </p>
              </div>
          </div>
          <h3>PATROCINADORES</h3>
          <div id="sponsors" className="caja-lateral">

          </div>
        </aside>
      
        <Articulos></Articulos>
      </div>
    </main>
    

    <Footer></Footer>

    </>
  );
}

export default App;





