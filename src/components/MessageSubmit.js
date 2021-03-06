import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import React from "react";
import { pushMessage } from "../firebase";


const MessageSubmit = ({inputEl, name, text, setText}) => {

    return <IconButton
      onClick={() => {
        pushMessage({name, text});
        setText('');
        inputEl.current.focus();
      }}
    >
    <SendIcon></SendIcon>
  </IconButton>
}

export default MessageSubmit;