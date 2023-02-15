import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import * as uiActions from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  logo: {
		width: '240px',
		height: '240px'
	},

	header: {
		display: 'block' 
	},

	header_info: {
		display: 'flex',
		alignItems: 'center'
	}
});

export default function Header({ user, logout }) {
	// const { user, logOut } = React.useContext(AppContext);
  return (
		<React.Fragment>
			<div className={css(styles.header)}>
				<div className={css(styles.header_info)}>
					<img src={logo} className={`App-logo ${css(styles.logo)}`} alt="logo" />
					<h1>School Dashboard</h1>
				</div>
				{user.getIn(['isLoggedIn']) ? (
					<div>
						<p id='logoutSection'>
							Welcome {user.getIn(['email'])}&nbsp;<a onClick={logout} href='#'>(logout)</a>
						</p>
					</div> ) : (
						null
					)
				}
			</div>
		</React.Fragment>
  );
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user')
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(uiActions.Logout())
  };
};

export const ReduxHeader = connect(mapStateToProps, mapDispatchToProps)(Header);