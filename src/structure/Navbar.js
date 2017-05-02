import React from 'react';
import { Link } from 'react-router-dom';
import Home from './pictures/Home.svg';
import Gallery from './pictures/Gallery.svg';
import Location from './pictures/Location.svg';
import About from './pictures/About.svg';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return(
			<ul className="Navigation">
				<Link to="/" className="navigationLink"><li><img className="navbar-icon" alt="Home" src={Home}/></li></Link>
				<Link to="/gallery" className="navigationLink"><li><img className="navbar-icon" alt="Gallery" src={Gallery}/></li></Link>
				<Link to="/location" className="navigationLink"><li><img className="navbar-icon" alt="Location" src={Location}/></li></Link>
				<Link to="/about" className="navigationLink"><li><img className="navbar-icon" alt="About" src={About}/></li></Link>
			</ul>
		);
	}
}

export default Navbar
