import React from "react";
import { Route, Redirect } from "react-router-dom";
import UseAuth from "../components/Protected/Auth/UseAuth";

const PublicRoute = ({ component: Component, ...rest }) => {
	//Se llama al contexto del auth para saber si el usuario esta logeado o no.
	const auth = UseAuth();
	return (
		<Route {...rest}>
			{!auth.isLogged() ? <Component /> : <Redirect to="/dashboard" />}
		</Route>
	);
};

export default PublicRoute;
