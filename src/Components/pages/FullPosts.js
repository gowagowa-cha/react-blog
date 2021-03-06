import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Comments from "../Comments";
import { Button, Divider, Paper, TextField } from "@mui/material";

export const FullPosts = () => {
  const { id } = useParams();
  const post = useSelector(({ posts }) => posts.items.find(obj => Number(obj.id) === Number(id)));

	console.log(id);

  return (
    <Paper style={{ marginTop: 30, padding: "30px 40px" }}>
      <h1>{post.title}</h1>
      <img
        style={{ width: "100%", height: 300 }}
        src={post.image	}
        alt="images"
      />
      <p>{post.text}</p>
      <Divider />
      <h3>Коментарии ({post.length})</h3>
      <Comments />
      <Divider />
      <h3>Добавить коментарий</h3>
      <TextField
        placeholder="Добавьте новый коментарий..."
        multiline
        fullWidth
      />
      <Button
        style={{ marginTop: 20 }}
        color="success"
        variant="contained"
        size="large"
      >
        Добавить
      </Button>
    </Paper>
  );
};
