import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import panda_pic from '../assests/panda.png'

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel'>
      <Carousel.Item >
        <img src='https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2F02_KP4_WEB_CINEPLEX_2048X800_NP_KM_F01_020224_20240308191643_0.jpg&w=1920&q=100' 
        className='movieslide' text="first slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel.Item'>
      <img src='https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2FDUNE_Cineplex_NowPlaying_ENTablet_20240301143937_0.png&w=1920&q=100'
       className='movieslide' text="second slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel.Item'>
      <img src='https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2FCineplex_Dated_ENTablet_20240313124305_0.png&w=1920&q=100'
       className='movieslide' text="Third slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;