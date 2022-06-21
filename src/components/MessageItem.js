import React, { useEffect, useRef } from "react";
import { 
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
 } from "@material-ui/core"

const MessageItem = ({name, text, isLastItem}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLastItem])

    return (
        <ListItem divider ref={ref}>
            <ListItemAvatar>
            <Avatar>
            </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={text}
            />
      </ListItem>
    )
}

export default MessageItem;