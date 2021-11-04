import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPageNotFound from "../components/404/ErrorPageNotFound";
import About from "../components/About/About";
import Categories from "../components/Categories/Categories";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Observaciones from "../components/Observaciones/Observaciones";
import ProfilePage from "../components/profile/ProfilePage";
import Dashboard from "../components/Protected/Dashboard/Dashboard";
import Login from "../components/Protected/Login/Login";
import Payments from "../components/Protected/Payments/Payments";
import Register from "../components/Protected/Register/Register";
import Navbar from "../components/_partials/Header/Navbar";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
				<Route path="/" exact component={Home} />

				{/* Ruta con URL params */}
				<Route path="/profile/:username" component={ProfilePage} />
				{/* Ruta con Query params */}
				<Route path="/categories" component={Categories} />

				{/* Rutas Protegidas */}

				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/payments" component={Payments} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />

				{/* Manejo de Error 404 para rutas no especificadas */}
				<Route path="*" component={ErrorPageNotFound} />
			</Switch>
			<Observaciones />
		</Router>
	);
};

export default AppRouter;
