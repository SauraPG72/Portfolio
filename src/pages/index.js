import React, {useState} from 'react'
import Footer from '../Components/footer';
import HeroSection from '../Components/HeroSection';
import { InfoSection } from '../Components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from '../Components/InfoSection/Data';
import NavBar from '../Components/navbar'
import Services from '../Components/services';
import SideBar from '../Components/Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
    
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <HeroSection />
      <InfoSection { ...homeObjOne }/>
      <InfoSection { ...homeObjTwo }/>
      <InfoSection { ...homeObjThree }/>
      <InfoSection { ...homeObjFour }/>
      <Services />
      
      <Footer />

    </>
  );
};

export default Home