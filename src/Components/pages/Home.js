import React from "react";
import Comments from "../Comments";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { store } from "../../redux/store";
import { Posts } from "../Posts";

export const Home = () => {
  const addPost = () => {
    store.dispatch({
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
      store.dispatch({
        type: "REMOVE_POST",
        payload: {
          id: id,
        },
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid padding="20px" container spacing={2}>
        <Posts />
        <Grid item xs={4}>
          <Comments />
        </Grid>
      </Grid>
    </Box>
  );
};
