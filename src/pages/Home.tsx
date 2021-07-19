import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Advantages from '../components/Home/Advantages/Advantages';
import DealOfTheDay from '../components/Home/DealOfTheDay/DealOfTheDay';

const Home: React.FC = () => {
    return (
        <div className="home-content">
            <div className="main">
                <Banner />
                <Advantages />
                <DealOfTheDay />
            </div>
        </div>
    )
}

export default Home;