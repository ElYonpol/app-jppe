import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/icons/icon_pe.jpg";
import "./NavBar.css";

export default function NavBar() {
	let activeClassName = "nav__link--active";
	let inactiveClassName = "nav__link";

	return (
		<header id="header">
			<nav className="bs--navbar">
				<div className="row">
					<div className="col">
						<Link to="/" className="nav__link">
							<img
								className="image"
								src={logo}
								alt="Logo Portas Esquivel & Asociados"
							/>
						</Link>
					</div>
					<div className="col">
						<ul className="nav__list">
							<li>
								<NavLink
									to="/category/Estética"
									className={({ isActive }) =>
										isActive ? activeClassName : inactiveClassName
									}
									title="Ver productos de la Categoría Estética"
								>
									Estética
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/category/Prótesis"
									className={({ isActive }) =>
										isActive ? activeClassName : inactiveClassName
									}
									title="Ver productos de la Categoría Prótesis"
								>
									Prótesis
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/category/Rehabilitación"
									className={({ isActive }) =>
										isActive ? activeClassName : inactiveClassName
									}
									title="Ver productos de la Categoría Rehabilitación"
								>
									Rehabilitación
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/servicios"
									className={({ isActive }) =>
										isActive ? activeClassName : inactiveClassName
									}
									title="Ver todos los productos"
								>
									Servicios
								</NavLink>
							</li>
							<li>
								<Link to="/cart" className="nav__link">
									<CartWidget />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
