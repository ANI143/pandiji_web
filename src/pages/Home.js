import React from 'react';
import Banner from '../components/Banner';
import PanditBanner from '../components/PanditBanner';
import PujaCards from '../components/PujaCards';
import CircularImageRow from '../components/CircularImageRow';
import ImgVideo from '../components/ImgVideo';
import PanditBooking from '../components/PanditBooking';
import PoojaInfo from '../components/PoojaInfo';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
     <Banner/>
     <PanditBanner/>
     <PujaCards/>
     <CircularImageRow/>
     <ImgVideo />
     <PanditBooking/>
     <PoojaInfo/>
     <Contact/>
     
    </div>
  );
};

export default Home;
