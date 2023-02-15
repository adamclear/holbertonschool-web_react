import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { connect } from 'react-redux';

export default function Footer({ user }) {
  return (
		<React.Fragment>
			<p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
			{user.getIn(['isLoggedIn']) ? (
				<p>
					<a href='#'>Contact Us</a>
				</p> ) : (
					null
				)
			}
		</React.Fragment>
  );
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user')
  };
};

export const ReduxFooter = connect(mapStateToProps)(Footer);