import { useEffect } from 'react';
import { useStateContext } from '../../HBOProvider';
import Link from 'next/link';



const SideNav = (props) => {
	const globalState = useStateContext();


	useEffect(() => {
		if (globalState.sideNavOpen || globalState.accountModalOpen || globalState.searchOpen) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [globalState.sideNavOpen, globalState.accountModalOpen, globalState.searchOpen])


	return (
		<div className={`side-nav ${globalState.sideNavOpen ? 'side-nav--active' : ''}`}>
			<div
				onClick={() => globalState.setSideNavOpenAction(false)}
				className="side-nav__close-btn"
			>
				<i className="fas fa-times" />
			</div>
			<ul className="side-nav__main">
				<li
					onClick={() => globalState.setSideNavOpenAction(false)}
				>
					<Link href='/'>
						<a>
							Home
						</a>
					</Link>
				</li>

				<li
					onClick={() => globalState.setSideNavOpenAction(false)}
				>
					<Link href='/movie'>
						<a>
							Movies
						</a>
					</Link>
				</li>

				<li
					onClick={() => globalState.setSideNavOpenAction(false)}
				>
					<Link href='/tv'>
						<a>
							Series
						</a>
					</Link>
				</li>

			</ul>
		</div>
	);
};

export default SideNav;
