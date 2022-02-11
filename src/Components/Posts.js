import React from "react";
import Post from "./Post";
import Grid from "@mui/material/Grid";

export function Posts({ posts, removePost }) {
	return (
		<Grid item xs={8}>
			{posts.map((str, index) => (
				<Post {...str} removePost={removePost} key={index} />
			))}
		</Grid>
	);
}
