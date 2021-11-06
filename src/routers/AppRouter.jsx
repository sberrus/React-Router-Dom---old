//[Imports]
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//[Rutas estáticas]
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Observaciones from "../components/Observaciones/Observaciones";
//[Rutas Estáticas] especiales
import Home from "../components/Home/Home";
import ErrorPageNotFound from "../components/404/ErrorPageNotFound";

//[Rutas con parámetros (url, query)]
import ProfilePage from "../components/profile/ProfilePage";
import Registros from "../components/Registros/Registros";

//[Rutas Protegidas]
import Dashboard from "../components/Protected/Dashboard/Dashboard";
import Login from "../components/Protected/Login/Login";
import Payments from "../components/Protected/Payments/Payments";
import Register from "../components/Protected/Register/Register";
//HOC de las [Rutas Protegidas]
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

//_Partials
import Navbar from "../components/_partials/Header/Navbar";
import Footer from "../components/_partials/Footer/Footer";
import CategoriesRouter from "./CategoriesRouter";
const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />

				{/* Ruta con URL params */}
				<Route
					exact
					path="/profile/:username"
					component={ProfilePage}
				/>
				{/* Ruta con Query params */}
				<Route exact path="/registros" component={Registros} />

				{/* Rutas Protegidas */}
				<PublicRoute exact path="/login" component={Login} />
				<PublicRoute exact path="/register" component={Register} />
				<PrivateRoute exact path="/payments" component={Payments} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />

				{/* Rutas Anidadas */}
				<Route path="/categories" component={CategoriesRouter} />

				{/* Manejo de Error 404 para rutas no especificadas */}
				<Route exact path="*" component={ErrorPageNotFound} />
				{/* Ruta raiz */}
				<Route exact path="/" component={Home} />
			</Switch>
			<Observaciones />
			<Footer />
		</Router>
	);
};

export default AppRouter;
