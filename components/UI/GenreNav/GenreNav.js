import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../HBOProvider';
import Link from 'next/link';



const GenreNav = (props) => {
	const globalState = useStateContext();
	const [activeNav, setActiveNav] = useState(false);

	setTimeout(() => setActiveNav(true), 500)


	return (
		<ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>

			<li>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
			</li>
		</ul>
	);
};

export default GenreNav;
