import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Categories = () => {
	//Accedemos a la cadena de querys en la propiedad search de useLocation().
	const { search } = useLocation();
	const navigate = useNavigate();

	//Creamos una nueva instancia del objeto URLSearchParams(STRING_QUERY) enviandole el string query como argumento.
	const query = new URLSearchParams(search);

	//usamos el método get("QUERY") para acceder a cada una de los valores de las querys que nos envia el cliente.
	const skip = query.get("skip") || 0;
	const limit = query.get("limit") || 15;

	//Funcion para manejar los parametros de la query desde el componente
	const handleNext = () => {
		console.log("next");
		query.set("skip", parseInt(skip) + parseInt(limit));
		//navigate es el objeto que nos permite navegar dentro de react.
		//query.toString() es una función que nos devuelve la query completa de manera sencilla.
		navigate({ search: query.toString() });
	};

	return (
		<div>
			<h2>Categories</h2>
			<p>skip: {skip}</p>
			<p>limit: {limit}</p>

			{/* Manejar los parametros de la query desde el componente */}
			<button onClick={handleNext}>next</button>
		</div>
	);
};

export default Categories;
