import { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Routes } from "react-router-dom"
import "./estilos.css";
import { Footer } from "./componentes/Footer";
import { Articulos } from "./componentes/Articulos";
import { Aside } from "./componentes/Aside";
import { Info } from "./componentes/Info";
import { Bienvenida } from "./componentes/Bienvenida";
import { Construccion } from "./componentes/Construccion";
import  ArticulosAPI  from "./componentes/ArticulosAPI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <>
      <header id="header">
        <div className="wrap_cabecera">
          <div id="logo">
            <span className="gear">S</span>
            <h3>
              <NavLink to="/blog">BLOG</NavLink>
            </h3>
          </div>
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/">INICIO</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/formacion">FORMACIÓN</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">CONTACTO</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="wrap">

        <Info></Info>

        <div className="contenedor-flex">



          <Aside></Aside>




          <Routes>
            <Route path="/" element={ <Bienvenida /> } />
            <Route path="/blog" element={ <ArticulosAPI /> } />
            <Route path="/formacion" element={ <Construccion /> } />
            <Route path="/contacto" element={ <Construccion /> } />
          </Routes>




        </div>


      </main>

      <Footer></Footer>
    </>
    </Router>
  );
}

export default App;
