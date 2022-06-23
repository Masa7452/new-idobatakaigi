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

            if(messages === null){
                setMessages([]);
                return;
            }

            const newEntries = Object.entries(messages);
            const newMessages = newEntries.map((entry) => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            })
            setMessages(newMessages);
        });
    }, [])

    const MessageCount = messages.length;

    return (
        <List>
            {
                messages.map(({key, name, text}, index) => {
                    return <MessageItem
                        key={key}
                        messageKey={key}
                        name={name}
                        text={text}
                        isLastItem={MessageCount === index + 1}
                    />
                })
            }
        </List>
    )
}

export default MessageList;