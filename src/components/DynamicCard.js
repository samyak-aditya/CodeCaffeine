import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const DynamicCard = ({ heading, link, image }) => {
  return (
    <Card style={{ width: '300px', height: '400px', margin: '20px', borderRadius: '8px' }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <CardMedia
          component="img"
          alt={heading}
          image={image}
          style={{ height: '150px', objectFit: 'cover' }}
        />
      </a>
      <CardContent>
        <Typography variant="h5" style={{ textAlign: 'center', margin: '10px 0' }}>
          {heading}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
          This is some content inside the card.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DynamicCard;
