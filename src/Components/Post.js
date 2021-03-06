import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Post({ id, image, title, text, removePost }) {
  return (
    <Card sx={{ maxWidth: "100%", marginBottom: "30px" }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${id}`}>
          <Button size="large">Просмотр</Button>
        </Link>
        <Button onClick={() => removePost(id)} color="warning" size="small">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
