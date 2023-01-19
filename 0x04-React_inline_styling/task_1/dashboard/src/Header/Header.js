import React from 'react';
import logo from '../assets/holberton-logo.jpg';
//import './Header.css';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  logo: {
		width: '240px',
		height: '240px'
	}
});

export default function Header() {
  return (
		<React.Fragment>
			<img src={logo} className={`App-logo ${css(styles.logo)}`} alt="logo" />
			<h1>School Dashboard</h1>
		</React.Fragment>
  );
}