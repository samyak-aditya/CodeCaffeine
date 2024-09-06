import React from 'react';
import { Card, CardContent, CardMedia, } from '@mui/material';
import Typography from '@mui/material/Typography';

const DynamicCard = ({ heading, link, image }) => {
  return (
    <Card 
      style={{ 
        width: '300px', 
        height: '400px', 
        margin: '20px', 
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Apply blur effect
        border: '1px solid rgba(255, 255, 255, 0.2)', // Optional border for glass effect
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
        overflow: 'hidden' // Ensure content stays within rounded corners
      }}
    >
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
