import React from 'react';
import DynamicCard from '../components/DynamicCard'; // Import the DynamicCard component
import { Container, Grid } from '@mui/material';

const jsonData = [
  {
    "heading": "First Card",
    "image": "https://via.placeholder.com/140",
    "link": "https://example.com/first"
  },
  {
    "heading": "Second Card",
    "image": "https://via.placeholder.com/140",
    "link": "https://example.com/second"
  },
  {
    "heading": "Third Card",
    "image": "https://via.placeholder.com/140",
    "link": "https://example.com/third"
  }
];

export const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {jsonData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DynamicCard
              heading={item.heading}
              image={item.image}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
