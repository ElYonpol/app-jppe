import React from "react";
import CartWidget from "./CartWidget";
import logo from "../../assets/icons/icon_pe.jpg";
import "./NavBar.css";

export default function NavBar() {
	return (
		<nav className="bs--navbar">
			<div className="row">
				<div className="col">
					<img
						className="image"
						src={logo}
						alt="Logo Portas Esquivel & Asociados"
					/>
				</div>
				<div className="col">
					<ul className="nav__list">
						<li className="nav__link">Profesionales</li>
						<li className="nav__link">
							Servicios <CartWidget />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
