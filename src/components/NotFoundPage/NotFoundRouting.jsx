import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export default function NotFoundRouting(props) {
	return (
		<Routes>
			{props.children}
			<Route path={props.path} element={<NotFoundPage />} />
		</Routes>
	);
}
