import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";

const LogButton = () => {
	//useLocation es un hook que nos permite recibir información del historial
	const location = useLocation();

	const previousObjUrl = location.state?.from;

	console.log();

	//Se llama al hook history
	const history = useHistory();
	//Se llama al contexto
	const auth = UseAuth();

	//Login
	const handleLogin = () => {
		auth.login();
		history.push(previousObjUrl);
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
