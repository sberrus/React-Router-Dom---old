import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Registros = () => {
	//Accedemos a la cadena de querys en la propiedad search de useLocation().
	const { search } = useLocation();
	const history = useHistory();

	//Creamos una nueva instancia del objeto URLSearchParams(STRING_QUERY) enviandole el string query como argumento.
	const query = new URLSearchParams(search);

	//usamos el método get("QUERY") para acceder a cada una de los valores de las querys que nos envia el cliente.
	const skip = query.get("skip") || 0;
	const limit = query.get("limit") || 15;

	//Funcion para manejar los parametros de la query desde el componente
	const handleNext = () => {
		console.log("next");
		query.set("skip", parseInt(skip) + parseInt(limit));
		//history es el objeto que nos permite navegar dentro de react.
		//query.toString() es una función que nos devuelve la query completa de manera sencilla.
		history.push({ search: query.toString() });
	};

	return (
		<div>
			<h2>Registros</h2>
			<p>skip: {skip}</p>
			<p>limit: {limit}</p>

			{/* Manejar los parametros de la query desde el componente */}
			<button onClick={handleNext}>next</button>
		</div>
	);
};

export default Registros;
