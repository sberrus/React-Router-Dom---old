import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Gore from "../components/Categories/Terror/Gore/Gore";
import Suspense from "../components/Categories/Terror/Suspense/Suspense";
import Terror from "../components/Categories/Terror/Terror";
import TerrorHeader from "../components/_partials/TerrorHeader/TerrorHeader";
const TerrorRouter = () => {
	const { url } = useRouteMatch();
	return (
		<>
			<TerrorHeader />
			<Switch>
				<Route exact path={`${url}`} component={Terror} />
				<Route exact path={`${url}/gore`} component={Gore} />
				<Route exact path={`${url}/suspence`} component={Suspense} />
				<Route path="*">
					<Redirect to="/404"></Redirect>
				</Route>
			</Switch>
		</>
	);
};

export default TerrorRouter;
