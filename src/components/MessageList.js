import { List } from "@material-ui/core";
import React from "react";
import MessageItem from "./MessageItem";

const MessageList = () => {
    const Messages = ["こんにちは", "こんばんは", "おはようございます"];

    return (
        <List>
            {
                Messages.map((index) => {
                    return <MessageItem key={index}
                    />
                })
            }
        </List>
    )
}

export default MessageList;