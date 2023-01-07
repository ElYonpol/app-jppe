import React from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/icons/icon_pe.jpg";
import "./NavBar.css";

export default function NavBar() {
	const dropdownMenuOptions = [
		{ id: 1, label: "Estética", value: "/category/Estética" },
		{ id: 2, label: "Prótesis", value: "/category/Prótesis" },
		{ id: 3, label: "Rehabilitación", value: "/category/Rehabilitación" },
	];

	const navigate = useNavigate();

	const handleSelectChange = (event) => {
		navigate(event.value);
	};

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
						<Select
							className="dropdown--nav__link"
							defaultValue={{
								label: "Categorías:",
								value: "empty",
							}}
							options={dropdownMenuOptions.map((sup) => ({
								label: sup.label,
								value: sup.value,
							}))}
							onChange={handleSelectChange}
						></Select>

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
