import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MessageDetail() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            ニックネーム
        </Typography>
        <Typography variant="body2">
          <br />
          メッセージ本文
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">戻る</Button>
      </CardActions>
    </Card>
  );
}