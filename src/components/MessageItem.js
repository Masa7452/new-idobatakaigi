import React from "react";
import { 
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
 } from "@material-ui/core"

const MessageItem = ({name, text}) => {
    return (
        <ListItem divider>
            <ListItemAvatar>
            <Avatar>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={text} />
      </ListItem>
    )
}

export default MessageItem;