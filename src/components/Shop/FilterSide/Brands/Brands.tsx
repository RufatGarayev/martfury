import React from 'react';
import { useDispatch } from 'react-redux';
import { SortByBrand, GetTitle, IsLoading } from '../../../../redux/actions/productActions';
import { IBrands } from '../../../../types/types';

const Brands: React.FC = () => {
    const dispatch = useDispatch();

    const BrandsData: IBrands[] = [
        { id: 1, title: "Apple", value: "apple" },
        { id: 2, title: "Marshall", value: "marshall" },
        { id: 3, title: "Herschel", value: "herschel" },
        { id: 5, title: "Sony", value: "sony" },
        { id: 6, title: "Flat Furniture", value: "flat-furniture" },
        { id: 7, title: "Gucci", value: "gucci" },
        { id: 8, title: "Asus", value: "asus" },
        { id: 9, title: "Samsung", value: "samsung" },
        { id: 10, title: "LG Electronics", value: "lg" },
        { id: 11, title: "Gopro", value: "gopro" }
    ];

    return (
        <div className="brands">
            <div className="brands-title">
                <h5>BY BRANDS</h5>
            </div>
            <div className="brands-list">
                <ul>
                    {
                        BrandsData.map(brand => (
                            <li key={brand.id}>
                                <input
                                    type="radio"
                                    name="brand"
                                    id={brand.value}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(GetTitle(brand.title));
                                        dispatch(SortByBrand(brand.title));
                                        dispatch(IsLoading(true));
                                    }}
                                />
                                <label htmlFor={brand.value}>{brand.title}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

export default Brands;