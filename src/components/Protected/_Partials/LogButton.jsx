import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";

const LogButton = () => {
	//useLocation es un hook que nos permite recibir información del historial en el momento en el que se intente renderizar este componente.
	const location = useLocation();
	const previousObjUrl = location.state?.from;

	//Se llama al hook history para realizar la redirección correspondiente.
	const history = useHistory();

	//Llamamos al contexto para saber si el usuario esta loggeado o no.
	const auth = UseAuth();

	//Login.
	const handleLogin = () => {
		auth.login();
		//Redirige a los usuarios a la antigua url en el caso de que esta esté definida. De lo contrario, redirige a Dashboard.
		history.push(previousObjUrl || "/dashboard");
	};

	//Logout
	const handleLogout = () => {
		auth.logout();
	};

	return (
		<div>
			{auth.isLogged() ? (
				<button onClick={handleLogout}>Cerrar sessión</button>
			) : (
				<button onClick={handleLogin}>Iniciar sessión</button>
			)}
		</div>
	);
};

export default LogButton;
