import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Protected/Auth/UseAuth";
import LogButton from "../../Protected/_Partials/LogButton";
const Navbar = () => {
	const auth = UseAuth();

	return (
		<nav>
			<div className="routes-container">
				<h5 className="navbar-title">Rutas estáticas</h5>
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
						<NavLink to="/asdasd" activeclass="active">
							Forzed 404
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="routes-container">
				<h5 className="navbar-title">Rutas Rutas con parámetros</h5>
				<ul className="d-flex justify-content-between">
					<li>
						<NavLink to="/profile/samdev" activeclass="active">
							Profile Samdev
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/registros?skip=0&limit=10"
							activeclass="active"
						>
							Registros
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="routes-container">
				<h5 className="navbar-title">Rutas protegidas</h5>
				<LogButton />
				<ul className="d-flex justify-content-between">
					{!auth.isLogged() ? (
						<>
							<li>
								<NavLink to="/login" activeclass="active">
									Login
								</NavLink>
							</li>
							<li>
								<NavLink to="/register" activeclass="active">
									Register
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to="/dashboard" activeclass="active">
									Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink to="/payments" activeclass="active">
									Payments
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
			<div className="routes-container">
				<h5 className="navbar-title">Rutas Anidadas</h5>
				<ul className="d-flex justify-content-between">
					<li>
						<NavLink to="/categories" activeclass="active">
							Categories
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
