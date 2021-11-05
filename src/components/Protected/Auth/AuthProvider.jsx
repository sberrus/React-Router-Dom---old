import React, { createContext, useState } from "react";

//Nos permite crear el contexto para que se pueda crear un contexto para poder acceder a este.
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

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
