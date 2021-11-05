import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function UseAuth() {
	//Creamos un hook para enviar el contexto a los componentes donde se desea que se consuma la inforamción.

	//con useContext leemos el contexto que se exporta del provider y con el hook devolvemos lo que haya en el contexto.
	//Esto nos permite que al usar este hook podamos hacer uso de todo lo que haya en el contexto includias funciones.
	return useContext(AuthContext);
}
