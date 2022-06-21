import { Avatar, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import MessageField from "./MessageField";
import MessageSubmit from "./MessageSubmit";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    }
})

const MessageInputField = ({name}) => {
    const inputEl = useRef(null);
    const classes = useStyles();
    const [text, setText] = useState('');

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar />
                </Grid>
                <Grid item xs={10}>
                    <MessageField
                        inputEl={inputEl}
                        name={name}
                        text={text}
                        setText={setText}
                    />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmit
                        inputEl={inputEl}
                        name={name}
                        text={text}
                        setText={setText}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default MessageInputField;