import React from 'react';
import ThreeDCardContainer from '../components/DynamicCard'; // Ensure correct import path
import { Container, Grid } from '@mui/material';

const jsonData = [
  {
    "heading": "First Card",
    "image": "https://cdn-icons-png.flaticon.com/512/17586/17586810.png",
    "link": "https://example.com/first"
  },
  {
    "heading": "Second Card",
    "image": "https://cdn-icons-png.flaticon.com/512/17586/17586810.png",
    "link": "https://example.com/second"
  },
  {
    "heading": "Third Card",
    "image": "https://cdn-icons-png.flaticon.com/512/17586/17586810.png",
    "link": "https://example.com/third"
  }
];

export const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {jsonData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ThreeDCardContainer
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
