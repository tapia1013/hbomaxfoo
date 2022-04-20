import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../HBOProvider';
import Link from 'next/link';



const GenreNav = (props) => {
	const globalState = useStateContext();
	const [activeNav, setActiveNav] = useState(false);

	setTimeout(() => setActiveNav(true), 500)


	return (
		<ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>

			<GenreList
				genresData={props.genresData}
				mediaType={props.mediaType}
			/>

		</ul>
	);
};


const GenreList = (props) => {
	return props.genresData.map((item) => (
		<li key={item.id}>
			<a href={`/${props.mediaType}/genre/${item.id}`}>
				{item.name}
			</a>
		</li>
	))
}



export default GenreNav;
