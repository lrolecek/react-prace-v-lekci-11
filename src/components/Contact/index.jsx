import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const Contact = () => {

	const [contacts, setContacts] = useState([]);

	useEffect(
		() => {
			fetch('https://swapi.dev/api/people')
			.then(response => response.json())
			.then(data => {
				const results = data.results.map((item, index) => {
					item.id = index + 1;
					return item;
				})
				setContacts(results)
			})
		},
		[]
	)

	return (
		<div className="komponenta">
			<h3>Contact</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dolor!</p>
			<ul>
				{
					contacts.map(person => <li><Link to={`/person/${person.id}`}>{person.name}</Link></li>)
				}
			</ul>
		</div>
	)
}

export default Contact;
