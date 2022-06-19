import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import { messageRef } from "../firebase";
import { query, orderByKey, limitToLast, onValue } from 'firebase/database'

const MessageList = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const recentMessageRef = query(
            messageRef,
            orderByKey('messages'),
            limitToLast(15)
        );
        onValue(recentMessageRef, (snapshot) => {
            const messages = snapshot.val();
            if(messages === null) return;

            const newEntries = Object.entries(messages);
            const newMessages = newEntries.map((entry) => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            })
            setMessages(newMessages);
        });
    }, [])

    return (
        <List>
            {
                messages.map(({key, name, text}) => {
                    return <MessageItem
                        key={key}
                        name={name}
                        text={text}
                    />
                })
            }
        </List>
    )
}

export default MessageList;