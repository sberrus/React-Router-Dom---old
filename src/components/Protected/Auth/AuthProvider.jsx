import React, { createContext, useEffect, useState } from "react";

//Nos permite crear el contexto para que se pueda crear un contexto para poder acceder a este.
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	useEffect(() => {
		//Usamos un trycatch para evitar errores en dispositivos antiguos o en el caso de que el usuario tenga deshabilitada la función de localStorage
		try {
			localStorage.setItem("user", JSON.stringify(user));
		} catch (error) {
			//Eliminamos el elemento user del local storage para evitar errores..¿?
			localStorage.removeItem("user");
			//Manejamos el error como sea conveniente.
			console.log(error);
		}
	}, [user]);

	let contextValue = {
		user,
		login() {
			setUser({ id: 1, username: "Samdev" });
		},
		logout() {
			setUser(null);
		},
		isLogged() {
			return !!user;
		},
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};

//Exportamos el provider del contexto para que este sea un componente de alto orden y el contexto pueda ser accedido desde cualquier parte del programa.
export default AuthProvider;
