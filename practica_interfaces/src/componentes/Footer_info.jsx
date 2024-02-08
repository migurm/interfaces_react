import React from 'react'

import html5 from '../img/html5-badge-h-css3-graphics-multimedia-performance-semantics.png'
import firefox from '../img/firefox-icon.png'
import chrome from '../img/chrome.png'
import safari from '../img/safari.png'
import android from '../img/android.png'
import opera from '../img/Opera_256x256.png'

export const Footer_info = () => {
  return (
	<div id="info">
		<h5>Desarrollado con</h5>
		<p>
			<img src={html5} alt="Creado con HTML y CSS"/>
		</p>
		<h5>Optimizado para</h5>
		<p id="browsers">
			<a href="#">
				<img src={firefox} alt="Firefox"/>
			</a>
			<a href="#">
				<img src={chrome} alt="Chrome"/>
			</a>
			<a href="#">
				<img src={safari} alt="Safari"/>
			</a>
			<a href="#">
				<img src={android} alt="Android"/>
			</a>
			<a href="#">
				<img src={opera} alt="Opera"/>
			</a>
		</p>
		<h5>AUTOR</h5>
		<p> MIGUEL RUEDA - 2º WEB</p>
	</div>
  )
}
