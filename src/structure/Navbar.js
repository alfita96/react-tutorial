import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return(
			<ul className="Navigation">
				<Link to="/" className="navigationLink"><li>Home</li></Link>
				<Link to="/gallery" className="navigationLink"><li>Gallery</li></Link>
				<Link to="/location" className="navigationLink"><li>Location</li></Link>
				<Link to="/about" className="navigationLink"><li>About</li></Link>
			</ul>
		);
	}
}

export default Navbar