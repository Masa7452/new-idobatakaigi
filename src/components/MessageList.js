import { List } from "@material-ui/core";
import React, { useContext } from "react";
import { MessagesContext } from "./App";
import MessageItem from "./MessageItem";

const MessageList = () => {

    const { messages } = useContext(MessagesContext);

    return (
        <List>
        {
            messages.map(({key, name, text}, index) => {
                return <MessageItem
                    key={key}
                    messageKey={key}
                    name={name}
                    text={text}
                    isLastItem={messages.length === index + 1}
                />
            })
        }
        </List>
    )
}

export default MessageList;