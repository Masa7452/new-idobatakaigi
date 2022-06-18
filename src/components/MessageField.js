import { TextField } from "@material-ui/core";
import React from "react";

const MessageField = ({text, setText}) => {
    return <TextField
        fullWidth={true}
        onChange={(e) => {
            setText(e.target.value);
        }}
        value={text}
    />;
}

export default MessageField;