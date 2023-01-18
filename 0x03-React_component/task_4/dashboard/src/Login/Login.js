import React from 'react';
import WithLogging from '../HOC/WithLogging';
import './Login.css';

 function Login() {
  return (
		<React.Fragment>
			<p>Login to access the full dashboard</p>
			<form className="Form-body">
				<label htmlFor="email">
					Email:
					<input type="email" id="email" name="email" />
				</label>
				<label htmlFor="password">
					Password:
					<input type="password" id="password" name="password" />
				</label>
				<input type="submit" value="OK" />
			</form>
		</React.Fragment>
  );
}

export default WithLogging(Login);