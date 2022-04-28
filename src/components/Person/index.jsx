import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import './style.css';

const Person = () => {

	const {personid} = useParams();

	const [person, setPerson] = useState(null);

	useEffect(
		() => {
			fetch(`https://swapi.dev/api/people/${personid}`)
			.then(response => response.json())
			.then(data => {
				setPerson(data);
			})
		},
		[personid]
	)

	return (
		<div className="komponenta">
			<h3>Person</h3>
			{ person !== null &&
				<>
					<h4>{person.name}</h4>
					<p>Barva vlasu: {person.hair_color}</p>
					<p>Pohlavi: {person.gender}</p>
				</>
			}
		</div>
	)
}

export default Person;
