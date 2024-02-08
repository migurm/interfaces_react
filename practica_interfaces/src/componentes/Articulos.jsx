import React from 'react'

export const Articulos = () => {
  return (
	<section id="articles">
		<h2>Últimos artículos</h2>
		<div className="clearfix"></div>
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
  )
}
