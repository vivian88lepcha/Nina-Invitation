import React, { Fragment } from 'react';
import Navbar2 from '../components/Navbar2';
import Hero5 from '../components/hero5/Hero5';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../components/BrideGrooms/BrideGrooms';
import EventSection from '../components/EventSection/EventSection';
import RSVP from '../components/RSVP';
import Music from '../components/Music/music';



const HomePage = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero5/>
            <RSVP />
            <EventSection />
            <BrideGrooms />
            <PortfolioSection />
            <Music/>
        </Fragment>
    )
};

export default HomePage;