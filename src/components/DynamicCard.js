import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@shadcn/react';

const DynamicCard = ({ heading }) => {
  return (
    <Card style={{ width: '300px', height: '400px', margin: '20px', borderRadius: '8px' }}>
      <CardHeader>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          {heading}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
          This is some content inside the card.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DynamicCard;
