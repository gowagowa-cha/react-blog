import React from "react";
import Header from "./Components/Header";
import "./index.scss";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import { Home } from "./Components/pages/Home";
import { FullPosts } from './Components/pages/FullPosts';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:id' element={<FullPosts />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
