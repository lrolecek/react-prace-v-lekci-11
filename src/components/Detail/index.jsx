import React from 'react';
import './style.css';

import {Link, useParams} from 'react-router-dom';

const produkty = [
	{ id: 1, nazev: 'Pračka AEG' },
	{ id: 2, nazev: 'Vysavač LUX' },
	{ id: 3, nazev: 'Myčka BOSCH' },
]



const Detail = () => {
	const {kategorie, id} = useParams();

	const produkt = produkty.find(prod => prod.id === Number(id) );


	return (
		<div className="komponenta">
			<h3>{produkt.nazev}</h3>
			<h3>kategorie produktu: {kategorie}</h3>
			<p>ID produktu: {id}</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dolor!</p>

			<p><Link to="/products">Zpět na seznam zboží</Link></p>
		</div>
	)
}

export default Detail;
