import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
  return (
		<React.Fragment>
			<img src={logo} className="App-logo" alt="logo" />
			<h1>School Dashboard</h1>
		</React.Fragment>
  );
}