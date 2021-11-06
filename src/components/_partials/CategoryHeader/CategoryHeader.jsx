import { NavLink } from "react-router-dom";

const CategoryHeader = () => {
	return (
		<nav>
			<div>
				<h5 className="border-bottom border-warning">lvl2 menu</h5>
				<ul className="d-flex justify-content-between">
					<li>
						<NavLink to="/categories/terror">Terror</NavLink>
					</li>
					<li>
						<NavLink to="/categories/action">Acción</NavLink>
					</li>
					<li>
						<NavLink to="/categories/comedy">Comedia</NavLink>
					</li>
					<li>
						<NavLink to="/categories/drama">Drama</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default CategoryHeader;
