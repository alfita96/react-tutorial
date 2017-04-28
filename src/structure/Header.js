import React from 'react';
import './Header.css';
import Logo from '../logo.svg';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img className="react-logo" alt="react logo" src={Logo}/>
				<h1 className="header-title">React Starter</h1>
			</div>
		);
	}
}

export default Header