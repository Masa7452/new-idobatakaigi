import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';

export default function MessageDetail() {

  const location = useLocation();
  const state = location.state;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {state.name}
        </Typography>
        <Typography variant="body2">
          <br />
          {state.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">戻る</Button>
      </CardActions>
    </Card>
  );
}