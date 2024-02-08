import logo from './logo.svg';
import './App.css';
import './estilos.css';

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
                        <li><a href="#">INICIO</a></li>
                        <li><a href="blog.html" >BLOG</a></li>
                        <li><a href="#">FORMACIÓN</a></li>
                        <li><a href="#">CONTACTO</a></li>
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
        <section id="articles">
          <h2>Últimos artículos</h2>
          <div className="clearfix"></div>
          <article>
              <div className="datos">
                  <span>Fecha: 01 de enero</span>
                  <span>Categoría: Pruebas</span>
              </div>
              <h4>
                  <a href="#">Título de artículo 1</a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
          </article>
          <article>
              <div className="datos">
                  <span>Fecha: 01 de febrero</span>
                  <span>Categoría: Pruebas</span>
              </div>
              <h4>
                  <a href="#">Título de artículo 2</a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
          </article>
          <article>
              <div className="datos">
                  <span>Fecha: 01 de marzo</span>
                  <span>Categoría: Pruebas</span>
              </div>
              <h4>
                  <a href="#">Título de artículo 3</a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
          </article>
          <article>
              <div className="datos">
                  <span>Fecha: 01 de abril</span>
                  <span>Categoría: Pruebas</span>
              </div>
              <h4>
                  <a href="#">Título de artículo 4</a>
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolores. Consequatur quis tenetur, modi quod quam repellat facilis minus molestias dicta eum ex voluptatibus itaque necessitatibus, possimus quas? Fugiat, veritatis!</p>
          </article>
          <article id="blog">
              <a href="blog.html">Ir al blog</a>
          </article>
        </section>
      </div>
      
      
    </main>
    

    <footer id="footer">
        <div className="wrap">
            <div id="menuFooter">
                <h5>MENÚ</h5>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="blog.html">BLOG</a></li>
                    <li><a href="#">FORMACIÓN</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
            </div>
            <div id="location">
                <h5>DÓNDE ESTAMOS?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.2996623515555!2d-4.462811723546774!3d36.69133637227841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9c45623d2c3%3A0x7a634bd28c0cf953!2sMEDAC%20Nova%20%F0%9F%A5%87%20Centro%20Tecnol%C3%B3gico%20de%20FP!5e0!3m2!1ses!2ses!4v1698701252334!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="info">
                <h5>Desarrollado con</h5>
                <p>
                    <img src="img/html5-badge-h-css3-graphics-multimedia-performance-semantics.png" alt="Creado con HTML y CSS"/>
                </p>
                <h5>Optimizado para</h5>
                <p id="browsers">
                    <a href="#">
                        <img src="img/firefox-icon.png" alt="Firefox"/>
                    </a>
                    <a href="#">
                        <img src="img/chrome.png" alt="Chrome"/>
                    </a>
                    <a href="#">
                        <img src="img/safari.png" alt="Safari"/>
                    </a>
                    <a href="#">
                        <img src="img/android.png" alt="Android"/>
                    </a>
                    <a href="#">
                        <img src="img/Opera_256x256.png" alt="Opera"/>
                    </a>
                </p>
                <h5>AUTOR</h5>
                <p> MIGUEL RUEDA - 2º WEB</p>
            </div>
        </div>
    </footer>

    </>
  );
}

export default App;





