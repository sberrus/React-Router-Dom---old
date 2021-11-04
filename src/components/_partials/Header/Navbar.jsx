import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav>
			<ul className="d-flex justify-content-between">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<NavLink to="/about" activeclass="active">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeclass="active">
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink to="/profile/samdev" activeclass="active">
						Profile Samdev
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/categories?skip=0&limit=10"
						activeclass="active"
					>
						Categories
					</NavLink>
				</li>
				<li>
					<NavLink to="/asdasd" activeclass="active">
						Forzed 404
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;