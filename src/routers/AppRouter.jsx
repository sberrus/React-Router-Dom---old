import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPageNotFound from "../components/404/ErrorPageNotFound";
import About from "../components/About/About";
import Categories from "../components/Categories/Categories";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Observaciones from "../components/Observaciones/Observaciones";
import ProfilePage from "../components/profile/ProfilePage";
import Navbar from "../components/_partials/Header/Navbar";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/" exact element={<Home />} />

				{/* Ruta con URL params */}
				<Route path="/profile/:username" element={<ProfilePage />} />
				{/* Ruta con Query params */}
				<Route path="/categories" element={<Categories />} />

				{/* Manejo de Error 404 para rutas no especificadas */}
				<Route path="*" element={<ErrorPageNotFound />} />
			</Routes>
			<Observaciones />
		</Router>
	);
};

export default AppRouter;
