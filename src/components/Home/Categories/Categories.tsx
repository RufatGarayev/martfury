import React from 'react';
import TopCategoriesList from './TopCategoriesList/TopCategoriesList';
import ConsumerElectronics from './ConsumerElectronics/ConsumerElectronics';
import Clothings from './Clothings/Clothings';
import GardenAndKitchen from './GardenAndKitchen/GardenAndKitchen';

const Categories: React.FC = () => {
    return (
        <section id="categories">
            <div className="container">
                <TopCategoriesList />
                <ConsumerElectronics />
                <Clothings />
                <GardenAndKitchen />
            </div>
        </section>
    )
}

export default Categories;