import { Button, Divider, Paper, TextField } from "@mui/material";
import React from "react";
import Comments from "../Comments";

export const FullPosts = () => {
  return (
    <Paper style={{ marginTop: 30, padding: "30px 40px" }}>
      <h1>Test Posts information</h1>
      <img
        style={{ width: "100%", height: 300 }}
        src="https://images.unsplash.com/photo-1636315393004-06053754029e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="images"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore
        aliquid voluptatum ea eos! Ipsa rem possimus totam. Labore nisi odit
        deleniti unde commodi quidem corrupti nihil beatae dolorum quam.
      </p>
      <Divider />
      <h3>Коментарии (0)</h3>
      <Comments />
      <Divider />
      <h3>Добавить коментарий</h3>
      <TextField
        placeholder="Добавьте новый коментарий..."
        multiline
        fullWidth
      />
      <Button style={{ marginTop: 20 }} color="success" variant="contained">
        Добавить
      </Button>
    </Paper>
  );
};
