import React, { useEffect, useRef } from "react";
import { 
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography
 } from "@material-ui/core";
 import DeleteButton from "./DeleteButton";
 import { useNavigate } from "react-router-dom";

const MessageItem = ({name, text, messageKey, isLastItem}) => {
    const ref = useRef(null);

    const navigation = useNavigate();
    const onMoveToDetail = () => {
        navigation("/main/detail", { name: name, text: text });
        // navigation("/main/detail");
    }

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLastItem])

    return (
        <ListItem
            divider
            ref={ref}
            button={true}
            onClick={() => {
                onMoveToDetail();
            }}
        >
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >{text}
                    </Typography>
                }
            />
            <DeleteButton
                messageKey={messageKey}
            />
        </ListItem>
    )
}

export default MessageItem;