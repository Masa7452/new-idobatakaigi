import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { updateMessage } from "../firebase";


const MessageDetailEditButton = ({disabled, setDisabled, inputText, messageKey}) => {
    const [editButtonName, setEditButtonName] = useState('編集');
    return (
        <Button
            variant="contained"
            onClick={() => {
              setDisabled(!disabled);
              if(disabled){
                setEditButtonName('更新');
              }else{
                setEditButtonName('編集');
                if(inputText === ''){
                  alert('メッセージを入力してください。');
                  return;
                }
                updateMessage(messageKey, inputText);
              }
            }}
          >
          {editButtonName}
          </Button>
    )
}

export default MessageDetailEditButton;