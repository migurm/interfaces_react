import React, { useState, useEffect } from 'react';

const ArticulosAPI = () => {
  const [articulos, setArticulos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => {
        if (!res.ok) {
          throw new Error('Ups! Problemas con la API amigo');
        }
        return res.json();
      })
      .then(data => {
        setArticulos(data);
      })
      .catch(error => {
        console.error('Algo terrible pasó:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section id="articles">
      <h2>Últimos artículos</h2>
      <div className="clearfix"></div>
      {articulos.length > 0 && (
        <>
          {articulos.map(articulo => (
            <article key={articulo.id}>
              <div className="datos">
                <span>Categoría: {articulo.category}</span>
              </div>
              <h4>
                <a href="#">{articulo.title}</a>
              </h4>
              <p>{articulo.description}</p>
              <img className="img_articulo"src={articulo.image} alt={articulo.title} />
            </article>
          ))}
          <article id="blog">
            <a href="blog.html">Ir al blog</a>
          </article>
        </>
      )}
    </section>
  );
};

export default ArticulosAPI;





/*

*/