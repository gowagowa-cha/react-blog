import React from "react";
import axios from "axios";
import Header from "./Components/Header";
import "./index.scss";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import { Home } from "./Components/pages/Home";
import { FullPosts } from "./Components/pages/FullPosts";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("https://5c3755177820ff0014d92711.mockapi.io/posts?page=1&limit=10")
      .then(({ data }) => {
					dispatch({
						type: 'SET_POSTS',
						payload: data
					})
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<FullPosts />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
