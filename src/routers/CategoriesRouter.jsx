import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Action from "../components/Categories/Action/Action";
import Categories from "../components/Categories/Categories";
import Comedy from "../components/Categories/Comedy/Comedy";
import Drama from "../components/Categories/Drama/Drama";
import CategoryHeader from "../components/_partials/CategoryHeader/CategoryHeader";
import PrivateRoute from "./PrivateRoute";
import TerrorRouter from "./TerrorRouter";
const CategoriesRouter = () => {
	//useRouteMatch() nos permite acceder a la url del componente padre que ha llamado al componente que este usando este hook.
	const { url } = useRouteMatch();
	return (
		<>
			<CategoryHeader />
			<Switch>
				{/* Rutas Anidadas */}
				<Route exact path={`${url}`} component={Categories} />
				<Route exact path={`${url}/action`} component={Action} />
				<Route exact path={`${url}/comedy`} component={Comedy} />
				<Route exact path={`${url}/drama`} component={Drama} />
				{/* Ruta Anidada Protegida */}
				<PrivateRoute path={`${url}/terror`} component={TerrorRouter} />
				<Route exact path="*">
					<Redirect to="/404"></Redirect>
				</Route>
			</Switch>
		</>
	);
};

export default CategoriesRouter;
