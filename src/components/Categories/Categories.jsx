import React from "react";
import { useLocation } from "react-router-dom";

const Categories = () => {
	//Accedemos a la cadena de querys en la propiedad search de useLocation().
	const { search } = useLocation();

	//Creamos una nueva instancia del objeto URLSearchParams(STRING_QUERY) enviandole el string query como argumento.
	const query = new URLSearchParams(search);

	//usamos el método get("QUERY") para acceder a cada una de los valores de las querys que nos envia el cliente.
	const skip = query.get("skip") || 0;
	const limit = query.get("limit") || 15;

	return (
		<div>
			<h2>Categories</h2>
			<p>skip: {skip}</p>
			<p>limit: {limit}</p>
		</div>
	);
};

export default Categories;
