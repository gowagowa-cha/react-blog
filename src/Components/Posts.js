import React from "react";
import Post from "./Post";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

export function Posts({ removePost }) {
  const posts = useSelector((state) => state.posts);
  return (
    <Grid item xs={8}>
      {posts.map((str, index) => (
        <Post {...str} removePost={removePost} key={index} />
      ))}
    </Grid>
  );
}
