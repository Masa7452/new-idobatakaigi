import { Button } from "@material-ui/core";
import React from "react";
import { deleteMessage } from "../firebase";

const DeleteButton = ({messageKey}) => {

    return (
        <Button
            variant="outlined"
            onClick={(e) => {
                // 親要素への伝番を止める(詳細画面へ飛ぶリンクを無効にする)
                e.stopPropagation();
                deleteMessage(messageKey);
            }}
        >
            削除
        </Button>
    )
}

export default DeleteButton;