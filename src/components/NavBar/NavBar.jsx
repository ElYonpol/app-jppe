import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/icons/icon_pe.jpg";
import "./NavBar.css";

export default function NavBar() {
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
						<label for="services" className="nav__list">
							Seleccione una categoría
						</label>
						<select name="services" id="services" className="dropdown--nav__list">
							<option value="Estética" className="dropdown--nav__list">
								<Link to="/category/Estética" className="dropdown--nav__list">
									Estética
								</Link>
							</option>
							<option value="Prótesis" className="dropdown--nav__list">
								<Link to="/category/Prótesis" className="dropdown--nav__list">
									Prótesis
								</Link>
							</option>
							<option value="Rehabilitación" className="dropdown--nav__list">
								<Link to="/category/Rehabilitación" className="dropdown--nav__list">
									Rehabilitación
								</Link>
							</option>
						</select>

						<ul className="nav__list">
							<li>
								<Link to="/servicios" className="nav__link">
									Servicios
								</Link>
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
