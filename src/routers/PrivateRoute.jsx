import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	let user = null;
	return (
		<Route
			//Opcion 1: Para controlar mejor el comportamiento de cada prop
			// exact={props.exact}
			// path={props.path}
			// component={props.element}

			//Opción 2: destructuramos todas las props que nos manda el componente padre.
			{...rest}
		>
			{user ? <Component /> : <Redirect to="/login" />}
		</Route>
	);
};

export default PrivateRoute;
