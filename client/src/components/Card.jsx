import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CustomCard({ title, width }) {
  return (
    <Card style={{ width: width || '300px', marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
