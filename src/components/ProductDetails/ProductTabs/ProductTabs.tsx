import React, { useState } from 'react';
// importing components
import Description from './Description';
import Specification from './Specification';
import Vendor from './Vendor';
import Reviews from './Reviews';

// Tablist data types
interface ITabList {
    id: number;
    title: string;
    reviewCount?: number;
}

const ProductTabs: React.FC = () => {
    const [clickedBtn, setClickedBtn] = useState<string>("Description");

    // Tablist data
    const TabList: ITabList[] = [
        { id: 1, title: "Description" },
        { id: 2, title: "Specification" },
        { id: 3, title: "Vendor" },
        { id: 4, title: "Reviews", reviewCount: 1 }
    ];

    return (
        <div className="product-tabs">
            {/* ======= tab-list ======= */}
            <div className="tab-list">
                <ul>
                    {
                        TabList.map(tabListItem => (
                            <li key={tabListItem.id} className={tabListItem.title === clickedBtn ? "active-btn" : ""}>
                                <button
                                    type="button"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => setClickedBtn(tabListItem.title)}
                                >
                                    {tabListItem.reviewCount ? tabListItem.title + " (" + tabListItem.reviewCount + ")" : tabListItem.title}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* ======= tab-content ======= */}
            <div className="tab-content-wrapper">
                <div className={clickedBtn === "Description" ? "description-wrapper" : "d-none"}>
                    <Description />
                </div>
                <div className={clickedBtn === "Specification" ? "specification-wrapper" : "d-none"}>
                    <Specification />
                </div>
                <div className={clickedBtn === "Vendor" ? "vendor-wrapper" : "d-none"}>
                    <Vendor />
                </div>
                <div className={clickedBtn === "Reviews" ? "reviews-wrapper" : "d-none"}>
                    <Reviews />
                </div>
            </div>
        </div>
    )
}

export default ProductTabs;