import React from 'react';
import Service from '../Service/Service';
import Banner from './Banner';
import Carousal from './Carousal';
import Multi from './Multi';

const Home = () => {
    return (
        <div>
            <Carousal />
            <Service />
            <Multi />
            <Banner />
        </div>
    );
};

export default Home;