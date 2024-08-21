import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const DynamicCard = ({ heading, image, link }) => {
  return (
    <Card>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={heading}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {heading}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DynamicCard;
