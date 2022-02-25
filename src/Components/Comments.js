import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useSelector } from 'react-redux';

function Comments() {
	const comment = useSelector((state) => state.comments.items)
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				{comment.map((obj) => (
        <ListItem alignItems="flex-start" key={obj.id}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={obj.image}
            />
          </ListItemAvatar>
          <ListItemText
            primary={obj.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {obj.name}
									 {' : '}
                </Typography>
                {obj.text}
              </React.Fragment>
            }
          />
        </ListItem>
				))}
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}

export default Comments;
