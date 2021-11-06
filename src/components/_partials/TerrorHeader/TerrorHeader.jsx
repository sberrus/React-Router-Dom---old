import { NavLink } from "react-router-dom";
const TerrorHeader = () => {
	return (
		<div>
			<nav>
				<div>
					<h5 className="border-bottom border-danger">lvl3 menu</h5>
					<ul className="d-flex justify-content-between">
						<li>
							<NavLink exact to="/categories/terror">
								All
							</NavLink>
						</li>
						<li>
							<NavLink to="/categories/terror/gore">Gore</NavLink>
						</li>
						<li>
							<NavLink to="/categories/terror/suspence">
								Suspence
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default TerrorHeader;
