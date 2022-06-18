import React from "react";
import { 
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
 } from "@material-ui/core"

const MessageItem = () => {
    return (
        <ListItem divider>
            <ListItemAvatar>
            <Avatar>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    )
}

export default MessageItem;