import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import UseAuth from "../components/Protected/Auth/UseAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
	//Se llama al contexto del auth para usar sus valores en los componentes hijos.
	const auth = UseAuth();

	//llamamos a useLocation()
	const location = useLocation();

	return (
		<Route
			//Opcion 1: Para controlar mejor el comportamiento de cada prop
			// exact={props.exact}
			// path={props.path}
			// component={props.element}

			//Opción 2: destructuramos todas las props que nos manda el componente padre.
			{...rest}
		>
			{auth.isLogged() ? (
				<Component />
			) : (
				//Al momento de que el usuario no cuente con los permisos necesarios para acceder a esta ruta, lo redegiremos y enviaremos en el state toda la información de la ruta actual al momento de negarle la entrada.
				<Redirect
					to={{
						pathname: "/login",
						//El state es una propiedad que nos permite guardar la información de la ruta en la que se encuentra el usuario en ese momento.
						state: { from: location },
					}}
				/>
			)}
		</Route>
	);
};

export default PrivateRoute;
