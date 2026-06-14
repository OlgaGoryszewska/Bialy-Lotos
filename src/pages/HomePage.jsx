import React from 'react';
import Face from '../assets/img/faceTwo.png';
import { Nav } from '../components/Nav';

const HomePage = () => {
  return (
    <>
      <Nav className="absolute" />
      <img
        className="relative"
        src={Face}
        alt="bialy lotos ciechanow main picture of a women face"
      />
    </>
  );
};

export default HomePage;
