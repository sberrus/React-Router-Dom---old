import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AppRouter from "./routers/AppRouter";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1 className="text-center">React Router Dom Crash Course</h1>
				<hr />
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
