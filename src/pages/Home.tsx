import React, { useEffect } from 'react';
import Banner from '../components/Home/Banner/Banner';
import Advantages from '../components/Home/Advantages/Advantages';
import DealOfTheDay from '../components/Home/DealOfTheDay/DealOfTheDay';
import HomeAds1 from '../components/Home/Ads/HomeAds1';
import Categories from '../components/Home/Categories/Categories';
import HomeAds2 from '../components/Home/Ads/HomeAds2';
import DownloadApp from '../components/Home/DownloadApp/DownloadApp';
import NewArrivals from '../components/Home/NewArrivals/NewArrivals';

const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-content">
            <div className="main">
                <Banner />
                <Advantages />
                <DealOfTheDay />
                <HomeAds1 />
                <Categories />
                <HomeAds2 />
                <DownloadApp />
                <NewArrivals />
            </div>
        </div>
    )
};

export default Home;