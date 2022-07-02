import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MessageDetailEditButton from './MessageDetailEditButton';
import { useLocation, useNavigate } from 'react-router';
import { TextareaAutosize } from '@material-ui/core';

export default function MessageDetail() {

  const location = useLocation();
  const state = location.state;
  const [text, setText] = useState(state.text);

  const [disabled, setDisabled] = useState(true);

  const navigation = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {state.name}
        </Typography>
        <Typography variant="body2">
          <br />
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue={text}
            style={{ width: 200 }}
            disabled={disabled}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            onClick={() => {
              navigation('/main');
            }}>戻る
          </Button>
          <MessageDetailEditButton
            disabled={disabled}
            setDisabled={setDisabled}
            inputText={text}
            messageKey={state.messageKey}
          />
        </Stack>
      </CardActions>
    </Card>
  );
}