import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./icon_pe.jpg";

function NavBar() {
	return (
		<>
			<Navbar expand="md navbar--row bs--navbar ">
				<Container className="navbar--row">
					<Navbar.Brand href="#">
						<img className="image" src={logo} alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto nav__list">
							<Nav.Link id="nav__list" href="#">Inicio</Nav.Link>
							<Nav.Link id="nav__list" href="#">Profesionales</Nav.Link>
							<NavDropdown id="nav__list" title=<CartWidget /> >
								<NavDropdown.Item clasname="nav__link" href="#action/3.1">
									Blanqueamiento
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.2">
									Prótesis Completa
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Prótesis Flexible
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">
									Prótesis Cromo-Cobalto
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.5">
									Ortodoncia convencional (braquets)
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.6">
									Implante y Corona
								</NavDropdown.Item>
                                <NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.7">
									Placa Miorelajante
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
