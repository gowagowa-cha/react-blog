import React from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Comments from "./Components/Comments";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./index.scss";

function appReducer(state, action) {
	console.log(state, action);

	if (action.type === "ADD_POST") {
		return {
			...state,
			posts: [...state.posts, action.payload],
		};
	}

	if (action.type === "REMOVE_POST") {
		return {
			...state,
			posts: state.posts.filter((obj) => obj.id !== action.payload.id),
		};
	}

	return state;
}

function App() {
	const [state, dispatch] = React.useReducer(appReducer, {
		posts: [
			{
				id: 1,
				title: "Тестовая статья",
				imageUrl:
					"https://images.unsplash.com/photo-1636315393004-06053754029e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
			},
			{
				id: 2,
				title: "Это вторая статья",
				imageUrl:
					"https://images.unsplash.com/photo-1636145401752-41d36a398a6b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				text: "йцуйцулд фыв аофыолдво лдфыолдвфолдывл",
			},
		],
		comments: [],
		searchValue: "",
	});

	const addPost = () => {
		dispatch({
			type: "ADD_POST",
			payload: {
				id: 3,
				title: "Третья статья",
				imageUrl:
					"https://images.unsplash.com/photo-1636145411033-41bb1b898d5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
				text: "Vestibulum tincidunt lacus nec nibh eleifend, vitae tincidunt eros pretium. Maecenas imperdiet scelerisque auctor. Sed ac mollis felis, quis rutrum dolor. Nunc rutrum sapien pharetra risus sodales auctor non a est. Donec elementum turpis in metus fringilla, nec vulputate libero maximus. Aenean non posuere urna. Fusce nec sollicitudin erat. Donec ac bibendum neque, id feugiat urna.",
			},
		});
	};

	const removePost = (id) => {
		if (window.confirm("Ты реально хочешь это?!")) {
			dispatch({
				type: "REMOVE_POST",
				payload: {
					id: id,
				},
			});
		}
	};

	return (
		<div className='wrapper'>
			<Header addPost={addPost} />
			<Box sx={{ flexGrow: 1 }}>
				<Grid padding='20px' container spacing={2}>
					<Grid item xs={8}>
						{state.posts.map((str) => (
							<Post {...str} removePost={removePost} />
						))}
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
