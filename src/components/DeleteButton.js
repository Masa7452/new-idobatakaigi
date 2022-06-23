import { Button } from "@material-ui/core";
import React from "react";
import { deleteMessage } from "../firebase";

const DeleteButton = ({messageKey}) => {

    return (
        <Button
            variant="outlined"
            onClick={() => {
                deleteMessage(messageKey);
            }}
        >
            削除
        </Button>
    )
}

export default DeleteButton;