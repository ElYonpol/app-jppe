import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/icons/icon_pe.jpg";
import "./NavBar.css";

export default function NavBar() {
	return (
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
							<Link to="/category/Estética" className="nav__link">
								Estética
							</Link>
						</li>
						<li>
							<Link to="/category/Prótesis" className="nav__link">
								Prótesis
							</Link>
						</li>
						<li>
							<Link to="/category/Rehabilitación" className="nav__link">
								Rehabilitación
							</Link>
						</li>
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
	);
}
