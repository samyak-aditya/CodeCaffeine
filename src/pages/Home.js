import React from 'react';
import DynamicCard from '../components/DynamicCard';
import ThreeDText from '../components/threeDtext';

const Home = () => {
  console.log('Home component rendered');

  const cardsData = [
    {
      heading: 'Heading 1',
      link: 'https://example.com/1',
      image: 'https://via.placeholder.com/300x150'
    },
    {
      heading: 'Heading 2',
      link: 'https://example.com/2',
      image: 'https://via.placeholder.com/300x150'
    },
    {
      heading: 'Heading 2',
      link: 'https://example.com/2',
      image: 'https://via.placeholder.com/300x150'
    },
    {
      heading: 'Heading 2',
      link: 'https://example.com/2',
      image: 'https://via.placeholder.com/300x150'
    },
    {
      heading: 'Heading 2',
      link: 'https://example.com/2',
      image: 'https://via.placeholder.com/300x150'
    }
    // Add more items as needed
  ];

  console.log(cardsData.length);

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>

      {/* <ThreeDText /> */}
      {cardsData.map((card, index) => (
        <DynamicCard 
          key={index} // Use index as a key when data doesn't have a unique ID
          heading={card.heading} 
          link={card.link} 
          image={card.image} 
        />
      ))}
    </div>
  );
};

export default Home;
