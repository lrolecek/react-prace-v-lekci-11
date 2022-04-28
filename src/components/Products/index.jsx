import React from 'react';
import './style.css';

import {Link} from 'react-router-dom';

const Products = () => {

	return (
		<div className="komponenta">
			<h3>Products</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dolor!</p>

			<ul>
				<li><Link to="/products/1">Pračka AEG</Link></li>
				<li><Link to="/products/2">Vysavač LUX</Link></li>
				<li><Link to="/products/3">Myčka BOSCH</Link></li>
			</ul>

		</div>
	)
}

export default Products;
