import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Advantages from '../components/Home/Advantages/Advantages';
import DealOfTheDay from '../components/Home/DealOfTheDay/DealOfTheDay';
import HomeAds1 from '../components/Home/Ads/HomeAds1';
import Categories from '../components/Home/Categories/Categories';

const Home: React.FC = () => {
    return (
        <div className="home-content">
            <div className="main">
                <Banner />
                <Advantages />
                <DealOfTheDay />
                <HomeAds1 />
                <Categories />
            </div>
        </div>
    )
}

export default Home;