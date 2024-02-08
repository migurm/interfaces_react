import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./estilos.css";
import { Footer } from "./componentes/Footer";
import { Articulos } from "./componentes/Articulos";
import { Aside } from "./componentes/Aside";
import { Info } from "./componentes/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="header">
        <div className="wrap_cabecera">
          <div id="logo">
            <span className="gear">S</span>
            <h3>
              <a href="blog.html">BLOG</a>
            </h3>
          </div>
          <nav id="menu">
            <ul>
              <li>
                <a>INICIO</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>FORMACIÓN</a>
              </li>
              <li>
                <a>CONTACTO</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="wrap">

        <Info></Info>

        <div className="contenedor-flex">
          <Aside></Aside>
          <Articulos></Articulos>
        </div>

      </main>

      
      <Footer></Footer>
    </>
  );
}

export default App;
