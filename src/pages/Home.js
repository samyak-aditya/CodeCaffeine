import React from 'react';
import DynamicCard from '../components/DynamicCard';

const Home = () => {
  const cardsData = [
    {
      "heading": "Heading 1",
      "link": "https://example.com/1",
      "image": "https://via.placeholder.com/150"
    },
    {
      "heading": "Heading 2",
      "link": "https://example.com/2",
      "image": "https://via.placeholder.com/150"
    }
    // Add more items as needed
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      {cardsData.map((card, index) => (
        <DynamicCard key={index} data={card} />
      ))}
    </div>
  );
};

export default Home;
