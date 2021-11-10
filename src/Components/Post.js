import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Post(props) {
	return (
		<Card sx={{ maxWidth: "100%" }}>
<CardMedia
	component='img'
	height='200'
	image={props.imgUrl}
	alt='green iguana'
/>
<CardContent>
	<Typography gutterBottom variant='h5' component='div'>
		{props.title}
	</Typography>
	<Typography variant='body2' color='text.secondary'>
		{props.text}
	</Typography>
</CardContent>
<CardActions>
	<Button size='large'>Просмотр</Button>
	<Button color='warning' size='small'>
		Удалить
	</Button>
</CardActions>
</Card>
	);
}


