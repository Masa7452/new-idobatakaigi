import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase";
import React, { useState } from "react";

const MessageField = ({inputEl, name, text, setText}) => {
    const [isComposed, setIsComposd] = useState(false);

    return <TextField
        inputRef={inputEl}
        autoFocus
        fullWidth={true}
        onChange={(e) => {
            setText(e.target.value);
        }}
        onKeyDown={(e) => {
            if(e.key === "Enter" && !isComposed){
              pushMessage({name, text});
              setText('');
            }
        }}
        onCompositionStart={() => {setIsComposd(true)}}
        onCompositionEnd={() => {setIsComposd(false)}}
        value={text}
    />;
}

export default MessageField;