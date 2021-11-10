import React from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Comments from "./Components/Comments";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import './index.scss'

function reducer(params) {
	
}

function App() {
	const [state, dispatch] = React.useReducer(reducer, {
		post: [
			{
				id: 1,
				title: "post #1",
				imgUrl:
					"https://images.unsplash.com/photo-1633114072859-7e8171f1bc95?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				text: "Это текст к посту №1, Это текст к посту №1, Это текст к посту №1 Это текст к посту №1",
			},
			{
				id: 2,
				title: "post #2",
				imgUrl:
					"https://images.unsplash.com/photo-1627676569762-ea59379ed3b3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				text: "Это текст к посту №2, Это текст к посту №2, Это текст к посту №1 Это текст к посту №2",
			},
		]
	});

	return (
		<div className='wrapper'>
			<Header />
			<Box sx={{ flexGrow: 1 }}>
				<Grid padding='20px' container spacing={2}>
					<Grid item xs={8}>
						{
							state.post.map((str) => <Post {...str}/>)
						}
					</Grid>
					<Grid item xs={4}>
						<Comments />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default App;
