import { createContext } from "react";

const user = {
	email: '',
	password: '',
	isLoggedIn: false
};

const logOut = () => {};

const AppContext = createContext({
	user,
	logOut,
});

export default AppContext;